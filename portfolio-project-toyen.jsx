// portfolio-project-toyen.jsx, Tøyen Takt project page

const BASE = "T%C3%B8yen%20Takt%20photos/";

function ProjectDetailToyen() {
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

  const steps = [
    {
      num: "1", title: "Discover",
      body: "Through street interviews on Tøyen, two key findings shaped everything that followed. First: almost nobody knew what was happening at Gamle Munch. The building ran a high volume of pop-up events with little continuity, meaning people had no reason to come back. Second: residents were not asking for a specific activity, they were asking for a place. One woman with a pram put it plainly: \"I would actually like a gathering place. It doesn't really matter what happens there.\" Before committing to a single direction, we did early prototyping on two different concept directions based on the interviews and research, and brought the strongest elements into the main project.",
      items: [BASE + "Discover1.mov", BASE + "Discover2.svg"]
    },
    {
      num: "2", title: "Define",
      body: "From these findings we established the core design values the concept had to meet. A permanent programme, because predictability creates safety. A place to return to, building a personal relationship between residents and the building through the service. A clear identity, so the space becomes visible and recognisable. And a service that brings people together across different groups, an offer for everyone. We then asked: what kind of content could do all of this at once? Our first answer was music. Research shows that musical reactivity is closely tied to group processes including sense of belonging, positive associations between people, and responses to social threat. Music cuts across age, background, and interest in a way few other things do.",
      items: [BASE + "Define.svg"]
    },
    {
      num: "3", title: "Develop",
      body: "Our first concept was a full music house: dedicated rehearsal rooms, soundproofing, instruments. Then reality hit, it was expensive, impractical due to noise conflicts, and excluded other uses. So we redefined the concept without losing the core values. The pivot: rather than building something new, we would take existing music services on Tøyen and improve them through visibility and structure. Partners including Tøyen Orkester, KIGO, Musikkbryggeriet, and Øveriet were already offering relevant activities. What was missing was a coherent identity, a permanent programme, and a digital surface.",
      items: [BASE + "Develop1.mov", BASE + "Develop2.svg"]
    },
    {
      num: "4", title: "Deliver",
      body: "TøyenTakt became that identity layer. The visual identity is deliberately colourful and loud, designed to be instantly recognisable across outdoor advertising, the Gamle Munch website, and partner platforms. The service reaches users through two touchpoints: a redesigned Gamle Munch website where TøyenTakt is prominently featured alongside the building's other tenants, and placements in existing music discovery apps where TøyenTakt appears as a contextual prompt at the right moment, for example when a music student is browsing for rehearsal spaces. The UX was designed around two core tasks: 5 clicks from the landing page to signing up for a course, and 5 clicks to a booked rehearsal room. A prominent call to action on the landing page and deliberately reduced readability on the secondary button steered users toward engagement over passive browsing.",
      items: [BASE + "Deliver_1.mov", BASE + "Deliver_2.mov", BASE + "Deliver%203.svg"]
    }
  ];

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

        {/* ─── HERO VIDEO ─────────────────────────────────────────────── */}
        <div style={{
          width: "100%", aspectRatio: "16 / 7",
          position: "relative", overflow: "hidden",
          borderRadius: 4, background: CHECKER
        }}>
          <video src={BASE + "t%C3%B8yen%20takt%20title%20video.mov"}
            autoPlay loop muted playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 88, lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Tøyen Takt</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>Turning a building without an identity into a neighbourhood's reason to come back.</p>
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
          }}>1 week project</span>
          <span style={{
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid var(--ink)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
            whiteSpace: "nowrap"
          }}>Service Design</span>
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
                The brief was to create a social concept that gathers residents in the Gamle Oslo district and that they would actually use, while also making visible what happens at Gamle Munch. Our field research revealed two things quickly: almost nobody knew what was going on at Gamle Munch, and the building had so many pop-up events with so little continuity that people had no reason to return. At the same time, residents told us they wanted a gathering point. Not necessarily for any specific activity, just somewhere to belong to.
              </p>
              <div style={{ marginTop: 36, borderRadius: 4, overflow: "hidden" }}>
                <video src={BASE + "Overview.mov"} autoPlay loop muted playsInline
                  style={{ width: "100%", display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                TøyenTakt is an initiative that turns parts of the old Munch museum into a dynamic centre for music. Established as a collaborative project with local partners, TøyenTakt aims to create an arena where music functions as a social gathering point for people in the Gamle Oslo district. It is a low-threshold offer with a broad range of activities including beginner music courses for all ages, Takt-Talks, concerts, and the option to rent rehearsal spaces. Working closely with existing services on Tøyen, TøyenTakt develops a varied and inclusive programme that builds a permanent, predictable identity for the building.
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
                UX Designer in a team<br />school project
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
                Field research and insight work, concept development, service design and scenario mapping, UX and UI design, visual identity and communication design
              </p>
            </div>

            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 12, minHeight: 220
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Team members</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {[
                  ["Carl Troye", "Designer"],
                  ["Andrea Cederkvist", "Designer"],
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
            maxWidth: 640, marginLeft: "auto", marginRight: "auto", textAlign: "left"
          }}>
            We started by asking what kind of service could gather people across a diverse neighbourhood, and what Gamle Munch was actually missing. The answer turned out to be less about content and more about structure: predictability, identity, and a reason to return.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {steps.map((step) => (
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
            TøyenTakt answers how a building with a fragmented identity can become a consistent social anchor for a neighbourhood, by leading with music as a universal gathering force and building a permanent, predictable structure on top of what already exists rather than replacing it. We envision the courses encouraging continuous learning so that Gamle Munch becomes a place you can grow with over time, changing in step with what the neighbourhood actually needs and wants.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto"
          }}>
            Looking back, we spent too much time on the digital surface and not enough on the physical service experience. We had an ambition for more cultural diversity that was not sufficiently reflected in the prototype. And we should have been more conscious of accessibility in our colour choices. If we were to continue, we would do more iterations with the target group and explore how the concept functions backstage.
          </p>
          <div style={{ marginTop: 36, width: "80%", maxWidth: 720, marginLeft: "auto", marginRight: "auto", borderRadius: 18, overflow: "hidden" }}>
            <img src={BASE + "Outcome.svg"} alt="Outcome" style={{ width: "100%", display: "block" }} />
          </div>
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

Object.assign(window, { ProjectDetailToyen });
