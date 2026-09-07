"use client";

import { useEffect, useRef, useState } from "react";

/** How long to wait for the video before falling back to the animated grid. */
const VIDEO_TIMEOUT_MS = 15000;

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const posterUrl = `${base}/hero-poster.jpg`;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const onReady = () => setVideoReady(true);
    const onError = () => setVideoFailed(true);

    v.addEventListener("canplaythrough", onReady);
    // Short clips sometimes fire 'loadeddata' but never 'canplaythrough'.
    v.addEventListener("loadeddata", onReady);
    v.addEventListener("error", onError);

    // A browser that cannot decode the file may never fire 'error'.
    const timeout = window.setTimeout(() => {
      if (v.readyState >= 2) setVideoReady(true);
      else setVideoFailed(true);
    }, VIDEO_TIMEOUT_MS);

    return () => {
      window.clearTimeout(timeout);
      v.removeEventListener("canplaythrough", onReady);
      v.removeEventListener("loadeddata", onReady);
      v.removeEventListener("error", onError);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden bg-black">
      {/* Poster layer, so the hero has imagery before the video arrives. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${posterUrl})` }}
      />

      {/* The 16:9 hero video. Source file lives at /public/hero.mp4 */}
      <video
        ref={videoRef}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          videoReady && !videoFailed ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={posterUrl}
      >
        <source src={`${base}/hero.mp4`} type="video/mp4" />
      </video>

      {/* Fallback grid when the video is missing or undecodable */}
      {videoFailed && (
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

      {/* Loading screen: small "boom", centered on black. Dismisses itself. */}
      <div
        aria-hidden
        className="boom-screen pointer-events-none absolute inset-0 z-40 flex items-center justify-center bg-black"
      >
        <span className="boom-pulse font-mono text-xs tracking-[0.2em] text-neutral-300">
          boom
        </span>
      </div>
    </div>
  );
}
