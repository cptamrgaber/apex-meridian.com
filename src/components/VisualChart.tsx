'use client';

import { useEffect, useRef } from 'react';

interface VisualChartProps {
  type: 'growth' | 'pie' | 'bar' | 'line';
  data?: number[];
  labels?: string[];
  title?: string;
  color?: string;
  height?: number;
}

export default function VisualChart({ 
  type, 
  data = [65, 85, 45, 75, 90], 
  labels = ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
  title = 'Performance Metrics',
  color = '#3B82F6',
  height = 200 
}: VisualChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth * 2;
    canvas.height = height * 2;
    ctx.scale(2, 2);

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const width = canvas.offsetWidth;
    const chartHeight = height - 60;
    const chartWidth = width - 80;
    const startX = 40;
    const startY = 40;

    if (type === 'growth') {
      // Growth line chart
      ctx.strokeStyle = color;
      ctx.lineWidth = 3;
      ctx.beginPath();
      
      data.forEach((value, index) => {
        const x = startX + (index * chartWidth) / (data.length - 1);
        const y = startY + chartHeight - (value / 100) * chartHeight;
        
        if (index === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
        
        // Draw points
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
      });
      
      ctx.stroke();
      
      // Draw labels
      ctx.fillStyle = '#6B7280';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      labels.forEach((label, index) => {
        const x = startX + (index * chartWidth) / (data.length - 1);
        ctx.fillText(label, x, startY + chartHeight + 20);
      });
    }

    if (type === 'bar') {
      // Bar chart
      const barWidth = chartWidth / data.length - 10;
      
      data.forEach((value, index) => {
        const x = startX + index * (chartWidth / data.length) + 5;
        const barHeight = (value / 100) * chartHeight;
        const y = startY + chartHeight - barHeight;
        
        // Create gradient
        const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, color + '80');
        
        ctx.fillStyle = gradient;
        ctx.fillRect(x, y, barWidth, barHeight);
        
        // Draw labels
        ctx.fillStyle = '#6B7280';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], x + barWidth / 2, startY + chartHeight + 20);
      });
    }

    if (type === 'pie') {
      // Pie chart
      const centerX = width / 2;
      const centerY = height / 2;
      const radius = Math.min(chartWidth, chartHeight) / 3;
      
      let currentAngle = -Math.PI / 2;
      const total = data.reduce((sum, value) => sum + value, 0);
      
      const colors = [color, color + 'CC', color + '99', color + '66', color + '33'];
      
      data.forEach((value, index) => {
        const sliceAngle = (value / total) * 2 * Math.PI;
        
        ctx.fillStyle = colors[index % colors.length];
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
        ctx.closePath();
        ctx.fill();
        
        // Draw labels
        const labelAngle = currentAngle + sliceAngle / 2;
        const labelX = centerX + Math.cos(labelAngle) * (radius + 20);
        const labelY = centerY + Math.sin(labelAngle) * (radius + 20);
        
        ctx.fillStyle = '#6B7280';
        ctx.font = '12px sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(labels[index], labelX, labelY);
        
        currentAngle += sliceAngle;
      });
    }

  }, [type, data, labels, color, height]);

  return (
    <div className="bg-slate-800 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-white mb-4 text-center">
        {title}
      </h3>
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{ height: `${height}px` }}
      />
    </div>
  );
}
