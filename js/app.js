// ============================================
//  IVAN RODRIGUEZ — Portfolio
//  Direction: "Espresso & Brass"
//  Vanilla JS — minimal, intentional motion
// ============================================

const i18n = {
  es: {
    'nav.about': 'Perfil',
    'nav.projects': 'Proyectos IA',
    'nav.experience': 'Experiencia',
    'nav.skills': 'Stack',
    'nav.contact': 'Contacto',
    'hero.eyebrow': 'Disponible para nuevos proyectos',
    'hero.sub': 'Construyo plataformas agenticas con LLMs, MCP, RAG y arquitecturas escalables en Azure. Ex-INDRA (Interbank) · Ex-NTT DATA (BCP).',
    'hero.cta1': 'Conversemos',
    'hero.scroll': 'desliza',
    'about.title': 'Perfil',
    'about.p1': 'Soy <strong>Senior Backend Developer & AI/Agentic Engineer</strong>, especializado en Java y Python, con foco en arquitectura de microservicios reactivos y construcción de plataformas agenticas con LLMs (MCP, RAG, Skills, Tool-Calling). Bachiller egresado de la <strong>UNI</strong>.',
    'about.p2': 'Amplia experiencia en banca y enterprise en proyectos clave para <strong>BCP</strong>, <strong>INTERBANK</strong>, <strong>Caja Cencosud</strong> y <strong>DINET</strong>, a través de NTT DATA, INDRA, Zoluxiones y CSTI Corp. Programo desde 2015 y aplico metodologías ágiles desde 2020.',
    'about.p3': 'Practicante diario de <strong>Agentic Coding</strong> con Claude Code, Claude Agent SDK, MCP SDK y GitHub Copilot. Construyo asistentes IA con arquitectura hexagonal, RAG basado en embeddings y orquestación de tools.',
    'about.location': 'Ubicación',
    'about.locationVal': 'Lima, Perú',
    'about.modality': 'Modalidad',
    'about.modalityVal': 'Remoto / Híbrido',
    'about.lang': 'Idiomas',
    'about.langVal': 'ES nativo · EN intermedio',
    'about.uni': 'Educación',
    'about.uniVal': 'Bachiller UNI · 2018',
    'about.now': 'Trabajo actual',
    'about.stat1': 'años de experiencia',
    'about.stat2': 'empresas / clientes',
    'about.stat3': 'bancos top como cliente',
    'about.stat4': 'proyectos IA agenticos',
    'projects.title': 'Proyectos IA / Agentic',
    'projects.actualidad': 'Hoy',
    'projects.actualidad2': 'Hoy',
    'projects.volt.desc': 'Plataforma propia de AI Agent end-to-end. MCP Server, RAG con embeddings, tools reales, arquitectura hexagonal y observabilidad. Diseño model-agnostic.',
    'projects.volt.b1': '<strong>MCP Server</strong> propio con tools: PowerFactory, Excel, Word, KB VAD',
    'projects.volt.b2': '<strong>RAG</strong> con <code>@xenova/transformers</code> (embeddings)',
    'projects.volt.b3': '<strong>Claude Agent SDK</strong> + <strong>MCP SDK</strong> + <strong>Anthropic SDK</strong>',
    'projects.volt.b4': '<strong>Hexagonal</strong> + Strategy, Circuit Breaker, Adapter, State, Observer',
    'projects.volt.b5': '<strong>Observabilidad</strong>: Grafana + Loki, heartbeats deterministas',
    'projects.pf.desc': 'Servidor MCP independiente que expone DIgSILENT PowerFactory 15.1 como tools para LLMs.',
    'projects.pf.b1': 'Node.js + bridge C++ + Python',
    'projects.pf.b2': 'Ingesta PDF/CHM → embeddings → corpus indexado',
    'projects.pf.b3': 'OCR (Tesseract.js) + PostgreSQL + Skills',
    'projects.help.title': 'Asistente IA Help Desk @ DINET',
    'projects.help.desc': 'Asistente IA en producción para resolver incidencias de clientes finales. Agente + MCP + RAG + Skills sobre arquitectura escalable.',
    'experience.title': 'Experiencia laboral',
    'exp.actualidad': 'Hoy',
    'exp.csti.role': 'Senior Backend & AI Engineer',
    'exp.csti.desc': 'Proveedor para <strong>DINET</strong> (líder logístico). Microservicios + asistente IA Help Desk con MCP/RAG/Skills. Claude Code diario, MCP propio, Azure DevOps, Azure PostgreSQL.',
    'exp.conecta.role': 'Desktop Developer',
    'exp.conecta.desc': 'App de escritorio con Clean Architecture. Cómputo de esfuerzo unitario y factor de seguridad. UI FXML + reportes PDF.',
    'exp.zolux.desc': 'Proveedor para <strong>CAJA CENCOSUD</strong>. Migración monolito → microservicios reactivos. Java 8 → 17/21. Kubernetes, GitLab CI/CD.',
    'exp.ruway2.desc': 'Containerización (Docker) en EC2/ECS, PostgreSQL en RDS, IAM, Secrets Manager, S3.',
    'exp.indra.desc': 'Proveedor para <strong>INTERBANK</strong>. Spring Boot reactivo (Reactor), WebClient, JUnit5/Mockito/Mockserver, New Relic, AKS, Azure DevOps, JMeter.',
    'exp.ntt.desc': 'Proveedor para <strong>BCP</strong>. Spring Boot reactivo (RxJava+Reactor), Retrofit, Azure Event Hub, Azure Redis, Hashicorp Vault, SonarQube/Jenkins. <strong>Uso intensivo de GitHub Copilot todo el proyecto.</strong> Coverage >90%.',
    'exp.din.desc': 'PoC integración BD → sistemas SCADA. Spring Boot, WebSockets, Docker, Kubernetes.',
    'exp.dunas.desc': 'APIs REST/SOAP con Spring Boot y .NET Core. Oracle PL/SQL, tuning de queries.',
    'exp.early.desc': 'Software para minería (reconocimiento 3D), farmacéutico, biometría, automatización eléctrica con Python en PowerFactory DIgSILENT (con SIEMENS, ISA REP).',
    'skills.title': 'Stack & Skills',
    'skills.ai.title': 'AI / Agentic Engineering',
    'skills.tools.title': 'Herramientas IA',
    'skills.lang.title': 'Lenguajes & Frameworks',
    'skills.cloud.title': 'Microsoft Azure',
    'skills.azure.note': 'Consolidado en BCP · INTERBANK · DINET',
    'skills.arch.title': 'Arquitectura',
    'skills.data.title': 'Bases de Datos',
    'skills.sec.title': 'Seguridad',
    'skills.devops.title': 'DevOps',
    'skills.msg.title': 'Mensajería & Testing',
    'contact.title': 'Contacto',
    'contact.lead': '¿Proyecto, oportunidad o consultoría? Conversemos.',
    'contact.phone': 'Teléfono',
    'footer.note': 'Diseñado y desarrollado en Lima, Perú',
  },
  en: {
    'nav.about': 'About',
    'nav.projects': 'AI Projects',
    'nav.experience': 'Experience',
    'nav.skills': 'Stack',
    'nav.contact': 'Contact',
    'hero.eyebrow': 'Available for new projects',
    'hero.sub': 'I build agentic platforms with LLMs, MCP, RAG and scalable architectures on Azure. Ex-INDRA (Interbank) · Ex-NTT DATA (BCP).',
    'hero.cta1': "Let's talk",
    'hero.scroll': 'scroll',
    'about.title': 'About me',
    'about.p1': "I'm a <strong>Senior Backend Developer & AI/Agentic Engineer</strong>, specialized in Java and Python, focused on reactive microservices and agentic platforms with LLMs (MCP, RAG, Skills, Tool-Calling). Bachelor from <strong>UNI</strong>.",
    'about.p2': 'Extensive banking and enterprise experience on key projects for <strong>BCP</strong>, <strong>INTERBANK</strong>, <strong>Caja Cencosud</strong> and <strong>DINET</strong>, through NTT DATA, INDRA, Zoluxiones and CSTI Corp. Coding since 2015, agile since 2020.',
    'about.p3': 'Daily practitioner of <strong>Agentic Coding</strong> with Claude Code, Claude Agent SDK, MCP SDK and GitHub Copilot. I build AI assistants with hexagonal architecture, embeddings-based RAG and tool orchestration.',
    'about.location': 'Location',
    'about.locationVal': 'Lima, Peru',
    'about.modality': 'Modality',
    'about.modalityVal': 'Remote / Hybrid',
    'about.lang': 'Languages',
    'about.langVal': 'ES native · EN intermediate',
    'about.uni': 'Education',
    'about.uniVal': 'UNI Bachelor · 2018',
    'about.now': 'Current role',
    'about.stat1': 'years of experience',
    'about.stat2': 'companies / clients',
    'about.stat3': 'top banks as client',
    'about.stat4': 'AI agentic projects',
    'projects.title': 'AI / Agentic Projects',
    'projects.actualidad': 'Present',
    'projects.actualidad2': 'Present',
    'projects.volt.desc': 'My own end-to-end AI Agent platform. MCP Server, RAG with embeddings, real tools, hexagonal architecture and observability. Model-agnostic design.',
    'projects.volt.b1': '<strong>Custom MCP Server</strong> with tools: PowerFactory, Excel, Word, KB VAD',
    'projects.volt.b2': '<strong>RAG</strong> with <code>@xenova/transformers</code> (embeddings)',
    'projects.volt.b3': '<strong>Claude Agent SDK</strong> + <strong>MCP SDK</strong> + <strong>Anthropic SDK</strong>',
    'projects.volt.b4': '<strong>Hexagonal</strong> + Strategy, Circuit Breaker, Adapter, State, Observer',
    'projects.volt.b5': '<strong>Observability</strong>: Grafana + Loki, deterministic heartbeats',
    'projects.pf.desc': 'Independent MCP server exposing DIgSILENT PowerFactory 15.1 as tools for LLMs.',
    'projects.pf.b1': 'Node.js + C++ bridge + Python',
    'projects.pf.b2': 'PDF/CHM ingestion → embeddings → indexed corpus',
    'projects.pf.b3': 'OCR (Tesseract.js) + PostgreSQL + Skills',
    'projects.help.title': 'AI Help Desk Assistant @ DINET',
    'projects.help.desc': 'Production AI assistant resolving end-client incidents. Agent + MCP + RAG + Skills on scalable architecture.',
    'experience.title': 'Work experience',
    'exp.actualidad': 'Present',
    'exp.csti.role': 'Senior Backend & AI Engineer',
    'exp.csti.desc': 'Supplier for <strong>DINET</strong> (logistics leader). Microservices + AI Help Desk with MCP/RAG/Skills. Daily Claude Code, custom MCP, Azure DevOps, Azure PostgreSQL.',
    'exp.conecta.role': 'Desktop Developer',
    'exp.conecta.desc': 'Desktop app with Clean Architecture. Unit effort and safety factor computation. FXML UI + PDF reports.',
    'exp.zolux.desc': 'Supplier for <strong>CAJA CENCOSUD</strong>. Monolith → reactive microservices migration. Java 8 → 17/21. Kubernetes, GitLab CI/CD.',
    'exp.ruway2.desc': 'Docker containerization on EC2/ECS, PostgreSQL on RDS, IAM, Secrets Manager, S3.',
    'exp.indra.desc': 'Supplier for <strong>INTERBANK</strong>. Reactive Spring Boot (Reactor), WebClient, JUnit5/Mockito/Mockserver, New Relic, AKS, Azure DevOps, JMeter.',
    'exp.ntt.desc': 'Supplier for <strong>BCP</strong>. Reactive Spring Boot (RxJava+Reactor), Retrofit, Azure Event Hub, Azure Redis, Hashicorp Vault, SonarQube/Jenkins. <strong>Intensive GitHub Copilot use throughout the project.</strong> Coverage >90%.',
    'exp.din.desc': 'PoC for DB → SCADA systems integration. Spring Boot, WebSockets, Docker, Kubernetes.',
    'exp.dunas.desc': 'REST/SOAP APIs with Spring Boot and .NET Core. Oracle PL/SQL, query tuning.',
    'exp.early.desc': 'Software for mining (3D recognition), pharmaceutical, biometrics, electrical automation with Python on PowerFactory DIgSILENT (with SIEMENS, ISA REP).',
    'skills.title': 'Stack & Skills',
    'skills.ai.title': 'AI / Agentic Engineering',
    'skills.tools.title': 'AI Tools',
    'skills.lang.title': 'Languages & Frameworks',
    'skills.cloud.title': 'Microsoft Azure',
    'skills.azure.note': 'Consolidated at BCP · INTERBANK · DINET',
    'skills.arch.title': 'Architecture',
    'skills.data.title': 'Databases',
    'skills.sec.title': 'Security',
    'skills.devops.title': 'DevOps',
    'skills.msg.title': 'Messaging & Testing',
    'contact.title': 'Contact',
    'contact.lead': "Project, opportunity or consultancy? Let's talk.",
    'contact.phone': 'Phone',
    'footer.note': 'Designed & built in Lima, Peru',
  },
};

// ====== Language ======
function applyLang(lang, persist) {
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('data-lang', lang);
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (i18n[lang] && i18n[lang][key]) el.innerHTML = i18n[lang][key];
  });
  document.querySelectorAll('.lang-opt').forEach((opt) => {
    opt.classList.toggle('active', opt.getAttribute('data-lang-opt') === lang);
  });
  // Default is ENGLISH; only persist a manual choice.
  if (persist) { try { localStorage.setItem('site_lang', lang); } catch (e) {} }
}

// ====== Counter animation (stats) ======
function animateCounters() {
  const counters = document.querySelectorAll('[data-count]');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting && !e.target.dataset.done) {
        const target = parseInt(e.target.dataset.count, 10);
        let cur = 0;
        const step = Math.max(1, Math.floor(target / 24));
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(t); }
          e.target.textContent = cur;
        }, 38);
        e.target.dataset.done = '1';
      }
    });
  }, { threshold: 0.5 });
  counters.forEach((c) => obs.observe(c));
}

// ====== Reveal on scroll (effect 1 of 2) ======
function revealOnScroll() {
  const items = document.querySelectorAll('.reveal');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  items.forEach((i) => obs.observe(i));
}

// ====== Nav scroll state ======
function initNavScroll() {
  const nav = document.getElementById('nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 16);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// ====== Init ======
document.addEventListener('DOMContentLoaded', () => {
  const saved = (() => { try { return localStorage.getItem('site_lang'); } catch (e) { return null; } })();
  const initial = (saved === 'es' || saved === 'en') ? saved : 'en';
  applyLang(initial, false);

  document.querySelectorAll('.lang-opt').forEach((opt) => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      applyLang(opt.getAttribute('data-lang-opt'), true);
    });
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  animateCounters();
  revealOnScroll();
  initNavScroll();
});
