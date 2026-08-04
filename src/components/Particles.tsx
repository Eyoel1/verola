'use client';

import { useEffect, useRef } from 'react';

interface Props {
  count?: number;
  hero?: boolean;
}

export default function Particles({ count = 22, hero = false }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.innerHTML = '';

    const shapes = ['circle', 'diamond', 'ring'];
    const colors = ['#f7a8c4', '#ffd97d', '#fbc8da', '#ffe8a3', '#e8739b', '#f5c535'];

    for (let i = 0; i < count; i++) {
      const wrapper = document.createElement('div');
      wrapper.style.cssText = `
        position: absolute;
        bottom: -40px;
        left: ${Math.random() * 100}%;
        pointer-events: none;
        z-index: 5;
        animation: particleFloat ${Math.random() * 14 + 10}s linear ${Math.random() * 12}s infinite;
      `;

      const shape = shapes[Math.floor(Math.random() * shapes.length)];
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.random() * (hero ? 10 : 7) + 3;

      const el = document.createElement('div');

      if (shape === 'circle') {
        el.style.cssText = `
          width: ${size}px; height: ${size}px;
          border-radius: 50%;
          background: ${color};
          opacity: ${Math.random() * 0.5 + 0.2};
        `;
      } else if (shape === 'diamond') {
        el.style.cssText = `
          width: ${size}px; height: ${size}px;
          background: ${color};
          opacity: ${Math.random() * 0.4 + 0.2};
          transform: rotate(45deg);
        `;
      } else {
        el.style.cssText = `
          width: ${size + 2}px; height: ${size + 2}px;
          border-radius: 50%;
          border: 1.5px solid ${color};
          opacity: ${Math.random() * 0.5 + 0.2};
          background: transparent;
        `;
      }

      wrapper.appendChild(el);
      container.appendChild(wrapper);
    }
  }, [count, hero]);

  return <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none" />;
}
