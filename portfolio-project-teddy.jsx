// portfolio-project-teddy.jsx, Teddy project page

function ProjectDetailTeddy() {
  const H_SECTION = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontWeight: 400, fontSize: 22, letterSpacing: "-0.01em",
    color: "var(--ink)"
  };
  const BODY = {
    margin: 0,
    fontFamily: "'Hanken Grotesk', sans-serif",
    fontSize: 13, lineHeight: 1.5, letterSpacing: "-0.005em",
    color: "var(--ink-2)"
  };

  return (
    <div className="pf-artboard" data-bg="warm" style={{
      width: "100%", height: "100%",
      fontFamily: "'Hanken Grotesk', sans-serif",
      color: "var(--ink)", position: "relative"
    }}>
      <Nav />

      <a href="index.html#work" aria-label="Back to projects" style={{
        position: "absolute", top: 36, left: 64, zIndex: 60,
        width: 46, height: 46, borderRadius: "50%",
        border: "1px solid var(--line-soft)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        color: "var(--ink)", textDecoration: "none",
        fontSize: 16, lineHeight: 1, background: "var(--bg)"
      }}>←</a>

      <div style={{ padding: "120px 64px 100px", maxWidth: 1180, margin: "0 auto" }}>

        {/* ─── UNDER CONSTRUCTION BANNER ──────────────────────────────── */}
        <div style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          padding: "8px 16px", borderRadius: 999,
          border: "1px solid var(--line-soft)",
          background: "var(--bg-soft)",
          marginBottom: 40
        }}>
          <span style={{ fontSize: 14 }}>🚧</span>
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12, letterSpacing: "-0.005em", color: "var(--ink-2)"
          }}>This page is under construction. Browse the slides in the meantime ;)</span>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 88, lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Teddy</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>Step-by-step travel companion helping neurodivergent travellers navigate overwhelming journeys.</p>
        </div>

        {/* ─── META ROW ───────────────────────────────────────────────── */}
        <div style={{
          marginTop: 48,
          display: "grid", gridTemplateColumns: "200px 1fr auto",
          alignItems: "center", gap: 40
        }}>
          <span />
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13, color: "var(--ink)", letterSpacing: "-0.005em"
          }}>Disability Tech Hackathon, 2026</span>
          <span style={{
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid var(--ink)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
            whiteSpace: "nowrap"
          }}>UX Design / Inclusive Design</span>
        </div>

        {/* ─── FIGMA EMBED ────────────────────────────────────────────── */}
        <div style={{
          marginTop: 56,
          width: "100%",
          borderRadius: 14,
          overflow: "hidden",
          border: "1px solid var(--line-soft)",
          background: "#F0EEE8",
          aspectRatio: "16 / 9"
        }}>
          <iframe
            src="https://embed.figma.com/proto/ZgoTc69K15AAsvH1XDAYRW/Teddy?node-id=134-700&page-id=0%3A1&starting-point-node-id=134%3A700&scaling=contain&content-scaling=fixed&embed-host=share"
            style={{ border: "none", width: "100%", height: "100%", display: "block" }}
            allowFullScreen
          />
        </div>

        {/* ─── CONDENSED CONTENT ──────────────────────────────────────── */}
        <div style={{
          marginTop: 80,
          display: "grid", gridTemplateColumns: "200px 1fr",
          gap: 40, alignItems: "start"
        }}>
          <nav style={{
            position: "sticky", top: 32,
            display: "flex", flexDirection: "column", gap: 24, paddingTop: 4
          }}>
            {[
              ["#overview", "Overview"],
              ["#process", "Process"],
              ["#outcome", "Outcome"]
            ].map(([href, label]) => (
              <a key={label} href={href} style={{
                display: "inline-flex", alignItems: "center", gap: 10,
                color: "var(--ink)", textDecoration: "none",
                fontFamily: "'Hanken Grotesk', sans-serif",
                fontSize: 13, letterSpacing: "-0.005em"
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: "50%",
                  background: "var(--ink)", flexShrink: 0
                }} />
                {label}
              </a>
            ))}
          </nav>

          <div style={{ display: "flex", flexDirection: "column", gap: 56 }}>

            <section id="overview">
              <h2 style={H_SECTION}>Overview</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 680 }}>
                Airports are one of the most cognitively demanding environments most people regularly navigate. For travellers with ADHD, ADD, or autism, the combination of unpredictable sequences, sensory overload, and fragmented information across five different apps can make the journey feel unmanageable before it has even begun. Teddy is a mobile companion that turns the airport journey into a guided, step-by-step experience. It shows only what the user needs to do right now, reduces interface noise, and works in loud environments without drawing attention.
              </p>
            </section>

            <section id="process">
              <h2 style={H_SECTION}>Process</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 680 }}>
                We started from a single interview with Emma, whose younger sister has ADHD and autism, and mapped where the airport journey breaks down for neurodivergent users. Three things stood out: planning in advance reduces anxiety, cognitive overload is the core barrier not motivation, and assistive tools only get used when they do not draw social attention. From there, we defined the product around three principles: show one step at a time, make the tone warm and companion-like rather than clinical, and use visual and haptic cues that work without headphones. The companion character Teddy guides the user from packing at home through check-in, security, and boarding, framing each stage as something completable rather than chaotic.
              </p>
            </section>

            <section id="outcome">
              <h2 style={H_SECTION}>Outcome</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 680 }}>
                Teddy demonstrated that designing at the edges of cognitive and sensory capacity produces principles that improve the experience for everyone. Showing one thing at a time, building in predictability, and earning trust through tone rather than features are ideas with far wider application than airports. The key open question is how to scale the pre-journey planning feature: the more personalised the checklist, the more useful Teddy becomes, but that depth requires onboarding investment that can itself become a barrier.
              </p>
            </section>

          </div>
        </div>

        {/* ─── BACK TO TOP ─────────────────────────────────────────────── */}
        <div style={{ display: "flex", justifyContent: "center", paddingTop: 80, paddingBottom: 20 }}>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "12px 28px", borderRadius: 999,
              border: "1px solid var(--ink)",
              background: "transparent", cursor: "pointer",
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13, letterSpacing: "-0.005em", color: "var(--ink)"
            }}
          >↑&nbsp;&nbsp;Back to top</button>
        </div>

      </div>
    </div>
  );
}

Object.assign(window, { ProjectDetailTeddy });
