# Apex-Meridian Corporate Website

The official corporate website for Apex-Meridian Technologies, showcasing our AI solutions across aviation, cybersecurity, education, and AGI development.

## 🚀 Features

- **Modern Design**: Professional, responsive design with smooth animations
- **AI Solutions Showcase**: Comprehensive information about our technology offerings
- **Employee Portal**: Secure authentication system for employee and HR access
- **SEO Optimized**: Complete SEO setup with sitemap and meta tags
- **Performance Focused**: Optimized for fast loading and excellent user experience

## 🛠 Technology Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Authentication**: Custom JWT-based system
- **Deployment**: Vercel (Static Export)

## 📁 Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── about/             # Company information pages
│   ├── solutions/         # AI solutions pages
│   ├── technology/        # Technology platform pages
│   ├── investors/         # Investor relations pages
│   ├── employees/         # Employee portal (protected)
│   ├── hr/               # HR dashboard (protected)
│   └── contact/          # Contact information
├── components/            # Reusable React components
│   ├── auth/             # Authentication components
│   ├── Header.tsx        # Site navigation
│   ├── Footer.tsx        # Site footer
│   └── AnimatedBackground.tsx
├── lib/                  # Utility functions and configurations
│   ├── auth.ts          # Authentication logic
│   └── auth-context.tsx # Authentication context
└── globals.css          # Global styles
```

## 🔐 Authentication System

The website includes a secure employee authentication system with role-based access:

### User Roles
- **Admin**: Full access to all areas
- **HR**: Access to HR dashboard and employee areas
- **Employee**: Access to employee portal only

### Demo Credentials
- **Admin**: admin@apex-meridian.com / password123
- **HR**: hr@apex-meridian.com / password123
- **Employee**: employee@apex-meridian.com / password123

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/cptamrgaber/apex-meridian.com.git
cd apex-meridian.com
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out/` directory.

## 📧 Email Configuration

All email addresses use the @apex-meridian.com domain:
- General: info@apex-meridian.com
- Sales: sales@apex-meridian.com
- Support: support@apex-meridian.com
- HR: hr@apex-meridian.com
- Careers: careers@apex-meridian.com

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for local development:
```
JWT_SECRET=your-secret-key-here
```

### Vercel Deployment
The project is configured for Vercel deployment with static export:
- Build command: `npm run build`
- Output directory: `out`
- Framework preset: Next.js

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🎨 Design System

### Colors
- Primary Blue: #0057FF
- Dark: #1a1a1a
- Gray scale: Various shades for text and backgrounds

### Typography
- Font Family: Inter (Google Fonts)
- Headings: Bold weights (600-700)
- Body text: Regular weight (400)

## 🔍 SEO Features

- Comprehensive meta tags
- Open Graph and Twitter Card support
- XML sitemap (`/sitemap.xml`)
- Robots.txt configuration
- Structured data markup

## 🛡 Security Features

- JWT-based authentication
- Role-based access control
- Protected routes for sensitive areas
- Secure password hashing (bcrypt)
- HTTPS enforcement

## 📊 Performance

- Static site generation for optimal performance
- Image optimization
- Code splitting
- Lazy loading
- Minimal bundle size

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Apex-Meridian Technologies.

## 📞 Support

For technical support or questions:
- Email: support@apex-meridian.com
- Phone: +201200929092

## 🏢 Company Information

**Apex-Meridian Technologies**  
New Cairo, Cairo Governorate  
Egypt  

Leading the future of artificial intelligence with cutting-edge solutions across aviation, cybersecurity, education, and AGI development.

---

© 2025 Apex-Meridian Technologies. All rights reserved.
# Deployment trigger Sun Oct 12 13:11:39 EDT 2025
