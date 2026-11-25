"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import {
  ArrowDown, ArrowRight, ArrowUpRight, Menu, X, Code2, Smartphone,
  Search, Boxes, HeartPulse, Truck, ShoppingBag, Palette, Video,
  Globe2, GraduationCap, Factory, Sprout, Landmark, Rocket, Workflow,
  Mail, MapPin, Phone, Check, Sparkles, Layers3, MonitorSmartphone
} from "lucide-react";

const services = [
  { icon: Code2, title: "Web development", text: "Fast, responsive websites and custom web platforms built around real business needs." },
  { icon: Smartphone, title: "App development", text: "Thoughtful mobile experiences designed to make everyday tasks simpler." },
  { icon: Search, title: "SEO & growth", text: "Improve discoverability and build a stronger foundation for sustainable growth." },
  { icon: Boxes, title: "ERP systems", text: "Connect business operations with systems that bring teams and information together." },
  { icon: HeartPulse, title: "Healthcare software", text: "Digital tools for healthcare workflows, administration and patient-focused services." },
  { icon: Truck, title: "Logistics software", text: "Practical software for managing movement, operations and supply-chain workflows." },
  { icon: ShoppingBag, title: "E-commerce & Shopify", text: "Online stores designed to make product discovery and checkout feel effortless." },
  { icon: Globe2, title: "WordPress", text: "Manageable, tailored WordPress websites for brands and growing businesses." },
  { icon: Palette, title: "Graphic design", text: "Visual identities and creative assets that make brands feel consistent." },
  { icon: Sparkles, title: "Digital marketing", text: "Digital campaigns and content that help businesses reach the right audience." },
  { icon: Video, title: "Video editing", text: "Clear, engaging video content for digital platforms and brand communication." },
];

const industries = [
  { icon: HeartPulse, name: "Healthcare" },
  { icon: Truck, name: "Logistics & supply chain" },
  { icon: ShoppingBag, name: "E-commerce & retail" },
  { icon: Factory, name: "Manufacturing & ERP" },
  { icon: Rocket, name: "Startups & SaaS" },
  { icon: Landmark, name: "Financial services" },
  { icon: GraduationCap, name: "Education & EdTech" },
  { icon: Sprout, name: "AgriTech" },
];

const projects = [
  { number: "01", name: "Nature Gulf Garden", type: "Business website · UAE client", description: "A digital presence for a garden and landscaping business.", href: "https://share.google/hKIQ0eunA21ZdmwOr", tone: "garden", tag: "UAE" },
  { number: "02", name: "A.S. Electroplating", type: "Industrial website · Lahore", description: "A website for an electroplating and surface-finishing business.", href: "https://aselectroplatingcompk.netlify.app/home.html", tone: "steel", tag: "Manufacturing" },
  { number: "03", name: "Allah Tawakal Electroplating", type: "Business website · Lahore", description: "A digital showcase for plastic electroplating services.", href: "https://allahtawakalplasticelectroplatingpk.netlify.app/", tone: "chrome", tag: "Manufacturing" },
  { number: "04", name: "Zenor Perfume", type: "E-commerce website", description: "A perfume brand experience built for product discovery.", href: "https://allahhtawakalcompk.netlify.app/", tone: "perfume", tag: "E-commerce" },
  { number: "05", name: "Sujoodly", type: "Android application", description: "A mobile app project available on Google Play.", href: "https://play.google.com/store/apps/details?id=com.neonweb.sujoodly.app", tone: "app", tag: "Mobile app" },
];

const privateProjects = [
  { name: "KYMC Complex", type: "Hospital management system", description: "A hospital management system project. Not publicly live yet." },
  { name: "Science Star Academy", type: "Campus management system", description: "An education and campus management system project. Not publicly live yet." },
];

const team = [
  { name: "Danish Malik", role: "CEO & Founder", initials: "DM" },
  { name: "Afifa", role: "Co-Founder", initials: "A" },
  { name: "Muhammad Zaryab", role: "WordPress Developer & Figma Designer", initials: "MZ" },
  { name: "Haider Ali", role: "Full Stack Developer", initials: "HA" },
  { name: "Waleed Ahmed", role: "Web Developer", initials: "WA" },
  { name: "Sana", role: "Graphic Designer & Social Media Marketing", initials: "S" },
  { name: "Muhammad Naqeeb", role: "Graphic Designer", initials: "MN" },
];

const socials = [
  { name: "Instagram", href: "https://www.instagram.com/dazoratech/" },
  { name: "Facebook", href: "https://www.facebook.com/share/1Eww5Eb9z3/" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/dazora-tech-417907427/" },
  { name: "X", href: "https://x.com/dazoratech" },
  { name: "TikTok", href: "https://www.tiktok.com/@dazoratech" },
];

function BrandMark({ small = false }: { small?: boolean }) {
  return (
    <span className={`brand-mark ${small ? "brand-mark-small" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 64 64" fill="none">
        <path d="M10 7C29 8 52 16 54 32C56 47 39 57 10 57V7Z" fill="url(#brandTop)" />
        <path d="M10 7C18 21 31 25 38 32C46 41 34 49 10 57C17 44 25 39 25 32C25 24 16 15 10 7Z" fill="url(#brandSide)" />
        <path d="M10 7C23 10 43 11 54 32C47 22 29 19 10 7Z" fill="#45D8FF" opacity=".8" />
        <defs>
          <linearGradient id="brandTop" x1="10" y1="7" x2="55" y2="48"><stop stopColor="#4528F5"/><stop offset=".55" stopColor="#287BFF"/><stop offset="1" stopColor="#E83CF3"/></linearGradient>
          <linearGradient id="brandSide" x1="10" y1="8" x2="39" y2="56"><stop stopColor="#8A22F4"/><stop offset=".55" stopColor="#F026E6"/><stop offset="1" stopColor="#6920B7"/></linearGradient>
        </defs>
      </svg>
    </span>
  );
}

function SectionIntro({ eyebrow, title, copy, center = false }: { eyebrow: string; title: string; copy?: string; center?: boolean }) {
  return (
    <div className={`section-intro ${center ? "section-intro-center" : ""}`}>
      <span className="eyebrow"><span />{eyebrow}</span>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const reveal = reduceMotion ? {} : { initial: { opacity: 0, y: 24 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.12 }, transition: { duration: 0.65, ease: "easeOut" as const } };
  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> Building thoughtful digital products from Islamabad to the world <ArrowUpRight size={13} /></div>
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Dazora Tech home"><BrandMark /><span>DAZORA<span className="brand-light">TECH</span></span></a>
        <nav className={menuOpen ? "main-nav nav-open" : "main-nav"}>
          {["Services", "Industries", "Work", "About", "Contact"].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-grid" />
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="hero-content">
          <motion.div {...reveal}>
            <div className="hero-kicker"><span className="kicker-line" /> SOFTWARE · DESIGN · DIGITAL GROWTH</div>
            <h1>Ideas into<br /><span className="gradient-text">digital impact.</span></h1>
            <p className="hero-copy">We design and build digital experiences, software and systems that help ambitious businesses move forward.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start a project <ArrowUpRight size={17} /></a>
              <a className="button button-quiet" href="#work">Explore our work <ArrowDown size={16} /></a>
            </div>
            <div className="hero-proof"><span className="proof-line" /><span>Founded in July 2022</span><span className="proof-separator">·</span><span>Islamabad, Pakistan</span></div>
          </motion.div>
        </div>
        <motion.div className="hero-art" initial={reduceMotion ? false : { opacity: 0, scale: .82, rotate: -8 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.1, ease: "easeOut" }}>
          <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="art-core"><BrandMark /><div className="core-shine" /></div>
          <span className="orbit-label orbit-label-top">CREATIVE THINKING</span><span className="orbit-label orbit-label-bottom">ENGINEERED TO SCALE</span>
          <span className="art-spark spark-one">✳</span><span className="art-spark spark-two">✧</span>
        </motion.div>
        <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-track"><i /></span><span>01 / 05</span></div>
      </section>

      <section className="intro-strip">
        <p>Technology should make progress feel <span>possible.</span></p>
        <span className="intro-note">From the first idea to the final launch, we bring strategy, design and development together.</span>
      </section>

      <section className="section services-section" id="services">
        <div className="section-shell">
          <motion.div {...reveal}><SectionIntro eyebrow="WHAT WE DO" title={<>One partner.<br /><span className="gradient-text">Many ways forward.</span></>} copy="From a first website to a business-critical platform, we bring the right mix of technology and creativity to every challenge." /></motion.div>
          <div className="services-grid">
            {services.map((service, i) => {
              const Icon = service.icon;
              return <motion.article className="service-card" key={service.title} {...reveal} transition={{ ...reveal.transition, delay: (i % 4) * .06 }}>
                <div className="service-icon"><Icon size={21} strokeWidth={1.6} /></div><span className="card-index">0{i + 1}</span>
                <h3>{service.title}</h3><p>{service.text}</p><span className="card-arrow"><ArrowUpRight size={17} /></span>
              </motion.article>;
            })}
          </div>
        </div>
      </section>

      <section className="industries-section section" id="industries">
        <div className="section-shell industries-layout">
          <motion.div {...reveal}><SectionIntro eyebrow="WHO WE WORK WITH" title={<>Built around<br /><span className="gradient-text">your industry.</span></>} copy="Different industries have different challenges. We shape digital solutions around the people, processes and goals behind each business." /></motion.div>
          <div className="industries-grid">
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              return <motion.div className="industry-item" key={industry.name} {...reveal} transition={{ ...reveal.transition, delay: i * .04 }}><span><Icon size={20} /></span><strong>{industry.name}</strong><ArrowUpRight size={15} /></motion.div>;
            })}
          </div>
        </div>
      </section>

      <section className="section work-section" id="work">
        <div className="section-shell">
          <div className="work-heading"><motion.div {...reveal}><SectionIntro eyebrow="SELECTED WORK" title={<>Made for real<br /><span className="gradient-text">business needs.</span></>} copy="A selection of websites and digital products shared with us. More project details and visuals will be added as they are provided." /></motion.div><a className="text-link" href="#contact">Have a project in mind? <ArrowUpRight size={16} /></a></div>
          <div className="projects-grid">
            {projects.map((project, i) => <motion.a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.name} {...reveal} transition={{ ...reveal.transition, delay: i * .05 }}>
              <div className={`project-visual ${project.tone}`}>
                <div className="visual-noise" /><span className="project-tag">{project.tag}</span>
                {project.tone === "garden" && <div className="garden-shape"><span /><i /><b /></div>}
                {project.tone === "steel" && <div className="steel-shape"><span>AS</span><i>PRECISION FINISH</i></div>}
                {project.tone === "chrome" && <div className="chrome-shape"><span>AT</span><i>CHROME · CRAFT · QUALITY</i></div>}
                {project.tone === "perfume" && <div className="perfume-shape"><span>ZENOR</span><i>EAU DE PARFUM</i></div>}
                {project.tone === "app" && <div className="app-shape"><span>سُجُود</span><i>SUJOODLY</i></div>}
                <span className="visual-open"><ArrowUpRight size={18} /></span>
              </div>
              <div className="project-info"><div><span className="project-number">{project.number} / 05</span><h3>{project.name}</h3><p>{project.description}</p></div><ArrowUpRight className="project-arrow" size={20} /></div>
              <span className="project-type">{project.type}</span>
            </motion.a>)}
          </div>
          <div className="private-work">
            <div className="private-heading"><span className="eyebrow"><span /> PRIVATE & IN-PROGRESS</span><p>Systems shared with us that are not publicly live yet.</p></div>
            <div className="private-grid">{privateProjects.map((project) => <div className="private-card" key={project.name}><div className="private-icon"><Layers3 size={19} /></div><div><h3>{project.name}</h3><span>{project.type}</span><p>{project.description}</p></div><span className="private-status">Not live</span></div>)}</div>
          </div>
        </div>
      </section>

      <section className="about-section section" id="about">
        <div className="section-shell about-layout">
          <motion.div className="about-visual" {...reveal}><div className="about-orb"><BrandMark /><span className="about-orb-ring" /></div><div className="about-caption"><span>THE JOURNEY</span><strong>Since 2022</strong></div><div className="about-coordinate">33°41' N&nbsp;&nbsp; 73°03' E</div></motion.div>
          <motion.div className="about-copy" {...reveal}>
            <SectionIntro eyebrow="A LITTLE ABOUT US" title={<>Small beginnings.<br /><span className="gradient-text">Bigger possibilities.</span></>} />
            <p className="about-lead">Dazora Tech began in July 2022 with a simple portfolio website and a founder curious about what technology could make possible.</p>
            <p>Founded by Danish Malik while he was still a student, the journey grew from an early web project into a wider vision: helping businesses establish and strengthen their digital presence through technology, creativity and practical problem-solving.</p>
            <p>From an early project for Allah Tawakal Plastic Electroplating in Lahore to a growing team across development, design and marketing, we keep building one meaningful step at a time.</p>
            <div className="about-facts"><div><strong>2022</strong><span>Year founded</span></div><div><strong>Islamabad</strong><span>Based in Pakistan</span></div><div><strong>Worldwide</strong><span>Ambition & reach</span></div></div>
          </motion.div>
        </div>
      </section>

      <section className="team-section section">
        <div className="section-shell">
          <motion.div {...reveal}><SectionIntro eyebrow="THE PEOPLE BEHIND THE WORK" title={<>A team of different<br /><span className="gradient-text">skills, one direction.</span></>} copy="Leadership, development, design and digital marketing come together to move each project forward." /></motion.div>
          <div className="team-grid">{team.map((person, i) => <motion.div className="team-card" key={person.name} {...reveal} transition={{ ...reveal.transition, delay: i * .04 }}><div className="team-avatar"><span>{person.initials}</span><i /></div><h3>{person.name}</h3><p>{person.role}</p></motion.div>)}</div>
        </div>
      </section>

      <section className="belief-section section">
        <div className="section-shell belief-layout">
          <motion.div {...reveal}><SectionIntro eyebrow="OUR NORTH STAR" title={<>Build with purpose.<br /><span className="gradient-text">Grow with trust.</span></>} copy="We believe good technology is more than a launch. It should keep working, keep helping and keep earning the trust of the people who rely on it." /></motion.div>
          <motion.div className="belief-cards" {...reveal}>
            <article className="belief-card"><span className="belief-number">01 / VISION</span><div className="belief-icon"><Globe2 size={22} /></div><h3>Our vision</h3><p>To become the most trusted software studio for ambitious companies worldwide — known for quality, reliability, and the ability to turn complex ideas into elegant, scalable products.</p></article>
            <article className="belief-card belief-card-featured"><span className="belief-number">02 / MISSION</span><div className="belief-icon"><Workflow size={22} /></div><h3>Our mission</h3><p>To build software that lasts. We combine technical excellence with a deep understanding of business needs, delivering systems that reduce friction, drive growth, and earn trust over time.</p></article>
          </motion.div>
        </div>
      </section>

      <section className="process-section section">
        <div className="section-shell">
          <motion.div {...reveal}><SectionIntro eyebrow="HOW WE WORK" title={<>From first conversation<br /><span className="gradient-text">to real-world launch.</span></>} copy="A clear, collaborative process keeps the work focused and the next step visible." center /></motion.div>
          <div className="process-grid">{[{n:"01",t:"Discover",d:"Understand the idea, audience and business goals."},{n:"02",t:"Plan",d:"Shape the scope, priorities and experience."},{n:"03",t:"Build",d:"Design, develop and refine the solution."},{n:"04",t:"Launch",d:"Prepare for release and support the next steps."}].map((step, i) => <motion.div className="process-step" key={step.n} {...reveal} transition={{ ...reveal.transition, delay: i * .08 }}><span>{step.n}</span><div className="process-line" /><h3>{step.t}</h3><p>{step.d}</p></motion.div>)}</div>
        </div>
      </section>

      <section className="contact-section section" id="contact">
        <div className="contact-glow" />
        <div className="section-shell contact-shell">
          <motion.div className="contact-heading" {...reveal}><span className="eyebrow"><span /> HAVE AN IDEA?</span><h2>Let's make<br /><span className="gradient-text">it happen.</span></h2><p>Tell us what you're working on. Let's explore how thoughtful technology can move it forward.</p><a className="button button-primary" href="mailto:dazoratech@gmail.com">Start a conversation <ArrowUpRight size={17} /></a></motion.div>
          <motion.div className="contact-details" {...reveal}>
            <a className="contact-row" href="mailto:dazoratech@gmail.com"><span className="contact-icon"><Mail size={19} /></span><span><small>EMAIL US</small><strong>dazoratech@gmail.com</strong></span><ArrowUpRight size={17} /></a>
            <a className="contact-row" href="https://wa.me/923348815028" target="_blank" rel="noreferrer"><span className="contact-icon"><Phone size={19} /></span><span><small>CALL / WHATSAPP</small><strong>+92 334 8815028</strong></span><ArrowUpRight size={17} /></a>
            <a className="contact-row" href="https://maps.app.goo.gl/fTS7fmYQNBqiDED28" target="_blank" rel="noreferrer"><span className="contact-icon"><MapPin size={19} /></span><span><small>FIND US</small><strong>Islamabad, Pakistan</strong></span><ArrowUpRight size={17} /></a>
            <div className="contact-note"><Check size={16} /><span>Open to conversations with businesses and teams worldwide.</span></div>
          </motion.div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-top"><a className="brand footer-brand" href="#home"><BrandMark /><span>DAZORA<span className="brand-light">TECH</span></span></a><p>Started in July 2022.<br />Growing through creativity. Building through technology.</p><a href="#home" className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Dazora Tech. All rights reserved.</span><div className="social-links">{socials.map((social) => <a key={social.name} href={social.href} target="_blank" rel="noreferrer">{social.name}<ArrowUpRight size={11} /></a>)}</div><span>Islamabad · Pakistan</span></div>
      </footer>
    </main>
  );
}
