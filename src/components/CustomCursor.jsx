import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(true);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;
    const speed = 0.2;

    const animate = () => {
      currentX += (mouseX - currentX) * speed;
      currentY += (mouseY - currentY) * speed;
      setPosition({ x: currentX, y: currentY });
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    animate();

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    const handleHover = () => {
      document.querySelectorAll("a, button, [data-cursor-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setIsActive(true));
        el.addEventListener("mouseleave", () => setIsActive(false));
      });
    };

    handleHover();

    const observer = new MutationObserver(handleHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        body {
          cursor: none;
        }

        .custom-cursor {
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 9999;
          mix-blend-mode: exclusion;
          backdrop-filter: blur(2px);
          transition: opacity 0.3s ease;
        }

        .custom-cursor.hidden {
          opacity: 0;
        }

        .cursor-inner {
          position: absolute;
          width: 10px;
          height: 10px;
          background-color: #009000;
          border-radius: 50%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          transition: transform 0.2s ease;
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
          transition: transform 0.3s ease;
          box-shadow: 0 0 8px rgba(0, 144, 0, 0.4);
        }

        .custom-cursor.active .cursor-inner {
          transform: translate(-50%, -50%) scale(1.6);
        }

        .custom-cursor.active .cursor-outer {
          transform: translate(-50%, -50%) scale(2);
        }
      `}</style>

      <div
        className={`custom-cursor ${!isVisible ? "hidden" : ""} ${isActive ? "active" : ""}`}
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      >
        <div className="cursor-outer" />
        <div className="cursor-inner" />
      </div>
    </>
  );
};

export default CustomCursor;
