// ============================================
//  IVAN RODRIGUEZ — Portfolio
//  Direction: "Espresso & Brass"
//  Vanilla JS — minimal, intentional motion
// ============================================

const i18n = {
  es: {
    'nav.about': 'Perfil',
    'nav.projects': 'Trabajo',
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
    'projects.title': 'Trabajo seleccionado',
    'proj.liga.desc': 'Comentarista deportivo dual de IA en tiempo real para un juego en vivo en Kick: una cascada multi-modelo de LLM tolerante a fallos genera narración contextual, con TTS neuronal en español y pre-síntesis especulativa para latencia percibida ~0ms.',
    'proj.liga.b1': '<strong>Cascada LLM multi-modelo</strong> (Groq Llama 3.3 70B → Cerebras Qwen/Llama → Gemini) con enrutamiento por tipo de evento — sin punto único de fallo',
    'proj.liga.b2': '<strong>Decoradores de fiabilidad</strong>: Circuit Breaker, Rate Limiter token-bucket, Timeout, Quota Tracking por headers y caché CAG — vía inyección de dependencias',
    'proj.liga.b3': '<strong>Inferencia especulativa</strong>: pre-genera candidatos a ganador (LLM + TTS) ~15s antes del clímax → latencia percibida ~0ms',
    'proj.liga.b4': '<strong>Anti-repetición semántica</strong> con embeddings locales (transformers.js MiniLM) + coseno pgvector — sin API externo de similitud',
    'proj.liga.b5': '<strong>Prompt engineering defensivo</strong>: validador de salida de 7 categorías (anti-copyright, anti-alucinación) + guardas anti-inyección',
    'proj.imp.desc': 'Servicio de importación de pedidos en Spring Boot 3 con idempotencia por corrida (cero duplicados), validación de reglas de negocio e inserciones por lote en PostgreSQL. Los instintos de producción que los reclutadores buscan.',
    'proj.imp.b1': '<strong>Idempotencia</strong> por corrida — reimportaciones seguras, sin duplicados',
    'proj.imp.b2': '<strong>Inserciones por lote</strong> en PostgreSQL + validación de reglas de negocio',
    'proj.imp.b3': '<strong>JWT</strong>, contrato <strong>OpenAPI</strong>, Docker Compose',
    'proj.imp.b4': '<strong>Logs JSON</strong> con X-Correlation-Id para trazabilidad',
    'proj.bank.desc': 'Microservicios para datos de clientes y productos financieros — refuerza el relato de banca top-tier (BCP, Interbank, Caja Cencosud) con código que un reclutador puede abrir.',
    'proj.mermaid.desc': 'Producto freemium que convierte diagramas Mermaid en PNG/SVG/PDF de alta calidad, con paywall determinista, webhooks idempotentes de MercadoPago + PayPal e i18n en 7 idiomas.',
    'cta.repo': 'Repo ↗',
    'cta.demoRequest': 'Demo en vivo bajo solicitud',
    'index.label': 'Índice — seleccionados y en progreso',
    'index.archive': 'Archivo completo en GitHub ↗',
    'status.planned': 'PLANNED',
    'status.internal': 'INTERNAL',
    'idx.oss.title': 'Contribución open-source',
    'idx.toolkit.meta': 'Framework interno · Next.js + Express hexagonal + Supabase + pagos',
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
    'nav.projects': 'Work',
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
    'projects.title': 'Selected Work',
    'proj.liga.desc': 'A real-time dual AI sportscaster for a live Kick game: a fault-tolerant multi-model LLM cascade generates contextual play-by-play, with Spanish neural TTS and speculative pre-synthesis for ~0ms perceived latency.',
    'proj.liga.b1': '<strong>Multi-model LLM cascade</strong> (Groq Llama 3.3 70B → Cerebras Qwen/Llama → Gemini) with kind-aware routing per event — no single point of failure',
    'proj.liga.b2': '<strong>Production reliability decorators</strong>: Circuit Breaker, token-bucket Rate Limiter, Timeout, header Quota Tracking and CAG cache — composed via DI',
    'proj.liga.b3': '<strong>Speculative inference</strong>: pre-generates winner candidates (LLM + TTS) ~15s before climax → ~0ms perceived latency',
    'proj.liga.b4': '<strong>Semantic anti-repetition</strong> with local embeddings (transformers.js MiniLM) + pgvector cosine — no external similarity API',
    'proj.liga.b5': '<strong>Defensive prompt engineering</strong>: 7-bucket output validator (anti-copyright, anti-hallucination) + prompt-injection guards',
    'proj.imp.desc': 'Spring Boot 3 order-import service with per-run idempotency (zero duplicates), business-rule validation and batch PostgreSQL inserts. Production instincts recruiters scan for.',
    'proj.imp.b1': '<strong>Idempotency</strong> per run — safe re-imports, no duplicates',
    'proj.imp.b2': '<strong>Batch inserts</strong> into PostgreSQL + business-rule validation',
    'proj.imp.b3': '<strong>JWT</strong> auth, <strong>OpenAPI</strong> contract, Docker Compose',
    'proj.imp.b4': '<strong>JSON logs</strong> with X-Correlation-Id for traceability',
    'proj.bank.desc': 'Microservices for customer & financial-product data — reinforces the top-tier banking story (BCP, Interbank, Caja Cencosud) with code a recruiter can open.',
    'proj.mermaid.desc': 'Freemium product turning Mermaid diagrams into high-quality PNG/SVG/PDF, with deterministic paywall, idempotent MercadoPago + PayPal webhooks and 7-language i18n.',
    'cta.repo': 'Repo ↗',
    'cta.demoRequest': 'Live demo on request',
    'index.label': 'Index — selected & in progress',
    'index.archive': 'Full archive on GitHub ↗',
    'status.planned': 'PLANNED',
    'status.internal': 'INTERNAL',
    'idx.oss.title': 'Open-source contribution',
    'idx.toolkit.meta': 'Internal framework · Next.js + Express hexagonal + Supabase + payments',
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

// ====== Mobile sidebar drawer ======
function initSidebar() {
  const burger = document.getElementById('navBurger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('navOverlay');
  const closeBtn = document.getElementById('sidebarClose');
  if (!burger || !sidebar || !overlay) return;

  function open() {
    sidebar.classList.add('open');
    overlay.hidden = false;
    requestAnimationFrame(() => overlay.classList.add('open'));
    burger.classList.add('open');
    burger.setAttribute('aria-expanded', 'true');
    sidebar.setAttribute('aria-hidden', 'false');
    document.body.classList.add('menu-open');
  }
  function close() {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
    burger.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    sidebar.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('menu-open');
    setTimeout(() => { if (!overlay.classList.contains('open')) overlay.hidden = true; }, 420);
  }
  function toggle() { sidebar.classList.contains('open') ? close() : open(); }

  burger.addEventListener('click', toggle);
  overlay.addEventListener('click', close);
  if (closeBtn) closeBtn.addEventListener('click', close);
  sidebar.querySelectorAll('.sidebar-links a').forEach((a) => a.addEventListener('click', close));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
}

// ====== Smooth in-page navigation WITHOUT leaving #hash in the URL ======
function initSmoothAnchors() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;
      const target = document.getElementById(href.slice(1));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // strip the hash so the URL stays clean (…/Resume/ instead of …/Resume/#about)
      try { history.replaceState(null, '', location.pathname + location.search); } catch (err) {}
    });
  });
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
  initSidebar();
  initSmoothAnchors();
});
