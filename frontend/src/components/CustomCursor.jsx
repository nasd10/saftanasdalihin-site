// src/components/CustomCursor.jsx
import React, { useState, useEffect, useRef } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [trailDots, setTrailDots] = useState([]);

  const nextTrailId = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTrailDots(prevDots => {
        const newDot = {
          id: nextTrailId.current++,
          x: e.clientX,
          y: e.clientY,
          opacity: 1, // Dikelola oleh CSS transition
          scale: 1,   // Dikelola oleh CSS transition
        };

        const maxDots = 30; // Jumlah maksimum titik jejak
        const updatedDots = [...prevDots.slice(Math.max(0, prevDots.length - maxDots + 1)), newDot];

        // Mulai animasi fade-out dan shrink untuk titik baru
        setTimeout(() => {
          setTrailDots(currentDots =>
            currentDots.map(dot =>
              dot.id === newDot.id ? { ...dot, opacity: 0, scale: 0 } : dot
            )
          );
        }, 30); // Jeda sebelum mulai memudar

        // Hapus titik dari state setelah animasinya selesai (durasi HARUS SAMA dengan transisi CSS)
        setTimeout(() => {
          setTrailDots(currentDots => currentDots.filter(dot => dot.id !== newDot.id));
        }, 700); // Durasi 700ms sesuai dengan 0.7s di CSS

        return updatedDots;
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const checkInteractive = (target) => {
      if (!target) return false;
      return (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('interactive-element') ||
        target.classList.contains('group') ||
        window.getComputedStyle(target).cursor === 'pointer'
      );
    };

    const handleMouseOver = (e) => {
      if (checkInteractive(e.target)) {
        setIsHoveringLink(true);
      }
    };
    const handleMouseOut = (e) => {
      if (!e.relatedTarget || !checkInteractive(e.relatedTarget)) {
        setIsHoveringLink(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const cursorClasses = `custom-cursor ${isHoveringLink ? 'hovered' : ''} ${isClicking ? 'clicked' : ''}`;

  return (
    <>
      <div
        className={cursorClasses}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>

      {trailDots.map(dot => (
        <div
          key={dot.id}
          className="cursor-trail-dot"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            opacity: dot.opacity,
            transform: `translate(-50%, -50%) scale(${dot.scale})`,
          }}
        ></div>
      ))}
    </>
  );
}

export default CustomCursor;