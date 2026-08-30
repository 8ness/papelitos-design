import { useState, useEffect, useRef } from "react";

import logoImg from "@/imports/5b54db53-be81-4449-8aaf-16b05604fc6b.jpg";
import aboutMain from "@/imports/6f7dfad5-4a2f-4a93-843e-eab1b798701b.jpg";
import aboutSelfie from "@/imports/dd81f06a-731d-4789-8f57-fac664c737aa.jpg";
import aboutKid from "@/imports/59f2f88d-49d6-4ccc-8830-5086dfa51ce5.jpg";
import portfolioBranding from "@/imports/a6dd9a3a-4ba1-4a75-8942-1c4d6d77afe0.jpg";
import portfolioFeed from "@/imports/04c971b0-1789-4c77-b206-313865699e86.jpg";
import portfolioDiseno from "@/imports/263ade94-7475-4571-bf68-de43e117d23c.jpg";
import portfolioSocial from "@/imports/45739428-b3ec-48e3-81e2-6f4d3435fde7.jpg";
import portfolioExtra from "@/imports/ab1d444a-edc3-4119-802f-efe129cda766.jpg";

import losBrodisVideo from "@/assets/videos/los-brodis.mp4";
import psicologaMendezVideo from "@/assets/videos/psicologa-mendez.mp4";
// TODO: cuando Tamara entregue el video de SONKO Accesorios, agregarlo acá:
// import sonkoAccesoriosVideo from "@/assets/videos/sonko-accesorios.mp4";

/* ─── SVG Decoratives ─── */

/* Flying butterfly with wing-flap animation */
const FlyingButterfly = ({
  className = "",
  wingColor1 = "#FFC2D1",
  wingColor2 = "#FFB3C6",
  size = 52,
}: {
  className?: string;
  wingColor1?: string;
  wingColor2?: string;
  size?: number;
}) => (
  <svg
    width={size}
    height={size * 0.7}
    viewBox="0 0 80 56"
    fill="none"
    className={className}
    aria-hidden="true"
    style={{ pointerEvents: "none" }}
  >
    {/* Left wing group */}
    <g className="wing-l">
      <ellipse cx="20" cy="22" rx="18" ry="12" fill={wingColor1} opacity="0.88" transform="rotate(-20 20 22)" />
      <ellipse cx="16" cy="38" rx="12" ry="8" fill={wingColor2} opacity="0.72" transform="rotate(-30 16 38)" />
      <ellipse cx="22" cy="20" rx="8" ry="5" fill="white" opacity="0.25" transform="rotate(-20 22 20)" />
    </g>
    {/* Right wing group */}
    <g className="wing-r" style={{ transformOrigin: "40px 28px" }}>
      <ellipse cx="60" cy="22" rx="18" ry="12" fill={wingColor1} opacity="0.88" transform="rotate(20 60 22)" />
      <ellipse cx="64" cy="38" rx="12" ry="8" fill={wingColor2} opacity="0.72" transform="rotate(30 64 38)" />
      <ellipse cx="58" cy="20" rx="8" ry="5" fill="white" opacity="0.25" transform="rotate(20 58 20)" />
    </g>
    {/* Body */}
    <path d="M40 8 Q38 28 40 48 Q42 28 40 8Z" fill="#FB6F92" opacity="0.55" />
    <circle cx="40" cy="8" r="3" fill="#FB6F92" opacity="0.7" />
    <circle cx="40" cy="12" r="1.5" fill="#FB6F92" opacity="0.5" />
  </svg>
);

const Butterfly = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 80 56" fill="none" className={className} aria-hidden="true">
    <ellipse cx="20" cy="22" rx="18" ry="12" fill="#FFC2D1" opacity="0.82" transform="rotate(-20 20 22)" />
    <ellipse cx="60" cy="22" rx="18" ry="12" fill="#FFB3C6" opacity="0.82" transform="rotate(20 60 22)" />
    <ellipse cx="16" cy="38" rx="12" ry="8" fill="#FFE5EC" opacity="0.7" transform="rotate(-30 16 38)" />
    <ellipse cx="64" cy="38" rx="12" ry="8" fill="#FFE5EC" opacity="0.7" transform="rotate(30 64 38)" />
    <path d="M40 8 Q38 28 40 48 Q42 28 40 8Z" fill="#FB6F92" opacity="0.5" />
    <circle cx="40" cy="8" r="3" fill="#FB6F92" opacity="0.6" />
  </svg>
);

const SmallButterfly = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 50 36" fill="none" className={className} aria-hidden="true">
    <ellipse cx="12" cy="14" rx="11" ry="8" fill="#FF8FAB" opacity="0.75" transform="rotate(-20 12 14)" />
    <ellipse cx="38" cy="14" rx="11" ry="8" fill="#FFB3C6" opacity="0.75" transform="rotate(20 38 14)" />
    <ellipse cx="10" cy="25" rx="7" ry="5" fill="#FFE5EC" opacity="0.6" transform="rotate(-30 10 25)" />
    <ellipse cx="40" cy="25" rx="7" ry="5" fill="#FFE5EC" opacity="0.6" transform="rotate(30 40 25)" />
    <path d="M25 5 Q24 18 25 31 Q26 18 25 5Z" fill="#FB6F92" opacity="0.4" />
  </svg>
);

const FlowerBloom = ({ className = "", color = "#FFC2D1" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
      <ellipse
        key={i}
        cx="50" cy="25" rx="10" ry="16"
        fill={color}
        opacity="0.75"
        transform={`rotate(${angle} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="13" fill="#FB6F92" opacity="0.85" />
    <circle cx="50" cy="50" r="7" fill="#FFE5EC" opacity="0.9" />
  </svg>
);

const TinyFlower = ({ className = "", color = "#FFB3C6" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 60 60" fill="none" className={className} aria-hidden="true">
    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
      <ellipse key={i} cx="30" cy="14" rx="7" ry="11" fill={color} opacity="0.8" transform={`rotate(${angle} 30 30)`} />
    ))}
    <circle cx="30" cy="30" r="9" fill="#FB6F92" opacity="0.9" />
    <circle cx="30" cy="30" r="5" fill="#fff" opacity="0.8" />
  </svg>
);

const CameraIcon = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 90" fill="none" className={className} aria-hidden="true">
    <rect x="5" y="22" width="110" height="62" rx="10" fill="#FFC2D1" opacity="0.8" />
    <rect x="5" y="22" width="110" height="62" rx="10" stroke="#FB6F92" strokeWidth="1.5" opacity="0.4" />
    <rect x="12" y="10" width="35" height="14" rx="4" fill="#FFB3C6" opacity="0.9" />
    <circle cx="60" cy="53" r="21" fill="#fff" opacity="0.4" />
    <circle cx="60" cy="53" r="21" stroke="#FB6F92" strokeWidth="2" opacity="0.5" />
    <circle cx="60" cy="53" r="14" fill="#FFE5EC" opacity="0.7" />
    <circle cx="60" cy="53" r="9" fill="#FFC2D1" opacity="0.9" />
    <circle cx="60" cy="53" r="4" fill="#FB6F92" opacity="0.8" />
    <circle cx="90" cy="33" r="4" fill="#FF8FAB" opacity="0.7" />
    <rect x="18" y="38" width="16" height="10" rx="3" fill="#FFE5EC" opacity="0.6" />
  </svg>
);

/* Starfish — editorial, organic, not kawaii */
const Starfish = ({ className = "", color = "#FFB3C6" }: { className?: string; color?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" className={className} aria-hidden="true">
    {/* 5 arms as tapered paths */}
    {[0, 72, 144, 216, 288].map((angle, i) => (
      <g key={i} transform={`rotate(${angle} 50 50)`}>
        <path
          d="M50 50 C46 42 44 28 50 14 C56 28 54 42 50 50Z"
          fill={color}
          opacity="0.82"
        />
        <path
          d="M50 50 C46 42 44 28 50 14 C56 28 54 42 50 50Z"
          fill="white"
          opacity="0.12"
        />
      </g>
    ))}
    <circle cx="50" cy="50" r="10" fill={color} opacity="0.9" />
    <circle cx="50" cy="50" r="5" fill="white" opacity="0.3" />
    {/* subtle texture dots on center */}
    {[0,60,120,180,240,300].map((a, i) => (
      <circle
        key={i}
        cx={50 + 7 * Math.cos((a * Math.PI) / 180)}
        cy={50 + 7 * Math.sin((a * Math.PI) / 180)}
        r="1"
        fill="white"
        opacity="0.4"
      />
    ))}
  </svg>
);

/* Scrapbook paper tag */
const PaperTag = ({ text, className = "" }: { text: string; className?: string }) => (
  <div
    className={`${className} bg-white border border-[#FFC2D1] rounded-sm px-3 py-1.5 shadow-sm`}
    style={{ fontFamily: "var(--font-body)" }}
  >
    <div className="w-2 h-2 rounded-full bg-[#FFB3C6] mx-auto -mt-3.5 mb-1.5 border border-white" />
    <p className="text-[#FB6F92] text-xs font-medium tracking-wider">{text}</p>
  </div>
);

/* ─── Flying butterflies overlay ─── */
const butterflies = [
  { cls: "fly-1", wingColor1: "#FFC2D1", wingColor2: "#FFB3C6", size: 48, opacity: 0.82 },
  { cls: "fly-2", wingColor1: "#FFB3C6", wingColor2: "#FF8FAB", size: 36, opacity: 0.72 },
  { cls: "fly-3", wingColor1: "#FF8FAB", wingColor2: "#FFC2D1", size: 56, opacity: 0.78 },
  { cls: "fly-4", wingColor1: "#FFE5EC", wingColor2: "#FFB3C6", size: 30, opacity: 0.65 },
  { cls: "fly-5", wingColor1: "#FFC2D1", wingColor2: "#FB6F92", size: 42, opacity: 0.70 },
];

function FlyingButterfliesLayer() {
  return (
    <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden">
      {butterflies.map((b, i) => (
        <div key={i} className={b.cls} style={{ position: "absolute", top: 0, left: 0, opacity: b.opacity }}>
          <FlyingButterfly wingColor1={b.wingColor1} wingColor2={b.wingColor2} size={b.size} />
        </div>
      ))}
    </div>
  );
}

/* ─── Intersection observer hook for animations ─── */
function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

/* ─── Section wrapper with fade-up ─── */
function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const { ref, visible } = useVisible();
  return (
    <section
      id={id}
      ref={ref}
      className={`${className} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    >
      {children}
    </section>
  );
}

/* ─── NAV ─── */
const navLinks = ["Sobre mí", "Servicios", "Trabajos", "Proceso", "Contacto"];
const navHref = (item: string) =>
  `#${item.toLowerCase().replace(" ", "-").normalize("NFD").replace(/[̀-ͯ]/g, "")}`;

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Close the mobile panel with Escape, same as the project modal does.
  useEffect(() => {
    if (!mobileOpen) return;
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileOpen(false); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [mobileOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || mobileOpen ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2.5">
          <img
            src={logoImg}
            alt="Papelitos Design logo"
            className="w-10 h-10 rounded-full object-cover object-top shadow-sm border-2 border-[#FFB3C6]"
          />
          <span style={{ fontFamily: "var(--font-display)" }} className="text-xl font-semibold tracking-wide text-[#2d1f1f]">
            Papelitos <span className="text-[#FB6F92] italic">Design</span>
          </span>
        </a>
        <div className="hidden md:flex gap-8 text-sm font-medium text-[#6b4a52]">
          {navLinks.map((item) => (
            <a key={item} href={navHref(item)} className="hover:text-[#FB6F92] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6F92] focus-visible:ring-offset-2">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contacto"
            className="bg-[#FB6F92] text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-[#e85a7e] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6F92] focus-visible:ring-offset-2"
          >
            Hablemos
          </a>
          {/* Mobile menu toggle — only visible below md, where the link list disappears.
              Sized to a 44px touch target per accessibility guidance. */}
          <button
            type="button"
            onClick={() => setMobileOpen(o => !o)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            className="md:hidden w-11 h-11 flex items-center justify-center rounded-full border border-[#FFC2D1] text-[#FB6F92] hover:bg-[#FFE5EC] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6F92] focus-visible:ring-offset-2"
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              {mobileOpen ? (
                <path d="M3 3l12 12M15 3L3 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <>
                  <path d="M2 4.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M2 9h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M2 13.5h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile link panel — collapses to 0 height, no layout shift on desktop */}
      <div
        id="mobile-nav-panel"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${mobileOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="bg-white/95 backdrop-blur-md border-t border-[#FFE5EC] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((item) => (
            <a
              key={item}
              href={navHref(item)}
              onClick={() => setMobileOpen(false)}
              className="text-[#6b4a52] text-sm font-medium hover:text-[#FB6F92] transition-colors rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6F92] focus-visible:ring-offset-2"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ─── HERO ─── */
function Hero() {
  const starRef1 = useRef<HTMLDivElement>(null);
  const starRef2 = useRef<HTMLDivElement>(null);
  const camRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Skip the scroll-linked parallax entirely for visitors who prefer
    // reduced motion — the elements simply stay put.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf: number;
    const onScroll = () => {
      raf = requestAnimationFrame(() => {
        const sy = window.scrollY;
        if (starRef1.current) starRef1.current.style.transform = `translateY(${sy * 0.1}px)`;
        if (starRef2.current) starRef2.current.style.transform = `translateY(${sy * 0.06}px)`;
        if (camRef.current)   camRef.current.style.transform   = `translateY(${sy * 0.08}px)`;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-24 pb-16"
      style={{ background: "#fdf9f7" }}
    >
      {/* Soft background blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-16 -right-16 w-80 h-80 rounded-full bg-[#FFE5EC] opacity-55 blur-3xl" />
        <div className="absolute bottom-0 -left-12 w-72 h-72 rounded-full bg-[#FFC2D1] opacity-35 blur-3xl" />
      </div>

      {/* Parallax starfish */}
      <div ref={starRef1} className="absolute top-24 left-[4vw] pointer-events-none animate-star opacity-65 hidden md:block">
        <Starfish className="w-20" color="#FFB3C6" />
      </div>
      <div ref={starRef2} className="absolute bottom-16 right-[5vw] pointer-events-none animate-star-slow opacity-55 hidden md:block">
        <Starfish className="w-14" color="#FF8FAB" />
      </div>
      {/* Small starfish between columns */}
      <div className="absolute top-1/2 left-[48%] -translate-y-1/2 pointer-events-none animate-star opacity-40 hidden lg:block">
        <Starfish className="w-8" color="#FFC2D1" />
      </div>

      {/* Camera — bottom-left accent */}
      <div ref={camRef} className="absolute bottom-12 left-[3vw] pointer-events-none animate-flower opacity-55 hidden md:block">
        <CameraIcon className="w-28" />
      </div>

      {/* Butterflies */}
      <div className="absolute top-28 right-[14vw] pointer-events-none animate-float-1 opacity-60 hidden md:block">
        <Butterfly className="w-14" />
      </div>
      <div className="absolute bottom-28 left-[28vw] pointer-events-none animate-float-2 opacity-50 hidden md:block">
        <SmallButterfly className="w-9" />
      </div>

      {/* Paper tag — shown from xl only: at lg (1024–1279px) its offset,
          measured from the viewport edge, could overlap the photo column. */}
      <PaperTag text="Content Creator" className="absolute top-[30%] right-[6vw] rotate-2 hidden xl:block opacity-75" />

      {/* ── 2-column layout ── */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 md:gap-16 items-center">

        {/* LEFT — editorial typography */}
        <div className="animate-fade-up">
          <span className="inline-flex items-center gap-2 text-[#FB6F92] text-xs font-medium tracking-[0.2em] uppercase mb-5">
            <span className="w-6 h-px bg-[#FFB3C6]" />
            Tamara Alvarez
            <span className="w-6 h-px bg-[#FFB3C6]" />
          </span>

          {/* PAPELITOS — Playfair Display for maximum editorial impact */}
          <h1
            style={{ fontFamily: "var(--font-hero)" }}
            className="text-[clamp(3.2rem,9vw,7.5rem)] font-black leading-[0.92] tracking-tight text-[#2d1f1f] mb-2"
          >
            Papelitos
          </h1>
          {/* DESIGN — Cormorant italic, smaller, offset */}
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-[clamp(2rem,5.5vw,4.5rem)] font-light italic leading-none text-[#FB6F92] mb-6 pl-1"
          >
            Design
          </h2>

          <p className="text-[#6b4a52] text-base leading-relaxed max-w-sm mb-2">
            Community Manager, creadora de contenido y diseñadora de identidad visual
          </p>
          <p className="text-[#9e7b85] text-sm leading-relaxed max-w-md mb-8">
            Ayudo a emprendedores y profesionales a construir una presencia digital atractiva y estratégica.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#trabajos"
              className="bg-[#FB6F92] text-white font-medium px-7 py-3 rounded-full hover:bg-[#e85a7e] transition-all hover:shadow-lg hover:shadow-[#FB6F92]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6F92] focus-visible:ring-offset-2"
            >
              Ver trabajos
            </a>
            <a
              href="#contacto"
              className="border border-[#FFB3C6] text-[#FB6F92] font-medium px-7 py-3 rounded-full hover:bg-[#FFE5EC] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6F92] focus-visible:ring-offset-2"
            >
              Hablemos
            </a>
          </div>
        </div>

        {/* RIGHT — photo collage */}
        <div className="relative h-[420px] md:h-[480px] animate-scale-in delay-200">
          {/* Main photo */}
          <div className="absolute top-6 left-6 right-0 bottom-0 rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <img
              src={logoImg}
              alt="Tamara Alvarez — Papelitos Design"
              fetchPriority="high"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#FFE5EC]/30 to-transparent" />
          </div>
          {/* Small starfish on photo corner */}
          <div className="absolute top-2 right-2 z-10 animate-star opacity-75">
            <Starfish className="w-10" color="#FFC2D1" />
          </div>
          {/* Scrapbook card */}
          <div className="absolute -bottom-3 left-0 bg-white/92 backdrop-blur-sm rounded-2xl px-5 py-3 shadow-lg z-10 border border-[#FFE5EC]">
            <p style={{ fontFamily: "var(--font-display)" }} className="text-[#2d1f1f] text-base font-medium italic">Presencia digital</p>
            <p className="text-[#9e7b85] text-xs">estratégica y estética</p>
          </div>
          {/* Corner block */}
          <div className="absolute top-0 left-0 w-14 h-14 rounded-xl bg-[#FFC2D1] opacity-65 -translate-x-2 -translate-y-2" />
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function About() {
  return (
    <Section id="sobre-mi" className="relative py-24 bg-white overflow-hidden">
      <FlowerBloom className="absolute -top-10 -left-10 w-32 opacity-20 animate-flower" color="#FFC2D1" />
      <FlowerBloom className="absolute -bottom-10 right-0 w-40 opacity-15 animate-flower" color="#FFB3C6" />
      <Butterfly className="absolute top-10 right-16 w-16 opacity-40 animate-float-1" />

      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Photo collage: 3 images */}
        <div className="relative h-[480px]">
          {/* Main headshot */}
          <div className="absolute top-0 left-0 w-[62%] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-10">
            <img src={aboutMain} alt="Tamara Alvarez, creadora de Papelitos Design" loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
          </div>
          {/* Selfie — overlapping bottom right */}
          <div className="absolute bottom-0 right-0 w-[52%] aspect-[3/4] rounded-3xl overflow-hidden shadow-xl border-4 border-white z-20 rotate-2">
            <img src={aboutSelfie} alt="Tamara Alvarez sacándose una selfie" loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
          </div>
          {/* Childhood photo — small, top right, vintage feel */}
          <div className="absolute top-6 right-4 w-[34%] aspect-square rounded-2xl overflow-hidden shadow-lg border-4 border-[#FFE5EC] z-30 -rotate-3">
            <img src={aboutKid} alt="Tamara Alvarez de niña" loading="lazy" decoding="async" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-[#FFC2D1]/15" />
          </div>
          {/* Sticker */}
          <div className="absolute -bottom-4 left-4 bg-[#FB6F92] text-white text-center rounded-2xl px-4 py-3 shadow-xl rotate-3 z-40">
            <p style={{ fontFamily: "var(--font-display)" }} className="text-xl font-semibold italic">Formosa</p>
            <p className="text-xs opacity-80">Argentina 🌸</p>
          </div>
          <div className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-[#FFE5EC] opacity-70" />
        </div>

        <div>
          <span className="block text-[#FB6F92] text-xs font-medium tracking-widest uppercase mb-3">Sobre mí</span>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl font-light text-[#2d1f1f] leading-tight mb-6"
          >
            Hola, soy <em className="italic text-[#FB6F92]">Tamara</em>
          </h2>
          <p className="text-[#6b4a52] leading-relaxed mb-4">
            Soy Tamara Alvarez, creadora de Papelitos Design. Acompaño a emprendedores y profesionales que quieren potenciar su presencia digital con una comunicación visual atractiva, coherente y estratégica.
          </p>
          <p className="text-[#9e7b85] leading-relaxed">
            Mi trabajo combina creatividad, diseño y análisis para ayudar a cada marca a conectar con su audiencia, destacar en redes sociales y atraer potenciales clientes.
          </p>

          <div className="mt-8 flex gap-4">
            {["Community Manager", "Diseño", "Contenido"].map((tag) => (
              <span key={tag} className="bg-[#FFE5EC] text-[#FB6F92] text-xs font-medium px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── SERVICES ─── */
const services = [
  {
    icon: "📱",
    title: "Community Manager",
    desc: "Gestión estratégica de redes sociales para marcas que buscan una comunicación constante, ordenada y alineada con sus objetivos.",
    color: "#FFE5EC",
    accent: "#FF8FAB",
  },
  {
    icon: "✨",
    title: "Creación de contenido",
    desc: "Diseño y desarrollo de contenido visual pensado para transmitir el valor de tu marca de forma auténtica, atractiva y profesional.",
    color: "#FFC2D1",
    accent: "#FB6F92",
  },
  {
    icon: "🎨",
    title: "Identidad visual",
    desc: "Construcción de una imagen visual coherente y memorable: paleta de colores, recursos gráficos y estilo visual para diferenciar tu marca.",
    color: "#FFB3C6",
    accent: "#e85a7e",
  },
];

function Services() {
  // Local reveal for a subtle stagger across the 3 cards (0ms / 100ms / 200ms),
  // independent from the Section-level fade so each card lands slightly after
  // the previous one instead of all three appearing as one block.
  const { ref: gridRef, visible } = useVisible(0.2);

  return (
    <Section id="servicios" className="relative pt-20 pb-24 bg-[#fdf8f5] overflow-hidden">
      <SmallButterfly className="absolute top-12 left-8 w-16 opacity-50 animate-float-2" />
      <TinyFlower className="absolute bottom-16 right-12 w-12 opacity-60 animate-flower" color="#FFC2D1" />

      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#FB6F92] text-xs font-medium tracking-widest uppercase">Lo que hago</span>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl font-light text-[#2d1f1f] mt-2"
          >
            Servicios
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${i * 100}ms`, background: s.color }}
              className={`group relative rounded-3xl p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl cursor-default overflow-hidden ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <FlowerBloom className="absolute -bottom-6 -right-6 w-24 opacity-20 group-hover:opacity-30 transition-opacity" color={s.accent} />
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3
                style={{ fontFamily: "var(--font-display)" }}
                className="text-2xl font-medium text-[#2d1f1f] mb-3"
              >
                {s.title}
              </h3>
              <p className="text-[#6b4a52] text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-0.5 rounded-full opacity-30" style={{ background: s.accent }} />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─── PROJECT MODAL ─── */
interface ProjectItem {
  img: string;
  /** Descriptive alt text for `img` — describes the real content, not the
   *  raw title-with-bullet string (screen readers read "·" awkwardly). */
  alt: string;
  /** Optional real video for this project's case-study reel. When absent,
   *  the modal falls back to the static image + play affordance. */
  video?: string;
  label: string;
  title: string;
  brand: string;
  services: string[];
}

/** The one real Instagram account — used everywhere, including inside each
 *  project modal (the per-client @handles that used to live here were not
 *  real accounts, so every Instagram link now points here instead). */
const INSTAGRAM_URL = "https://www.instagram.com/papelitos_design_/";

/** Real WhatsApp number (Argentina country code) with a natural pre-filled
 *  message, URL-encoded, reused by every WhatsApp link on the site. */
const WHATSAPP_NUMBER = "543718412061";
const WHATSAPP_MESSAGE =
  "Hola Tamara, vi tu página de Papelitos Design y me gustaría consultar por tus servicios.";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/** Focusable elements considered for the modal's Tab focus trap. */
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

function ProjectModal({ project, onClose }: { project: ProjectItem; onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const titleId = "project-modal-title";
  // Drives the exit animation: set true first, then unmount once it finishes
  // playing, instead of disappearing instantly.
  const [closing, setClosing] = useState(false);
  const requestClose = () => setClosing(true);

  useEffect(() => {
    if (!closing) return;
    const t = setTimeout(onClose, 200);
    return () => clearTimeout(t);
  }, [closing, onClose]);

  useEffect(() => {
    // Remember what had focus before opening, to restore it on close.
    const previouslyFocused = document.activeElement as HTMLElement | null;
    // Move focus into the dialog so screen readers announce it immediately.
    closeBtnRef.current?.focus();

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        requestClose();
        return;
      }
      // Simple focus trap: keep Tab / Shift+Tab cycling inside the dialog.
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        ).filter(el => el.offsetParent !== null);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", handler);

    // Lock scroll without layout shift:
    // 1. Measure scrollbar width before hiding it
    // 2. Use position:fixed + top offset so page doesn't jump
    // 3. On close, restore exact scroll position
    const scrollY = window.scrollY;
    const scrollbarW = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.body.style.paddingRight = `${scrollbarW}px`;

    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.paddingRight = "";
      // Restore exact scroll position — no page jump
      window.scrollTo({ top: scrollY, behavior: "instant" as ScrollBehavior });
      // Return focus to whatever opened the modal (the project card).
      previouslyFocused?.focus?.();
    };
  }, []);

  // Stop and reset the video whenever the modal unmounts / project changes,
  // so nothing keeps playing silently in the background after closing.
  useEffect(() => {
    return () => {
      const v = videoRef.current;
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    };
  }, [project]);

  return (
    <div
      className={`fixed inset-0 z-[80] overflow-y-auto p-4 md:p-8 ${closing ? "animate-modal-backdrop-out" : "animate-modal-backdrop-in"}`}
      style={{ background: "rgba(45,31,31,0.72)", backdropFilter: "blur(6px)", display: "flex" }}
      onClick={requestClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={`relative w-full max-w-sm bg-white rounded-3xl overflow-hidden shadow-2xl ${closing ? "animate-modal-out" : "animate-modal-in"}`}
        style={{ border: "2px solid #FFC2D1", margin: "auto" }}
        onClick={e => e.stopPropagation()}
      >
        {/* Modal header strip */}
        <div className="bg-[#FFE5EC] px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Starfish className="w-5 h-5 opacity-70" color="#FF8FAB" />
            <span className="text-[#FB6F92] text-xs font-medium tracking-widest uppercase">Papelitos Design</span>
          </div>
          <button
            ref={closeBtnRef}
            onClick={requestClose}
            aria-label="Cerrar"
            className="w-7 h-7 rounded-full bg-white/70 flex items-center justify-center text-[#FB6F92] hover:bg-white transition-colors text-lg leading-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6F92] focus-visible:ring-offset-1"
          >
            ×
          </button>
        </div>

        {/* Video area — vertical reel format */}
        <div className="relative bg-[#2d1f1f]" style={{ aspectRatio: "9/16", maxHeight: "55vh" }}>
          {project.video ? (
            <video
              ref={videoRef}
              key={project.video}
              src={project.video}
              poster={project.img}
              className="w-full h-full object-cover"
              controls
              playsInline
              autoPlay
              preload="metadata"
            />
          ) : (
            <>
              {/* No video uploaded yet for this project — image + play affordance */}
              <img
                src={project.img}
                alt={project.alt}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-top opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-between p-4 pointer-events-none">
                <div className="self-end">
                  <span className="bg-black/40 text-white text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full">
                    Reel · Case Study
                  </span>
                </div>
                <div className="self-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/40 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-gradient-to-t from-black/60 to-transparent pt-6 -mx-4 px-4 pb-1">
                  <p className="text-[#FFC2D1] text-[10px] tracking-widest uppercase mb-0.5">{project.label}</p>
                  <p style={{ fontFamily: "var(--font-display)" }} className="text-white text-lg leading-tight">{project.brand}</p>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Info panel */}
        <div className="px-5 py-4">
          <p id={titleId} style={{ fontFamily: "var(--font-display)" }} className="text-[#2d1f1f] text-xl mb-1">{project.title}</p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.services.map(s => (
              <span key={s} className="bg-[#FFE5EC] text-[#FB6F92] text-[10px] font-medium px-2.5 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#FB6F92] text-xs font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6F92] focus-visible:ring-offset-1 rounded"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            Ver más en Instagram ↗
          </a>
        </div>

        {/* Scrapbook footer accent */}
        <div className="h-1 bg-gradient-to-r from-[#FFE5EC] via-[#FB6F92] to-[#FFE5EC]" />
      </div>
    </div>
  );
}

/* ─── PORTFOLIO ─── */
const portfolioItems: ProjectItem[] = [
  {
    img: portfolioBranding,
    alt: "Trabajo de identidad visual para Los Brodis",
    video: losBrodisVideo,
    label: "Branding",
    title: "Los Brodis · Identidad visual",
    brand: "Los Brodis",
    services: ["Identidad visual", "Diseño gráfico", "Branding"],
  },
  {
    img: portfolioFeed,
    alt: "Contenido de Instagram para SONKO Accesorios",
    // TODO: falta el archivo real de SONKO Accesorios. Cuando llegue:
    // 1) import sonkoAccesoriosVideo from "@/assets/videos/sonko-accesorios.mp4"; (arriba)
    // 2) agregar `video: sonkoAccesoriosVideo` acá.
    label: "Feed de Instagram",
    title: "SONKO Accesorios · Contenido",
    brand: "SONKO Accesorios",
    services: ["Community Manager", "Creación de contenido", "Social Media"],
  },
  {
    img: portfolioDiseno,
    alt: "Contenido para Instagram de Psicóloga Méndez",
    video: psicologaMendezVideo,
    label: "Diseño",
    title: "Psicologa Mendez · Piezas visuales",
    brand: "Psicologa Mendez",
    services: ["Diseño de contenido", "Social Media", "Identidad visual"],
  },
  {
    img: portfolioSocial,
    alt: "Community management y redes sociales para SONKO Accesorios",
    label: "Social media",
    title: "SONKO · Community management",
    brand: "SONKO Accesorios",
    services: ["Social Media", "Creación de contenido", "Community Manager"],
  },
  {
    img: portfolioExtra,
    alt: "Contenido de redes sociales para Leilas Jewelry",
    label: "Contenido",
    title: "Leilas Jewelry · Social media",
    brand: "Leilas Jewelry",
    services: ["Community Manager", "Creación de contenido"],
  },
];

function Portfolio() {
  const [active, setActive] = useState<ProjectItem | null>(null);

  return (
    <Section id="trabajos" className="relative py-16 bg-white overflow-hidden">
      <Starfish className="absolute -top-10 right-10 w-24 opacity-12 animate-star" color="#FFB3C6" />
      <SmallButterfly className="absolute bottom-16 left-6 w-16 opacity-30 animate-float-2" />

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}

      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <span className="text-[#FB6F92] text-xs font-medium tracking-widest uppercase">Proyectos</span>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl font-light text-[#2d1f1f] mt-2 mb-2"
          >
            Trabajos seleccionados
          </h2>
          <p className="text-[#9e7b85] max-w-lg text-sm leading-relaxed">
            Una muestra de proyectos en los que trabajé desarrollando contenido, diseño e identidad visual para marcas y emprendimientos.
          </p>
        </div>

        {/* Tight editorial mosaic */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">

          {/* Item 0 — Branding, wide */}
          <ProjectCard item={portfolioItems[0]} onClick={() => setActive(portfolioItems[0])} className="col-span-2 aspect-video" />

          {/* Item 1 — Feed */}
          <ProjectCard item={portfolioItems[1]} onClick={() => setActive(portfolioItems[1])} className="aspect-square" rotate="-rotate-[0.5deg]" />

          {/* Item 2 — Diseño */}
          <ProjectCard item={portfolioItems[2]} onClick={() => setActive(portfolioItems[2])} className="aspect-square rotate-[0.5deg]" />

          {/* Item 3 — Social media */}
          <ProjectCard item={portfolioItems[3]} onClick={() => setActive(portfolioItems[3])} className="aspect-square -rotate-[0.5deg]" />

          {/* Item 4 — Extra, wide */}
          <ProjectCard item={portfolioItems[4]} onClick={() => setActive(portfolioItems[4])} className="col-span-2 aspect-video rotate-[0.3deg]" objectPosition="object-top" />

        </div>
      </div>
    </Section>
  );
}

function ProjectCard({
  item,
  onClick,
  className = "",
  rotate = "",
  objectPosition = "object-center",
}: {
  item: ProjectItem;
  onClick: () => void;
  className?: string;
  rotate?: string;
  objectPosition?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`group relative overflow-hidden rounded-xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FB6F92] ${className} ${rotate}`}
      style={{ display: "block", width: "100%" }}
      aria-label={`Ver proyecto: ${item.title}`}
    >
      <img
        src={item.img}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover ${objectPosition} transition-transform duration-300 group-hover:scale-[1.02]`}
      />
      {/* Permanent subtle label bottom-left */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#2d1f1f]/60 via-[#2d1f1f]/20 to-transparent p-3 translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <span className="text-[#FFC2D1] text-[9px] tracking-widest uppercase">{item.label}</span>
        <p style={{ fontFamily: "var(--font-display)" }} className="text-white text-sm leading-tight">{item.brand}</p>
      </div>
      {/* "Ver proyecto" badge — appears on hover */}
      <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
        <span className="bg-white/90 backdrop-blur-sm text-[#FB6F92] text-[10px] font-medium px-2.5 py-1 rounded-full flex items-center gap-1 shadow">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          Ver proyecto
        </span>
      </div>
    </button>
  );
}

/* ─── PROCESS ─── */
const steps = [
  {
    num: "01",
    title: "Conozco tu marca",
    desc: "Analizo tu negocio, tu estilo y tus objetivos para construir una estrategia alineada a tu esencia.",
  },
  {
    num: "02",
    title: "Diseñamos tu presencia visual",
    desc: "Definimos identidad, contenido y dirección creativa para que tu marca se vea profesional y coherente.",
  },
  {
    num: "03",
    title: "Creamos y comunicamos",
    desc: "Desarrollo piezas visuales y contenido para redes sociales enfocados en conectar con tu audiencia.",
  },
  {
    num: "04",
    title: "Analizamos y optimizamos",
    desc: "Reviso métricas, alcance y horarios de mayor actividad para mejorar el rendimiento y atraer más potenciales clientes.",
  },
];

function Process() {
  // Same subtle per-item stagger pattern as Services (0/80/160/240ms — kept
  // a touch tighter since there are 4 steps instead of 3).
  const { ref: stepsRef, visible } = useVisible(0.15);

  return (
    <Section id="proceso" className="relative py-24 bg-[#FFE5EC] overflow-hidden">
      <FlowerBloom className="absolute -top-8 -right-8 w-36 opacity-25 animate-flower" color="#FFB3C6" />
      <SmallButterfly className="absolute bottom-16 left-16 w-14 opacity-40 animate-float-1" />
      <CameraIcon className="absolute top-12 right-24 w-28 opacity-20 animate-flower" />

      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-[#FB6F92] text-xs font-medium tracking-widest uppercase">Cómo trabajo</span>
          <h2
            style={{ fontFamily: "var(--font-display)" }}
            className="text-5xl font-light text-[#2d1f1f] mt-2"
          >
            Mi proceso
          </h2>
        </div>

        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-px bg-gradient-to-b from-[#FFC2D1] via-[#FF8FAB] to-[#FFC2D1] hidden md:block" />
          <div ref={stepsRef} className="space-y-8">
            {steps.map((s, i) => (
              <div
                key={i}
                style={{ transitionDelay: `${i * 80}ms` }}
                className={`relative flex gap-8 items-start group transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md border border-[#FFC2D1] relative z-10 group-hover:border-[#FB6F92] transition-colors">
                  <span
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-[#FB6F92] font-semibold text-sm"
                  >
                    {s.num}
                  </span>
                </div>
                <div className="flex-1 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm group-hover:shadow-md transition-all">
                  <h3
                    style={{ fontFamily: "var(--font-display)" }}
                    className="text-xl font-medium text-[#2d1f1f] mb-2"
                  >
                    {s.title}
                  </h3>
                  <p className="text-[#6b4a52] text-sm leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <Section id="contacto" className="relative pt-20 pb-24 bg-[#2d1f1f] overflow-hidden">
      {/* decoratives on dark */}
      <FlowerBloom className="absolute -top-10 left-10 w-32 opacity-10 animate-flower" color="#FFC2D1" />
      <FlowerBloom className="absolute -bottom-10 -right-10 w-48 opacity-10 animate-flower" color="#FFB3C6" />
      <Butterfly className="absolute top-20 right-20 w-20 opacity-15 animate-float-2" />
      <SmallButterfly className="absolute bottom-20 left-20 w-12 opacity-15 animate-float-1" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-[#FB6F92] opacity-5 blur-3xl" />

      <div className="max-w-3xl mx-auto px-6 text-center relative">
        <TinyFlower className="w-8 h-8 mx-auto mb-4 opacity-60" color="#FFC2D1" />
        <span className="text-[#FFC2D1] text-xs font-medium tracking-widest uppercase">Trabajemos juntas</span>
        <h2
          style={{ fontFamily: "var(--font-display)" }}
          className="text-5xl md:text-6xl font-light text-white mt-3 mb-4"
        >
          Hagamos crecer
          <br />
          <em className="italic text-[#FF8FAB]">tu marca</em>
        </h2>
        <p className="text-[#c9a8b4] leading-relaxed mb-10 max-w-md mx-auto">
          Si querés una presencia digital más estratégica, estética y profesional, estoy lista para ayudarte.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#FFC2D1] hover:text-[#FF8FAB] transition-colors group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8FAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d1f1f]"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </div>
            <span className="text-sm">@papelitos_design_</span>
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#FFC2D1] hover:text-[#FF8FAB] transition-colors group rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8FAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d1f1f]"
          >
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <span className="text-sm">3718412061</span>
          </a>

          <div className="flex items-center gap-3 text-[#c9a8b4]">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <span className="text-sm">Formosa, Argentina</span>
          </div>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#FB6F92] text-white font-medium px-10 py-4 rounded-full hover:bg-[#e85a7e] transition-all hover:shadow-xl hover:shadow-[#FB6F92]/30 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8FAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2d1f1f]"
        >
          Hablemos ✉
        </a>
      </div>
    </Section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-[#1a1010] py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p style={{ fontFamily: "var(--font-display)" }} className="text-xl font-light text-white">
            Papelitos <em className="italic text-[#FF8FAB]">Design</em>
          </p>
          <p className="text-[#9e7b85] text-xs mt-1">Tamara Alvarez · Formosa, Argentina</p>
        </div>
        <div className="flex gap-6">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9e7b85] hover:text-[#FF8FAB] transition-colors text-sm rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8FAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1010]"
          >
            Instagram
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#9e7b85] hover:text-[#FF8FAB] transition-colors text-sm rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF8FAB] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a1010]"
          >
            WhatsApp
          </a>
        </div>
        <p className="text-[#5a3d42] text-xs">© 2026 Papelitos Design</p>
      </div>
    </footer>
  );
}

/* ─── ROOT ─── */
export default function App() {
  return (
    <div className="min-h-screen">
      <FlyingButterfliesLayer />
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
