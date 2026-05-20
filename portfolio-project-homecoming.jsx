// portfolio-project-homecoming.jsx, Homecoming e-waste initiative project page

function ProjectDetailHomecoming() {
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
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          background: CHECKER, borderRadius: 4
        }}>
          <div style={{
            position: "absolute", bottom: 22, right: 26,
            display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4
          }}>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 13, fontWeight: 500, letterSpacing: "0.01em",
              color: "var(--ink)"
            }}>PSSD Studio 1</span>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11, color: "var(--ink-2)", letterSpacing: "-0.005em"
            }}>Prof. Avril Accolla</span>
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 88, lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Homecoming</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>A school workshop toolkit designed to build e-waste recycling habits across generations in China.</p>
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
          }}>12 week project</span>
          <span style={{
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid var(--ink)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
            whiteSpace: "nowrap"
          }}>Product Service System Design</span>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
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
                Over 60% of e-waste in China still flows through informal channels. Informal collectors win on convenience, higher cashback, and social familiarity. Government recyclers operate under sustainability rules but lack reach. The result is a landscape where environmental goals, business viability, and user behaviour remain misaligned. The design question was not how to build a better collection app. It was how to shift the cultural norm around what responsible disposal looks like.
              </p>
              <div style={{
                marginTop: 36, width: "100%", aspectRatio: "16 / 8",
                background: CHECKER, borderRadius: 4,
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink-2)" }}>Images</span>
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                The Homecoming Initiative is a school based workshop toolkit that connects primary schools, private recycling companies, and government in a new collaborative structure. Students bring a piece of e-waste as their entry ticket, participate in hands-on disassembly and upcycling using components from real devices, and leave with first-hand knowledge of where responsible recycling leads. The goal is not immediate behaviour change but generational mindset shift: children who experience formal recycling as familiar and meaningful become adults who choose it.
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
                Designer in a team<br />studio project
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
                Ecosystem mapping and stakeholder analysis, ANAs framework development, workshop facilitation, service blueprint design, system design and future vision scenarios, presentation and documentation
              </p>
            </div>

            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 12, minHeight: 220
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Team members</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {[
                  ["Yuqi Zhao", "Designer"],
                  ["Vitaliy Khan", "Designer"],
                  ["Lin Nora Tollefsen", "Designer"]
                ].map(([name, role], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between",
                    fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4
                  }}>
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
            The project moved from understanding a fragmented system, to identifying where design could create new connections within it, to specifying a product service system that introduces new actors and new flows without dismantling what already works.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover",
                body: "We framed the situation through Xiao Li, a 29 year old office worker in Chengdu disposing of an old smartphone. The formal channels are trustworthy but require more steps and pay less. An informal collector rings his doorbell, pays 30% more with no forms, and his phone ends up dismantled with unsafe tools. The hazardous outcome is invisible to him. Key findings: formal recycling collects only around 20% of WEEE in China; it is not profitable without subsidy; and private companies like ATRenew have strong infrastructure but limited market reach."
              },
              {
                num: "2", title: "Define",
                body: "We mapped aspirations, necessities, and abilities across three stakeholder groups using an ANAs framework. Users want trust and convenience but lack awareness and channel knowledge. Government has legislative power and budget but struggles with compliance monitoring and public reach. Companies have logistics and brand power but need consumer trust and cultural legitimacy. The challenge was not to replace any actor but to redesign the relationships between them."
              },
              {
                num: "3", title: "Develop",
                body: "A design workshop surfaced four observations: formal recycling stores are not a common memory; informal repair shops feel deeply familiar; people choose doorstep collection for higher cashback; and people pile up waste without categorising it. Case studies from Patagonia, the WEEE Forum, the E Waste Race, and Beijing MaaS informed the direction: storytelling builds value loyalty, schools scale participation, and government has strong coordinating power when it chooses to use it."
              },
              {
                num: "4", title: "Deliver",
                body: "The Homecoming Initiative connects schools, toolkit manufacturers, and formal recyclers through a workshop programme. Students bring e-waste as their entry ticket, then use components from real disassembled devices to build simple circuits. Around 20 types of phone components can be upcycled into functional units. Participants receive credit in a recycling account, connecting the physical gesture to a digital incentive layer. The service blueprint covers three phases: awareness and registration, the workshop and exhibition, and continued participation."
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
                <div style={{ width: "100%", aspectRatio: "5 / 3", background: CHECKER, borderRadius: 14 }} />
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
            The Homecoming Initiative creates shared value across the system. Formal platforms gain cultural visibility. Schools gain an engaging sustainability curriculum. Government gains a behaviour change lever that does not require enforcement. The future arc runs from a child at a workshop, to a teenager who remembers that experience when their phone breaks, to an adult who brings their own child back.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto"
          }}>
            The most powerful design intervention in a fragmented system is not a better interface. It is a new relationship between actors who have not previously collaborated. What formal recycling lacks in China is not infrastructure but familiarity. Embedding that trust at the level of childhood experience is a longer loop, but it is the one that actually changes the system.
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

Object.assign(window, { ProjectDetailHomecoming });
