import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

// Mock user database - in production, this would be a real database
const users = [
  {
    id: '1',
    email: 'admin@apex-meridian.com',
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSAg/9qK', // password123
    role: 'admin',
    name: 'System Administrator',
    department: 'IT'
  },
  {
    id: '2',
    email: 'hr@apex-meridian.com',
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSAg/9qK', // password123
    role: 'hr',
    name: 'HR Manager',
    department: 'Human Resources'
  },
  {
    id: '3',
    email: 'employee@apex-meridian.com',
    password: '$2a$12$LQv3c1yqBWVHxkd0LHAkCOYz6TtxMQJqhN8/LewdBPj/VcSAg/9qK', // password123
    role: 'employee',
    name: 'John Doe',
    department: 'Engineering'
  }
];

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'hr' | 'employee';
  name: string;
  department: string;
}

export interface AuthResult {
  success: boolean;
  user?: User;
  token?: string;
  error?: string;
}

const JWT_SECRET = process.env.JWT_SECRET || 'apex-meridian-secret-key';

export async function authenticateUser(email: string, password: string): Promise<AuthResult> {
  try {
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    
    if (!user) {
      return { success: false, error: 'Invalid email or password' };
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if (!isValidPassword) {
      return { success: false, error: 'Invalid email or password' };
    }

    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        role: user.role 
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    const { password: _, ...userWithoutPassword } = user;
    
    return {
      success: true,
      user: userWithoutPassword as User,
      token
    };
  } catch (error) {
    return { success: false, error: 'Authentication failed' };
  }
}

export function verifyToken(token: string): { valid: boolean; user?: any } {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return { valid: true, user: decoded };
  } catch (error) {
    return { valid: false };
  }
}

export function getUserFromToken(token: string): User | null {
  const { valid, user } = verifyToken(token);
  
  if (!valid || !user) {
    return null;
  }

  const fullUser = users.find(u => u.id === user.userId);
  if (!fullUser) {
    return null;
  }

  const { password: _, ...userWithoutPassword } = fullUser;
  return userWithoutPassword as User;
}

export function hasRole(user: User | null, requiredRole: string | string[]): boolean {
  if (!user) return false;
  
  const roles = Array.isArray(requiredRole) ? requiredRole : [requiredRole];
  return roles.includes(user.role);
}

export function canAccessHR(user: User | null): boolean {
  return hasRole(user, ['admin', 'hr']);
}

export function canAccessEmployeeArea(user: User | null): boolean {
  return hasRole(user, ['admin', 'hr', 'employee']);
}
