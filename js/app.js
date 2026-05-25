// ====== i18n DATA ======
const i18n = {
  es: {
    'nav.about': 'Sobre mí',
    'nav.projects': 'Proyectos AI',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Skills',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Disponible para proyectos',
    'hero.title': 'Senior Backend & AI/Agentic Engineer',
    'hero.sub': 'Intelligent Systems · Cloud & Scalable Architectures',
    'hero.cta1': 'Contáctame',
    'about.title': 'Sobre mí',
    'about.p1': 'Soy <strong>Senior Backend Developer & AI/Agentic Engineer</strong>, especializado en Java y Python, con foco en arquitectura de microservicios reactivos y construcción de plataformas agenticas con LLMs (MCP, RAG, Skills, Tool-Calling). Bachiller egresado de la <strong>UNI</strong>.',
    'about.p2': 'Amplia experiencia en banca y enterprise en proyectos clave para <strong>BCP</strong>, <strong>INTERBANK</strong>, <strong>Caja Cencosud</strong> y <strong>DINET</strong>, a través de NTT DATA, INDRA, Zoluxiones y CSTI Corp. Programo desde 2015 y aplico metodologías ágiles desde 2020.',
    'about.p3': 'Sólida experiencia en <strong>Microsoft Azure</strong> (AKS, DevOps, Event Hub, API Management, Redis, PostgreSQL) en proyectos productivos del sector financiero y logístico. Practicante diario de <strong>Agentic Coding</strong> con Claude Code, Claude Agent SDK, MCP SDK y GitHub Copilot.',
    'about.stat1': 'años de experiencia',
    'about.stat2': 'empresas / clientes',
    'about.stat3': 'bancos top como cliente',
    'about.stat4': 'AI-First & Agentic',
    'projects.title': 'Proyectos destacados de AI / Agentic Engineering',
    'projects.actualidad': 'Actualidad',
    'projects.actualidad2': 'Actualidad',
    'projects.volt.desc': 'Plataforma propia de AI Agent end-to-end para cálculo eléctrico, reportes y consulta de conocimiento del dominio energético (VAD, PIDE, SEIN).',
    'projects.volt.b1': '<strong>MCP Server propio</strong> que expone Tools reales: PowerFactory (DIgSILENT), Excel, Word, KB VAD (SQLite).',
    'projects.volt.b2': '<strong>RAG</strong> implementado como memoria extendida del LLM, con catálogo de tools indexado mediante embeddings.',
    'projects.volt.b3': 'Integración con <strong>Anthropic Claude Agent SDK</strong>, <strong>Claude Code SDK</strong>, <strong>Anthropic SDK</strong> y <strong>MCP SDK</strong> oficiales.',
    'projects.volt.b4': '<strong>Arquitectura Hexagonal</strong> + patrones (Strategy, Circuit Breaker, Adapter, Factory, State, Observer).',
    'projects.volt.b5': 'Diseño <strong>model-agnostic</strong>: funciona con cualquier LLM (incluido Haiku sin reasoning extendido).',
    'projects.volt.b6': '<strong>Observabilidad</strong>: Grafana + Loki, endpoints REST, heartbeat & shutdown deterministas.',
    'projects.pf.desc': 'Servidor MCP independiente que expone la API de DIgSILENT PowerFactory 15.1 como tools consumibles por LLMs/agentes.',
    'projects.pf.b1': 'MCP server en Node.js + bridge en C++ + scripts en Python.',
    'projects.pf.b2': 'Pipeline de ingesta documental: extracción PDF/CHM → parseo HTML → corpus indexado por embeddings.',
    'projects.pf.b3': 'OCR con Tesseract.js y procesamiento PDF con pdfjs-dist.',
    'projects.pf.b4': 'Persistencia con PostgreSQL y Skills personalizados para flujos específicos.',
    'projects.help.title': 'Asistente IA Help Desk @ DINET',
    'projects.help.desc': 'Asistente IA en producción para resolver incidencias de clientes finales, con arquitectura agentica completa: Agente conversacional + MCP Server + RAG + Skills, sobre arquitectura escalable.',
    'experience.title': 'Experiencia laboral',
    'exp.actualidad': 'Actualidad',
    'exp.csti.role': 'Senior Backend & AI Engineer',
    'exp.csti.desc': 'Proveedor para proyecto en <strong>DINET</strong> (líder logístico). Microservicios + asistente IA Help Desk con MCP/RAG/Skills. Claude Code diario con MCP propio. Azure DevOps, Azure Database for PostgreSQL.',
    'exp.conecta.role': 'Desktop Developer',
    'exp.conecta.desc': 'Aplicación de escritorio con Clean Architecture. Automatización de cómputo de esfuerzo unitario y factor de seguridad. UI FXML + generación de reportes PDF.',
    'exp.zolux.desc': 'Proveedor para <strong>CAJA CENCOSUD</strong>. Migración monolito → microservicios reactivos. Java 8 → 17/21. Kubernetes, GitLab CI/CD.',
    'exp.ruway2.desc': 'Contenerización con Docker en EC2/ECS, PostgreSQL en RDS, IAM, Secrets Manager, S3.',
    'exp.indra.desc': 'Proveedor para <strong>INTERBANK</strong>. Spring Boot reactivo (Reactor), WebClient, JUnit5/Mockito/Mockserver, New Relic, AKS, Azure DevOps, JMeter.',
    'exp.ntt.desc': 'Proveedor para <strong>BCP</strong>. Spring Boot reactivo (RxJava + Reactor), Retrofit, Azure Event Hub, Azure Redis, Hashicorp Vault, SonarQube/Jenkins. <strong>Uso intensivo de GitHub Copilot durante todo el proyecto.</strong> Coverage >90%.',
    'exp.din.desc': 'PoC integración BD → sistemas SCADA. Spring Boot, WebSockets, Docker, Kubernetes.',
    'exp.dunas.desc': 'APIs REST/SOAP con Spring Boot y .NET Core. Oracle PL/SQL, optimización de queries.',
    'exp.early.desc': 'Desarrollo de software para minería (reconocimiento geométrico 3D), sector farmacéutico, biometría, automatización eléctrica con Python en PowerFactory DIgSILENT (colaboración con SIEMENS, ISA REP).',
    'skills.title': 'Stack & Skills',
    'skills.azure.note': '<em>Experiencia consolidada en BCP, INTERBANK y DINET</em>',
    'skills.arch.title': 'Arquitectura & Patrones',
    'skills.data.title': 'Bases de Datos',
    'skills.sec.title': 'Seguridad',
    'skills.msg.title': 'Mensajería & Testing',
    'edu.title': 'Educación',
    'edu.uni': 'Bachiller — Ingeniería Mecánica Eléctrica · 2018',
    'edu.edutin': 'Certificación Programador Java (180h) · 2025',
    'edu.self.title': 'Autoformación continua',
    'edu.self.desc': 'Especialización en Backend Java, Arquitectura de Software, Spring Boot, Microservicios, Seguridad, DevOps, Cloud y AI/Agentic Engineering desde 2015.',
    'contact.title': 'Contacto',
    'contact.lead': '¿Quieres conversar sobre un proyecto, oportunidad o consultoría? Escríbeme.',
    'contact.phone': 'Teléfono',
    'footer.note': 'Hecho con código, café y mucho Claude Code ☕',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'AI Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Available for projects',
    'hero.title': 'Senior Backend & AI/Agentic Engineer',
    'hero.sub': 'Intelligent Systems · Cloud & Scalable Architectures',
    'hero.cta1': 'Get in touch',
    'about.title': 'About me',
    'about.p1': "I'm a <strong>Senior Backend Developer & AI/Agentic Engineer</strong>, specialized in Java and Python, focused on reactive microservices architecture and building agentic platforms with LLMs (MCP, RAG, Skills, Tool-Calling). Bachelor from <strong>UNI</strong>.",
    'about.p2': 'Extensive banking and enterprise experience on key projects for <strong>BCP</strong>, <strong>INTERBANK</strong>, <strong>Caja Cencosud</strong> and <strong>DINET</strong>, through NTT DATA, INDRA, Zoluxiones and CSTI Corp. Coding since 2015, agile since 2020.',
    'about.p3': 'Solid experience with <strong>Microsoft Azure</strong> (AKS, DevOps, Event Hub, API Management, Redis, PostgreSQL) in production projects for the financial and logistics sectors. Daily practitioner of <strong>Agentic Coding</strong> with Claude Code, Claude Agent SDK, MCP SDK and GitHub Copilot.',
    'about.stat1': 'years of experience',
    'about.stat2': 'companies / clients',
    'about.stat3': 'top banks as client',
    'about.stat4': 'AI-First & Agentic',
    'projects.title': 'Featured AI / Agentic Engineering projects',
    'projects.actualidad': 'Present',
    'projects.actualidad2': 'Present',
    'projects.volt.desc': 'My own end-to-end AI Agent platform for electrical calculation, reports and domain-knowledge consultation in the energy sector (VAD, PIDE, SEIN).',
    'projects.volt.b1': '<strong>Custom MCP Server</strong> exposing real Tools: PowerFactory (DIgSILENT), Excel, Word, KB VAD (SQLite).',
    'projects.volt.b2': '<strong>RAG</strong> implemented as extended memory for the LLM, with tool catalog indexed via embeddings.',
    'projects.volt.b3': 'Integration with official <strong>Anthropic Claude Agent SDK</strong>, <strong>Claude Code SDK</strong>, <strong>Anthropic SDK</strong> and <strong>MCP SDK</strong>.',
    'projects.volt.b4': '<strong>Hexagonal Architecture</strong> + patterns (Strategy, Circuit Breaker, Adapter, Factory, State, Observer).',
    'projects.volt.b5': '<strong>Model-agnostic</strong> design: works with any LLM (including Haiku without extended reasoning).',
    'projects.volt.b6': '<strong>Observability</strong>: Grafana + Loki, REST endpoints, deterministic heartbeat & shutdown.',
    'projects.pf.desc': 'Independent MCP server exposing the DIgSILENT PowerFactory 15.1 API as tools consumable by LLMs/agents.',
    'projects.pf.b1': 'MCP server in Node.js + C++ bridge + Python scripts.',
    'projects.pf.b2': 'Document ingestion pipeline: PDF/CHM extraction → HTML parsing → embeddings-indexed corpus.',
    'projects.pf.b3': 'OCR with Tesseract.js and PDF processing with pdfjs-dist.',
    'projects.pf.b4': 'PostgreSQL persistence and custom Skills for specific workflows.',
    'projects.help.title': 'AI Help Desk Assistant @ DINET',
    'projects.help.desc': 'Production AI assistant to resolve end-client incidents, with full agentic architecture: Conversational Agent + MCP Server + RAG + Skills, on scalable architecture.',
    'experience.title': 'Work experience',
    'exp.actualidad': 'Present',
    'exp.csti.role': 'Senior Backend & AI Engineer',
    'exp.csti.desc': 'Supplier for <strong>DINET</strong> (logistics leader). Microservices + AI Help Desk assistant with MCP/RAG/Skills. Daily Claude Code with custom MCP. Azure DevOps, Azure Database for PostgreSQL.',
    'exp.conecta.role': 'Desktop Developer',
    'exp.conecta.desc': 'Desktop application with Clean Architecture. Automation of unit effort and safety factor computation. FXML UI + PDF report generation.',
    'exp.zolux.desc': 'Supplier for <strong>CAJA CENCOSUD</strong>. Monolith → reactive microservices migration. Java 8 → 17/21. Kubernetes, GitLab CI/CD.',
    'exp.ruway2.desc': 'Docker containerization on EC2/ECS, PostgreSQL on RDS, IAM, Secrets Manager, S3.',
    'exp.indra.desc': 'Supplier for <strong>INTERBANK</strong>. Reactive Spring Boot (Reactor), WebClient, JUnit5/Mockito/Mockserver, New Relic, AKS, Azure DevOps, JMeter.',
    'exp.ntt.desc': 'Supplier for <strong>BCP</strong>. Reactive Spring Boot (RxJava + Reactor), Retrofit, Azure Event Hub, Azure Redis, Hashicorp Vault, SonarQube/Jenkins. <strong>Intensive use of GitHub Copilot throughout the entire project.</strong> Coverage >90%.',
    'exp.din.desc': 'PoC for DB → SCADA systems integration. Spring Boot, WebSockets, Docker, Kubernetes.',
    'exp.dunas.desc': 'REST/SOAP APIs with Spring Boot and .NET Core. Oracle PL/SQL, query optimization.',
    'exp.early.desc': 'Software development for mining (3D geometric recognition), pharmaceutical, biometrics, electrical automation with Python on PowerFactory DIgSILENT (collaboration with SIEMENS, ISA REP).',
    'skills.title': 'Stack & Skills',
    'skills.azure.note': '<em>Consolidated experience in BCP, INTERBANK and DINET</em>',
    'skills.arch.title': 'Architecture & Patterns',
    'skills.data.title': 'Databases',
    'skills.sec.title': 'Security',
    'skills.msg.title': 'Messaging & Testing',
    'edu.title': 'Education',
    'edu.uni': "Bachelor's — Mechanical Electrical Engineering · 2018",
    'edu.edutin': 'Java Programmer Certification (180h) · 2025',
    'edu.self.title': 'Continuous self-education',
    'edu.self.desc': 'Specialization in Backend Java, Software Architecture, Spring Boot, Microservices, Security, DevOps, Cloud and AI/Agentic Engineering since 2015.',
    'contact.title': 'Contact',
    'contact.lead': 'Want to talk about a project, opportunity or consultancy? Drop me a message.',
    'contact.phone': 'Phone',
    'footer.note': 'Built with code, coffee and a lot of Claude Code ☕',
  },
};

// ====== Language toggle ======
function applyLang(lang) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) {
      el.innerHTML = i18n[lang][key];
    }
  });
  document.querySelectorAll('.lang-opt').forEach((opt) => {
    opt.classList.toggle('active', opt.getAttribute('data-lang-opt') === lang);
  });
  try { localStorage.setItem('lang', lang); } catch (e) {}
}

document.addEventListener('DOMContentLoaded', () => {
  const saved = (() => { try { return localStorage.getItem('lang'); } catch (e) { return null; } })();
  const initial = saved || (navigator.language && navigator.language.startsWith('en') ? 'en' : 'es');
  applyLang(initial);

  document.querySelectorAll('.lang-opt').forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      applyLang(opt.getAttribute('data-lang-opt'));
    });
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
