"use client";

import { useEffect, useRef, useState } from "react";

export function DoveCompanion() {
  return (
    <svg viewBox="0 0 112 92" aria-hidden="true" focusable="false">
      <path className="dove-tail" d="M22 56 5 45l8 19-8 12 22-7" />
      <path className="dove-body" d="M20 58c9-18 26-30 49-29 13 0 24 6 30 17-8 1-13 5-17 11-8 13-23 22-41 20-12-1-20-8-21-19z" />
      <path className="dove-wing" d="M31 58c15-17 37-21 57-13-10 3-16 9-22 16-8 9-19 14-33 12 7-4 12-9 16-15-8 5-16 8-25 8" />
      <path className="dove-head" d="M53 34c2-15 13-24 27-22 14 2 22 12 21 25-1 10-8 16-19 17l-16-3-14-17z" />
      <path className="dove-eye-ring" d="M83 25a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
      <circle className="dove-eye" cx="83" cy="30" r="2.2" />
      <path className="dove-beak" d="m99 34 11 4-11 4z" />
      <path className="dove-neck-accent" d="M57 49c8 5 17 7 27 6-5 8-14 14-25 17" />
    </svg>
  );
}

export default function AssistantEmote() {
  const [enabled, setEnabled] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return;

    const root = document.documentElement;
    let hintTimer: number | undefined;
    let showedHint = false;
    root.classList.add("gazely-cursor-enabled");
    setEnabled(true);

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      root.style.setProperty("--gazely-cursor-x", `${event.clientX}px`);
      root.style.setProperty("--gazely-cursor-y", `${event.clientY}px`);
      cursorRef.current?.classList.add("is-visible");
      if (!showedHint) {
        showedHint = true;
        setHintVisible(true);
        hintTimer = window.setTimeout(() => setHintVisible(false), 2200);
      }
    };
    const onPointerLeave = () => cursorRef.current?.classList.remove("is-visible", "is-pressed");
    const onPointerDown = () => cursorRef.current?.classList.add("is-pressed");
    const onPointerUp = () => cursorRef.current?.classList.remove("is-pressed");
    const onPointerOver = (event: PointerEvent) => {
      const target = event.target;
      const interactive = target instanceof Element && Boolean(target.closest("a, button, summary, [role='button']"));
      cursorRef.current?.classList.toggle("is-interactive", interactive);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    window.addEventListener("pointerover", onPointerOver);
    return () => {
      window.clearTimeout(hintTimer);
      root.classList.remove("gazely-cursor-enabled");
      root.style.removeProperty("--gazely-cursor-x");
      root.style.removeProperty("--gazely-cursor-y");
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointerover", onPointerOver);
    };
  }, []);

  if (!enabled) return null;
  return (
    <div ref={cursorRef} className={`gazely-cursor${hintVisible ? " show-hint" : ""}`} aria-hidden="true">
      <DoveCompanion />
      <span className="gazely-cursor-label">your gazely companion</span>
    </div>
  );
}
