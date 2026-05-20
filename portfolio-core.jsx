// portfolio.jsx — main app for Lin Nora's UX portfolio
const { useState, useEffect, useRef, useMemo, useCallback, useLayoutEffect } = React;

// ────────────────────────────────────────────────────────────────────────────
// DATA
// ────────────────────────────────────────────────────────────────────────────
const ROTATOR_WORDS = ["Interaction", "Strategic", "Product", "Innovative", "Human-Centered", "AI", "Multidisciplinary"];

const SECTIONS = [
  {
    id: "ux",
    label: "UX Design",
    projects: [
      { num: "01", title: "Volunteering, my way", line: "Redefining how young people connect with volunteering.", collab: "Red Cross", year: "2024", tag: "UX research", href: "volunteering.html", cardVideo: "Voulenteering%20my%20way%20photos/My%20way%20project%20card%20video.mov" },
      { num: "02", title: "More Than a Trip", line: "Exploring how to motivate eco-conscious travel through personal incentives.", collab: "Entur", year: "2024", tag: "Service design", href: "project.html", cardVideo: "Entur%20project%20page%20photos/Entur%20project%20card%20video.mov" },
      { num: "03", title: "EVA — Emotional Vehicle Assistant", line: "Designing AI for human-centered mobility.", collab: "HUF", year: "2025", tag: "AI / HMI", href: "eva.html", cardVideo: "EVA%20photos/Project%20card%20video.mov", cardLogo: "EVA%20photos/huf_logo_card.svg" },
      { num: "04", title: "Tøyen Takt", line: "Turning a building without an identity into a neighbourhood's reason to come back.", collab: "AHO", year: "2023", tag: "Service Design", href: "toyen-takt.html", cardVideo: "T%C3%B8yen%20takt%20photos/T%C3%B8yen%20takt%20project%20card%20video.mov" },
      { num: "05", title: "Worth it?", line: "Data as a design material for digital services.", collab: "Æra", year: "2023", tag: "Speculative", href: "worth-it.html", cardVideo: "Worth%20it%20photos/Worth%20it%20project%20card%20video.mov" },
    ],
  },
  {
    id: "hacks",
    label: "Hackathons",
    projects: [
      { num: "01", title: "Togather", line: "Relationship-first calendar.", collab: "Royal Hacks", year: "2026", tag: "Calendar", href: "togather.html", cardVideo: "Togather%20photos/pROHECT%20CARD.mov" },
      // Carbon — coming soon

      { num: "03", title: "Teddy", line: "Step-by-step travel companion helping neurodivergent travelers navigate overwhelming journeys.", collab: "Disability Tech", year: "2026", tag: "Accessibility", href: "teddy.html", cardImg: "Teddy%20photos/Teddy%20project%20card.svg" },
      { num: "04", title: "Local", line: "Helping global marketing teams adapt campaigns across markets — AI that supports rather than replaces.", collab: "CBS AI Academy", year: "2026", tag: "AI tools", href: "local.html", cardVideo: "Local%20photos/project%20card.mov" },
    ],
  },
];

const SKILLS = [
  { group: "i", label: "Depth", color: "#6B9FD4", items: ["Future scenario building", "UI regulations (WCAG)", "Drawing", "Qual + quant user research", "Design systems", "Information architecture", "Figma", "Digital prototyping", "Storytelling"] },
  { group: "t", label: "Collaborative", color: "#C8873A", items: ["Co-creation", "Teaching design", "Interdisciplinary collaboration", "Project management", "Workshop design", "Design thinking"] },
  { group: "x", label: "Cross-disciplinary", color: "#7AB87A", items: ["Future scenario building", "System oriented design", "Product service system design", "Pitchdecking", "Storytelling"] },
  { group: "tools", label: "Programs", color: "var(--muted)", items: ["Figma", "Miro", "Notion", "Cursor", "Claude Code", "Lovable"] },
];

// ────────────────────────────────────────────────────────────────────────────
// CUSTOM CURSOR — follower + magnetic + project-hover "See project" pill
// ────────────────────────────────────────────────────────────────────────────
function Cursor({ mode, label }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });

  useEffect(() => {
    const onMove = (e) => { target.current.x = e.clientX; target.current.y = e.clientY; };
    window.addEventListener("mousemove", onMove);
    let raf;
    const tick = () => {
      ring.current.x += (target.current.x - ring.current.x) * 0.18;
      ring.current.y += (target.current.y - ring.current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ring.current.x}px, ${ring.current.y}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { window.removeEventListener("mousemove", onMove); cancelAnimationFrame(raf); };
  }, []);

  const isProject = mode === "project";
  const isLink = mode === "link";

  return (
    <>
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 9998,
          width: isProject ? 132 : (isLink ? 56 : 36),
          height: isProject ? 44 : (isLink ? 56 : 36),
          marginLeft: isProject ? -66 : (isLink ? -28 : -18),
          marginTop:  isProject ? -22 : (isLink ? -28 : -18),
          borderRadius: isProject ? 999 : "50%",
          border: isProject ? "none" : "1px solid var(--ink)",
          background: isProject ? "var(--ink)" : "transparent",
          color: "var(--bg)",
          pointerEvents: "none",
          transition: "width .25s cubic-bezier(.2,.8,.2,1), height .25s cubic-bezier(.2,.8,.2,1), border-radius .25s, background .25s, margin .25s",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: ".02em",
          mixBlendMode: isProject ? "normal" : "difference",
          willChange: "transform",
        }}
      >
        {isProject && (
          <span style={{ display:"inline-flex", alignItems:"center", gap:8 }}>
            {label || "See project"}
            <span style={{ display:"inline-block", transform:"translateY(-1px)" }}>→</span>
          </span>
        )}
      </div>
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 9999,
          width: 5, height: 5, marginLeft: -2.5, marginTop: -2.5,
          borderRadius: "50%", background: "var(--ink)",
          pointerEvents: "none", mixBlendMode: "difference",
          opacity: isProject ? 0 : 1, transition: "opacity .2s",
          willChange: "transform",
        }}
      />
    </>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// MAGNETIC button — subtle pull toward cursor
// ────────────────────────────────────────────────────────────────────────────
function Magnetic({ children, strength = 0.35, className, style, onMouseEnter, onMouseLeave, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - (r.left + r.width / 2);
      const y = e.clientY - (r.top + r.height / 2);
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const leave = () => { el.style.transform = "translate(0,0)"; };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => { el.removeEventListener("mousemove", move); el.removeEventListener("mouseleave", leave); };
  }, [strength]);
  return (
    <span ref={ref} className={className} style={{ display:"inline-block", transition:"transform .25s cubic-bezier(.2,.8,.2,1)", ...style }} {...rest}>
      {children}
    </span>
  );
}

// ────────────────────────────────────────────────────────────────────────────
// TYPEWRITER ROTATOR
// ────────────────────────────────────────────────────────────────────────────
function Typewriter({ words }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing"); // typing | hold | deleting

  useEffect(() => {
    const word = words[idx];
    let t;
    if (phase === "typing") {
      if (text.length < word.length) {
        t = setTimeout(() => setText(word.slice(0, text.length + 1)), 70 + Math.random() * 40);
      } else {
        t = setTimeout(() => setPhase("hold"), 1400);
      }
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("deleting"), 600);
    } else {
      if (text.length > 0) {
        t = setTimeout(() => setText(word.slice(0, text.length - 1)), 35);
      } else {
        setPhase("typing");
        setIdx((i) => (i + 1) % words.length);
      }
    }
    return () => clearTimeout(t);
  }, [text, phase, idx, words]);

  return (
    <span style={{ position: "relative", whiteSpace: "nowrap" }}>
      <span>{text}</span>
      <span style={{
        display: "inline-block", width: 3, height: "0.85em",
        background: "var(--ink)", marginLeft: 4, transform: "translateY(2px)",
        animation: "blink 1s steps(2) infinite",
      }} />
    </span>
  );
}

// keyframes injected once
const KEYFRAMES = `
  @keyframes blink { 0%,49%{opacity:1} 50%,100%{opacity:0} }
  @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  @keyframes cardEnter {
    from { transform: scale(0.88) translateY(20px); opacity: 0; }
    to   { transform: scale(1)    translateY(0px);  opacity: 1; }
  }
  /* .rise intentionally a no-op in canvas mode — animations stutter inside the
     pan/zoom transform context */
  .rise { opacity: 1; }
  .dots-bg {
    background-image: radial-gradient(circle, var(--dashed) 1px, transparent 1px);
    background-size: 14px 14px;
  }
`;

// ────────────────────────────────────────────────────────────────────────────
// CARD ROULETTE — shared across all project pages
// Ghost cards peek behind with slight rotation; clicking throws the top card
// off to the right while the next one rises up from the stack.
// ────────────────────────────────────────────────────────────────────────────
function CardRoulette({ items }) {
  const [displayIdx, setDisplayIdx] = React.useState(0);
  const [animKey,    setAnimKey]    = React.useState(0);
  const [exiting,    setExiting]    = React.useState(false);
  const locked = React.useRef(false);
  const CHECKER = "repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 20px 20px";

  if (!items || items.length === 0)
    return <div style={{ width:"100%", aspectRatio:"442/267", background:CHECKER, borderRadius:14 }} />;

  const count   = items.length;
  const isVideo = (s) => /\.(mov|mp4|webm)$/i.test(s);
  const src     = items[displayIdx];

  const advance = () => {
    if (locked.current || count <= 1) return;
    locked.current = true;
    setExiting(true);
    setTimeout(() => {
      setDisplayIdx(i => (i + 1) % count);
      setAnimKey(k => k + 1);
      setExiting(false);
      locked.current = false;
    }, 230);
  };

  const exitStyle = exiting ? {
    transform:  "translateX(115%) rotate(12deg)",
    opacity:    0,
    transition: "transform 0.23s cubic-bezier(0.4,0,1,1), opacity 0.18s ease-out",
    animation:  "none",
    pointerEvents: "none",
  } : {};

  return (
    <div onClick={advance} style={{ position:"relative", cursor: count>1 ? "pointer" : "default" }}>

      {/* ── ghost card 3 (furthest back) */}
      {count > 2 && (
        <div style={{
          position:"absolute", inset:0, zIndex:1,
          borderRadius:14, background:"#E2DED6",
          boxShadow:"0 2px 10px rgba(0,0,0,0.07)",
          transform:"rotate(5deg) scale(0.93) translateY(5px)",
        }} />
      )}

      {/* ── ghost card 2 */}
      {count > 1 && (
        <div style={{
          position:"absolute", inset:0, zIndex:2,
          borderRadius:14, background:"#EDEAE3",
          boxShadow:"0 2px 10px rgba(0,0,0,0.05)",
          transform:"rotate(2.5deg) scale(0.97) translateY(2px)",
        }} />
      )}

      {/* ── main card */}
      <div
        key={animKey}
        style={{
          position:"relative", zIndex:3,
          width:"100%", aspectRatio:"442/267",
          borderRadius:14, overflow:"hidden",
          boxShadow:"0 6px 24px rgba(0,0,0,0.11)",
          willChange:"transform, opacity",
          animation: animKey > 0 ? "cardEnter 0.33s cubic-bezier(0.2,0.8,0.2,1) both" : "none",
          ...exitStyle,
        }}
      >
        {isVideo(src)
          ? <video src={src} autoPlay loop muted playsInline
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
          : <img src={src} alt=""
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }} />
        }
        {count > 1 && (
          <div style={{ position:"absolute", bottom:10, left:0, right:0, display:"flex", justifyContent:"center", gap:6 }}>
            {items.map((_, i) => (
              <div key={i} style={{
                width:6, height:6, borderRadius:"50%",
                background: i===displayIdx ? "white" : "rgba(255,255,255,0.45)",
                transition:"background 0.2s",
              }} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { Cursor, Magnetic, Typewriter, KEYFRAMES, ROTATOR_WORDS, SECTIONS, SKILLS, CardRoulette });

// ── GLOBAL VIDEO OBSERVER ──────────────────────────────────────────────────
// Every <video> on every page: plays only when ≥25% visible, pauses otherwise.
// MutationObserver picks up videos React adds after initial render.
(function () {
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.play().catch(function () {}); }
      else { e.target.pause(); }
    });
  }, { threshold: 0.25 });

  function attach(v) {
    if (!v.dataset.ioAttached) {
      v.dataset.ioAttached = '1';
      io.observe(v);
    }
  }

  var mo = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      m.addedNodes.forEach(function (n) {
        if (n.nodeType !== 1) return;
        if (n.tagName === 'VIDEO') attach(n);
        if (n.querySelectorAll) n.querySelectorAll('video').forEach(attach);
      });
    });
  });

  function init() {
    document.querySelectorAll('video').forEach(attach);
    if (document.body) mo.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
