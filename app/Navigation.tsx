"use client";

import { useEffect, useState } from "react";
import { DoveCompanion } from "./AssistantEmote";

const links = [
  ["01", "How it works", "#how-it-works"],
  ["02", "Why Gazely", "#features"],
  ["03", "Compatibility", "#compatibility"],
  ["04", "FAQ", "#faq"],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

export default function Navigation() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  const close = () => setOpen(false);

  return <header className={`nav-wrap${open ? " menu-is-open" : ""}`}>
    <nav className="nav container" aria-label="Main navigation">
      <a className="brand" href="#top" aria-label="Gazely home" onClick={close}><img src="/brand/gazely-logo-transparent.png" alt="Gazely"/></a>
      <div className="nav-companion" aria-label="Gazely's companion"><span className="nav-companion-mark"><DoveCompanion/></span><span>Gazely's companion</span></div>
      <div className="nav-links">{links.map(([n, label, href]) => <a key={n} href={href}>{label}</a>)}</div>
      <a className="nav-cta" href="#get-started">Get started <Arrow/></a>
      <button className={`menu-toggle${open ? " is-open" : ""}`} type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(!open)}>
        <span className="toggle-glyph" aria-hidden="true"><i/><i/><i/></span><span className="toggle-label">{open ? "Close" : "Menu"}</span>
      </button>
      <div className={`mobile-menu-panel${open ? " is-open" : ""}`} id="mobile-navigation" aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <div className="mobile-menu-heading"><span>Explore Gazely</span><i/></div>
          <div className="mobile-menu-links">{links.map(([n, label, href]) => <a key={n} href={href} onClick={close}><span className="menu-number">{n}</span><span>{label}</span><span className="menu-arrow">↗</span></a>)}</div>
          <a className="mobile-menu-cta" href="#get-started" onClick={close}>Get Gazely free <Arrow/></a>
          <div className="mobile-menu-footer"><img src="/brand/gazely-symbol.png" alt=""/><span>Intelligence for live presentation.</span></div>
        </div>
      </div>
    </nav>
  </header>;
}
