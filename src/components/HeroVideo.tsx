"use client";

import { useEffect, useRef, useState } from "react";

/** Give up on the video and keep the fallback visible after this long. */
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
  const settled = loaded || failed;

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Poster as a layer of its own so there is real imagery on screen
          immediately, rather than black while the video downloads. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${base}/hero-poster.jpg)` }}
      />

      {/* The 16:9 hero video. Source file lives at /public/hero.mp4 */}
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

      {/* Fallback grid when the video is missing or undecodable */}
      {failed && (
        <div className="absolute inset-0" aria-hidden>
          <div className="tech-grid absolute inset-0" />
        </div>
      )}

      {/* Legibility scrim. The headline is left-aligned, so the heaviest
          darkening sits on the left where the bright parts of the video would
          otherwise wash out the type. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/25"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black"
      />

      {/* Loading screen: small "boom", centered, covering the first screen
          until the video is ready. */}
      <div
        className={`absolute inset-0 z-30 flex items-center justify-center bg-black transition-opacity duration-700 ${
          settled ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-hidden={settled}
      >
        <span className="boom-pulse font-mono text-xs tracking-[0.2em] text-white/70">
          boom
        </span>
      </div>
    </div>
  );
}
