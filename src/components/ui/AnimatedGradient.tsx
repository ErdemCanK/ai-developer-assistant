
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface AnimatedGradientProps {
  className?: string;
  intensity?: 'light' | 'medium' | 'strong';
  colors?: string[];
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className = '',
  intensity = 'medium',
  colors = ['#6366f1', '#8b5cf6', '#d946ef'],
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Map intensity to actual values
  const intensityValues = {
    light: { blur: 100, opacity: 0.3, speed: 0.001 },
    medium: { blur: 150, opacity: 0.5, speed: 0.002 },
    strong: { blur: 200, opacity: 0.7, speed: 0.003 },
  };
  
  const { blur, opacity, speed } = intensityValues[intensity];
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const colorObjects = colors.map(color => {
      return {
        color,
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 300 + 200,
        vx: Math.random() * 0.4 - 0.2,
        vy: Math.random() * 0.4 - 0.2,
      };
    });
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    
    const render = () => {
      // Clear canvas with slight trail effect
      ctx.clearRect(0, 0, width, height);
      
      // Move and draw each color blob
      colorObjects.forEach(obj => {
        // Move the blob
        obj.x += obj.vx;
        obj.y += obj.vy;
        
        // Bounce off edges
        if (obj.x < 0 || obj.x > width) obj.vx *= -1;
        if (obj.y < 0 || obj.y > height) obj.vy *= -1;
        
        // Create gradient
        const gradient = ctx.createRadialGradient(
          obj.x, obj.y, 0,
          obj.x, obj.y, obj.radius
        );
        
        gradient.addColorStop(0, obj.color);
        gradient.addColorStop(1, 'rgba(255,255,255,0)');
        
        // Draw the blob
        ctx.globalAlpha = opacity;
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(obj.x, obj.y, obj.radius, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Apply blur effect
      if (ctx.filter) {
        ctx.filter = `blur(${blur}px)`;
      }
      
      requestAnimationFrame(render);
    };
    
    render();
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [colors, blur, opacity, speed]);
  
  return (
    <div className={`absolute inset-0 overflow-hidden -z-10 ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="w-full h-full"
      />
      <div className="absolute inset-0 bg-background/30 backdrop-blur-[100px]"></div>
    </div>
  );
};

export default AnimatedGradient;
