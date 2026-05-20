// portfolio-project-carbondex.jsx, Carbon DEX project page

function ProjectDetailCarbonDex() {
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
              fontSize: 16, fontWeight: 500, letterSpacing: "0.01em",
              color: "var(--ink)"
            }}>ETH Prague 2026</span>
            <span style={{
              fontFamily: "'Hanken Grotesk', sans-serif",
              fontSize: 11, color: "var(--ink-2)", letterSpacing: "-0.005em"
            }}>ETH Prague 2026 Hackathon</span>
          </div>
        </div>

        {/* ─── TITLE BLOCK ────────────────────────────────────────────── */}
        <div style={{ marginTop: 56 }}>
          <h1 style={{
            margin: 0,
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontWeight: 400, fontSize: 88, lineHeight: 1,
            letterSpacing: "-0.035em", color: "var(--ink)"
          }}>Carbon DEX</h1>
          <p style={{
            margin: "14px 0 0",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 16, fontWeight: 300, letterSpacing: "-0.005em",
            color: "var(--ink-2)"
          }}>An on-chain settlement layer for the EU ETS secondary market, where the regulator is a first-class actor.</p>
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
          }}>Hackathon project</span>
          <span style={{
            padding: "8px 18px", borderRadius: 999,
            border: "1px solid var(--ink)",
            fontFamily: "'Hanken Grotesk', sans-serif",
            fontSize: 12, color: "var(--ink)", letterSpacing: "-0.005em",
            whiteSpace: "nowrap"
          }}>Web3 / Institutional UX Design</span>
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
                Carbon DEX is the on-chain settlement layer for the EU Emissions Trading System secondary market. It sits downstream of allowance issuance and upstream of compliance surrender. Companies bring in allocated EUAs, trade them on-chain, and burn them against verified emissions. The differentiator is that the regulator participates as a first class on-chain actor with mint, freeze, and audit powers. Every issuance, trade, and retirement is permanently and publicly auditable without anyone needing to connect a wallet.
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
                We designed and built three interactive viewports for a live hackathon demo. The company view lets verified emitters receive, trade, and surrender credits. The regulator view provides a live audit log, compliance roster, and scheduled allocation panel. The public view is fully read only, requiring no wallet connection, showing total supply, all trades, all retirements, and the regulator action log in real time. The closing image was the cap accounting widget showing 1,000 EUAs issued, 200 retired, 800 in circulation. That is what cap and trade is supposed to do.
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
                UX and UI Designer<br />hackathon project
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
                Information architecture across three viewports, institutional design system, audit log component design, retirement certificate design, company wallet and swap interface, regulator dashboard and compliance roster, public transparency view, provenance panel design
              </p>
            </div>

            <div style={{
              border: "1px solid var(--line-soft)", borderRadius: 14, padding: 22,
              display: "flex", flexDirection: "column", gap: 12, minHeight: 220
            }}>
              <span style={{ fontFamily: "'Hanken Grotesk', sans-serif", fontSize: 13, color: "var(--ink)", fontWeight: 500 }}>Team members</span>
              <p style={{ ...BODY, fontSize: 12, marginTop: 4 }}>ETH Prague 2026 Hackathon</p>
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
            The design brief was precise: no crypto aesthetics, no gradients, no glassmorphism. Reference points were the ECB monthly bulletin, the Eurostat dashboard, and the EEX trading screen. Judges from TradFi and policy backgrounds needed to see institutional credibility before anything else.
          </p>

          <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 56 }}>
            {[
              {
                num: "1", title: "Discover",
                body: "The EU ETS is the world's largest carbon market. Phase 4 runs from 2021 to 2030, with a linear reduction factor of 4.4% per year from 2024. EUA prices sit around 65 to 70 euros, with an excess emission penalty of 100 euros per tonne creating a hard ceiling. The secondary market is fragmented, opaque, and hard to audit in real time. The core gap: no existing system treats the regulator as an on-chain actor, makes provenance trackable from issuance to retirement, or gives the public verifiable visibility into whether the cap is actually holding."
              },
              {
                num: "2", title: "Define",
                body: "CarbonCredit was designed as an ERC-20 fungible token, matching how real EUAs work within Phase 4. Metadata lives on events rather than on the token itself, so wallet balances show a single number while provenance is readable from the original issuance event. The AMM is a Uniswap V2 fork with a single EURS to CarbonCredit pool, gated by a compliance registry whitelist. Three characters drove the narrative: cement-mainz.eth, a cement producer receiving free allocation; aluminium-bratislava.eth, an aluminium smelter buying on the secondary market; and eu-ets-authority.eth, the regulator executing allocations and holding freeze powers."
              },
              {
                num: "3", title: "Develop",
                body: "The design system used IBM Plex Sans for body text, Fraunces as the display typeface, and IBM Plex Mono for all data, addresses, and transaction hashes. Colour was reserved for state changes only: new, frozen, retired, audit alert. Tabular data was preferred throughout. On the company screen, wallet balance was the largest element with one primary action visible at a time. On the regulator screen, the audit log was the backbone: a top-down stream in monospaced type, newest first, with expandable rows, like a trading desk blotter. The separation between the scheduled allocation panel and the authority controls was a deliberate design statement: issuance is a process governed by benchmarks, not a button anyone presses on a whim. On the public screen, no wallet connection required was the first thing visible."
              },
              {
                num: "4", title: "Deliver",
                body: "The live demo ran across three laptops on stage, one per viewport. Three beats, approximately three minutes. First: the 2026 allocation event executes, cement-mainz.eth receives 1,000 EUAs, public supply moves from zero to 1,000. Second: aluminium-bratislava.eth buys 200 EUAs at around 70 euros each, the audit log streams the trade, the public ticker moves. Third: aluminium-bratislava.eth surrenders 200 EUAs against verified Q4 2026 emissions, supply contracts to 800, and a permanent retirement certificate is issued. The certificate was designed as a credential rather than a transaction record, because it is the document a sustainability officer actually cites."
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
            Carbon DEX showed that on-chain carbon markets do not have to choose between transparency and institutional credibility. The design challenge was proving that web3 infrastructure could look like the systems EU policy professionals and TradFi compliance teams already trust.
          </p>
          <p style={{
            ...BODY, marginTop: 16,
            maxWidth: 640, marginLeft: "auto", marginRight: "auto"
          }}>
            The most interesting single decision was separating the scheduled events panel from the authority controls on the regulator view. That layout choice communicated the constitutional logic of the EU ETS, that issuance is constrained by benchmarks and not by discretion, more clearly than any written explanation could. The cap and trade system worked as designed in front of a live audience: issue, trade, retire, shrink the supply.
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

Object.assign(window, { ProjectDetailCarbonDex });
