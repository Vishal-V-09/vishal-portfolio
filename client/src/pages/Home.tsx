/** Red Editorial Circle portfolio for Vishal V. */
import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Check,
  ChevronDown,
  Code2,
  Database,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Orbit,
  Phone,
  Send,
  Server,
  Sparkles,
  Terminal,
  X,
  Zap,
} from "lucide-react";
import { toast } from "sonner";

const contactEmail = "vishal2004lnpuram@gmail.com";
const contactPhone = "9444582759";
const contactPhoneHref = "+919444582759";
const githubProfileUrl = "https://github.com/Vishal-V-09";

const navItems = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "certifications",
  "contact",
];
const projects = [
  {
    title: "Smart Parking Management System",
    tag: "Featured project",
    date: "JAN — FEB 2026",
    tech: ["Python", "PyMySQL", "MySQL"],
    description:
      "A structured parking operations system for live slot availability, vehicle records, billing, and reliable database workflows.",
    features: [
      "100+ vehicle records",
      "Sub-100ms query response",
      "Datetime-based billing",
      "Dynamic floor allocation",
    ],
    accent: "primary",
    icon: Database,
    githubUrl: "https://github.com/Vishal-V-09/SMART-PARKING-MANAGEMENT",
  },
  {
    title: "Smart Code Generator Application",
    tag: "Desktop automation",
    date: "MAY — JUL 2025",
    tech: ["Python", "Tkinter", "MySQL"],
    description:
      "A desktop application that automates structured product code generation and validation with database-driven templates.",
    features: [
      "Rule-based generation",
      "Duplicate prevention",
      "History tracking",
      "Audit-ready records",
    ],
    accent: "secondary",
    icon: Code2,
  },
  {
    title: "Frontend Simulation of Game Control System",
    tag: "Interface study",
    date: "MAR — APR 2026",
    tech: ["HTML", "CSS"],
    description:
      "An interactive dashboard simulation with mission, inventory, profile, and settings modules designed around responsive visual components.",
    features: [
      "Missions section",
      "Inventory interface",
      "Interactive dashboard",
      "Expandable UI panels",
    ],
    accent: "tertiary",
    icon: Orbit,
  },
  {
    title: "DSA Learning Studio",
    tag: "Learning platform",
    date: "2026 — NOW",
    tech: ["JavaScript"],
    description:
      "A web-based DSA learning platform designed to make data structures and algorithms easier to understand through interactive visualizations, step-by-step execution, and algorithm analysis.",
    features: [
      "Interactive visualizations",
      "Step-by-step execution",
      "Algorithm analysis",
      "Core DSA concepts",
    ],
    accent: "tertiary",
    icon: Network,
    githubUrl: "https://github.com/Vishal-V-09/DSA-LEARNING-STUDIO",
  },
];
const skills = [
  { label: "Programming & database", items: ["Python", "MySQL"], icon: Code2 },
  {
    label: "Development tools",
    items: ["Tkinter", "PyMySQL", "GitHub", "Visual Studio Code"],
    icon: Terminal,
  },
  {
    label: "Backend concepts",
    items: [
      "CRUD Operations",
      "Database Integration",
      "Input Validation",
      "Data Validation",
      "Time-Based Automation",
      "Backend Logic",
      "Structured Data Management",
    ],
    icon: Server,
  },
  {
    label: "Additional toolkit",
    items: ["Microsoft Excel", "Power BI — Basic", "HTML", "CSS"],
    icon: Zap,
  },
];
const certifications = [
  "Python Programming Certification",
  "MySQL Database Certification",
  "Data Analysis and Mining — SRM University",
  "Advanced Microsoft Excel Certification",
  "Quantium — Data Analytics",
  "AWS Academy — Data Engineering",
];

function SectionLabel({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      {children}
    </div>
  );
}
function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`glass-card ${className}`}>{children}</div>;
}

export default function Home() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const roles = [
      "Python Developer",
      "Backend Developer",
      "Database Enthusiast",
      "Problem Solver",
    ];
    const timer = window.setInterval(
      () => setRoleIndex(i => (i + 1) % roles.length),
      2400
    );
    const onScroll = () => {
      const current = navItems.find(id => {
        const el = document.getElementById(id);
        return (
          el &&
          window.scrollY >= el.offsetTop - 180 &&
          window.scrollY < el.offsetTop + el.offsetHeight - 180
        );
      });
      if (current) setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    const revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -8% 0px" }
    );
    document
      .querySelectorAll(".section-pad")
      .forEach(section => revealObserver.observe(section));
    return () => {
      window.clearInterval(timer);
      window.removeEventListener("scroll", onScroll);
      revealObserver.disconnect();
    };
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const roles = [
    "Python Developer",
    "Backend Developer",
    "Database Enthusiast",
    "Problem Solver",
  ];

  return (
    <div className="portfolio-shell">
      <div className="ambient-grid" aria-hidden="true" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={() => scrollTo("home")}>
          <img
            className="brand-mark-image"
            src="/assets/vv-mark.png"
            alt="VV"
          />
          <span>
            <strong>Vishal V</strong>
            <small>PYTHON / BACKEND</small>
          </span>
        </a>
        <nav
          className={menuOpen ? "nav open" : "nav"}
          aria-label="Primary navigation"
        >
          {navItems.map(item => (
            <a
              key={item}
              className={active === item ? "active" : ""}
              href={`#${item}`}
              onClick={() => scrollTo(item)}
            >
              {item}
            </a>
          ))}
        </nav>
        <button className="connect-btn" onClick={() => scrollTo("contact")}>
          Let’s Connect <ArrowUpRight size={16} />
        </button>
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse-dot" /> AVAILABLE FOR INTERNSHIPS{" "}
              <span className="eyebrow-line" />
            </div>
            <h1>
              Hi, I’m <em>Vishal.</em>
              <br />
              <span>I build the logic</span>
              <br />
              behind useful software.
            </h1>
            <div className="rotating-role">
              <span className="mono-caret">›</span>
              <span>{roles[roleIndex]}</span>
              <span className="role-index">0{roleIndex + 1} / 04</span>
            </div>
            <p className="hero-lede">
              MCA student and junior Python Backend Developer focused on
              database-driven applications, validation, automation, and
              efficient system design.
            </p>
            <div className="hero-actions">
              <button
                className="primary-btn"
                onClick={() => scrollTo("projects")}
              >
                View My Work <ArrowUpRight size={17} />
              </button>
              <button className="text-btn" onClick={() => scrollTo("contact")}>
                Contact Me <span>↗</span>
              </button>
            </div>
            <div className="social-row">
              <a
                href="https://www.linkedin.com/in/v-vishal-4b0772309"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a href={`mailto:${contactEmail}`}>
                <Mail size={16} /> Email
              </a>
              <a
                href={githubProfileUrl}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Abstract backend architecture visualization"
          >
            <img
              className="hero-art"
              src="/assets/backend-hero.png"
              alt="Abstract backend architecture"
            />
            <div className="visual-caption">
              <span>FIG. 01</span>
              <span>BACKEND / SYSTEMS</span>
            </div>
            <div className="orbit-ring ring-one" />
            <div className="orbit-ring ring-two" />
            <div className="visual-core">
              <Network size={54} strokeWidth={1.1} />
              <span>
                VISHAL
                <br />
                <b>CORE</b>
              </span>
            </div>
            <div className="node node-a">
              <Database size={17} />
              <span>DATA</span>
            </div>
            <div className="node node-b">
              <Server size={17} />
              <span>API</span>
            </div>
            <div className="node node-c">
              <Code2 size={17} />
              <span>LOGIC</span>
            </div>
            <div className="code-window">
              <div className="window-bar">
                <span />
                <span />
                <span />
                <i>parking_system.py</i>
              </div>
              <pre>
                <span className="code-keyword">def</span>{" "}
                <span className="code-function">allocate_slot</span>(vehicle):{`\n`}{" "}
                <span className="code-keyword">if</span>{" "}
                <span className="code-function">is_valid</span>(vehicle):{`\n`} slot ={" "}
                <span className="code-result">find_available</span>(){`\n`}{" "}
                <span className="code-keyword">return</span>{" "}
                <span className="code-result">save_record</span>(slot)
              </pre>
            </div>
            <div className="visual-footer">
              <span>
                <i className="tiny-dot" /> SYSTEMS ONLINE
              </span>
              <span>CHENNAI, IN</span>
            </div>
          </div>
        </section>

        <section id="about" className="section-pad about">
          <div className="section-aside">
            <SectionLabel number="01">ABOUT ME</SectionLabel>
            <p className="aside-note">
              From commerce to code.
              <br />A deliberate transition.
            </p>
          </div>
          <div className="section-content">
            <h2>
              Practical systems.
              <br />
              <span>Curious mind.</span>
            </h2>
            <div className="about-grid">
              <div>
                <p>
                  I am an MCA student at SRM Institute of Science and Technology
                  with a strong interest in backend and software development.
                </p>
                <p>
                  My background includes building database-driven applications
                  using Python and MySQL. I enjoy working on the logic behind
                  applications, including CRUD operations, input validation,
                  database integration, automation, and structured data
                  management.
                </p>
                <p>
                  Coming from a B.Com background and transitioning into
                  technology, I bring analytical thinking and a growing
                  technical foundation to software development.
                </p>
              </div>
              <div className="signal-list">
                <div>
                  <span>01</span>
                  <GraduationCap />
                  <b>MCA Student</b>
                  <small>SRM Institute of Science and Technology</small>
                </div>
                <div>
                  <span>02</span>
                  <Code2 />
                  <b>Python Developer</b>
                  <small>Logic-first application building</small>
                </div>
                <div>
                  <span>03</span>
                  <Database />
                  <b>Database Development</b>
                  <small>MySQL / structured data</small>
                </div>
                <div>
                  <span>04</span>
                  <Zap />
                  <b>Automation & Logic</b>
                  <small>Reliable workflows, less repetition</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section-pad skills">
          <div className="section-aside">
            <SectionLabel number="02">SKILL STACK</SectionLabel>
            <p className="aside-note">
              Tools I use to make
              <br />
              systems make sense.
            </p>
          </div>
          <div className="section-content">
            <div className="section-heading">
              <h2>
                Built around <span>clarity.</span>
              </h2>
              <p>
                No inflated percentages. Just a growing toolkit shaped by
                projects and practice.
              </p>
            </div>
            <div className="skills-grid">
              {skills.map(({ label, items, icon: Icon }) => (
                <GlassCard key={label}>
                  <div className="card-icon">
                    <Icon size={19} />
                  </div>
                  <h3>{label}</h3>
                  <div className="tag-cloud">
                    {items.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section-pad journey">
          <div className="section-aside">
            <SectionLabel number="03">EXPERIENCE</SectionLabel>
            <p className="aside-note">
              A timeline of
              <br />
              learning in public.
            </p>
          </div>
          <div className="section-content">
            <h2>
              My development <span>journey.</span>
            </h2>
            <div className="journey-rail">
              {[
                {
                  year: "2025",
                  title: "Smart Code Generator Application",
                  note: "Completed · First database-driven desktop system",
                },
                {
                  year: "2026",
                  title: "Smart Parking Management System",
                  note: "Completed · Real-time records, allocation, and billing",
                },
                {
                  year: "2026",
                  title: "Frontend Simulation of Game Control System",
                  note: "Completed · Responsive interface and interaction study",
                },
                {
                  year: "May — June 2026",
                  title: "Internship Training — PLM & Teamcenter",
                  note: "Intelizign Lifecycle Services Private Limited · Hands-on Teamcenter PLM architecture, data modeling, and product lifecycle workflows · Managed BOM hierarchies in Structure Manager · Designed automated lifecycle processes in Workflow Designer",
                },
                {
                  year: "2026 — NOW",
                  title: "DSA Learning Studio",
                  note: "Ongoing · Building a focused space for learning data structures and algorithms",
                },
              ].map((item, i) => (
                <div
                  className={`journey-item ${i === 4 ? "current" : "completed"}`}
                  key={item.year + item.title}
                >
                  <span className="journey-year">{item.year}</span>
                  <div className="journey-dot" />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section-pad projects">
          <div className="section-aside">
            <SectionLabel number="04">SELECTED WORK</SectionLabel>
            <p className="aside-note">
              Proof of practice,
              <br />
              not just potential.
            </p>
          </div>
          <div className="section-content">
            <div className="section-heading">
              <h2>
                Systems I’ve <span>shaped.</span>
              </h2>
              <p>
                Four projects that trace the path from structured logic to
                complete interfaces.
              </p>
            </div>
            <div className="project-list">
              {projects.map(
                (
                  {
                    title,
                    tag,
                    date,
                    tech,
                    description,
                    features,
                    accent,
                    icon: Icon,
                    githubUrl,
                  },
                  i
                ) => (
                  <article
                    className={`project-card ${accent} ${i === 0 ? "featured" : ""}`}
                    key={title}
                  >
                    <div className="project-top">
                      <span className="project-number">0{i + 1}</span>
                      <span className="project-tag">
                        {i === 0 && <Sparkles size={13} />} {tag}
                      </span>
                      <span className="project-date">{date}</span>
                    </div>
                    <div className="project-body">
                      <div className="project-copy">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="tag-cloud compact">
                          {tech.map(t => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                        <div className="feature-grid">
                          {features.map(f => (
                            <span key={f}>
                              <Check size={13} />
                              {f}
                            </span>
                          ))}
                        </div>
                        <div className="project-actions">
                          <button
                            className="small-btn"
                            onClick={() =>
                              toast(
                                "Project details are ready to be connected to a live demo."
                              )
                            }
                          >
                            Project Details <ArrowUpRight size={14} />
                          </button>
                          {githubUrl && (
                            <a
                              className="icon-btn"
                              href={githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={`Open ${title} on GitHub`}
                            >
                              <Github size={17} />
                            </a>
                          )}
                        </div>
                      </div>
                      <div className="project-visual">
                        <div className="mini-interface">
                          <div className="mini-header">
                            <Icon size={16} />
                            <span>
                              {i === 0
                                ? "SLOT_MONITOR"
                                : i === 1
                                  ? "CODE_BUILDER"
                                  : i === 2
                                    ? "CONTROL_DECK"
                                    : "DSA_STUDIO"}
                            </span>
                            <span className="mini-status" />
                          </div>
                          {i === 0 ? (
                            <>
                              <div className="slot-grid">
                                {Array.from({ length: 12 }, (_, n) => (
                                  <span
                                    key={n}
                                    className={
                                      n === 3 || n === 8 ? "filled" : ""
                                    }
                                  >
                                    {String(n + 1).padStart(2, "0")}
                                  </span>
                                ))}
                              </div>
                              <div className="metric-row">
                                <b>
                                  084 <small>VEHICLES</small>
                                </b>
                                <b>
                                  016 <small>OPEN SLOTS</small>
                                </b>
                              </div>
                            </>
                          ) : i === 1 ? (
                            <pre className="mini-code">
                              <span>for</span> record <span>in</span> database:
                              {`\n`} validate(record){`\n`} save(record)
                            </pre>
                          ) : i === 2 ? (
                            <div className="game-panels">
                              <span>MISSIONS</span>
                              <span>INVENTORY</span>
                              <span>PROFILE</span>
                              <span>SETTINGS</span>
                            </div>
                          ) : (
                            <div className="game-panels">
                              <span>ARRAYS</span>
                              <span>LINKED LISTS</span>
                              <span>SORTING</span>
                              <span>SEARCHING</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        <section id="education" className="section-pad education">
          <div className="section-aside">
            <SectionLabel number="05">EDUCATION</SectionLabel>
            <p className="aside-note">
              The foundation
              <br />
              behind the practice.
            </p>
          </div>
          <div className="section-content">
            <h2>
              Learning with <span>intent.</span>
            </h2>
            <div className="education-list">
              <GlassCard>
                <div className="edu-year">2025 — 2027</div>
                <div className="edu-icon">
                  <GraduationCap />
                </div>
                <div>
                  <h3>Master of Computer Applications</h3>
                  <p>SRM Institute of Science and Technology · Chennai</p>
                  <span className="status-chip">
                    <i /> Currently pursuing · Expected June 2027
                  </span>
                </div>
              </GlassCard>
              <GlassCard>
                <div className="edu-year">2022 — 2025</div>
                <div className="edu-icon">
                  <Sparkles />
                </div>
                <div>
                  <h3>Bachelor of Commerce</h3>
                  <p>
                    Sathyabama Institute of Science and Technology · Chennai
                  </p>
                  <span className="status-chip">
                    <i /> Graduated June 2025 · CGPA 8.28 / 10
                  </span>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section id="certifications" className="section-pad certifications">
          <div className="section-aside">
            <SectionLabel number="06">CERTIFICATIONS</SectionLabel>
            <p className="aside-note">
              Signals of continued
              <br />
              curiosity.
            </p>
          </div>
          <div className="section-content">
            <h2>
              Credentials in <span>progress.</span>
            </h2>
            <div className="cert-grid">
              {certifications.map((cert, i) => (
                <GlassCard key={cert}>
                  <span className="cert-number">0{i + 1}</span>
                  <div className="cert-seal">
                    <Check size={15} />
                  </div>
                  <h3>{cert}</h3>
                  {(i === 4 || i === 5) && (
                    <p>
                      {i === 4
                        ? "Customer segmentation · Trial analysis · Business insights"
                        : "ETL basics · Cloud data workflows · Analytics concepts"}
                    </p>
                  )}
                  <ArrowUpRight className="cert-arrow" size={17} />
                </GlassCard>
              ))}
            </div>
            <div className="language-row">
              <span>LANGUAGES</span>
              <b>
                English <small>FLUENT</small>
              </b>
              <b>
                Tamil <small>NATIVE</small>
              </b>
            </div>
          </div>
        </section>

        <section id="contact" className="section-pad contact">
          <div className="contact-inner">
            <div className="contact-copy">
              <SectionLabel number="07">CONTACT</SectionLabel>
              <h2>
                Let’s build something <em>together.</em>
              </h2>
              <p>
                I am currently looking for internship and software development
                opportunities. Feel free to reach out if you would like to
                discuss a project, opportunity, or collaboration.
              </p>
              <div className="contact-details">
                <a href={`mailto:${contactEmail}`}>
                  <Mail size={17} /> {contactEmail}
                </a>
                <a href={`tel:${contactPhoneHref}`}>
                  <Phone size={17} /> {contactPhone}
                </a>
                <a
                  href="https://www.linkedin.com/in/v-vishal-4b0772309"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={17} /> linkedin.com/in/v-vishal-4b0772309
                </a>
                <span>
                  <MapPin size={17} /> Chennai, India
                </span>
              </div>
            </div>
            <GlassCard className="contact-form-card">
              <form
                onSubmit={e => {
                  e.preventDefault();
                  setSent(true);
                  toast(
                    "Message captured — Vishal can connect this form to a mail service when ready."
                  );
                }}
              >
                <label>
                  FULL NAME
                  <input required placeholder="Your name" />
                </label>
                <label>
                  EMAIL ADDRESS
                  <input required type="email" placeholder="you@company.com" />
                </label>
                <label>
                  SUBJECT
                  <input required placeholder="Internship opportunity" />
                </label>
                <label>
                  MESSAGE
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me a little about the opportunity..."
                  />
                </label>
                <button className="primary-btn" type="submit">
                  {sent ? "Message ready ✓" : "Send Message"} <Send size={15} />
                </button>
              </form>
            </GlassCard>
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-brand">
          <img
            className="brand-mark-image"
            src="/assets/vv-mark.png"
            alt="VV"
          />
          <span>
            <strong>Vishal V</strong>
            <small>PYTHON / BACKEND</small>
          </span>
        </div>
        <p>Built with passion for technology and problem solving.</p>
        <div className="footer-links">
          <a href={`mailto:${contactEmail}`} aria-label="Email Vishal">
            <Mail size={16} />
          </a>
          <a href={`tel:${contactPhoneHref}`} aria-label="Call Vishal">
            <Phone size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/v-vishal-4b0772309"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} />
          </a>
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Vishal on GitHub"
          >
            <Github size={16} />
          </a>
        </div>
        <small>© 2026 Vishal V. All Rights Reserved.</small>
      </footer>
      <button
        className="back-top"
        aria-label="Back to top"
        onClick={() => scrollTo("home")}
      >
        <ChevronDown size={18} />
      </button>
    </div>
  );
}
