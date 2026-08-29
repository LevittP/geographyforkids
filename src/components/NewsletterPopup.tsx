"use client";

import { useEffect, useState, type FormEvent } from "react";

const DISMISS_KEY_EVENT = "geo4kids-newsletter-dismissed";

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "error" | "success">("idle");
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setVisible(true), 8000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  function close() {
    setVisible(false);
    setDismissed(true);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    if (!isValidEmail) {
      setStatus("error");
      return;
    }
    // Demo only: no email service is connected. This simulates a subscribe flow.
    setStatus("success");
  }

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-ink/40 p-4 backdrop-blur-sm sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby={DISMISS_KEY_EVENT}
    >
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-paper shadow-2xl">
        <div className="relative bg-gradient-to-br from-ocean-dark to-ink px-6 py-8 text-center text-paper">
          <div className="absolute inset-0 bg-graticule bg-graticule opacity-20" />
          <span className="relative text-4xl" aria-hidden>
            🌍
          </span>
          <h2 id={DISMISS_KEY_EVENT} className="relative mt-3 font-display text-2xl font-bold">
            Explore the World Every Week
          </h2>
          <p className="relative mt-2 text-sm text-paper/80">
            Get new geography facts, articles, and discoveries delivered to your
            inbox — free, and built for curious minds.
          </p>
        </div>

        <div className="p-6">
          {status === "success" ? (
            <div className="rounded-lg bg-leaf/10 p-4 text-center">
              <p className="font-display text-lg font-semibold text-leaf">
                You're on the list! 🎉
              </p>
              <p className="mt-1 text-sm text-ink/60">
                Keep an eye on your inbox for our next dispatch.
              </p>
              <button
                onClick={close}
                className="mt-4 rounded-full bg-ink px-5 py-2 text-sm font-semibold text-paper hover:bg-ink-light"
              >
                Continue exploring
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <label htmlFor="newsletter-email" className="text-sm font-medium text-ink/70">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === "error") setStatus("idle");
                }}
                placeholder="you@example.com"
                className="w-full rounded-lg border border-ink/15 px-4 py-3 text-sm outline-none focus:border-ocean"
              />
              {status === "error" && (
                <p className="text-sm text-compass" role="alert">
                  That email doesn't look quite right — please check it and try again.
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-full bg-ocean py-3 text-sm font-semibold text-white transition hover:bg-ocean-dark"
              >
                Subscribe
              </button>
              <p className="text-center text-xs text-ink/40">
                This is a demo signup and doesn't send real emails.
              </p>
            </form>
          )}
        </div>

        <button
          onClick={close}
          aria-label="Close newsletter popup"
          className="absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full bg-white/20 text-paper transition hover:bg-white/30"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
