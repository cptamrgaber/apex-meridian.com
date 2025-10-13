'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  color: string;
  trail: Array<{ x: number; y: number; opacity: number }>;
}

const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number | null>(null);
  const glitchTimeRef = useRef<number>(0);
  const scanLineRef = useRef<number>(0);
  const scanDirectionRef = useRef<number>(1);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      const particles: Particle[] = [];
      const particleCount = Math.floor((canvas.width * canvas.height) / 15000); // Reduced from 8000 to 15000

      const colors = ['#4dd0e1', '#87ceeb', '#5dade2', '#85c1e9', '#aed6f1']; // Lighter blue tones

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2 + 0.5, // Smaller particles
          opacity: Math.random() * 0.4 + 0.1, // Much lower opacity
          color: colors[Math.floor(Math.random() * colors.length)],
          trail: []
        });
      }
      particlesRef.current = particles;
    };

    const animate = () => {
      // Create fade effect instead of clearing
      ctx.fillStyle = 'rgba(10, 10, 10, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update glitch time
      glitchTimeRef.current += 16;

      // Update scan line
      scanLineRef.current += scanDirectionRef.current * 3;
      if (scanLineRef.current > canvas.height || scanLineRef.current < 0) {
        scanDirectionRef.current *= -1;
      }

      // Draw scanning line
      ctx.save();
      ctx.globalAlpha = 0.4;
      ctx.strokeStyle = '#00ffff';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#00ffff';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.moveTo(0, scanLineRef.current);
      ctx.lineTo(canvas.width, scanLineRef.current);
      ctx.stroke();
      ctx.restore();

      particlesRef.current.forEach((particle, index) => {
        // Update trail
        particle.trail.push({ x: particle.x, y: particle.y, opacity: particle.opacity });
        if (particle.trail.length > 8) {
          particle.trail.shift();
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges with energy loss
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.8;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.8;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Add some randomness
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity
        const maxVel = 2;
        particle.vx = Math.max(-maxVel, Math.min(maxVel, particle.vx));
        particle.vy = Math.max(-maxVel, Math.min(maxVel, particle.vy));

        // Draw trail
        particle.trail.forEach((trailPoint, trailIndex) => {
          ctx.save();
          ctx.globalAlpha = trailPoint.opacity * (trailIndex / particle.trail.length) * 0.3;
          ctx.fillStyle = particle.color;
          ctx.shadowColor = particle.color;
          ctx.shadowBlur = 5;
          ctx.beginPath();
          ctx.arc(trailPoint.x, trailPoint.y, particle.size * 0.5, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        });

        // Draw main particle with glow
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.fillStyle = particle.color;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 15;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw neural connections
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = (120 - distance) / 120 * 0.3;
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = particle.color;
            ctx.lineWidth = 1;
            ctx.shadowColor = particle.color;
            ctx.shadowBlur = 3;
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      // Glitch effect
      if (glitchTimeRef.current > 3000 + Math.random() * 5000) {
        for (let i = 0; i < 8; i++) {
          const glitchX = Math.random() * canvas.width;
          const glitchY = Math.random() * canvas.height;
          const glitchWidth = Math.random() * 150 + 50;
          const glitchHeight = Math.random() * 30 + 5;
          
          ctx.save();
          ctx.globalAlpha = 0.6;
          ctx.fillStyle = ['#ff073a', '#00d4ff', '#8b5cf6', '#ff006e'][Math.floor(Math.random() * 4)];
          ctx.fillRect(glitchX, glitchY, glitchWidth, glitchHeight);
          ctx.restore();
        }
        glitchTimeRef.current = 0;
      }

      // Holographic overlay
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, Math.max(canvas.width, canvas.height)
      );
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0.03)');
      gradient.addColorStop(0.5, 'rgba(30, 144, 255, 0.02)');
      gradient.addColorStop(1, 'rgba(0, 188, 212, 0.01)');
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      animationRef.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    const handleResize = () => {
      resizeCanvas();
      createParticles();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[-1]"
        style={{ background: 'transparent' }}
      />
      
      {/* Additional CSS-based effects */}
      <div className="fixed inset-0 pointer-events-none z-[-1]">
        {/* Subtle orbs */}
        {Array.from({ length: 3 }).map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full animate-pulse-slow"
            style={{
              left: `${20 + (i * 30)}%`,
              top: `${30 + (i * 20)}%`,
              width: `${60 + Math.random() * 40}px`,
              height: `${60 + Math.random() * 40}px`,
              background: `radial-gradient(circle, ${
                ['rgba(59, 130, 246, 0.03)', 'rgba(37, 99, 235, 0.02)', 'rgba(29, 78, 216, 0.025)'][i % 3]
              } 0%, transparent 70%)`,
              animationDelay: `${i * 1}s`,
              animationDuration: `${6 + Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Removed matrix rain effect for better readability */}
      </div>
    </>
  );
};

export default AnimatedBackground;
