"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV = [
  { href: "/work/", label: "Work" },
  { href: "/services/", label: "Services" },
  { href: "/company/", label: "Company" },
  { href: "/contact/", label: "Contact" },
];

function isActiveLink(href: string, pathname: string): boolean {
  if (href === "/services/") {
    return pathname === href || pathname.startsWith("/services/");
  }
  return pathname === href;
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open ]);

  return (
    <>
      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <div className="container header-inner">
          <Link href="/" className="brand" aria-label="Nexus-Tech Solutions — home">
            <span className="brand-mark brand-mark--img" aria-hidden="true">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-mark.png" alt="" width={72} height={54} />
            </span>
            <span className="brand-word">NEXUS&#8209;TECH</span>
          </Link>

          <nav className="nav-desktop" aria-label="Primary">
            {NAV.map((item) => {
              const active = isActiveLink(item.href, pathname);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link${active ? " is-active" : ""}`}
                  {...(active ? { "aria-current": "page" as const } : {})}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="header-cta">
            <Link href="/contact/" className="btn btn-primary btn-sm">
              Start a Project
            </Link>
            <button
              type="button"
              className={`menu-toggle${open ? " is-open" : ""}`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/*
        Sibling of the header (NOT inside it): the header's backdrop-filter
        blur would otherwise become the containing block for this fixed
        panel, collapsing it to zero height and letting page content
        show straight through.
      */}
      <nav
        id="mobile-nav"
        className={`nav-mobile${open ? " is-open" : ""}`}
        aria-label="Mobile"
      >
        <div className="container">
          <Link href="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact/"
            className="btn btn-primary"
            onClick={() => setOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      </nav>
    </>
  );
}
