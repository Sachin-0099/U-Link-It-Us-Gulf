import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => setPosition({ x: e.clientX, y: e.clientY });
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseDown = () => setIsActive(true);
    const onMouseUp = () => setIsActive(false);

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <>
      <style>{`
        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: difference;
          will-change: transform;
          transition: opacity 0.3s ease;
          opacity: 1;
        }
        .custom-cursor.hidden {
          opacity: 0;
        }
        
        .cursor-inner {
          position: absolute;
          width: 8px;
          height: 8px;
          background-color: #009000;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: background-color 0.2s ease, transform 0.15s ease;
          will-change: transform, background-color;
          box-shadow: 0 0 6px rgba(0, 144, 0, 0.7);
        }

        .cursor-outer {
          position: absolute;
          width: 40px;
          height: 40px;
          border: 2px solid #009000;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: pulse 2.5s infinite ease-in-out;
          transition: border-color 0.3s ease, transform 0.15s ease;
          will-change: transform, border-color;
          box-shadow: 0 0 8px rgba(0, 144, 0, 0.5);
        }

        .custom-cursor.active .cursor-inner {
          background-color: #00cc00;
          transform: translate(-50%, -50%) scale(1.6);
          box-shadow: 0 0 10px rgba(0, 204, 0, 0.9);
        }

        .custom-cursor.active .cursor-outer {
          border-color: #00cc00;
          transform: translate(-50%, -50%) scale(1.8);
          animation-play-state: paused;
          box-shadow: 0 0 14px rgba(0, 204, 0, 0.7);
        }

        @keyframes pulse {
          0%, 100% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 0.6;
          }
          50% {
            transform: translate(-50%, -50%) scale(1.2);
            opacity: 0.3;
          }
        }
      `}</style>

      <div
        className={`custom-cursor ${!isVisible ? "hidden" : ""} ${isActive ? "active" : ""}`}
        style={{ left: position.x, top: position.y }}
      >
        <div className="cursor-outer" />
        <div className="cursor-inner" />
      </div>
    </>
  );
};

export default CustomCursor;
