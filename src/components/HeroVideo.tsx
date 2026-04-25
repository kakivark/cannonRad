"use client";

import { useEffect, useRef, useState } from "react";

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onCanPlay = () => setLoaded(true);
    const onError = () => setFailed(true);
    v.addEventListener("canplaythrough", onCanPlay);
    v.addEventListener("error", onError);
    // Some browsers fire 'loadeddata' but never 'canplaythrough' for short clips.
    v.addEventListener("loadeddata", onCanPlay);
    return () => {
      v.removeEventListener("canplaythrough", onCanPlay);
      v.removeEventListener("loadeddata", onCanPlay);
      v.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* The 16:9 hero video. Drop your file at /public/hero.mp4 */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          loaded && !failed ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/hero-poster.jpg"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      {/* Gradient + vignette overlays for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_70%,#000_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      {/* Loader: small "boom" in the center until the video is ready */}
      {!loaded && !failed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="boom-pulse text-xs font-mono tracking-[0.2em] text-white/70">
            boom
          </span>
        </div>
      )}

      {/* Fallback: animated grid if no video is uploaded yet */}
      {failed && (
        <div className="absolute inset-0">
          <div className="tech-grid absolute inset-0" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs font-mono tracking-[0.2em] text-white/40">
              hero video pending — drop hero.mp4 in /public
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
