import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, MapPin,
  Cloud, Terminal, ShieldCheck, Workflow, Activity, Boxes, Code2,
  Database, Cpu, ExternalLink, Menu, CheckCircle2, Sparkles
} from 'lucide-react';
import './styles.css';

const profile = {
  name: 'Karthik Kunchala',
  role: 'AWS DevOps & Platform Engineer',
  location: 'India · Open to platform / cloud / DevOps engineering opportunities',
  email: 'karthikkunchala2307@gmail.com',
  linkedin: 'https://www.linkedin.com/in/karthikkunchala/',
  github: 'https://github.com/KarthikKunchala23',
  // Update the GitHub URL above to your profile before publishing.
};

const skills = [
  { icon: Cloud, title: 'Cloud & Infrastructure', items: ['AWS', 'VPC', 'IAM', 'EKS', 'S3', 'RDS', 'Lambda', 'CloudFront'] },
  { icon: Boxes, title: 'Containers & Platform', items: ['Kubernetes', 'Docker', 'Helm', 'Karpenter', 'Argo CD', 'GitOps'] },
  { icon: Workflow, title: 'DevOps & IaC', items: ['Terraform', 'GitHub Actions', 'Jenkins', 'CI/CD', 'Infrastructure modules'] },
  { icon: Activity, title: 'Observability & Security', items: ['Prometheus', 'Grafana', 'OpenTelemetry', 'CloudWatch', 'IAM', 'Trivy'] },
  { icon: Terminal, title: 'Automation', items: ['Python', 'Bash', 'Linux', 'boto3', 'Automation tooling'] },
  { icon: Cpu, title: 'AI Engineering', items: ['LLM experimentation', 'LangChain', 'RAG', 'Hugging Face', 'Vector search'] },
];

const projects = [
  {
    number: '01',
    type: 'INFRASTRUCTURE AS CODE',
    title: 'Modular Terraform Foundation',
    description: 'Reusable Terraform modules for AWS building blocks, with isolated root modules and independently managed state to support service teams.',
    tags: ['Terraform', 'AWS', 'S3 state', 'IAM', 'VPC', 'RDS'],
    icon: Boxes,
    accent: 'mint',
    points: ['Reusable infrastructure patterns', 'Service-level state separation', 'Consistent, reviewable changes'],
    github: 'https://github.com/KarthikKunchala23/gp-terraform-foundation.git',
  },
  {
    number: '02',
    type: 'KUBERNETES PLATFORM',
    title: 'AWS EKS Platform Engineering',
    description: 'A Kubernetes platform foundation exploring node provisioning, workload delivery, secrets integration, and GitOps workflows.',
    tags: ['EKS', 'Karpenter', 'Helm', 'Argo CD', 'Terraform'],
    icon: Cloud,
    accent: 'blue',
    points: ['Automated cluster infrastructure', 'GitOps application delivery', 'Workload and node troubleshooting'],
    github: 'https://github.com/KarthikKunchala23/gp-eks-cluster.git',
  },
  {
    number: '03',
    type: 'OBSERVABILITY',
    title: 'Cloud-Native Observability',
    description: 'An observability stack for metrics and traces, bringing application telemetry and AWS monitoring into a unified workflow.',
    tags: ['OpenTelemetry', 'AMP', 'Grafana', 'CloudWatch', 'X-Ray'],
    icon: Activity,
    accent: 'purple',
    points: ['Metrics and trace collection', 'Operational dashboards', 'Signals for troubleshooting'],
    github: 'https://github.com/KarthikKunchala23/gp-observability-terraform.git',
  },
  {
    number: '04',
    type: 'CLOUD SECURITY AUTOMATION',
    title: 'IAM Access-Key Rotation',
    description: 'A Python-based workflow to identify aging IAM access keys and coordinate rotation using AWS managed services and explicit handoff states.',
    tags: ['Python', 'boto3', 'Lambda', 'DynamoDB', 'SNS', 'Secrets Manager'],
    icon: ShieldCheck,
    accent: 'orange',
    points: ['Age-threshold checks', 'Rotation state tracking', 'Notification-driven handoff'],
    github: 'https://github.com/KarthikKunchala23/gp-aws-iam-keys-rotation.git',
  },
  {
    number: '05',
    type: 'DATA PLATFORM',
    title: 'AWS Data Platform Foundation',
    description: 'Infrastructure patterns for an analytics platform built around EKS, Airflow, object storage, managed databases, and GitOps.',
    tags: ['AWS', 'EKS', 'Airflow', 'S3', 'RDS', 'Redshift'],
    icon: Database,
    accent: 'blue',
    points: ['Infrastructure provisioned as code', 'Workflow orchestration', 'Secure service integration'],
    github: 'https://github.com/KarthikKunchala23/data-platform-infra.git',
  },
  {
    number: '06',
    type: 'AI / LLM ENGINEERING',
    title: 'Bhagavad Gita RAG Assistant',
    description: 'A retrieval-augmented generation experiment using verse-oriented document retrieval, embeddings, a vector store, and an LLM response layer.',
    tags: ['Python', 'LangChain', 'ChromaDB', 'Embeddings', 'LLMs'],
    icon: Sparkles,
    accent: 'mint',
    points: ['PDF ingestion and chunking', 'Semantic retrieval experiments', 'Grounded question answering'],
    github: 'https://github.com/KarthikKunchala23/sanatan-rag.git',
  },
];

const certifications = [
  'AWS Certified DevOps Engineer – Professional',
  'AWS Certified Developer – Associate',
  'HashiCorp Terraform Associate',
  'Microsoft Azure Fundamentals',
];

function SectionHeading({ eyebrow, title, subtitle }) {
  return <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>;
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Karthik home">
          <span className="brand-mark">K<span>.</span></span>
          <span className="brand-name">KARTHIK <span>KUNCHALA</span></span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
          <Menu size={21} />
        </button>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span className="status-dot" /> CLOUD · DEVOPS · PLATFORM ENGINEERING</div>
            <h1>Building cloud platforms that are <span className="gradient-text">secure, scalable,</span> and automated.</h1>
            <p className="hero-description">
              I'm {profile.name}, an AWS DevOps & Platform Engineer focused on infrastructure as code,
              Kubernetes platforms, CI/CD, cloud security, and observability — while exploring practical AI and LLM engineering.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowUpRight size={17} /></a>
            </div>
            <div className="hero-meta">
              <span><MapPin size={15} /> {profile.location}</span>
              <span><CheckCircle2 size={15} /> Infrastructure as Code mindset</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Cloud engineering illustration">
            <div className="orbit orbit-a" />
            <div className="orbit orbit-b" />
            <div className="core-card">
              <div className="core-top"><span className="window-dots"><i/><i/><i/></span><span className="core-label">platform.ts</span><Code2 size={16}/></div>
              <div className="code-lines">
                <div><span className="code-purple">const</span> platform = {'{'}</div>
                <div className="indent"><span className="code-blue">cloud</span>: <span className="code-green">'AWS'</span>,</div>
                <div className="indent"><span className="code-blue">infra</span>: <span className="code-green">'Terraform'</span>,</div>
                <div className="indent"><span className="code-blue">runtime</span>: <span className="code-green">'Kubernetes'</span>,</div>
                <div className="indent"><span className="code-blue">delivery</span>: <span className="code-green">'GitOps'</span>,</div>
                <div className="indent"><span className="code-blue">mindset</span>: <span className="code-green">'Automate'</span></div>
                <div>{'}'};</div>
              </div>
              <div className="terminal-status"><span className="status-dot"/> SYSTEMS THINKING <span className="terminal-right">READY_</span></div>
            </div>
            <div className="float-chip chip-cloud"><Cloud size={17}/><span>AWS Cloud</span></div>
            <div className="float-chip chip-terraform"><Boxes size={17}/><span>Terraform</span></div>
            <div className="float-chip chip-kube"><Workflow size={17}/><span>Kubernetes</span></div>
            <div className="hero-index">01 / CLOUD ENGINEERING</div>
          </div>
          <a href="#about" className="scroll-cue"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
        </section>

        <section className="about section-wrap" id="about">
          <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Engineering reliable cloud foundations." subtitle="I enjoy turning complex infrastructure into repeatable, secure, and observable systems." />
          <div className="about-grid">
            <div className="about-copy">
              <p className="large-copy">My work sits at the intersection of <span>cloud infrastructure</span>, <span>automation</span>, and <span>developer enablement</span>.</p>
              <p>From reusable Terraform modules to Kubernetes deployments and monitoring pipelines, I focus on reducing manual effort and making platforms easier to operate. I'm also building my skills in LLM applications and retrieval-augmented generation.</p>
              <p className="muted">My approach: automate repeatable work, apply least privilege, make systems observable, and document the way to operate them.</p>
            </div>
            <div className="principles">
              <div className="principle"><span className="principle-number">01</span><div><h3>Automate by default</h3><p>Version-controlled infrastructure and repeatable delivery pipelines.</p></div></div>
              <div className="principle"><span className="principle-number">02</span><div><h3>Secure the foundation</h3><p>Least privilege, private origins, short-lived credentials, and sensible boundaries.</p></div></div>
              <div className="principle"><span className="principle-number">03</span><div><h3>Operate with signals</h3><p>Metrics, logs, traces, and actionable monitoring for troubleshooting.</p></div></div>
            </div>
          </div>
        </section>

        <section className="skills-section section-wrap" id="skills">
          <SectionHeading eyebrow="TECHNICAL TOOLKIT" title="Tools I build with." subtitle="A practical mix of cloud, platform engineering, delivery automation, and AI experimentation." />
          <div className="skills-grid">
            {skills.map(({ icon: Icon, title, items }, i) => <article className="skill-card" key={title}>
              <div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="card-index">0{i + 1}</span></div>
              <h3>{title}</h3>
              <div className="tag-list">{items.map(item => <span className="tag" key={item}>{item}</span>)}</div>
            </article>)}
          </div>
        </section>

        <section className="projects-section section-wrap" id="projects">
          <SectionHeading eyebrow="SELECTED PROJECTS" title="From infrastructure to intelligent tools." subtitle="Hands-on engineering themes across AWS, Kubernetes, security automation, observability, data platforms, and LLMs." />
          <div className="projects-grid">
            {projects.map(({ number, type, title, description, tags, icon: Icon, accent, points, github }) => <article className={`project-card accent-${accent}`} key={number}>
              <div className="project-top"><span className="project-number">{number}</span><span className="project-icon"><Icon size={20}/></span></div>
              <p className="project-type">{type}</p>
              <h3>{title}</h3>
              <p className="project-description">{description}</p>
              <ul className="project-points">{points.map(point => <li key={point}><CheckCircle2 size={14}/>{point}</li>)}</ul>
              <div className="tag-list">{tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
              <a className="project-link" href={github} target="_blank" rel="noreferrer">View project <ExternalLink size={15}/></a>
            </article>)}
          </div>
        </section>

        <section className="cert-section section-wrap" id="certifications">
          <SectionHeading eyebrow="CONTINUOUS LEARNING" title="Certifications & growth." subtitle="Credentials and ongoing learning that support my cloud engineering practice." />
          <div className="cert-layout">
            <div className="cert-feature"><div className="cert-feature-icon"><ShieldCheck size={27}/></div><p className="eyebrow">CLOUD & INFRASTRUCTURE</p><h3>Build it. Secure it. Operate it.</h3><p>My learning path combines AWS engineering, infrastructure automation, container platforms, and emerging AI application patterns.</p></div>
            <div className="cert-list">{certifications.map((cert, i) => <div className="cert-item" key={cert}><span className="cert-check"><CheckCircle2 size={17}/></span><span>{cert}</span><span className="cert-number">0{i + 1}</span></div>)}</div>
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-panel">
            <div className="contact-glow"/>
            <p className="eyebrow">HAVE A PLATFORM CHALLENGE?</p>
            <h2>Let's build something <span className="gradient-text">meaningful.</span></h2>
            <p className="contact-copy">Interested in cloud platforms, DevOps automation, Kubernetes, cloud security, or AI-powered engineering? Let's connect.</p>
            <div className="contact-actions">
              <a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17}/> Email me <ArrowUpRight size={16}/></a>
              <a className="button button-outline" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={16}/></a>
            </div>
            <div className="contact-email">{profile.email}</div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">K<span>.</span></span><span className="brand-name">KARTHIK <span>KUNCHALA</span></span></a>
        <p>Designed for clarity. Built for the cloud.</p>
        <div className="footer-links"><a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div>
        <span className="copyright">© {new Date().getFullYear()} Karthik Kunchala</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<React.StrictMode><App /></React.StrictMode>);