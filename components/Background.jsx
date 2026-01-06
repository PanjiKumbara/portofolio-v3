"use client";

import { useEffect, useState } from "react";

const getWIBHour = () => {
  const date = new Date();
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  return new Date(utc + 7 * 3600 * 1000).getHours();
};

export default function Background() {
  const [hour, setHour] = useState(getWIBHour());
  const [stars, setStars] = useState([]);
  const [clouds, setClouds] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => setHour(getWIBHour()), 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setStars(
      Array.from({ length: 60 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 1,
      }))
    );
    setClouds(
      Array.from({ length: 5 }, () => ({
        top: Math.random() * 50 + 10,
        left: Math.random() * 100,
        scale: Math.random() * 0.6 + 0.7,
        speed: Math.random() * 15 + 20,
      }))
    );
  }, []);

  let mode = "night";
  if (hour >= 5 && hour < 7) mode = "sunrise";
  else if (hour >= 7 && hour < 17) mode = "day";
  else if (hour >= 17 && hour < 19) mode = "sunset";

  return (
    <div className="fixed inset-0 z-[-9999] overflow-hidden pointer-events-none">

      {/* NIGHT */}
      {mode === "night" && (
        <div className="absolute inset-0 bg-gradient-to-b from-[#060b1b] to-[#0d1a2d]">
          <div className="absolute right-20 top-20 w-24 h-24 rounded-full bg-gray-200 shadow-[0_0_20px_#ffffffaa]" />

          {stars.map((s, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white opacity-70 animate-twinkle"
              style={{
                width: s.size,
                height: s.size,
                top: `${s.top}%`,
                left: `${s.left}%`,
              }}
            />
          ))}
        </div>
      )}

      {/* SUNRISE */}
      {mode === "sunrise" && (
        <div className="absolute inset-0 bg-gradient-to-b from-orange-400 via-pink-400 to-sky-300">
          <div
            className="absolute bottom-[-40px] left-1/2 -translate-x-1/2
           w-60 h-60 bg-yellow-300 rounded-full 
           shadow-[0_0_40px_#ffdd55] animate-sunrise"
          />
        </div>
      )}

      {/* DAY */}
      {mode === "day" && (
        <div className="absolute inset-0 bg-gradient-to-b from-sky-300 to-sky-500">
          <div className="absolute top-16 right-16 w-32 h-32 bg-yellow-300 rounded-full shadow-[0_0_40px_#fffaaa]" />

          {clouds.map((c, i) => (
            <div
              key={i}
              className="absolute bg-white bg-opacity-80 rounded-full blur-md animate-cloud"
              style={{
                width: 200 * c.scale,
                height: 70 * c.scale,
                top: `${c.top}%`,
                left: `${c.left}%`,
                animationDuration: `${c.speed}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* SUNSET */}
      {mode === "sunset" && (
        <div className="absolute inset-0 bg-gradient-to-b from-purple-700 via-red-500 to-orange-300">
          <div
            className="absolute top-[22%] left-1/2 -translate-x-1/2 
          w-56 h-56 bg-orange-300 rounded-full 
          shadow-[0_0_35px_#ffcc77] animate-sunset"
          />
        </div>
      )}
    </div>
  );
}
