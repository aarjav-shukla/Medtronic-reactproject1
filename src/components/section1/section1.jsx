import React, { useState } from "react";
import Navbar from "./navbar";
import Hero from "./hero";

const section1 = () => {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const handleMouseMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();

    setCursor({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      visible: true,
    });
  };

  const handleMouseLeave = () => {
    setCursor((previousCursor) => ({ ...previousCursor, visible: false }));
  };

  return (
    <div
      className="relative h-screen w-full overflow-hidden bg-[url(https://c4.wallpaperflare.com/wallpaper/737/519/825/meditation-monks-black-background-selective-coloring-wallpaper-preview.jpg)] bg-cover py-6 px-22 font-sans"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="pointer-events-none absolute z-20 h-44 w-44 rounded-full border border-white/60 bg-white/10  transition-opacity duration-200 ease-out"
        style={{
          left: cursor.x,
          top: cursor.y,
          opacity: cursor.visible ? 1 : 0,
          transform: "translate(-50%, -50%)",
        }}
      >
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default section1;
