/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        // Theme-aware colors
        'tech-black': '#0a0a0a',
        'tech-dark': '#111111', 
        'tech-darker': '#1a1a1a',
        'tech-gray': '#2a2a2a',
        'tech-light': '#3a3a3a',
        'tech-surface': '#0f0f0f',
        'tech-border': '#333333',
        
        // Light theme colors
        'light-bg': '#ffffff',
        'light-surface': '#f8fafc',
        'light-border': '#e2e8f0',
        'light-text': '#1e293b',
        'light-muted': '#64748b',
        
        // Blue-Focused Neon Palette for Better Harmony
        'neon-blue': '#00d4ff',
        'neon-cyan': '#00ffff',
        'neon-light-blue': '#4dd0e1',
        'neon-dark-blue': '#0099cc',
        'neon-electric': '#1e90ff',
        'neon-ice': '#b3e5fc',
        'neon-steel': '#607d8b',
        'neon-accent': '#00bcd4',
        
        // Minimal Accent Colors for Professional Look
        'accent-blue': '#0066cc',
        'accent-light': '#e3f2fd',
        'accent-dark': '#003d7a',
        
        primary: {
          50: '#0f1419',
          100: '#1a202c',
          200: '#2d3748',
          300: '#4a5568',
          400: '#718096',
          500: '#00d4ff',
          600: '#0099cc',
          700: '#006699',
          800: '#004466',
          900: '#002233',
        },
        
        // Enhanced Gradient Colors
        'gradient-start': '#000000',
        'gradient-mid': '#1a1a2e',
        'gradient-end': '#16213e',
        'gradient-neon': '#00d4ff',
        'gradient-purple': '#8b5cf6',
        'gradient-pink': '#ff006e',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'flicker': 'flicker 1.5s infinite linear',
        'matrix': 'matrix 20s linear infinite',
        'scan': 'scan 2s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'rotate-slow': 'rotate 20s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shake': 'shake 0.5s ease-in-out infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite alternate',
        'hologram': 'hologram 4s ease-in-out infinite',
        'data-stream': 'dataStream 3s linear infinite',
        'cyber-glitch': 'cyberGlitch 0.2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #00d4ff, 0 0 10px #00d4ff, 0 0 15px #00d4ff',
            textShadow: '0 0 5px #00d4ff'
          },
          '100%': { 
            boxShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff, 0 0 30px #00d4ff',
            textShadow: '0 0 10px #00d4ff'
          },
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        scan: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100vw)' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 30%, 50%, 70%, 90%': { transform: 'translateX(-2px)' },
          '20%, 40%, 60%, 80%': { transform: 'translateX(2px)' },
        },
        neonPulse: {
          '0%': { 
            boxShadow: '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
            opacity: '1'
          },
          '100%': { 
            boxShadow: '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor',
            opacity: '0.8'
          },
        },
        hologram: {
          '0%, 100%': { 
            opacity: '0.8',
            transform: 'translateY(0px) scale(1)',
            filter: 'hue-rotate(0deg)'
          },
          '25%': { 
            opacity: '0.9',
            transform: 'translateY(-5px) scale(1.02)',
            filter: 'hue-rotate(90deg)'
          },
          '50%': { 
            opacity: '1',
            transform: 'translateY(-10px) scale(1.05)',
            filter: 'hue-rotate(180deg)'
          },
          '75%': { 
            opacity: '0.9',
            transform: 'translateY(-5px) scale(1.02)',
            filter: 'hue-rotate(270deg)'
          },
        },
        dataStream: {
          '0%': { 
            transform: 'translateY(-100%) scaleY(0)',
            opacity: '0'
          },
          '10%': { 
            transform: 'translateY(-90%) scaleY(0.1)',
            opacity: '0.5'
          },
          '90%': { 
            transform: 'translateY(90%) scaleY(1)',
            opacity: '1'
          },
          '100%': { 
            transform: 'translateY(100%) scaleY(0)',
            opacity: '0'
          },
        },
        cyberGlitch: {
          '0%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)'
          },
          '10%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)'
          },
          '20%': { 
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(180deg)'
          },
          '30%': { 
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(270deg)'
          },
          '40%': { 
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(360deg)'
          },
          '50%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)'
          },
          '60%': { 
            transform: 'translate(-2px, -2px)',
            filter: 'hue-rotate(180deg)'
          },
          '70%': { 
            transform: 'translate(2px, 2px)',
            filter: 'hue-rotate(270deg)'
          },
          '80%': { 
            transform: 'translate(2px, -2px)',
            filter: 'hue-rotate(360deg)'
          },
          '90%': { 
            transform: 'translate(-2px, 2px)',
            filter: 'hue-rotate(90deg)'
          },
          '100%': { 
            transform: 'translate(0)',
            filter: 'hue-rotate(0deg)'
          },
        },
      },
      backgroundImage: {
        'tech-gradient': 'linear-gradient(135deg, #000000 0%, #0a1929 50%, #1a237e 100%)',
        'blue-gradient': 'linear-gradient(45deg, #00d4ff, #0099cc, #1e90ff)',
        'professional-bg': 'radial-gradient(circle at 50% 50%, rgba(0, 212, 255, 0.08) 0%, transparent 50%)',
        'cyber-gradient': 'linear-gradient(135deg, #0a0a0a 0%, #0d1421 25%, #1a237e 50%, #0f1419 75%, #000000 100%)',
        'subtle-gradient': 'linear-gradient(45deg, rgba(0, 212, 255, 0.05), rgba(30, 144, 255, 0.05), rgba(0, 188, 212, 0.05))',
        'blue-radial': 'radial-gradient(circle at center, rgba(0, 212, 255, 0.15) 0%, rgba(30, 144, 255, 0.08) 50%, transparent 100%)',
      },
      boxShadow: {
        'neon': '0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor',
        'neon-lg': '0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor',
        'neon-xl': '0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor, 0 0 60px currentColor',
        'tech': '0 4px 20px rgba(0, 212, 255, 0.3)',
        'thriller': '0 0 20px rgba(220, 38, 38, 0.5)',
        'cyber': '0 0 30px rgba(0, 212, 255, 0.4), inset 0 0 30px rgba(139, 92, 246, 0.2)',
        'hologram': '0 0 20px rgba(0, 212, 255, 0.3), 0 0 40px rgba(139, 92, 246, 0.2), 0 0 60px rgba(255, 0, 110, 0.1)',
        'matrix': '0 0 25px rgba(0, 255, 65, 0.4)',
        'glitch': '0 0 10px rgba(255, 7, 58, 0.5), 0 0 20px rgba(0, 212, 255, 0.3)',
      },
    },
  },
  plugins: [],
}
