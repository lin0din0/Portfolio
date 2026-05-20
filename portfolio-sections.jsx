// portfolio-sections.jsx  Hero, Projects, About, Skills, Footer
const { useState: useStateS, useEffect: useEffectS, useRef: useRefS } = React;

// ────────────────────────────────────────────────────────────────────────────
// NAV  minimal: About · Projects · Connect, top right
// ────────────────────────────────────────────────────────────────────────────
function Nav({ onHover }) {
  const link = (href, label) =>
  <a href={href}
  style={{ color: "var(--ink)", textDecoration: "none",
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 14, fontWeight: 400, letterSpacing: "-0.005em" }}>
      {label}
    </a>;

  return (
    <nav style={{
      position: "absolute", top: 0, left: 0, right: 0, zIndex: 50,
      display: "flex", justifyContent: "flex-end", alignItems: "center",
      padding: "36px 64px",
      color: "var(--ink)"
    }}>
      <div style={{ display: "flex", gap: 48 }}>
        {link("index.html#work", "Projects")}
        {link("index.html#contact", "Connect")}
      </div>
    </nav>);

}

// ────────────────────────────────────────────────────────────────────────────
// HERO  small breathable text, portrait box top-right, Selected works pill below
// ────────────────────────────────────────────────────────────────────────────
function Hero({ onHover }) {
  return (
    <section id="top" style={{
      height: "100%", padding: "140px 64px 60px",
      position: "relative", boxSizing: "border-box",
      display: "flex", flexDirection: "column"
    }}>
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 440px",
        gap: 80, alignItems: "center"
      }}>
        {/* LEFT  text block */}
        <div>
          <p style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 400, letterSpacing: "-0.005em",
            color: "var(--ink)"
          }}>Hi</p>

          <p style={{
            margin: "26px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 400, letterSpacing: "-0.005em",
            color: "var(--ink)",
            display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 6
          }}>
            I`m <em style={{ fontStyle: "italic", fontWeight: 400 }}>Lin Nora</em>, a
            <span style={{
              display: "inline-flex", alignItems: "baseline",
              minWidth: 180,
              borderBottom: "1px dotted var(--ink)",
              paddingBottom: 1
            }}>
              <Typewriter words={ROTATOR_WORDS} />
            </span>
            designer
          </p>

          <h1 style={{
            margin: "80px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 300,
            fontSize: 30,
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
            color: "var(--ink)",
            maxWidth: 460
          }}>
            Connecting the dots<br />
            between people & design
          </h1>
        </div>

        {/* RIGHT  connect-the-dots portrait, no box */}
        <div style={{ width: "100%", position: "relative", aspectRatio: "1 / 1" }}>
          <iframe
            src="connect-dots-portrait.html?v=4"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              border: "none", display: "block",
              background: "transparent"
            }}
            scrolling="no"
          />
          {/* Who am i button  coming soon */}
        </div>
      </div>

      {/* "Selected works ↓" pill  bottom left, well below the grid */}
      <div style={{ marginTop: 80 }}>
        <a href="#work"
        onMouseEnter={() => onHover && onHover("link")}
        onMouseLeave={() => onHover && onHover("default")}
        style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          padding: "12px 24px",
          border: "1px dashed var(--ink)",
          borderRadius: 999,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 14, fontWeight: 400, letterSpacing: "-0.005em",
          color: "var(--ink)", textDecoration: "none"
        }}>
          Selected works <span aria-hidden style={{ fontSize: 13 }}>↓</span>
        </a>
      </div>
    </section>);

}

// ────────────────────────────────────────────────────────────────────────────
// PROJECTS  title + intro + centered pill tabs + 2-col clean placeholder grid
// ────────────────────────────────────────────────────────────────────────────
function Projects({ onHover, activeOverride }) {
  const [active, setActive] = useStateS(activeOverride || "ux");
  const current = activeOverride || active;
  const section = SECTIONS.find((s) => s.id === current);

  const TAB_LABELS = { ux: "Ux", strategy: "Strategy & systems", hacks: "Hackatons" };

  return (
    <section id="work" style={{ padding: "140px 64px 100px" }}>
      {/* Header  left aligned */}
      <div style={{ maxWidth: 720 }}>
        <h2 style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 400, fontSize: 44,
          lineHeight: 1.02, letterSpacing: "-0.025em",
          color: "var(--ink)"
        }}>Projects<span style={{ color: "var(--muted)" }}>.</span></h2>
        <p style={{
          margin: "14px 0 0",
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 13, lineHeight: 1.45, letterSpacing: "-0.005em",
          color: "var(--ink)",
          maxWidth: 640
        }}>
          I work multidiciplinary mostly targeting human interacitol work multidisciplinary,
          focusing on human interaction within the evolving world of technology. Let's dive
          in.n with the world of technology, let´s deepdive
        </p>
      </div>

      {/* Centered pill tabs */}
      <div style={{
        display: "flex", justifyContent: "center",
        margin: "80px 0 60px"
      }}>
        <div style={{
          display: "inline-flex", gap: 4,
          padding: 6,
          background: "rgba(14,14,12,0.05)",
          border: "1px solid var(--line-soft)",
          borderRadius: 999
        }}>
          {SECTIONS.map((s) => {
            const on = current === s.id;
            return (
              <button key={s.id}
              onClick={() => !activeOverride && setActive(s.id)}
              style={{
                appearance: "none", border: 0, cursor: "pointer",
                padding: "10px 28px", borderRadius: 999,
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13.5, fontWeight: 400, letterSpacing: "-0.005em",
                background: on ? "var(--ink)" : "transparent",
                color: on ? "var(--bg)" : "var(--ink)",
                transition: "background .25s, color .25s"
              }}>
                {TAB_LABELS[s.id]}
              </button>);

          })}
        </div>
      </div>

      {/* 2-column placeholder grid, max 4 cards */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
        gap: 64, rowGap: 64,
        maxWidth: 1000, margin: "0 auto"
      }}>
        {section.projects.map((p) =>
        <ProjectCard key={p.num} p={p} onHover={onHover} />
        )}
      </div>
    </section>);

}

function ProjectCard({ p, onHover }) {
  const [hov, setHov] = useStateS(false);
  const [pos, setPos] = useStateS({ x: 50, y: 50 });

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({
      x: ((e.clientX - r.left) / r.width) * 100,
      y: ((e.clientY - r.top) / r.height) * 100
    });
  };

  return (
    <a href={p.href || "#"}
    onMouseEnter={() => {setHov(true);onHover && onHover("default");}}
    onMouseLeave={() => {setHov(false);onHover && onHover("default");}}
    style={{
      display: "flex", flexDirection: "column", gap: 22,
      textDecoration: "none", color: "var(--ink)"
    }}>
      {/* Image area */}
      <div
      onMouseMove={onMove}
      style={{
        position: "relative", overflow: "hidden",
        aspectRatio: "1 / 1",
        background: "var(--bg-soft)",
        border: "1px solid var(--line-soft)",
        borderRadius: 22,
        transition: "transform .5s cubic-bezier(.2,.8,.2,1), box-shadow .5s",
        transform: hov ? "translateY(-4px)" : "translateY(0)",
        boxShadow: hov ? "0 24px 60px -30px rgba(14,14,12,0.25)" : "0 0 0 rgba(0,0,0,0)"
      }}>
        {/* project card media */}
        {p.cardVideo && (
          <video src={p.cardVideo} autoPlay loop muted playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        )}
        {p.cardImg && (
          <img src={p.cardImg} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        )}

        {/* subtle warm highlight */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(120% 90% at 80% 20%, rgba(255,255,255,0.5), transparent 60%), radial-gradient(120% 80% at 15% 90%, rgba(14,14,12,0.05), transparent 60%)",
          pointerEvents: "none"
        }} />

        {/* hover veil */}
        <div style={{
          position: "absolute", inset: 0,
          background: "rgba(14,14,12,0.10)",
          opacity: hov ? 1 : 0,
          transition: "opacity .35s",
          pointerEvents: "none"
        }} />

        {/* collab logo  bottom right, sits above media but below pill */}
        {p.cardLogo && (
          <img src={p.cardLogo} alt={p.collab} style={{
            position: "absolute", bottom: 16, right: 16,
            height: 28, width: "auto",
            pointerEvents: "none"
          }} />
        )}

        {/* cursor-following pill */}
        <div style={{
          position: "absolute",
          left: pos.x + "%", top: pos.y + "%",
          transform: "translate(-50%, -50%) scale(" + (hov ? 1 : 0.7) + ")",
          opacity: hov ? 1 : 0,
          transition: "opacity .25s, transform .4s cubic-bezier(.2,.8,.2,1)",
          background: "var(--ink)",
          color: "var(--bg)",
          padding: "12px 22px",
          borderRadius: 999,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 13, fontWeight: 400, letterSpacing: "-0.005em",
          display: "inline-flex", alignItems: "center", gap: 8,
          pointerEvents: "none", whiteSpace: "nowrap",
          willChange: "left, top, transform"
        }}>
          See project <span aria-hidden style={{ fontSize: 12 }}>→</span>
        </div>
      </div>

      {/* Title + subtitle */}
      <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 16 }}>
          <h3 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 19, letterSpacing: "-0.012em",
            color: "var(--ink)"
          }}>{p.title}</h3>
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 11.5, color: "var(--muted)", letterSpacing: "0.02em",
            textTransform: "uppercase", whiteSpace: "nowrap"
          }}>{p.year}</span>
        </div>
        <p style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 13, lineHeight: 1.45, letterSpacing: "-0.005em",
          color: "var(--muted)",
          maxWidth: 380
        }}>{p.line}</p>
      </div>
    </a>);

}

// ────────────────────────────────────────────────────────────────────────────
// ROADMAP NODE  expands on hover with extra description
// ────────────────────────────────────────────────────────────────────────────
function RoadmapNode({ s }) {
  const [hov, setHov] = useStateS(false);
  const expandable = !!s.detail2;
  const expanded = hov && expandable;

  return (
    <div
    onMouseEnter={() => setHov(true)}
    onMouseLeave={() => setHov(false)}
    style={{
      position: "relative",
      flex: expanded ? "4 1 0" : "1 1 0",
      minWidth: 0,
      cursor: expandable ? "pointer" : "default",
      transition: "flex .55s cubic-bezier(.2,.8,.2,1)"
    }}>
      {/* Card background  overlays the line where expanded */}
      <div style={{
        position: "absolute", inset: "-18px -22px",
        background: "var(--bg-soft)",
        border: "1px solid var(--line-soft)",
        borderRadius: 22,
        opacity: expanded ? 1 : 0,
        transition: "opacity .35s ease",
        zIndex: 0, pointerEvents: "none"
      }} />

      <div style={{
        position: "relative", zIndex: 1,
        display: "flex", gap: 28, alignItems: "flex-start"
      }}>
        {/* left col: dot + name + subtitle */}
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center", gap: 14,
          textAlign: "center", flexShrink: 0, width: 170
        }}>
          <span style={{
            display: "block", width: 12, height: 12, borderRadius: "50%",
            background: s.featured ? "var(--ink)" : "var(--muted)",
            border: s.featured ? "none" : "1px solid var(--line-soft)",
            boxShadow: "0 0 0 4px " + (expanded ? "var(--bg-soft)" : "var(--bg)"),
            transition: "box-shadow .35s"
          }} />
          <p style={{
            margin: 0, maxWidth: 180,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12.5, lineHeight: 1.35, letterSpacing: "-0.005em",
            color: "var(--ink)"
          }}>{s.name}</p>
          {s.detail && (
            <p style={{
              margin: 0, maxWidth: 160,
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11, lineHeight: 1.35, color: "var(--muted)"
            }}>{s.detail}</p>
          )}
        </div>

        {/* right col: revealed paragraph */}
        <div style={{
          flex: "1 1 0", overflow: "hidden", minWidth: 0,
          opacity: expanded ? 1 : 0,
          maxHeight: expanded ? 500 : 0,
          transform: expanded ? "translateX(0)" : "translateX(-12px)",
          transition: "opacity .35s .12s ease, transform .5s cubic-bezier(.2,.8,.2,1), max-height .5s"
        }}>
          <p style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12.5, lineHeight: 1.55, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>{s.detail2}</p>
        </div>
      </div>
    </div>);

}

// ────────────────────────────────────────────────────────────────────────────
// ABOUT
// ────────────────────────────────────────────────────────────────────────────
function About({ onHover }) {
  // tonal placeholder background  reused across slots
  const TONAL = {
    background: "var(--bg-soft)",
    border: "1px solid var(--line-soft)"
  };
  const TONAL_LIGHT = {
    position: "absolute", inset: 0,
    background:
      "radial-gradient(120% 90% at 75% 25%, rgba(255,255,255,0.55), transparent 60%), radial-gradient(120% 80% at 15% 90%, rgba(14,14,12,0.05), transparent 60%)",
    pointerEvents: "none"
  };

  const SECTION_H = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 400, fontSize: 30, letterSpacing: "-0.02em",
    color: "var(--ink)"
  };

  return (
    <section id="about" style={{
      padding: "140px 64px 100px", boxSizing: "border-box"
    }}>
      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <div style={{
        display: "grid", gridTemplateColumns: "1fr 360px",
        gap: 80, alignItems: "start"
      }}>
        <div>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 38, letterSpacing: "-0.02em",
            color: "var(--ink)"
          }}>
            Who is <em style={{ fontStyle: "italic", fontWeight: 400 }}>Lin Nora</em>?
          </h1>

          <p style={{
            margin: "80px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 400, lineHeight: 1.5, letterSpacing: "-0.005em",
            color: "var(--ink)", maxWidth: 380,
            display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 6
          }}>
            <span>As a</span>
            <span style={{
              display: "inline-flex", alignItems: "baseline",
              minWidth: 160,
              borderBottom: "1px dotted var(--ink)", paddingBottom: 1
            }}>
              <Typewriter words={["designer", "teammate", "project leader", "dying optimist"]} />
            </span>
          </p>
        </div>

        {/* image roulette slot */}
        <div>
          <div style={{
            ...TONAL, width: "100%", aspectRatio: "1 / 1.1",
            borderRadius: 24, position: "relative", overflow: "hidden",
            display: "flex", alignItems: "center", justifyContent: "center"
          }}>
            <div style={TONAL_LIGHT} />
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13, color: "var(--ink-2)", position: "relative"
            }}>Image roulette</span>
          </div>
          <p style={{
            margin: "16px 0 0", textAlign: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase",
            color: "var(--muted)"
          }}>Some caption to the image</p>
        </div>
      </div>

      {/* ─── DESIGN PHILOSOPHY ────────────────────────────────────────── */}
      <div style={{ marginTop: 200 }}>
        <h2 style={{ ...SECTION_H, textAlign: "center" }}>My design philosophy<span style={{ color: "var(--muted)" }}>....</span></h2>

        <div style={{
          marginTop: 56,
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: 100, alignItems: "center", maxWidth: 1000,
          marginLeft: "auto", marginRight: "auto"
        }}>
          {/* quote with small image */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 18 }}>
            <div style={{
              ...TONAL, width: 110, height: 110, borderRadius: 18,
              position: "relative", overflow: "hidden",
              display: "flex", alignItems: "center", justifyContent: "center"
            }}>
              <div style={TONAL_LIGHT} />
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif", fontWeight: 500,
                fontSize: 11, color: "var(--ink-2)", position: "relative"
              }}>Image</span>
            </div>
            <blockquote style={{
              margin: 0, textAlign: "center", maxWidth: 380,
              fontFamily: "Georgia, serif", fontStyle: "italic",
              fontSize: 15, lineHeight: 1.5, color: "var(--ink-2)"
            }}>
              "Design is the human capacity for shaping and making in ways that
              satisfy our utilitarian needs and create meaning."
              <span style={{
                display: "block", marginTop: 8,
                fontFamily: "'Hanken Grotesk', sans-serif", fontStyle: "normal",
                fontSize: 12, color: "var(--muted)"
              }}> John Heskett</span>
            </blockquote>
          </div>

          {/* statement of belief */}
          <div style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13.5, lineHeight: 1.6, letterSpacing: "-0.005em",
            color: "var(--ink-2)", maxWidth: 440
          }}>
            <p style={{ margin: 0 }}>
              I believe design is a powerful tool for positive change. My design philosophy
              centers on the belief that meaningful solutions emerge from deep empathy,
              collaborative processes, and strategic thinking. I'm passionate about creating
              experiences that not only solve problems but inspire positive behavior change.
            </p>
          </div>
        </div>
      </div>

      {/* ─── ROADMAP ──────────────────────────────────────────────────── */}
      <div style={{ marginTop: 200 }}>
        <h2 style={SECTION_H}>My roadmap<span style={{ color: "var(--muted)" }}>.</span></h2>

        {/* horizontal timeline */}
        {/* horizontal timeline  items expand on hover */}
        <div style={{ marginTop: 80, position: "relative", paddingTop: 24 }}>
          {/* the line  sits behind cards */}
          <div style={{
            position: "absolute", left: "4%", right: "4%", top: 32,
            height: 1, background: "var(--line-soft)", zIndex: 0
          }} />
          <div style={{
            display: "flex", gap: 16, alignItems: "flex-start", position: "relative"
          }}>
            {[
              {
                name: "The Royal Danish Academy × Copenhagen Business School",
                detail: "Strategic Design & Entrepreneurship",
                featured: true,
                detail2:
                  "I'm currently part of a joint exchange program between The Royal Danish Academy and Copenhagen Business School focused on strategic design and entrepreneurship. Here, my focus has expanded beyond products and services into organizational structures, business models, innovation strategy, and stakeholder collaboration. One of the ongoing projects involves working with Rigshospitalet on how innovation can become a fourth core task within healthcare systems. Project page coming soon."
              },
              {
                name: "Tongji University",
                detail2:
                  "Exchange semester at Tongji in Shanghai  design across cultures, materials, and ways of working. Add more context here."
              },
              {
                name: "SAHO",
                detail2:
                  "A short note on what SAHO contributed to my path. Edit this paragraph with the real story."
              },
              {
                name: "The Oslo School of Architecture and Design",
                detail2:
                  "Foundational years exploring how spatial thinking, prototyping and systems shape design practice. Edit me."
              },
              {
                name: "Edvard Munch VGS",
                detail2:
                  "Where curiosity in design first took shape  visual arts, music, and a love for making. Edit me."
              }
            ].map((s, i) => <RoadmapNode key={i} s={s} />)}
          </div>
        </div>

        {/* paragraph below */}
        <div style={{ marginTop: 80, maxWidth: 760 }}>
          <p style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 14, fontWeight: 500, letterSpacing: "-0.005em",
            color: "var(--ink)"
          }}>Designing Between People, Systems, and Technology</p>
          <p style={{
            margin: "4px 0 0",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase",
            color: "var(--muted)"
          }}>2019 Present</p>
          <p style={{
            margin: "18px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13.5, lineHeight: 1.6, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>
            I've always been drawn to detail, collaboration, and creative expression.
            Before design, that world was music  I played violin for most of my life.
            Over time, that same mindset naturally shifted into design: understanding rhythm,
            structure, emotion, and how people experience something together. What started as
            curiosity in high school slowly became a clear direction  and since then, I've been
            exploring how design can create meaningful value between humans, technology, and society.
          </p>
        </div>
      </div>

      {/* ─── WHAT'S AHEAD ─────────────────────────────────────────────── */}
      <div style={{
        marginTop: 200,
        display: "grid", gridTemplateColumns: "1fr 1fr",
        gap: 80, alignItems: "center"
      }}>
        <div>
          <h2 style={SECTION_H}>What´s ahead<span style={{ color: "var(--muted)" }}>?</span></h2>
          <p style={{
            margin: "22px 0 0", maxWidth: 380,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13.5, lineHeight: 1.6, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>
            Open to roles where design touches strategy, AI, and the public good 
            and to side-projects that don't take themselves too seriously.
          </p>
        </div>
        <div style={{
          ...TONAL, width: "100%", aspectRatio: "5 / 4",
          borderRadius: 24, position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center", justifyContent: "center"
        }}>
          <div style={TONAL_LIGHT} />
          <span style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11,
            letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--muted)",
            position: "relative"
          }}>Image · what's next</span>
        </div>
      </div>

      {/* ─── LET'S CONNECT ────────────────────────────────────────────── */}
      <div style={{ marginTop: 200 }}>
        <h2 style={SECTION_H}>Let´s connect<span style={{ color: "var(--muted)" }}>.</span></h2>

        <div style={{
          marginTop: 56,
          display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
          gap: 24, maxWidth: 980
        }}>
          {[
            { label: "Email", caption: "linnoratollefsen@gmail.com", href: "mailto:linnoratollefsen@gmail.com" },
            { label: "LinkedIn", caption: "/in/linnoratollefsen", href: "https://www.linkedin.com/in/linnoratollefsen" },
            { label: "GitHub", caption: "lin0din0", href: "https://github.com/lin0din0" },
          ].map((c, i) => (
            <a key={i} href={c.href} target="_blank" rel="noopener noreferrer"
            style={{
              ...TONAL, display: "block", width: "100%", aspectRatio: "5 / 4",
              borderRadius: 18, position: "relative", overflow: "hidden",
              textDecoration: "none", color: "var(--ink)",
              transition: "transform .4s cubic-bezier(.2,.8,.2,1), box-shadow .4s"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 20px 50px -28px rgba(14,14,12,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}>
              <div style={TONAL_LIGHT} />
              <div style={{
                position: "absolute", left: 18, top: 18,
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
                letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--muted)"
              }}>0{i + 1}</div>
              <div style={{
                position: "absolute", left: 18, bottom: 18, right: 18
              }}>
                <p style={{
                  margin: 0,
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 16, fontWeight: 400, letterSpacing: "-0.01em",
                  color: "var(--ink)"
                }}>{c.label}</p>
                <p style={{
                  margin: "4px 0 0",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 12, color: "var(--muted)", letterSpacing: "-0.005em"
                }}>{c.caption}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>);

}

// ────────────────────────────────────────────────────────────────────────────
// TOOLKIT  "My toolbox" + intro + one large interactive illustration slot
// ────────────────────────────────────────────────────────────────────────────
function Skills({ onHover }) {
  return (
    <section id="skills" style={{ padding: "140px 64px 100px", height: "100%", boxSizing: "border-box" }}>
      <div style={{ maxWidth: 720 }}>
        <h2 style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 400, fontSize: 44,
          lineHeight: 1.02, letterSpacing: "-0.025em",
          color: "var(--ink)"
        }}>My toolbox<span style={{ color: "var(--muted)" }}>.</span></h2>
        <p style={{
          margin: "14px 0 0",
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontSize: 13, lineHeight: 1.45, letterSpacing: "-0.005em",
          color: "var(--ink)"
        }}>
          My role is identifying what needs to be created, these are the tools I use to build it
        </p>
      </div>

      {/* Big interactive illustration placeholder */}
      <div style={{
        margin: "100px auto 0",
        maxWidth: 1000,
        aspectRatio: "16 / 10",
        background: "var(--bg-soft)",
        border: "1px solid var(--line-soft)",
        borderRadius: 18,
        position: "relative",
        overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center"
      }}>
        {/* subtle warm light */}
        <div style={{
          position: "absolute", inset: 0,
          background:
            "radial-gradient(80% 60% at 50% 30%, rgba(255,255,255,0.5), transparent 60%), radial-gradient(60% 60% at 30% 90%, rgba(14,14,12,0.05), transparent 60%)",
          pointerEvents: "none"
        }} />
        {/* corner ticks */}
        <span style={{ position: "absolute", top: 18, left: 18, width: 10, height: 10, borderTop: "1px solid var(--line-soft)", borderLeft: "1px solid var(--line-soft)" }} />
        <span style={{ position: "absolute", top: 18, right: 18, width: 10, height: 10, borderTop: "1px solid var(--line-soft)", borderRight: "1px solid var(--line-soft)" }} />
        <span style={{ position: "absolute", bottom: 18, left: 18, width: 10, height: 10, borderBottom: "1px solid var(--line-soft)", borderLeft: "1px solid var(--line-soft)" }} />
        <span style={{ position: "absolute", bottom: 18, right: 18, width: 10, height: 10, borderBottom: "1px solid var(--line-soft)", borderRight: "1px solid var(--line-soft)" }} />
        <span style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 11, color: "var(--muted)",
          letterSpacing: "0.08em", textTransform: "uppercase",
          position: "relative"
        }}>
          Interactive toolkit illustration · coming later
        </span>
      </div>

      {/* Skill groups */}
      <div style={{ marginTop: 72, display: "flex", flexDirection: "column", gap: 40, maxWidth: 1000, marginLeft: "auto", marginRight: "auto" }}>
        {SKILLS.map((g) => (
          <div key={g.group} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 24, alignItems: "start" }}>
            <div style={{ paddingTop: 6 }}>
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: g.group === "tools" ? 13 : 28,
                fontWeight: 400,
                letterSpacing: g.group === "tools" ? "-0.005em" : "-0.02em",
                color: g.color,
                display: "block", lineHeight: 1
              }}>{g.group}</span>
              <span style={{
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 11, color: "var(--muted)", letterSpacing: "0.05em",
                textTransform: "uppercase", display: "block", marginTop: 4
              }}>{g.label}</span>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {g.items.map((it) => (
                <span key={it} style={{
                  padding: "7px 14px", borderRadius: 999,
                  border: "1px solid var(--line-soft)",
                  fontFamily: "'Hanken Grotesk', sans-serif",
                  fontSize: 12, color: "var(--ink-2)", letterSpacing: "-0.005em",
                  background: "var(--bg)"
                }}>{it}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>);

}

// ────────────────────────────────────────────────────────────────────────────
// FOOTER / CONNECT
// ────────────────────────────────────────────────────────────────────────────
function Footer({ onHover }) {
  const socials = [
  { label: "LinkedIn", href: "#" },
  { label: "Read.cv", href: "#" },
  { label: "Instagram", href: "#" }];

  return (
    <section id="contact" style={{
      padding: "140px 64px 60px", height: "100%", boxSizing: "border-box",
      display: "flex", flexDirection: "column", justifyContent: "space-between"
    }}>
      <div>
        <h2 style={{
          margin: 0,
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 400, fontSize: 44,
          lineHeight: 1.02, letterSpacing: "-0.025em"
        }}>
          Connect<span style={{ color: "var(--muted)" }}>.</span>
        </h2>
      </div>

      <div style={{ marginTop: 80 }}>
        <a href="mailto:hello@linnora.design"
        onMouseEnter={() => onHover && onHover("link")}
        onMouseLeave={() => onHover && onHover("default")}
        style={{
          color: "var(--ink)", textDecoration: "none",
          fontFamily: "'Hanken Grotesk', sans-serif",
          fontWeight: 300, fontSize: 56, letterSpacing: "-0.025em",
          borderBottom: "1px solid var(--ink)", paddingBottom: 6
        }}>linnoratollefsen@gmail.com

        </a>
      </div>

      <div style={{
        marginTop: 80,
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        gap: 32, flexWrap: "wrap"
      }}>
        <div style={{ display: "flex", gap: 28 }}>
          {socials.map((s) =>
          <a key={s.label} href={s.href}
          style={{
            color: "var(--ink)", textDecoration: "none",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13, fontWeight: 400, letterSpacing: "-0.005em",
            display: "inline-flex", alignItems: "center", gap: 6
          }}>
              {s.label} <span style={{ opacity: .5 }}></span>
            </a>
          )}
        </div>
        <span style={{
          fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
          letterSpacing: "0.08em", textTransform: "uppercase",
          color: "var(--muted)"
        }}>© 2026 Lin Nora · Oslo</span>
      </div>
    </section>);

}

Object.assign(window, { Nav, Hero, Projects, About, Skills, Footer });