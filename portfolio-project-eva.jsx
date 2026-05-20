// portfolio-project-eva.jsx, EVA project page

function ProjectDetailEva() {
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
          background: "#0E0E0C", borderRadius: 4
        }}>
          <video src="EVA%20photos/EVA%20title%20video.mov" autoPlay loop muted playsInline
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{
            position: "absolute", bottom: 22, right: 26,
            display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 10,
            zIndex: 2
          }}>
            <img src="EVA%20photos/Huf%20logo.svg" alt="Huf Group" style={{ height: 52, width: "auto" }} />
            <img src="EVA%20photos/tongji_logo.svg" alt="Tongji CDI" style={{ height: 28, width: "auto" }} />
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 88, lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>EVA</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>The Emotional Vehicle Assistant: your journey begins before you enter the car.</p>
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
          }}>Intensive studio project</span>
          <span style={{
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid var(--ink)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
            whiteSpace: "nowrap"
          }}>Interaction Design / AI Design</span>
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
                Today's car experience is functional but not emotional. You adjust the seat, connect your phone, choose music. Each time starts from zero, with no sense of being welcomed. EVA began as a question posed with Huf Group: how can the journey begin before you enter the car?
              </p>
              <div style={{ marginTop: 36, borderRadius: 4, overflow: "hidden" }}>
                <video src="EVA%20photos/eva_overviewvideo.mov" autoPlay loop muted playsInline style={{ width: "100%", display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                EVA is the Emotional Vehicle Assistant. It reads data from your phone, wearable, and the car itself, interprets your emotional state through biometric and contextual signals, and prepares the cabin before you arrive. Scent, light, sound, and temperature are adjusted proactively, not by manual input, but by inference. The car key becomes a scent collector and emotional feedback device. The journey no longer starts when you open the door.
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
                Interaction Designer<br />team studio project
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
                Research synthesis and framing, concept development, multimodal interaction design, user journey mapping, system logic design, presentation and documentation
              </p>
            </div>

            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 12, minHeight: 220
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Team members</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {[
                  ["XIAO Yucheng", "Designer"],
                  ["Lin Nora Tollefsen", "Designer"],
                  ["ONG Koklin", "Designer"],
                  ["WANG Pengxiang", "Designer"],
                  ["ZHAO Zehui", "Designer"]
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
            The project began from a simple observation: the car interior is one of the most intimate spaces in daily life, yet one of the least emotionally responsive. We asked what it would take to design an assistant that reads your state rather than waiting to be told.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover", photos: ["EVA%20photos/eva_discover1.svg", "EVA%20photos/eva_discover2.svg"],
                body: "Market research into HMI design revealed that in car interaction is dominated by vision at 83% of information received, auditory at 11%, and touch at 3.5%. Smell receives the lowest designed attention at just 1.5%, yet it is the most direct path to instinctive behaviour and emotional memory. Car diffuser systems from NIO, BMW, IM, and Zeekr had explored scent in the cabin, but all remained reactive: triggered by manual input or fatigue detection, not by emotional state. None of them started working before the driver arrived."
              },
              {
                num: "2", title: "Define", photos: ["EVA%20photos/eva_define.svg"],
                body: "The problem was not a missing feature but a missing framing. Car systems prioritise efficiency over experience. Looking through the lens of PERMA, a framework for human flourishing, we asked how the car could support positive emotion, engagement, relationships, meaning, and accomplishment rather than just transport. The design question became: how might we make the car sense your state and prepare for you before you even arrive? This moved the brief from adding controls to building a proactive, emotionally intelligent system."
              },
              {
                num: "3", title: "Develop", photos: ["EVA%20photos/eva_develop.svg"],
                body: "EVA operates as a three stage system: input, processing, and output. Input comes from your phone (calendar, location, app activity), wearable (heart rate, stress, sleep quality), and the car itself. Processing combines emotional inference with environmental context including time of day, weather, and traffic. Output is delivered across four dimensions before entry: scent across calm, focus, energise, or custom profiles; lighting from warm welcome tones to meeting mode cool tones; a pre-selected playlist; and cabin comfort through seat conditioning and air purification. The car key was redesigned as an emotional object, passively collecting scent and environmental data from the spaces you move through."
              },
              {
                num: "4", title: "Deliver", photos: ["EVA%20photos/EVA_deliver1.svg", "EVA%20photos/EVA_deliver2.svg", "EVA%20photos/EVA_deliver3.svg"],
                body: "Two user journeys brought the concept to life, each tracing how EVA touches the five flourishing factors across a real day. Wang Wei returns from an exhausting day. EVA has already detected her stress levels. A warming vibration in the handle, warm light, and a soft welcome message greet her at the door. Inside, café ambiance plays and a faint cocoa scent fills the cabin. In the second scenario, EVA prepares a road trip, adjusts the car to a destination mood, greets the user by name on approach, and when the journey ends, the window reads: Wait for your next trip."
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
                <CardRoulette items={step.photos} />
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
            EVA proposes a shift in how the car is understood as a designed space. Not a vehicle that responds to commands. A companion that reads context and prepares an environment around you. The most interesting design territory was the threshold before entry: the moment between effort and rest, the world and your space.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto"
          }}>
            The project raised questions worth continuing: how much data collection feels helpful versus intrusive, how the system communicates uncertainty without breaking the emotional tone, and what it means to design a relationship with an object that learns you over time.
          </p>
          <div style={{
            marginTop: 36, width: "80%", maxWidth: 720,
            marginLeft: "auto", marginRight: "auto",
            borderRadius: 18, overflow: "hidden"
          }}>
            <video src="EVA%20photos/Eva%20outcome.mov" autoPlay loop muted playsInline
              style={{ width: "100%", display: "block" }} />
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

Object.assign(window, { ProjectDetailEva });
