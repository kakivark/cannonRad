"use client";

import { useEffect, useRef, useState } from "react";

/** Give up on the video and show the animated fallback after this long. */
const LOAD_TIMEOUT_MS = 6000;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onReady = () => setLoaded(true);
    const onError = () => setFailed(true);

    v.addEventListener("canplaythrough", onReady);
    // Short clips sometimes fire 'loadeddata' but never 'canplaythrough'.
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("error", onError);

    // A browser that cannot decode the file may never fire 'error', which would
    // otherwise leave the loader on screen indefinitely.
    const timeout = window.setTimeout(() => {
      if (v.readyState >= 2) setLoaded(true);
      else setFailed(true);
    }, LOAD_TIMEOUT_MS);

    return () => {
      window.clearTimeout(timeout);
      v.removeEventListener("canplaythrough", onReady);
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("error", onError);
    };
  }, []);

  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
        poster={`${base}/hero-poster.jpg`}
      >
        <source src={`${base}/hero.mp4`} type="video/mp4" />
      </video>

      {/* Gradient + vignette overlays for legibility */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_70%,#000_100%)]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />

      {/* Loader: small "boom", low in the frame so it clears the headline */}
      {!loaded && !failed && (
        <div className="absolute inset-x-0 bottom-24 flex justify-center">
          <span className="boom-pulse font-mono text-xs tracking-[0.2em] text-white/70">
            boom
          </span>
        </div>
      )}

      {/* Fallback: animated grid if the video is missing or undecodable */}
      {failed && (
        <div className="absolute inset-0" aria-hidden>
          <div className="tech-grid absolute inset-0" />
        </div>
      )}
    </div>
  );
}
