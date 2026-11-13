import Navigation from "./Navigation";
import RevealEffects from "./RevealEffects";
import AssistantEmote from "./AssistantEmote";

const steps = [
  { n: "01", title: "Start listening", text: "Open Gazely and let it listen through your team's microphone." },
  { n: "02", title: "A reference is recognized", text: "Gazely identifies the Bible passage and translation as the sermon unfolds." },
  { n: "03", title: "The passage is prepared", text: "The scripture is found and sent to your presentation software." },
  { n: "04", title: "Preview, then present", text: "Your operator checks it and chooses when it goes live." },
];

const faqs = [
  ["Is Gazely free?", "Yes. Gazely offers a free plan so your team can get started without an upfront subscription."],
  ["Does Gazely replace EasyWorship?", "No. Gazely works alongside the presentation software your team already uses."],
  ["Does it put scriptures on screen automatically?", "Gazely prepares passages for preview. Your operator decides what goes live."],
  ["Which presentation software does Gazely support?", "EasyWorship 7 is the first supported platform. ProPresenter and FreeShow integrations are planned."],
  ["What can Gazely recognize?", "Gazely is designed to recognize spoken Bible books, chapter and verse references, and translation names."],
];

function Arrow() { return <span aria-hidden="true">↗</span>; }

function ProductIllustration() {
  return <div className="product-scene" aria-label="Illustration of Gazely preparing a scripture for an operator to review" role="img">
    <svg className="service-illustration" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <defs>
        <linearGradient id="room" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#292d26"/><stop offset="1" stopColor="#171916"/></linearGradient>
        <linearGradient id="screen" x1="0" y1="0" x2="0" y2="1"><stop stopColor="#e8eadf"/><stop offset="1" stopColor="#b9c0ad"/></linearGradient>
        <linearGradient id="beam" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d4f5a1" stopOpacity=".2"/><stop offset="1" stopColor="#d4f5a1" stopOpacity="0"/></linearGradient>
      </defs>
      <path d="M0 0h600v420H0z" fill="url(#room)"/>
      <path d="M26 300V181C26 85 136 27 300 27s274 58 274 154v119" fill="none" stroke="#757a6b" strokeOpacity=".23" strokeWidth="2"/>
      <path className="stage-beam" d="M300 42 93 330h412z" fill="url(#beam)"/>
      <path d="M114 285V141c0-48 39-87 87-87h198c48 0 87 39 87 87v144" fill="#20231f" stroke="#50564b" strokeOpacity=".6"/>
      <rect x="190" y="90" width="220" height="132" rx="5" fill="#10120f" stroke="#808575" strokeOpacity=".45"/>
      <rect x="198" y="98" width="204" height="116" rx="2" fill="url(#screen)" opacity=".72"/>
      <path d="M222 132h78M222 143h112M222 154h93" stroke="#30372c" strokeOpacity=".62" strokeWidth="3" strokeLinecap="round"/>
      <path d="M222 180h145" stroke="#9acb56" strokeOpacity=".75" strokeWidth="3" strokeLinecap="round"/>
      <path d="M0 315h600v105H0z" fill="#161815"/>
      <path d="M0 320c56-22 113-24 172-7 44 13 71 18 112 9 50-11 94-15 140 1 58 20 113 13 176-4v101H0z" fill="#111310"/>
      <g className="audience-figures" fill="#272b24">
        <path d="M27 420v-38c0-26 17-47 43-47s43 21 43 47v38z"/><circle cx="70" cy="326" r="19" fill="#765948"/><path d="M123 420v-28c0-22 15-39 36-39s36 17 36 39v28z"/><circle cx="159" cy="339" r="16" fill="#a9785e"/>
        <path d="M425 420v-33c0-26 17-45 41-45s41 19 41 45v33z"/><circle cx="466" cy="326" r="18" fill="#825e49"/><path d="M510 420v-26c0-21 14-37 34-37s34 16 34 37v26z"/><circle cx="544" cy="341" r="15" fill="#bd8c6e"/>
      </g>
      <g className="booth-operator">
        <path d="M0 359h169l27 61H0z" fill="#282c26"/>
        <path d="M18 355h106v-48h-76c-17 0-30 13-30 30z" fill="#353a32" stroke="#666c5d" strokeOpacity=".75"/>
        <rect x="29" y="317" width="81" height="30" rx="2" fill="#b8c2a8" opacity=".58"/>
        <path d="M43 325h42M43 332h31M43 339h52" stroke="#2c3328" strokeOpacity=".6" strokeWidth="2" strokeLinecap="round"/>
        <path d="M121 420v-71c0-31 18-52 43-52 24 0 39 19 39 48v31h-25l-11 44z" fill="#353a33"/>
        <path d="M143 303c0-20 10-33 25-33s24 13 24 32v17c0 17-11 28-24 28-14 0-25-12-25-29z" fill="#c58a67"/>
        <path d="M142 307c-2-23 9-40 28-40 18 0 27 13 25 36-8-5-14-13-16-21-8 9-20 15-37 17z" fill="#222620"/>
        <path d="M149 348h37" stroke="#d5d8c9" strokeOpacity=".65" strokeWidth="2"/>
      </g>
      <path d="M6 239 143 67" stroke="#b8f34a" strokeOpacity=".12" strokeWidth="1"/>
      <circle cx="300" cy="45" r="3" fill="#b8f34a" opacity=".8"/>
    </svg>
    <div className="scene-label"><span className="live-dot"/> GAZELY IS LISTENING</div>
    <div className="listen-card"><span className="listen-icon" aria-hidden="true">✳</span><div><small>HEARD IN THE SERVICE</small><strong>“Turn with me to Psalm 23…”</strong></div><span className="wave"><i/><i/><i/><i/><i/><i/><i/></span></div>
    <div className="connector"><span/></div>
    <div className="scripture-card"><div className="scripture-top"><span className="ready-pill"><b/> REFERENCE FOUND</span><span className="more">•••</span></div><small>PSALM 23:1–3 <em>· NIV</em></small><p>“The Lord is my shepherd, I lack nothing. He makes me lie down in green pastures…”</p><div className="card-foot"><span>Ready to preview</span><span className="lime-check">✓</span></div></div>
    <div className="operator-chip"><span className="operator-avatar"><svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="20" fill="#d9dfc8"/><path d="M7 39c1.7-8 6.3-12 13-12s11.3 4 13 12" fill="#272c25"/><path d="M13 17c0-6 3-10 8-10 4.7 0 7 3.7 7 9.4v4.4c0 4.7-3.2 7.2-7.5 7.2-4.5 0-7.5-3-7.5-7.2z" fill="#bd8060"/><path d="M13 17c-.5-6.1 3-11 8.5-11 5 0 8 3.7 7.2 10.2-2.2-2.1-4-4.4-4.6-6.1-2.1 2.4-5.3 3.7-10 4.2z" fill="#252822"/><path d="M16 19h.1m8 0h.1" stroke="#34251f" strokeWidth="1.4" strokeLinecap="round"/></svg></span><span className="operator-copy"><strong>Mina <i>·</i> media team</strong><small>Reviewing the passage</small></span><span className="operator-status"/></div>
    <div className="scene-caption">YOU’RE ALWAYS IN CONTROL <span>—</span> REVIEW BEFORE IT GOES LIVE</div>
  </div>;
}

export default function Home() {
  return <>
    <RevealEffects/>
    <Navigation/>
    <AssistantEmote />
    <main id="top">
      <section className="hero container" data-emote="listening">
        <div className="hero-copy">
          <h1>Your church presentation<br/><span>just got smarter.</span><br/><em className="hero-ai">with AI</em></h1>
          <p className="hero-lede">Gazely listens during the service, recognizes Bible references, and prepares scripture inside the presentation software your team already uses.</p>
          <p className="hero-sub">Less searching for your team. More room to stay present.</p>
          <div className="hero-actions"><a className="button button-dark" href="#get-started">Get Gazely free <Arrow/></a><a className="text-link" href="#how-it-works">See how it works <span>↓</span></a></div>
          <div className="hero-note"><span className="note-rule"/>Starting with EasyWorship 7 <span className="note-sep">·</span> More platforms on the way</div>
        </div>
        <ProductIllustration/>
      </section>
      <div className="brand-statement"><span className="statement-mark">✳</span> GAZELY PAYS ATTENTION. <i>SO YOU CAN STAY PRESENT.</i></div>

      <section className="problem section container" id="features" data-emote="search">
        <div className="problem-grid"><h2>Your media team<br/>has enough to think about.</h2><div><p>A preacher mentions a scripture. Someone rushes to search, find the right translation, and get it on screen before the sermon moves on.</p><p className="muted">It happens every service. Gazely takes some of that pressure off your team.</p></div></div>
        <div className="before-after-grid">
          <article className="comparison-card before-card" data-reveal>
            <div className="comparison-top"><span className="comparison-word">Before</span><span className="comparison-state">Manual lookup</span></div>
            <h3>The message keeps moving.</h3>
            <p>A verse is quoted mid-sermon. Someone searches a Bible or the web, finds the passage, chooses a translation, and prepares the slide while the message keeps moving.</p>
            <div className="before-illustration" aria-hidden="true"><svg viewBox="0 0 500 180" role="presentation">
              <ellipse cx="250" cy="161" rx="215" ry="11" fill="#c9cdbf" opacity=".55"/>
              <rect x="46" y="19" width="270" height="125" rx="9" fill="#fffefa" stroke="#d9dbd1"/>
              <path d="M46 29a10 10 0 0 1 10-10h250a10 10 0 0 1 10 10v14H46z" fill="#e9eae3"/>
              <circle cx="60" cy="31" r="3" fill="#c5c9bd"/><circle cx="71" cy="31" r="3" fill="#c5c9bd"/><circle cx="82" cy="31" r="3" fill="#c5c9bd"/>
              <rect x="62" y="56" width="235" height="22" rx="4" fill="#f1f2ec" stroke="#dfe1d8"/>
              <circle cx="75" cy="67" r="4" fill="none" stroke="#777d70" strokeWidth="1.5"/><path d="m78 70 4 4" stroke="#777d70" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M89 67h107" stroke="#999e91" strokeWidth="3" strokeLinecap="round"/>
              <rect x="62" y="88" width="235" height="39" rx="4" fill="#fafaf6" stroke="#e8e9e2"/>
              <rect x="73" y="98" width="24" height="18" rx="3" fill="#e7eadf"/><path d="M106 100h113M106 109h160M106 118h90" stroke="#adb1a5" strokeWidth="2" strokeLinecap="round"/>
              <path d="M41 147h285l-17 10H55z" fill="#b9beb1"/><path d="M65 154h234" stroke="#a9aea2" strokeWidth="2" strokeLinecap="round"/>
              <path d="M374 161v-46c0-23 13-37 31-37 17 0 29 14 29 37v46z" fill="#343a32"/>
              <path d="M389 86c0-15 8-24 19-24 12 0 19 9 19 24v13c0 12-8 20-19 20s-19-8-19-20z" fill="#b98264"/>
              <path d="M388 87c-1-17 8-29 21-29 13 0 21 10 19 26-5-3-9-8-12-14-7 8-15 13-28 17z" fill="#282d27"/>
              <path d="M365 128c7-6 16-9 26-9m39 0c10 1 18 5 25 12" fill="none" stroke="#b98264" strokeWidth="7" strokeLinecap="round"/>
              <path d="M339 143h144l-12 18H350z" fill="#53594e"/><rect x="364" y="133" width="88" height="7" rx="3" fill="#b8f34a" opacity=".74"/>
              <path className="lookup-trail" d="M321 64c13-8 23-8 34 0" fill="none" stroke="#a8ae9e" strokeWidth="2" strokeDasharray="3 5"/>
            </svg></div>
            <div className="before-sequence" aria-label="Manual scripture workflow">
              <div><span>01</span><b>Quoted</b><small>A verse is spoken</small></div>
              <div className="sequence-scramble"><span>02</span><b>Search</b><small>Flip between web & Bible</small></div>
              <div><span>03</span><b>Prepare</b><small>Find verse · choose translation</small></div>
              <div><span>04</span><b>Present</b><small>Put it on screen</small></div>
            </div>
            <div className="comparison-foot"><span className="comparison-dash"/> The service keeps moving.</div>
          </article>
          <article className="comparison-card after-card" data-reveal>
            <div className="comparison-top"><span className="comparison-word">After</span><span className="after-status"><i/> Gazely for EasyWorship</span></div>
            <h3>Stay with the service.</h3>
            <p>Gazely recognizes the reference and prepares it in EasyWorship. Your operator reviews the match before it goes live.</p>
            <figure className="product-proof"><div className="proof-window"><img src="/product/gazely-mini-easyworship.png" alt="Gazely mini overlay on the EasyWorship interface, showing a detected scripture, match confidence, preview, and Show Live controls."/></div><figcaption><span className="proof-indicator"/> Gazely mini · EasyWorship 7 <span className="proof-caption-tail">Operator stays in control</span></figcaption></figure>
          </article>
        </div>
      </section>

      <section className="how-section" id="how-it-works" data-emote="ready" data-section-motion><div className="container section how-inner"><div className="section-heading"><h2>From spoken word<br/>to scripture, in a moment.</h2><p>Gazely follows the service, finds the passage, and puts your operator in control of what comes next.</p></div>
        <div className="steps-grid">{steps.map(s=><article className="step-card" key={s.n}><div className="step-number">{s.n}<span> ↗</span></div><div className="step-line"/><h3>{s.title}</h3><p>{s.text}</p></article>)}</div>
      </div></section>

      <section className="benefits section container" data-emote="calm"><div className="benefit-intro"><h2>Better projection.<br/><span>Without changing everything.</span></h2><p>Helpful intelligence that fits into the way your team already serves.</p><a className="text-link" href="#compatibility">Explore compatibility <span>→</span></a></div>
        <div className="benefit-list"><article><span className="benefit-symbol">↗</span><div><h3>Keep the tools you know</h3><p>Gazely works alongside your existing presentation software.</p></div></article><article><span className="benefit-symbol">⌕</span><div><h3>Less manual searching</h3><p>AI finds the spoken reference and prepares a passage, so your team spends less time typing and searching.</p></div></article><article><span className="benefit-symbol">◷</span><div><h3>Stay with the service</h3><p>Give your media team room to follow the message and manage the rest.</p></div></article><article><span className="benefit-symbol benefit-lime">✓</span><div><h3>Your team stays in control</h3><p>Gazely prepares. Your operator decides what appears on screen.</p></div></article></div>
      </section>

      <section className="compat-section" id="compatibility" data-emote="curious" data-section-motion><div className="container section"><div className="section-heading compat-heading"><h2>One assistant.<br/>More ways to present.</h2><p>Gazely works alongside the presentation software your team already uses—starting with EasyWorship 7, with more integrations on the way.</p></div>
        <div className="platform-grid"><article className="platform-card platform-available"><div className="platform-status"><span className="status-dot"/> AVAILABLE NOW</div><img className="platform-logo easyworship-logo" src="/easyworship-transparent.png" alt="EasyWorship logo"/><h3>EasyWorship 7</h3><p>AI-powered scripture detection and preparation, alongside your existing workflow.</p><a href="#get-started">Gazely for EasyWorship <span>↗</span></a></article><article className="platform-card"><div className="platform-status">ON THE ROADMAP</div><img className="platform-logo propresenter-logo" src="/propresenter.svg" alt="ProPresenter logo"/><h3>ProPresenter</h3><p>Bring Gazely's scripture assistance to your ProPresenter workflow.</p><div className="platform-foot">INTEGRATION IN PROGRESS</div></article><article className="platform-card"><div className="platform-status">ON THE ROADMAP</div><img className="platform-logo freeshow-logo" src="/freeshow.png" alt="FreeShow logo"/><h3>FreeShow</h3><p>Extend AI-powered scripture preparation to FreeShow teams.</p><div className="platform-foot">INTEGRATION IN PROGRESS</div></article></div>
        <p className="platform-note">Gazely stays the same. It simply works with more of the tools you trust.</p>
      </div></section>

      <section className="pricing section container" data-emote="hopeful"><div className="pricing-card"><div><h2>Powerful assistance<br/>shouldn't be out of reach.</h2><p>Try a smarter way to handle scripture projection with Gazely's free plan. No subscription required to get started.</p></div><div className="pricing-action"><div className="price"><strong>Free</strong><span>to get started</span></div><a className="button button-dark" href="#get-started">Get Gazely free <Arrow/></a><small>Optional paid plans for teams that need more.</small></div><span className="pricing-orbit"/></div></section>

      <section className="faq-section" id="faq" data-emote="curious"><div className="container section faq-layout"><div><h2>Questions,<br/>answered.</h2><p>Still wondering how Gazely fits into your service?</p></div><div className="faq-list">{faqs.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>

      <section className="final-cta container" id="get-started" data-emote="cheer"><h2>Let your team focus<br/>on the service.</h2><p>Less searching. Less scrambling. A calmer way to handle scripture projection.</p><a className="button button-lime" href="#compatibility">Get Gazely free <Arrow/></a><div className="cta-foot">GAZELY PAYS ATTENTION. <i>SO YOU CAN STAY PRESENT.</i></div></section>
    </main>
    <footer className="footer"><div className="container footer-inner"><a className="footer-brand" href="#top"><img src="/brand/gazely-logo-transparent.png" alt="Gazely"/></a><span>Intelligence for live presentation.</span><span>© 2026 Gazely</span><a href="#top">Back to top ↑</a></div></footer>
  </>;
}
