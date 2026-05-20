// portfolio-project-local.jsx, Local project page

function ProjectDetailLocal() {
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
  const CHECKER = "repeating-conic-gradient(#E6E3DC 0deg 90deg, #F0EEE8 90deg 180deg) 0 0 / 20px 20px";

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

        {/* ─── HERO IMAGE ─────────────────────────────────────────────── */}
        <div style={{ width: "100%", borderRadius: 4, overflow: "hidden" }}>
          <img src="Local%20photos/Title.svg" alt="Local hero"
            style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 88, lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Local</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>An AI powered campaign localisation platform that keeps humans in the loop at every decision point.</p>
        </div>

        {/* ─── META ROW ───────────────────────────────────────────────── */}
        <div style={{
          marginTop: 80,
          display: "grid", gridTemplateColumns: "200px 1fr auto",
          alignItems: "center", gap: 40
        }}>
          <span />
          <span style={{
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 13, color: "var(--ink)", letterSpacing: "-0.005em"
          }}>4 week programme, MVP competition</span>
          <span style={{
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid var(--ink)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
            whiteSpace: "nowrap"
          }}>AI Product Design / UX Design</span>
        </div>

        {/* ─── OVERVIEW + SIDEBAR NAV ─────────────────────────────────── */}
        <div style={{
          marginTop: 36,
          display: "grid", gridTemplateColumns: "200px 1fr",
          gap: 40, alignItems: "start"
        }}>
          <nav style={{
            position: "sticky", top: 32,
            display: "flex", flexDirection: "column", gap: 24, paddingTop: 4
          }}>
            {[
              ["#overview", "TLTR"],
              ["#delivery", "Delivery"],
              ["#role", "My role"],
              ["#process", "Design process"],
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
              <p style={{ ...BODY, marginTop: 14, maxWidth: 640 }}>
                VML MAP runs over 120,000 campaigns per year across 150 or more markets. Their challenge was direct: branded content generation at scale is broken. Local teams drift from global guidelines without guardrails. Decision making relies on gut feeling rather than data. And localising campaigns manually at scale is slow and resource heavy. We were asked to design a solution.
              </p>
              <div style={{ marginTop: 36, borderRadius: 4, overflow: "hidden" }}>
                <img src="Local%20photos/Overview.svg" alt="Local overview"
                  style={{ width: "100%", display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                Local is an AI powered campaign localisation platform. A marketer inputs a brief and target segment, the system generates culturally adapted visual variants, the marketer reviews and approves or refines, and approved assets feed back into the system's memory. The core design principle was that keeping humans in the loop is not a feature. It is the entire value proposition. AI proposes. Humans decide. The MVP was built in four weeks using Lovable, n8n, Claude, and DALL-E 3, with Airtable as the data layer.
              </p>
            </section>
          </div>
        </div>

        {/* ─── MY ROLE ────────────────────────────────────────────────── */}
        <section id="role" style={{ marginTop: 120 }}>
          <h2 style={{ ...H_SECTION, textAlign: "center" }}>My role in this project</h2>
          <div style={{
            marginTop: 32,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20
          }}>
            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 14,
              minHeight: 220, position: "relative", overflow: "hidden"
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", maxWidth: 200 }}>
                UX and Communication Lead
              </span>
              <img src="Lin%20DOTTED%201.svg" alt="" style={{
                position: "absolute", right: 0, bottom: 0, height: "80%", width: "auto",
                objectFit: "contain", objectPosition: "bottom right"
              }} />
            </div>

            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 16, minHeight: 220
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Responsibilities included:</span>
              <p style={{ ...BODY, fontSize: 13 }}>
                UX design and user flow architecture, interface design across all key screens, design system and visual language, Figma prototyping, user flow documentation using Mermaid diagrams, pitch communication and presentation design
              </p>
            </div>

            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 12, minHeight: 220
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Team members</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 4 }}>
                {[
                  ["Lin Nora Tollefsen", "UX & Communication Lead"],
                  ["Paul Eichmann", "Business"],
                  ["Benjamin Southern", "Marketing"],
                  ["Ignacio José Dávila", "Business"],
                  ["Adam Bączek", "Backend / n8n"],
                  ["Lucas Bjerre", "Communication"],
                ].map(([name, role]) => (
                  <div key={name} style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4 }}>
                    <span>{name}</span><span>{role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── DESIGN PROCESS ─────────────────────────────────────────── */}
        <section id="process" style={{ marginTop: 120 }}>
          <h2 style={{ ...H_SECTION, textAlign: "center" }}>Design process</h2>
          <p style={{
            ...BODY, marginTop: 18,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto", textAlign: "center"
          }}>
            Four workshops at CBS AI Academy, moving from AI foundations through agentic AI to business value, before the final MVP competition on 6 May. The design process ran in parallel with the technical build, with UX informing what was buildable and technical constraints shaping where the design had to flex.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover",
                body: "We started from a real pain point. A teammate working inside a global marketing team walked us through what the day actually looks like: briefing agencies across multiple markets, reformatting the same core campaign assets, and chasing approvals on variants that are mostly identical except for language and local context. Desktop research confirmed this was not a one company problem. We explored three areas where the friction was highest: the cost of local adaptation at scale, the loss of brand consistency when global guardrails are interpreted rather than enforced, and the gap between what marketers know works and what AI tools currently let them control.",
                items: ["Local%20photos/Discover1.svg", "Local%20photos/Discover2.svg", "Local%20photos/Discover3.svg"]
              },
              {
                num: "2", title: "Define",
                body: "Three principles shaped every decision. Transparency: the AI should always show its reasoning so the marketer can evaluate output with confidence rather than just accept or reject it. Guardrails before generation: brand constraints are set upfront using a traffic cone metaphor, where the cone defines the space the AI is allowed to work within, making it feel like creative enablement rather than restriction. Memory: every approved asset feeds back into the library so the platform learns what works per market over time. Most importantly, the human stays in control at every step. The tool is designed to augment judgment, not replace it.",
                items: ["Local%20photos/define4.svg"]
              },
              {
                num: "3", title: "Deliver",
                body: "We built a clean dashboard focused on the essential marketer workflow, integrating AI only where it adds real value in the repetitive and automatable parts. Brief input and brand guardrails stay human. Generation, formatting, and variant production is where AI takes over, with the marketing team keeping full visibility and approval rights throughout. The MVP ran on an n8n backend with AI image generation through our inputted brand guardrails. The full end to end flow ran live at the final: brief input, variant generation with visible AI reasoning, human review and approval, and asset storage in the memory library. The AI reasoning cards were the strongest feature in the room, making the distinction between a tool that replaces judgment and one that augments it clearly visible to every judge.",
                items: ["Local%20photos/Deliver1.mov", "Local%20photos/Deliver2.mov", "Local%20photos/Deliver3.mov"]
              }
            ].map((step) => (
              <div key={step.num} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "start"
              }}>
                <div>
                  <h3 style={{
                    margin: 0, fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 14, fontWeight: 500, letterSpacing: "-0.005em", color: "var(--ink)"
                  }}>{step.num}: {step.title}</h3>
                  <p style={{ ...BODY, marginTop: 12, fontSize: 13 }}>{step.body}</p>
                </div>
                <CardRoulette items={step.items} />
              </div>
            ))}
          </div>
        </section>

        {/* ─── OUTCOME & REFLECTION ───────────────────────────────────── */}
        <section id="outcome" style={{ marginTop: 120 }}>
          <h2 style={{ ...H_SECTION, textAlign: "center" }}>Outcome &amp; reflection</h2>
          <p style={{
            ...BODY, marginTop: 18,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto"
          }}>
            Local showed that the most important design question in AI product design is not what the AI can do, but where and how the human remains in control. The traffic cone metaphor for brand guardrails was the clearest single visual in the whole product, because it communicated constraint as creative enablement rather than restriction.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto"
          }}>
            The next steps would be deepening the feedback loop from approve and reject decisions back into the generation logic, and exploring how the memory library could surface pattern level insights across markets rather than just individual approved assets.
          </p>
          <div style={{
            marginTop: 36, width: "80%", maxWidth: 720, aspectRatio: "16 / 8",
            marginLeft: "auto", marginRight: "auto",
            background: CHECKER, borderRadius: 18
          }} />
        </section>

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

Object.assign(window, { ProjectDetailLocal });
