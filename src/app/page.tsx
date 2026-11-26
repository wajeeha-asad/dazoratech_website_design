"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Code2, Smartphone,
  Search, Boxes, HeartPulse, Truck, ShoppingBag, Palette, Video, Globe2,
  GraduationCap, Factory, Sprout, Landmark, Rocket, Mail, MapPin, Phone,
  Layers3, MoveUpRight, Sparkles
} from "lucide-react";

const services = [
  ["01", "Web experiences", "Web development, WordPress and Shopify experiences built around your business.", Code2],
  ["02", "Apps & platforms", "Mobile applications and custom digital products that make everyday work easier.", Smartphone],
  ["03", "Business systems", "ERP, healthcare, logistics and campus management software for connected operations.", Boxes],
  ["04", "Commerce", "E-commerce experiences that make discovering and buying products feel effortless.", ShoppingBag],
  ["05", "Growth & visibility", "SEO and digital marketing that help the right people find your business.", Search],
  ["06", "Visual identity", "Graphic design and video content that give your brand a recognisable voice.", Palette],
] as const;

const projects = [
  { no:"01", name:"Nature Gulf Garden", type:"Website · UAE", note:"A digital home for a garden and landscaping business.", url:"https://share.google/hKIQ0eunA21ZdmwOr", visual:"garden", label:"LANDSCAPE / UAE" },
  { no:"02", name:"A.S. Electroplating", type:"Website · Lahore", note:"A web presence for an industrial electroplating business.", url:"https://aselectroplatingcompk.netlify.app/home.html", visual:"metal", label:"INDUSTRIAL / PK" },
  { no:"03", name:"Allah Tawakal", type:"Website · Lahore", note:"A business website for plastic electroplating services.", url:"https://allahtawakalplasticelectroplatingpk.netlify.app/", visual:"chrome", label:"MANUFACTURING / PK" },
  { no:"04", name:"Zenor Perfume", type:"E-commerce · Pakistan", note:"A product-led digital experience for a fragrance brand.", url:"https://allahhtawakalcompk.netlify.app/", visual:"scent", label:"FRAGRANCE / COMMERCE" },
  { no:"05", name:"Sujoodly", type:"Android application", note:"A mobile application available on Google Play.", url:"https://play.google.com/store/apps/details?id=com.neonweb.sujoodly.app", visual:"app", label:"MOBILE / ANDROID" },
];

const industries = [
  ["Healthcare", HeartPulse], ["Logistics & supply chain", Truck],
  ["E-commerce & retail", ShoppingBag], ["Manufacturing & ERP", Factory],
  ["Startups & SaaS", Rocket], ["Financial services", Landmark],
  ["Education & EdTech", GraduationCap], ["AgriTech", Sprout],
] as const;

const team = [
  ["Danish Malik", "CEO & Founder"], ["Afifa", "Co-Founder"],
  ["Muhammad Zaryab", "WordPress Developer & Figma Designer"],
  ["Haider Ali", "Full Stack Developer"], ["Waleed Ahmed", "Web Developer"],
  ["Sana", "Graphic Designer & Social Media Marketing"],
  ["Muhammad Naqeeb", "Graphic Designer"],
];

const socials = [
  ["Instagram","https://www.instagram.com/dazoratech/"],
  ["Facebook","https://www.facebook.com/share/1Eww5Eb9z3/"],
  ["LinkedIn","https://www.linkedin.com/in/dazora-tech-417907427/"],
  ["X","https://x.com/dazoratech"], ["TikTok","https://www.tiktok.com/@dazoratech"],
];

function BrandMark() {
  return <span className="brand-symbol" aria-hidden="true"><svg viewBox="0 0 64 64" fill="none">
    <path d="M8 5C30 7 55 17 56 33C57 49 39 58 8 59V5Z" fill="url(#dazTop)"/>
    <path d="M8 5C18 22 34 25 40 33C47 43 31 53 8 59C15 45 24 40 24 32C24 24 15 14 8 5Z" fill="url(#dazSide)"/>
    <path d="M8 5C27 12 45 14 56 33" stroke="#7DEBFF" strokeWidth="1.5" opacity=".9"/>
    <defs><linearGradient id="dazTop" x1="8" y1="5" x2="56" y2="55"><stop stopColor="#4825E8"/><stop offset=".56" stopColor="#286BFF"/><stop offset="1" stopColor="#F02BEA"/></linearGradient><linearGradient id="dazSide" x1="8" y1="5" x2="40" y2="59"><stop stopColor="#8D27F3"/><stop offset=".58" stopColor="#E92BEA"/><stop offset="1" stopColor="#5220A6"/></linearGradient></defs>
  </svg></span>;
}

function Reveal({ children, className="" }: {children: React.ReactNode; className?: string}) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={reduced ? false : {opacity:0,y:28}} whileInView={reduced ? undefined : {opacity:1,y:0}} viewport={{once:true,amount:.14}} transition={{duration:.7,ease:"easeOut"}}>{children}</motion.div>;
}

function Heading({eyebrow,title,copy,light=false}:{eyebrow:string;title:React.ReactNode;copy?:string;light?:boolean}) {
  return <div className={`section-heading ${light?"heading-light":""}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>;
}

export default function Home() {
  const [menuOpen,setMenuOpen]=useState(false);
  const close=()=>setMenuOpen(false);
  return <main>
    <div className="topline"><span>INDEPENDENT DIGITAL STUDIO</span><span>ISLAMABAD, PK <i/> WORKING WORLDWIDE</span></div>
    <header className="header">
      <a className="brand" href="#home" aria-label="Dazora Tech home" onClick={close}><BrandMark/><span>DAZORA<span className="brand-thin">TECH</span></span></a>
      <button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle navigation">{menuOpen?<X/>:<Menu/>}</button>
      <nav className={menuOpen?"nav nav-open":"nav"}>{[["Work","#work"],["Expertise","#expertise"],["Studio","#studio"],["Contact","#contact"]].map(([n,h])=><a key={n} href={h} onClick={close}>{n}</a>)}<a className="nav-contact" href="#contact" onClick={close}>Start a project <ArrowUpRight size={15}/></a></nav>
    </header>

    <section className="hero" id="home">
      <div className="hero-left">
        <div className="hero-index"><span>01 — DIGITAL CRAFT</span><span>EST. 2022</span></div>
        <motion.div initial={{opacity:0,y:25}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
          <p className="hero-overline"><span/> WE TURN COMPLEX IDEAS INTO CLEAR EXPERIENCES</p>
          <h1>Make your<br/>next move<br/><em>matter.</em></h1>
          <div className="hero-bottomline"><p>We blend technology, design and strategy to create digital experiences that move businesses forward.</p><a href="#work" className="round-link" aria-label="Explore selected work"><ArrowDownRight/></a></div>
        </motion.div>
        <div className="hero-foot"><span>SOFTWARE / DESIGN / DIGITAL GROWTH</span><span>SCROLL TO EXPLORE ↓</span></div>
      </div>
      <div className="hero-right">
        <div className="hero-art-grid"/>
        <motion.div className="hero-emblem" initial={{opacity:0,scale:.72,rotate:-12}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1.1,ease:"easeOut"}}>
          <div className="emblem-halo"/><div className="emblem-orbit orbit-a"/><div className="emblem-orbit orbit-b"/><div className="emblem-disc"><BrandMark/></div><span className="emblem-caption caption-a">IDEAS, IN MOTION</span><span className="emblem-caption caption-b">BUILT TO GO FURTHER</span>
        </motion.div>
        <div className="hero-side-note">THINK / DESIGN / BUILD / GROW</div>
      </div>
    </section>

    <section className="manifesto"><span className="eyebrow">A BETTER KIND OF DIGITAL PARTNER</span><p>Good technology should feel <span>simple.</span><br/>Great design should make it <span>memorable.</span></p><a href="#studio">Get to know us <ArrowUpRight size={16}/></a></section>

    <section className="work-section section-pad" id="work">
      <div className="section-wrap"><div className="work-head"><Reveal><Heading eyebrow="02 / SELECTED WORK" title={<>Proof in the<br/><i>projects.</i></>} copy="A selection of digital work shared with us. We’re preparing richer case studies and project imagery as those assets become available."/></Reveal><span className="work-count">05 <small>PROJECTS</small></span></div>
      <div className="work-grid">{projects.map((p,i)=><Reveal key={p.no} className={`work-card work-card-${i+1}`}><a href={p.url} target="_blank" rel="noreferrer" className="work-link"><div className={`work-art art-${p.visual}`}><span className="art-label">{p.label}</span><span className="art-number">{p.no}</span><div className="art-object">{p.visual==="garden"?<><i/><b/><span/></>:p.visual==="metal"?<strong>AS<span> / </span></strong>:p.visual==="chrome"?<strong>AT</strong>:p.visual==="scent"?<strong>ZENOR</strong>:<strong>سُجُود<br/><small>SUJOODLY</small></strong>}</div><span className="art-visit"><ArrowUpRight/></span></div><div className="work-meta"><div><span>{p.type}</span><h3>{p.name}</h3><p>{p.note}</p></div><ArrowUpRight className="work-arrow"/></div></a></Reveal>)}</div>
      <div className="private-note"><div><span className="eyebrow">IN DEVELOPMENT</span><h3>Behind-the-scenes systems.</h3></div><p>KYMC Complex — hospital management system<br/>Science Star Academy — campus management system<br/><small>Both are not publicly live; details will be shared when approved.</small></p></div>
      </div>
    </section>

    <section className="expertise-section section-pad" id="expertise"><div className="section-wrap expertise-layout"><Reveal><Heading eyebrow="03 / WHAT WE DO" title={<>Creative thinking.<br/><i>Technical depth.</i></>} copy="From brand touchpoints to business-critical platforms, we bring the right mix of creativity and engineering to the problem."/></Reveal><div className="service-list">{services.map(([n,t,d,Icon])=><div className="service-row" key={n}><span className="service-no">{n}</span><span className="service-icon"><Icon size={20}/></span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight className="service-arrow"/></div>)}</div></div></section>

    <section className="industries section-pad"><div className="section-wrap"><div className="industry-head"><Reveal><Heading eyebrow="04 / WHO WE HELP" title={<>Different worlds.<br/><i>One clear approach.</i></>} copy="We work across industries, adapting the technology to the people and processes behind each business."/></Reveal><span className="industry-aside">CURIOUS BY NATURE.<br/>PRACTICAL BY DESIGN.</span></div><div className="industry-grid">{industries.map(([name,Icon],i)=><div className="industry-cell" key={name}><span>0{i+1}</span><Icon size={20}/><strong>{name}</strong><ArrowUpRight size={15}/></div>)}</div></div></section>

    <section className="studio-section section-pad" id="studio"><div className="section-wrap studio-layout"><Reveal className="studio-art"><div className="studio-orbit orbit-one"/><div className="studio-orbit orbit-two"/><div className="studio-logo"><BrandMark/></div><span className="studio-date">JULY 2022 — THE BEGINNING</span><span className="studio-coord">ISLAMABAD / PAKISTAN</span></Reveal><Reveal className="studio-copy"><Heading eyebrow="05 / THE STUDIO" title={<>Started with curiosity.<br/><i>Growing with purpose.</i></>}/><p className="studio-lead">Dazora Tech began in July 2022, when founder Danish Malik was still a student with a passion for technology, creativity and web development.</p><p>One portfolio website opened the door to professional work. An early project for Allah Tawakal Plastic Electroplating in Lahore became an important milestone. From an individual beginning, the vision grew into a team spanning development, design and digital marketing.</p><p>Today, the ambition is to help businesses build a stronger digital presence through thoughtful, reliable technology.</p><div className="studio-values"><div><strong>2022</strong><span>Founded</span></div><div><strong>Islamabad</strong><span>Based in Pakistan</span></div><div><strong>Worldwide</strong><span>Open outlook</span></div></div></Reveal></div></section>

    <section className="people-section section-pad"><div className="section-wrap"><div className="people-heading"><Reveal><Heading eyebrow="06 / THE PEOPLE" title={<>Different strengths.<br/><i>Shared ambition.</i></>} copy="A team bringing leadership, development, design and marketing together."/></Reveal><span className="people-caption">THE PEOPLE BEHIND<br/>THE PIXELS & CODE.</span></div><div className="people-grid">{team.map(([name,role],i)=><div className="person" key={name}><span className="person-no">0{i+1}</span><div className="person-mark">{name.split(" ").map(x=>x[0]).join("").slice(0,2)}</div><h3>{name}</h3><p>{role}</p></div>)}</div></div></section>

    <section className="belief-section section-pad"><div className="section-wrap belief-layout"><Reveal><Heading eyebrow="07 / WHAT GUIDES US" title={<>Build for today.<br/><i>Think beyond it.</i></>} copy="We believe useful software should solve a real problem today and remain dependable as a business grows."/></Reveal><div className="belief-content"><article><span>OUR VISION / 01</span><h3>Earn trust.<br/>Worldwide.</h3><p>To become the most trusted software studio for ambitious companies worldwide — known for quality, reliability, and the ability to turn complex ideas into elegant, scalable products.</p></article><article><span>OUR MISSION / 02</span><h3>Build software<br/>that lasts.</h3><p>We combine technical excellence with a deep understanding of business needs, delivering systems that reduce friction, drive growth, and earn trust over time.</p></article></div></div></section>

    <section className="contact-section section-pad" id="contact"><div className="section-wrap contact-layout"><Reveal><span className="eyebrow">08 / HAVE SOMETHING IN MIND?</span><h2>Let's make<br/><i>it real.</i></h2><p>Tell us what you’re imagining. We’ll help you find a thoughtful way to bring it to life.</p><a className="contact-cta" href="https://wa.me/923348815028" target="_blank" rel="noreferrer">Start a conversation <ArrowUpRight/></a></Reveal><div className="contact-info"><a href="mailto:dazoratech@gmail.com"><Mail/><span><small>EMAIL</small>dazoratech@gmail.com</span><ArrowUpRight/></a><a href="https://wa.me/923348815028" target="_blank" rel="noreferrer"><Phone/><span><small>CALL / WHATSAPP</small>+92 334 8815028</span><ArrowUpRight/></a><a href="https://maps.app.goo.gl/fTS7fmYQNBqiDED28" target="_blank" rel="noreferrer"><MapPin/><span><small>LOCATION</small>Islamabad, Pakistan</span><ArrowUpRight/></a></div></div></section>
    <footer className="footer"><div className="footer-top"><a className="brand footer-brand" href="#home"><BrandMark/><span>DAZORA<span className="brand-thin">TECH</span></span></a><p>Started in 2022. Growing through creativity.<br/>Building through technology.</p><a className="back-top" href="#home">BACK TO TOP ↑</a></div><div className="footer-bottom"><span>© 2026 Dazora Tech. All rights reserved.</span><div>{socials.map(([name,url])=><a key={name} href={url} target="_blank" rel="noreferrer">{name}<MoveUpRight size={12}/></a>)}</div><span>ISLAMABAD · PAKISTAN</span></div></footer>
  </main>;
}
