/*
 * NOTE:
 *
 * The original implementation of this file relied on the `bcryptjs` and
 * `jsonwebtoken` packages to hash passwords and sign JSON Web Tokens. Those
 * dependencies pull in Node.js built‑in modules (such as `crypto`) that are
 * unavailable in a browser context and will cause static builds (e.g. when
 * deploying a fully static site on Vercel) to fail. To keep this example
 * completely client‑side and compatible with static export, we implement
 * minimal authentication logic ourselves:
 *
 *   • Passwords in the mock user database are stored in cleartext for
 *     simplicity. In a production application you should never store
 *     plaintext passwords.
 *   • Tokens are generated using a random string and do not implement the
 *     full JWT specification. They are suitable only for client‑side use in
 *     this demo.
 */

// Mock user database – in production, this would be a real database
const users = [
  {
    id: '1',
    email: 'admin@apex-meridian.com',
    // In a real application you would store a hashed password rather than plain text.
    // For a static site we avoid bcryptjs to prevent bundling Node.js crypto polyfills.
    password: 'password123',
    role: 'admin',
    name: 'System Administrator',
    department: 'IT'
  },
  {
    id: '2',
    email: 'hr@apex-meridian.com',
    password: 'password123',
    role: 'hr',
    name: 'HR Manager',
    department: 'Human Resources'
  },
  {
    id: '3',
    email: 'employee@apex-meridian.com',
    password: 'password123',
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

// In the original code a JWT secret was used to sign tokens. Since we are
// generating opaque random tokens in the browser, we no longer need a
// secret.
const JWT_SECRET = undefined;

export async function authenticateUser(email: string, password: string): Promise<AuthResult> {
  // Look up the user in our mock database.
  const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (!user) {
    return { success: false, error: 'Invalid email or password' };
  }
  // For this demo we store passwords in plain text. Compare directly.
  if (password !== user.password) {
    return { success: false, error: 'Invalid email or password' };
  }
  // Generate a simple opaque token. This does not conform to the JWT spec but
  // provides a unique identifier we can store in localStorage. In a real app
  // you would issue a signed token from a server.
  const token = `token_${Math.random().toString(36).substring(2)}_${Date.now()}`;
  const { password: _unused, ...userWithoutPassword } = user;
  return {
    success: true,
    user: userWithoutPassword as User,
    token,
  };
}

export function verifyToken(token: string): { valid: boolean; user?: any } {
  // In lieu of JWT verification, treat any non‑empty string as a valid token.
  // Optionally you could store issued tokens in a Set and verify against it.
  if (typeof token === 'string' && token.trim() !== '') {
    return { valid: true, user: null };
  }
  return { valid: false };
}

export function getUserFromToken(token: string): User | null {
  // Without JWTs we cannot recover a user from the token alone. In a static
  // environment you might instead persist the serialized user in storage
  // alongside the token. For this example we simply return null.
  return null;
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
