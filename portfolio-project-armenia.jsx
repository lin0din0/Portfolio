// portfolio-project-armenia.jsx, Information Integrity in Armenia project page

function ProjectDetailArmenia() {
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
            }}>UNDP</span>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11, color: "var(--ink-2)", letterSpacing: "-0.005em"
            }}>In collaboration with UNDP Global Policy Centre for Governance</span>
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 72, lineHeight: 1,
            letterSpacing: "-0.03em", color: "var(--ink)"
          }}>Information Integrity in Armenia</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>How the lack of information integrity influences the Armenian people and their democratic process.</p>
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
          }}>7 week project</span>
          <span style={{
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid var(--ink)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
            whiteSpace: "nowrap"
          }}>Systems Oriented Design</span>
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
                The brief came from the UNDP Global Policy Centre for Governance. The digital age has made misinformation easier to spread, threatening democracy and social cohesion, especially in vulnerable regions. Most efforts focus on fact checking after damage is already done. Our task was to explore how systemic interventions could create a more resilient information landscape without excessive government control. Armenia was our assigned case, where waves of disinformation tied to political conflict, historical narratives, and external influence have consistently shaped public perception.
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
                We produced a Systems Oriented Design report mapping Armenia's information integrity landscape across present situation, future scenarios, leverage points, and possible interventions. Five leverage areas were identified: involvement, government trust, education, healing, and media regulation. Each was developed into systemic interventions that address both content and structural challenges without overreaching into government control.
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
                System mapping and ZIPP analysis, iceberg model and PESTEL analysis, future scenarios and futures table, leverage point mapping, impact and feasibility evaluation, research synthesis, written report and documentation
              </p>
            </div>

            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 12, minHeight: 220
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Team members</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {[
                  ["Rebekka Fuglestad", "Designer"],
                  ["Georg Ferdinand Nilsen", "Designer"],
                  ["Signe Stålegård", "Designer"],
                  ["Lin Nora Tollefsen", "Designer"],
                  ["Gudrun Hoff Gardå", "Designer"]
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
            The project required us to understand a deeply complex system before identifying where design could meaningfully intervene. We moved through layers of historical context and geopolitical tension, through the present information landscape, into future scenarios, before arriving at leverage points where change was both impactful and feasible.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover",
                body: "Armenia's information challenges are rooted in political instability and decades of external pressure. The Nagorno Karabakh conflict, the 2018 Velvet Revolution, and years of oligarchic media control have shaped how Armenians receive and trust information. Only around 30% trust government institutions. The diaspora of around 7 million people, compared to roughly 2.8 million inside the country, is politically engaged but frequently excluded from domestic discourse. To get honest answers about news consumption habits, we posted on r/armenia rather than conducting structured interviews, reasoning that anonymous forums would produce more candid responses. We also interviewed a diaspora member in Norway and reached three researchers who responded."
              },
              {
                num: "2", title: "Define",
                body: "Three core problems shaped the design space. Geopolitical tensions have fractured the information environment, with polarisation visible especially on Telegram. Biased media, shaped by oligarchic ownership and political pressure, has eroded public trust. And low institutional trust, rooted in a history of corruption and Soviet era governance, makes any state backed media initiative hard to sell as neutral. Three areas of potential balanced these problems: the diaspora as a counterbalance to biased domestic narratives, international initiatives already active on media literacy, and democratic momentum from the Velvet Revolution."
              },
              {
                num: "3", title: "Develop",
                body: "Using system mapping, iceberg models, a PESTEL analysis, and a futures table, we built both a desirable and an undesirable future scenario across a ten year horizon. The character Melina made both futures concrete. In the undesirable future she cares for an anxious grandmother who cannot tell real from fake news. In the desirable future she is pregnant, lives with her Azerbaijani husband, and her daughter comes home from school already knowing how to question sources. We were explicit throughout about our Eurocentric position, noting that what we labelled desirable reflects a Western lens."
              },
              {
                num: "4", title: "Deliver",
                body: "After scoring leverage areas against impact and feasibility, five interventions were prioritised. Education ranked highest: civic and media literacy built from childhood creates the most durable foundation. Involvement came second, through public debates and a voter matching tool modelled on Valgomat. Government trust was third, using neutral debate formats modelled on Scandinavian broadcast standards. Healing was fourth, through recognition of historical grievances to restore shared identity. Media regulation ranked highest in potential impact but lowest in short term feasibility, requiring more structural groundwork before it becomes viable."
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
            This was our first deep engagement with Systems Oriented Design. The scale of complexity was genuinely overwhelming at points. Every layer revealed another. We learned to work with uncertainty, to map connections without needing to resolve them, and to see patterns in systems we could not fully understand.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto"
          }}>
            The most important shift was moving from reacting to disinformation toward asking what structural conditions would make a healthy information environment possible. For Armenia, that means not better fact checking tools but a generation educated in source criticism, institutions willing to be held accountable, and a diaspora included in the national conversation.
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

Object.assign(window, { ProjectDetailArmenia });
