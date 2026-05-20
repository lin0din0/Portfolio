// portfolio-project-volunteering.jsx, Volunteering My Way project page

function ProjectDetailVolunteering() {
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
      color: "var(--ink)",
      position: "relative"
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
          background: "#F3F1EB", borderRadius: 4
        }}>
          <img src="Voulenteering%20my%20way%20photos/Myway_titlevideo.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
          <div style={{
            position: "absolute", bottom: 22, right: 26, zIndex: 2
          }}>
            <img src="Voulenteering%20my%20way%20photos/Red%20cross%20logo.svg" alt="Red Cross" style={{ height: 44, width: "auto" }} />
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 88, lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Volunteering My Way</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>Designing a personal path into volunteering, from first curiosity to lasting engagement.</p>
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
          }}>Interaction and Service Design</span>
        </div>

        {/* ─── OVERVIEW + DELIVERY ────────────────────────────────────── */}
        <div style={{
          marginTop: 36,
          display: "grid", gridTemplateColumns: "200px 1fr",
          gap: 40, alignItems: "start"
        }}>
          <nav style={{
            position: "sticky", top: 32,
            display: "flex", flexDirection: "column", gap: 24,
            paddingTop: 4
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
                This 12 week project was carried out in collaboration with Røde Kors. The goal was to explore how the organisation can meet young people's needs and expectations around volunteering, and how to lower the threshold for getting involved while building lasting engagement. The proportion of volunteers under 30 has declined over several years. Røde Kors needs the voice and energy of young people to remain a relevant and forward-leaning organisation, and to increase its capacity to support vulnerable groups in the years ahead.
              </p>
              <div style={{ marginTop: 36 }}>
                <img src="Voulenteering%20my%20way%20photos/MW_Overview.svg" alt="" style={{ width: "100%", borderRadius: 4, display: "block" }} />
              </div>
            </section>

            <section id="delivery">
              <h2 style={H_SECTION}>Delivery</h2>
              <p style={{ ...BODY, marginTop: 14, maxWidth: 720 }}>
                We developed a digital platform that makes it easier for young people to find their place in Røde Kors, from first curiosity to lasting engagement. By making the volunteer journey personal and transparent, we lower the threshold for joining and increase the likelihood of staying. Young people need clarity, flexibility, and the experience of getting something back. The platform meets users where they are and makes the path from curiosity to signed-up activity short, inspiring, and personal.
              </p>
            </section>
          </div>
        </div>

        {/* ─── MY ROLE ────────────────────────────────────────────────── */}
        <section id="role" style={{ marginTop: 120 }}>
          <h2 style={{ ...H_SECTION, textAlign: "center" }}>My role in this project</h2>
          <div style={{
            marginTop: 32,
            display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20
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
                User research and survey design, qualitative interviews, insight synthesis, concept development, service design and JTBD mapping, Figma prototyping and iterative user testing
              </p>
            </div>

            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 12, minHeight: 220
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Team members</span>
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {[
                  ["Oda Yttredal", "Designer"],
                  ["Lin Nora Tollefsen", "Designer"]
                ].map(([name, role], i) => (
                  <div key={i} style={{
                    display: "flex", justifyContent: "space-between",
                    fontSize: 12, color: "var(--ink-2)", lineHeight: 1.4
                  }}>
                    <span>{name}</span>
                    <span>{role}</span>
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
            The project started with research and insight work, with the goal of getting better acquainted with the organisation and what it means to be a volunteer, as well as mapping the current situation to understand the target group's needs.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover",
                body: "To understand the target group's needs, associations, and attitudes around volunteering, we ran a survey at Foss upper secondary school and Oslo Met, reaching 24 participants. We also conducted interviews with four young volunteers and employees at Røde Kors to hear about their entry into volunteering, what drives them, and what challenges they face. In addition, we participated in a volunteer breakfast at Frivilligsentralen and spoke with representatives from Norsk Studentorganisasjon and the Secretary General of Frivillighet Norge.",
                photos: ["Voulenteering%20my%20way%20photos/MW_Discover.svg"]
              },
              {
                num: "2", title: "Define",
                body: "Three insights shaped everything. People arrive at volunteering from completely different places, different values, different amounts of free time, different things they want to get out of it. None of that was visible. The entry point looked the same for everyone. The second finding was about friction. Volunteering should feel like a natural part of life, but it rarely does. Getting involved required too many steps, too much searching, and too much uncertainty about what you were actually signing up for. The third went deeper. To genuinely reach young people, you have to meet their intrinsic motivation. Not duty. Not guilt. The question they were actually asking was whether this would help them grow, connect, or become more of who they want to be. That was the design brief we built from.",
                photos: ["Voulenteering%20my%20way%20photos/MW_Define.svg"]
              },
              {
                num: "3", title: "Develop",
                body: "We mapped the platform around four stages of the volunteer journey: curious, new, active volunteer, and developing. For each stage we used the Jobs To Be Done method to anchor every feature in a real user need. We drew inspiration from high-engagement platforms including Patagonia, Spotify, and Duolingo, and ran a service takeover workshop to see how Røde Kors could look if it borrowed their language and expression. Throughout the develop phase we kept returning to the target group. Each iteration of the prototype went back in front of real users, and what we heard shaped what came next.",
                photos: ["Voulenteering%20my%20way%20photos/MW_Develop1.svg", "Voulenteering%20my%20way%20photos/MW_Develop2.svg", "Voulenteering%20my%20way%20photos/MW_Develop3.svg"]
              },
              {
                num: "4", title: "Deliver",
                body: "The final platform concept covers the full volunteer journey. When curious, Maria sees a Røde Kors ad on Instagram and lands on an inspiring onboarding flow where she answers questions about herself and receives personalised activity suggestions. When new, she is welcomed into a chat and books her first activity. As an active volunteer, she uses a flexible calendar to mark which days she is unavailable, making it easy to combine volunteering with exam periods. As she develops, she visits her personal page to see hours, courses, and engagement, and can download a course certificate to add to her CV.",
                videos: ["Voulenteering%20my%20way%20photos/Deliver1.mov", "Voulenteering%20my%20way%20photos/Deliver%202.mov", "Voulenteering%20my%20way%20photos/Deliver3.mov", "Voulenteering%20my%20way%20photos/Dev4.mov", "Voulenteering%20my%20way%20photos/Deliver%205.mov"]
              }
            ].map((step) => (
              <div key={step.num} style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 60, alignItems: "start"
              }}>
                <div>
                  <h3 style={{
                    margin: 0,
                    fontFamily: "'Hanken Grotesk', sans-serif",
                    fontSize: 14, fontWeight: 500, letterSpacing: "-0.005em",
                    color: "var(--ink)"
                  }}>{step.num}: {step.title}</h3>
                  <p style={{ ...BODY, marginTop: 12, fontSize: 13 }}>{step.body}</p>
                </div>
                <CardRoulette items={step.videos || step.photos} />
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
            The platform answers user needs across the entire volunteer journey, from the moment someone is curious to when they are an experienced volunteer. It makes the entry point clearer and simpler by meeting users where they are. It ensures that new volunteers are well received through hospitality that offers safety, belonging, and overview. It makes it easier to contribute by giving ownership of one's own time through a flexible calendar. And it motivates continued engagement by visualising effort, progress, and competence.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto"
          }}>
            If we were to continue the work, we would explore how to make the solution even simpler through more iterations and user tests with the target group. We would also look at how the solution functions backstage, to better understand which barriers and adjustments are needed to implement the concept. Even so, we believe the solution addresses a real need that is not met today: a platform that makes the volunteer journey more personal, transparent, and motivating.
          </p>

          <div style={{ marginTop: 36, width: "80%", maxWidth: 720, marginLeft: "auto", marginRight: "auto" }}>
            <img src="Voulenteering%20my%20way%20photos/MW_Outcome.svg" alt="" style={{ width: "100%", borderRadius: 18, display: "block" }} />
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

Object.assign(window, { ProjectDetailVolunteering });
