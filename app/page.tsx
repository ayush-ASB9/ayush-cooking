'use client'

import { useState } from 'react'
import { ArrowDown, ArrowUpRight, ChefHat, ExternalLink, Menu, X } from 'lucide-react'
import { chapters, projects, testimonial } from '@/lib/content'

const navItems = [
  ['story', '#story'],
  ["what i've cooked", '#projects'],
  ["how i think", '#thinking'],
  ['now', '#now'],
  ['contact', '#contact'],
]

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="ayush.cooking home">
          <ChefHat size={19} strokeWidth={1.5} />
          <span>ayush<span className="wordmark-dot">.</span>cooking</span>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          {navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
        </nav>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-kicker"><span className="status-dot" /> field notes / currently cooking</div>
        <div className="hero-grid">
          <div>
            <h1 id="hero-title">i&apos;m ayush.<br /><em>i&apos;m 17.</em><br />and i&apos;m always<br /><span className="accent-word">cooking</span> something.</h1>
            <p className="hero-intro">startups, research, fundraising, technology, and the occasional attempt to understand what the hell i&apos;m doing.</p>
            <div className="hero-actions"><a className="button button-dark" href="#story">read the story <ArrowDown size={15} /></a><a className="text-link" href="#projects">browse the experiments <ArrowUpRight size={15} /></a></div>
          </div>
          <div className="hero-note">
            <span className="note-pin" />
            <p>the domain is not a gimmick.</p>
            <p>i keep finding things, exploring them, testing them, questioning them, and starting something new.</p>
            <small>— a working definition</small>
          </div>
        </div>
        <div className="scroll-cue"><span>scroll to read</span><span className="scroll-line" /></div>
      </section>

      <section className="domain-section section-pad" aria-labelledby="domain-title">
        <div className="eyebrow">01 / the kitchen</div>
        <div className="domain-copy">
          <h2 id="domain-title">so before i start the story u hv a doubt right why the hell the domain is <span>ayush.cooking</span></h2>
          <div className="domain-answer"><p>well cuz i am always cooking sometimes food sometimes startup ideas sometimes reaserch soemtimes exparimants</p><p>the domain was expensive. my kidneys are still safe, but i did spend my lifetime savings to buy it. so now i have to make it count, i guess.</p></div>
        </div>
      </section>

      <section className="story-section section-pad" id="story" aria-labelledby="story-title">
        <div className="section-heading"><div className="eyebrow">02 / the long version</div><h2 id="story-title">the story so far<span className="accent-dot">.</span></h2><p>not a perfectly linear career story. more like a trail of rabbit holes, half-built things, uncomfortable conversations, and a few things that actually worked.</p></div>
        <div className="story-layout">
          <aside className="story-index" aria-label="Story chapters"><span>contents</span>{chapters.map((chapter) => <a key={chapter.number} href={`#chapter-${chapter.number}`}>{chapter.number} <i>{chapter.title}</i></a>)}</aside>
          <div className="chapters">{chapters.map((chapter) => <article className="chapter" id={`chapter-${chapter.number}`} key={chapter.number}><div className="chapter-meta"><span>{chapter.number}</span><span className="chapter-rule" /></div><div className="chapter-body"><h3>{chapter.title}</h3>{chapter.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}{chapter.note && <p className="margin-note">{chapter.note}</p>}{chapter.number === '07' && <a className="inline-link" href="#projects">visit the idea graveyard <ArrowUpRight size={14} /></a>}{chapter.number === '08' && <blockquote className="testimonial"><p>“{testimonial.quote}”</p><cite>{testimonial.person}, {testimonial.role}</cite></blockquote>}{chapter.number === '09' && <p className="invitation">if you&apos;re building something and want someone to challenge it instead of blindly validating it, drop me a dm. unless you&apos;re scared of course.</p>}</div></article>)}</div>
        </div>
      </section>

      <section className="projects-section section-pad" id="projects" aria-labelledby="projects-title">
        <div className="section-heading split-heading"><div><div className="eyebrow">03 / the archive</div><h2 id="projects-title">things i&apos;ve cooked<span className="accent-dot">.</span></h2></div><p>some are alive. some are not. some are still sitting on the counter while i figure out what they are.</p></div>
        <div className="project-list">{projects.map(([name, status, description], index) => <article className="project-row" key={name}><span className="project-number">{String(index + 1).padStart(2, '0')}</span><div className="project-main"><h3>{name}</h3><p>{description}</p></div><span className={`status status-${status}`}>{status}</span></article>)}</div>
      </section>

      <section className="thinking-section section-pad" id="thinking" aria-labelledby="thinking-title"><div className="eyebrow">04 / notes from the counter</div><div className="thinking-grid"><h2 id="thinking-title">how i think<br /><em>(or at least how i seem to work)</em></h2><div className="thinking-list">{['i learn by exploring things that interest me, even before i understand them.','i research unfamiliar markets and industries.','i reach out to people instead of only consuming content.','i turn ideas into experiments.','i challenge assumptions, including my own.','i enjoy trying to disprove startup ideas rather than blindly validating them.','i work with people who know things i don’t.','i keep building even when a previous project fails.'].map((item, index) => <div className="thinking-item" key={item}><span>{String(index + 1).padStart(2, '0')}</span><p>{item}</p></div>)}</div></div></section>

      <section className="now-section section-pad" id="now" aria-labelledby="now-title"><div className="now-card"><div className="eyebrow">05 / open chapter</div><h2 id="now-title">the unfinished part<span className="accent-dot">.</span></h2><p>THEOFF9 is in stealth. ASB9 Club is being built. i&apos;m exploring quant research, technology, financial markets, startups, and whatever else captures my attention.</p><p>i&apos;m still in school and still figuring things out. which is probably why this page keeps changing.</p><div className="now-stamp">still cooking<br /><strong>10.25.26</strong></div></div></section>

      <footer className="footer section-pad" id="contact"><div className="footer-top"><div><div className="eyebrow">06 / leave a note</div><h2>want to challenge<br />an idea together?</h2></div><p>if you&apos;re building something and want someone to challenge it instead of blindly validating it, drop me a dm. unless you&apos;re scared of course.</p></div><div className="footer-bottom"><a className="wordmark" href="#top"><ChefHat size={19} strokeWidth={1.5} /><span>ayush<span className="wordmark-dot">.</span>cooking</span></a><div className="footer-links"><span>links to be configured</span><a href="#contact">ASB9 Club <ExternalLink size={13} /></a></div><span className="copyright">© 2026 / still in progress</span></div></footer>
    </main>
  )
}
