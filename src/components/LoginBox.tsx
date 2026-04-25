"use client";

import { useState } from "react";

export default function LoginBox() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        // TODO: wire to auth endpoint
        setTimeout(() => setSubmitting(false), 800);
      }}
      className="pointer-events-auto w-[280px] rounded-md border border-white/10 bg-black/55 p-3 backdrop-blur-md glow-cyan"
      aria-label="Client login"
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-cyan-300/80">
          Client Login
        </span>
        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]" />
      </div>
      <input
        type="text"
        autoComplete="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="mb-2 w-full rounded border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60"
      />
      <input
        type="password"
        autoComplete="current-password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="mb-2 w-full rounded border border-white/10 bg-white/5 px-2.5 py-1.5 text-sm text-white placeholder-white/40 outline-none focus:border-cyan-400/60"
      />
      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded bg-cyan-400 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-black transition hover:bg-cyan-300 disabled:opacity-60"
      >
        {submitting ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
