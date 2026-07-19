import { Link, createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform, type Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Code2,
  Smartphone,
  Search,
  TrendingUp,
  Bot,
  Sparkles,
  Palette,
  Lightbulb,
  Globe,
  Layers,
  Check,
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Instagram,
  Menu,
  X,
  Plus,
  Minus,
  Shield,
  Zap,
  Headphones,
  Rocket,
  Lock,
  GitBranch,
  Star,
  Quote,
} from "lucide-react";
import { WhatsappIcon } from "../components/ui/whatsapp";
import brandLogoUrl from "../image/j7pf.svg";

const WHATSAPP_CTA_URL =
  "https://wa.me/5541996315247?text=Ol%C3%A1%20gostaria%20de%20soliciar%20um%20or%C3%A7amento";
const TRAFFIC_MANAGER_WHATSAPP_URL =
  "https://wa.me/5541987372196?text=Ol%C3%A1%2C%20gostaria%20de%20alavancar%20minha%20empresa%20no%20digital";
const EMAIL_CTA_URL =
  "mailto:joesevenn7@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento&body=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
const PROACTIVE_WHATSAPP_SEEN_KEY = "joeseven_whatsapp_proactive_seen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      // SEO
      {
        title:
          "JoeSeven | Soluções Web",
      },
      {
        name: "description",
        content:
          "A JoeSeven desenvolve sites profissionais, landing pages de alta conversão, sistemas web personalizados, automações, SEO e soluções digitais para empresas que desejam crescer com tecnologia.",
      },
      {
        name: "keywords",
        content:
          "desenvolvimento web, criação de sites, landing page, sistemas web, software sob medida, React, Node.js, marketing digital, SEO, inteligência artificial, automação empresarial",
      },
      {
        name: "author",
        content: "JoeSeven",
      },
      {
        name: "robots",
        content: "index, follow",
      },
      {
        name: "googlebot",
        content:
          "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        name: "theme-color",
        content: "#0E2659",
      },

      // Open Graph
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:locale",
        content: "pt_BR",
      },
      {
        property: "og:site_name",
        content: "JoeSeven",
      },
      {
        property: "og:title",
        content:
          "JoeSeven | Desenvolvimento Web, Landing Pages e Sistemas",
      },
      {
        property: "og:description",
        content:
          "Transformamos ideias em soluções digitais de alto impacto. Sites, sistemas web, landing pages, automações e marketing digital para empresas que querem crescer.",
      },
      {
        property: "og:url",
        content: "https://www.joeseven.com.br",
      },
      {
        property: "og:image",
        content: "https://www.joeseven.com.br/previa.jpg",
      },
      {
        property: "og:image:width",
        content: "1200",
      },
      {
        property: "og:image:height",
        content: "630",
      },
      {
        property: "og:image:alt",
        content: "JoeSeven - Desenvolvimento Web",
      },

      // Twitter
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content:
          "JoeSeven | Desenvolvimento Web, Landing Pages e Sistemas",
      },
      {
        name: "twitter:description",
        content:
          "Sites profissionais, sistemas personalizados, landing pages de alta conversão e soluções digitais sob medida.",
      },
      {
        name: "twitter:image",
        content: "https://www.joeseven.com.br/previa.jpg",
      },

      // Mobile
      {
        name: "apple-mobile-web-app-capable",
        content: "yes",
      },
      {
        name: "apple-mobile-web-app-status-bar-style",
        content: "default",
      },
    ],

    links: [
      {
        rel: "canonical",
        href: "https://www.joeseven.com.br",
      },
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        href: "/apple-touch-icon.png",
      },
    ],

    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "JoeSeven",
          url: "https://www.joeseven.com.br",
          logo: "https://www.joeseven.com.br/logo.jpg",
          image: "https://www.joeseven.com.br/previa.jpg",
          description:
            "Empresa especializada em desenvolvimento web, landing pages, sistemas personalizados, automações e marketing digital.",

          email: "joesevenn7@gmail.com",

          areaServed: "Brasil",

          knowsAbout: [
            "Desenvolvimento Web",
            "Landing Pages",
            "Sistemas Web",
            "React", 
            "Node.js",
            "SEO",
            "Marketing Digital",
            "Inteligência Artificial",
            "Automação",
          ],

          sameAs: [
            "https://www.instagram.com/joeseven.7",
            "https://www.linkedin.com/company/joeseven7",
            "https://wa.me/5541996315247",
          ],
        }),
      },
    ],
  }),

  component: LandingPage,
});

/* ------------------------------- Animations ------------------------------ */

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

function LogoMark({ className = "" }: { className?: string }) {
  return <img src={brandLogoUrl} alt="" className={className} aria-hidden="true" />;
}

/* --------------------------------- Page ---------------------------------- */

function LandingPage() {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Differentiators />
      <Process />
      <Stats />
      <Testimonials />
      <Technologies />
      <FAQ />
      <FinalCTA />
      <Footer />
      <ProactiveWhatsappTrigger />
    </main>
  );
}

function ProactiveWhatsappTrigger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (window.sessionStorage.getItem(PROACTIVE_WHATSAPP_SEEN_KEY) === "1") {
      return;
    }

    const timer = window.setTimeout(() => {
      setOpen(true);
      window.sessionStorage.setItem(PROACTIVE_WHATSAPP_SEEN_KEY, "1");
    }, 5000);

    return () => window.clearTimeout(timer);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 z-[70] w-[calc(100%-2rem)] max-w-sm sm:right-6 sm:bottom-6">
      <div className="surface-card border-primary/20 bg-background/95 rounded-2xl p-4 shadow-[var(--shadow-elegant)] backdrop-blur-md">
        <button
          type="button"
          onClick={() => setOpen(false)}
          className="text-muted-foreground hover:text-foreground absolute top-3 right-3 rounded-md p-1 transition-colors"
          aria-label="Fechar abordagem do WhatsApp"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="pr-7">
          <div className="font-display text-foreground text-base font-semibold tracking-tight">
            Quer acelerar seu projeto?
          </div>
          <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed">
            Fale com a equipe da JoeSeven no WhatsApp e receba um orçamento com abordagem
            proativa para o seu caso.
          </p>
        </div>

        <a
          href={WHATSAPP_CTA_URL}
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-primary-foreground mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors hover:opacity-90"
        >
          <WhatsappIcon className="h-4 w-4 text-green-200" />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}

/* -------------------------------- Services ------------------------------- */

const SERVICES = [
  {
    icon: Globe,
    title: "Desenvolvimento Web",
    desc: "Sites e plataformas modernas, performáticas e otimizadas para conversão.",
  },
  {
    icon: Code2,
    title: "Desenvolvimento de Sistemas",
    desc: "Sistemas sob medida que automatizam processos e escalam com o seu negócio.",
  },
  {
    icon: Layers,
    title: "Landing Pages",
    desc: "Páginas de alta performance focadas em capturar leads e gerar vendas.",
  },
  {
    icon: TrendingUp,
    title: "Tráfego Pago",
    desc: "Gestão estratégica em Google, Meta e LinkedIn com foco em ROI real.",
  },
  {
    icon: Search,
    title: "SEO",
    desc: "Posicionamento orgânico sustentável com técnica, conteúdo e autoridade.",
  },
  {
    icon: Zap,
    title: "Automação de Processos",
    desc: "Integrações e fluxos que economizam tempo e eliminam tarefas repetitivas.",
  },

  {
    icon: Smartphone,
    title: "Aplicativos Mobile",
    desc: "Apps iOS e Android nativos e híbridos, com UX impecável.",
  },
  {
    icon: Palette,
    title: "Identidade Visual",
    desc: "Branding consistente, do logotipo ao design system completo.",
  },

];

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Serviços
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tudo o que sua empresa precisa{" "}
            <span className="text-gradient-brand">em um só lugar.</span>
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            Uma equipe completa de engenharia, design e marketing trabalhando como extensão do
            seu time.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {SERVICES.map((s) => (
            <motion.article
              key={s.title}
              variants={fadeUp}
              className="surface-card surface-card-hover group relative overflow-hidden p-7"
            >
              <div
                aria-hidden
                className="bg-gradient-brand absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20"
              />
              <div className="bg-primary/8 text-primary inline-grid h-12 w-12 place-items-center rounded-xl ring-1 ring-primary/10">
                <s.icon className="h-5 w-5" strokeWidth={2.2} />
              </div>
              <h3 className="font-display mt-5 text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">{s.desc}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ Scroll suave ------------------------------ */
// Faz o scroll até a seção sem nunca adicionar #hash na URL.
const HEADER_OFFSET = 88; // altura do header fixo + respiro

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();

  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }

  const el = document.getElementById(id);
  if (!el) return;

  const targetY = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
  window.scrollTo({ top: targetY, behavior: "smooth" });
}

/* --------------------------------- Navbar -------------------------------- */

const NAV_LINKS = [
  { href: "#top", label: "Início" },
  { href: "#services", label: "Serviços" },
  { href: "#differentiators", label: "Diferenciais" },
  { href: "#process", label: "Processo" },
  { href: "#faq", label: "FAQ" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled
        ? "border-b border-border/60 bg-background/75 backdrop-blur-xl"
        : "border-b border-transparent bg-transparent"
        }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <a
          href="#top"
          onClick={(e) => scrollToSection(e, "top")}
          className="flex items-center gap-2"
          aria-label="JoeSeven — Início"
        >
          <LogoMark className="h-9 w-9 object-contain" />
          <span className="font-display text-lg font-bold tracking-tight">JoeSeven</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollToSection(e, l.href.replace("#", ""))}
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#cta"
            onClick={(e) => scrollToSection(e, "cta")}
            className="bg-gradient-brand inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
          >
            Solicitar orçamento
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="text-foreground inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open ? (
        <div className="border-border/60 bg-background/95 border-t backdrop-blur-xl md:hidden">
          <div className="container-page flex flex-col gap-1 py-4">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  scrollToSection(e, l.href.replace("#", ""));
                  setOpen(false);
                }}
                className="text-foreground/80 hover:bg-muted rounded-lg px-3 py-3 text-sm font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={(e) => {
                scrollToSection(e, "cta");
                setOpen(false);
              }}
              className="bg-gradient-brand mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white"
            >
              Solicitar orçamento <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

/* ---------------------------------- Hero --------------------------------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate overflow-hidden pt-32 pb-20 md:pt-44 md:pb-32"
    >
      {/* Background abstract */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,oklch(0.95_0.04_260)_0%,transparent_70%)]" />
        <div
          className="absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.65 0.2 261 / 0.55), transparent 70%)",
          }}
        />
        <div
          className="absolute -bottom-40 -right-20 h-[420px] w-[420px] rounded-full opacity-30 blur-3xl"
          style={{
            background:
              "radial-gradient(closest-side, oklch(0.45 0.18 264 / 0.6), transparent 70%)",
          }}
        />
      </div>

      <motion.div style={{ y, opacity }} className="container-page relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-4xl text-center"
        >
          <motion.div variants={fadeUp} className="flex justify-center">
            <span className="border-border/80 bg-background/70 text-muted-foreground inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-60" />
                <span className="bg-primary relative inline-flex h-2 w-2 rounded-full" />
              </span>
              Disponível para novos projetos · 2026
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="font-display mt-7 text-4xl leading-[1.05] font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Tecnologia que <span className="text-gradient-brand">transforma</span>
            <br className="hidden sm:block" /> negócios em escala.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground mx-auto mt-6 max-w-2xl text-base leading-relaxed sm:text-lg"
          >
            Desenvolvemos software sob medida, sites de alta conversão e estratégias digitais
            que geram resultado real. Engenharia, design e marketing em um só time.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <a
              href="#cta"
              onClick={(e) => scrollToSection(e, "cta")}
              className="bg-gradient-brand group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[var(--shadow-elegant)] transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow)] sm:w-auto"
            >
              Solicitar orçamento
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={WHATSAPP_CTA_URL}
              target="_blank"
              rel="noreferrer"
              className="border-border bg-background/70 text-foreground hover:border-primary/40 hover:bg-background inline-flex w-full items-center justify-center gap-2 rounded-full border px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-all sm:w-auto"
            >
              <WhatsappIcon className="h-4 w-4 text-green-500" />
              Falar no WhatsApp
            </a>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="text-muted-foreground mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs"
          >
            <span className="inline-flex items-center gap-1.5">
              <Check className="text-primary h-3.5 w-3.5" /> Sem fidelidade
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="text-primary h-3.5 w-3.5" /> Suporte humano
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Check className="text-primary h-3.5 w-3.5" /> Entrega garantida
            </span>
          </motion.div>
        </motion.div>

        {/* Hero visual: app/dashboard mock */}
        <Reveal delay={0.15} className="relative mx-auto mt-16 max-w-5xl md:mt-20">
          <div className="bg-gradient-brand absolute -inset-x-8 -top-8 -bottom-8 -z-10 rounded-[2.5rem] opacity-20 blur-2xl" />
          <div className="surface-card overflow-hidden rounded-3xl p-2 shadow-[var(--shadow-elegant)]">
            <div className="bg-surface rounded-[1.25rem] border border-border/70 overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border/70 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                <span className="text-muted-foreground ml-3 text-xs">Resultados de quem vive o digital todos os dias.</span>
              </div>
              <div className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
                {[
                  { label: "Crescimento do mercado", value: "+12,7%", trend: "investimento em mkt digital no Brasil em 2026" },
                  { label: "Mercado digital no Brasil", value: "R$ 42,7 bi", trend: "movimentados por ano" },
                  { label: "Conversão em e-commerce", value: "até 2,7%", trend: "categorias com melhor performance" },
                ].map((kpi, i) => (
                  <motion.div
                    key={kpi.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                    className="bg-background rounded-2xl border border-border/70 p-5"
                  >
                    <div className="text-muted-foreground text-xs font-medium">{kpi.label}</div>
                    <div className="font-display mt-2 text-3xl font-bold tracking-tight">
                      {kpi.value}
                    </div>
                    <div className="text-muted-foreground mt-1 text-xs">{kpi.trend}</div>
                  </motion.div>
                ))}
                <div className="bg-background md:col-span-3 rounded-2xl border border-border/70 p-5">
                  <div className="flex items-center justify-between">
                    <div className="text-foreground text-sm font-semibold">
                      Performance da campanha
                    </div>
                    <div className="text-muted-foreground text-xs">Últimos 7 dias</div>
                  </div>
                  <svg
                    viewBox="0 0 600 140"
                    className="mt-4 h-32 w-full"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="oklch(0.575 0.215 261)" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="oklch(0.575 0.215 261)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.6, ease: "easeInOut" }}
                      d="M0,110 C60,90 100,60 160,70 C220,80 260,40 320,35 C380,30 420,70 480,55 C540,40 580,20 600,15"
                      fill="none"
                      stroke="oklch(0.575 0.215 261)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                    />
                    <path
                      d="M0,110 C60,90 100,60 160,70 C220,80 260,40 320,35 C380,30 420,70 480,55 C540,40 580,20 600,15 L600,140 L0,140 Z"
                      fill="url(#g)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </motion.div>
    </section>
  );
}


/* ----------------------------- Differentiators --------------------------- */

const DIFFS = [
  { icon: Headphones, title: "Atendimento personalizado", desc: "Squad dedicado, sem terceirização." },
  { icon: Sparkles, title: "Desenvolvimento sob medida", desc: "Soluções pensadas para o seu negócio." },
  { icon: Rocket, title: "Performance", desc: "Páginas e apps com tempo de resposta < 1s." },
  { icon: Shield, title: "Segurança", desc: "Boas práticas OWASP e dados criptografados." },
  { icon: Code2, title: "Código limpo", desc: "Manutenção fácil, escalável e testado." },
  { icon: Search, title: "SEO otimizado", desc: "Pronto para ranquear desde o lançamento." },
  { icon: Headphones, title: "Suporte contínuo", desc: "Acompanhamento próximo após o go-live." },
  { icon: GitBranch, title: "Tecnologias modernas", desc: "Stack atual, robusta e bem mantida." },
  { icon: Layers, title: "Escalabilidade", desc: "Arquitetura preparada para crescer." },

];

function Differentiators() {
  return (
    <section id="differentiators" className="bg-surface/60 border-y border-border/60 py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Diferenciais
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Por que escolher a JoeSeven
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            Mais do que entregar projetos, construímos relações de longo prazo baseadas em
            resultado.
          </p>
        </Reveal>

        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {DIFFS.map((d) => (
            <motion.li
              key={d.title}
              variants={fadeUp}
              className="surface-card group flex items-start gap-4 p-5 transition-colors hover:border-primary/30"
            >
              <div className="bg-primary/8 text-primary grid h-10 w-10 shrink-0 place-items-center rounded-lg">
                <d.icon className="h-4.5 w-4.5" strokeWidth={2.2} />
              </div>
              <div className="min-w-0">
                <h3 className="text-foreground text-base font-semibold">{d.title}</h3>
                <p className="text-muted-foreground mt-1 text-sm">{d.desc}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}

/* --------------------------------- Process ------------------------------- */

const STEPS = [
  { n: "01", title: "Briefing", desc: "Imersão no seu negócio, objetivos e desafios." },
  { n: "02", title: "Preparação", desc: "Escopo, arquitetura e cronograma detalhado." },
  { n: "03", title: "Design", desc: "UI/UX premium, validado com protótipos navegáveis." },
  { n: "04", title: "Execução", desc: "Engenharia limpa, com revisões semanais." },
  { n: "05", title: "Testes", desc: "QA automatizado e manual em todos os dispositivos." },
  { n: "06", title: "Publicação", desc: "Deploy seguro, monitorado e sem downtime." },
  { n: "07", title: "Suporte", desc: "Acompanhamento contínuo após o go-live." },
];

function Process() {
  return (
    <section id="process" className="bg-surface/60 border-y border-border/60 py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Processo
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Um método claro, do briefing ao suporte.
          </h2>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div
            aria-hidden
            className="bg-border absolute left-5 top-0 hidden h-full w-px md:left-1/2 md:block md:-translate-x-1/2"
          />
          <ol className="space-y-6 md:space-y-10">
            {STEPS.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 1 ? "md:[&>div]:col-start-2" : ""
                  }`}
              >
                <div
                  className={`pl-14 md:pl-0 ${i % 2 === 1 ? "md:pl-12 md:text-left" : "md:pr-12 md:text-right"
                    }`}
                >
                  <div
                    className={`surface-card relative inline-block max-w-md p-6 ${i % 2 === 1 ? "" : "md:ml-auto"
                      }`}
                  >
                    <div className="text-primary font-display text-xs font-bold tracking-widest">
                      ETAPA {s.n}
                    </div>
                    <div className="font-display mt-1 text-xl font-semibold tracking-tight">
                      {s.title}
                    </div>
                    <p className="text-muted-foreground mt-2 text-sm">{s.desc}</p>
                  </div>
                </div>
                <div
                  aria-hidden
                  className="bg-gradient-brand absolute left-0 top-6 grid h-10 w-10 place-items-center rounded-full text-xs font-bold text-white ring-4 ring-background md:left-1/2 md:-translate-x-1/2"
                >
                  {s.n}
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------- Stats -------------------------------- */

function useCounter(target: number, start: boolean, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return value;
}

function StatItem({
  value,
  suffix,
  label,
  inView,
}: {
  value: number;
  suffix?: string;
  label: string;
  inView: boolean;
}) {
  const n = useCounter(value, inView);
  return (
    <div className="text-center">
      <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        <span className="text-gradient-brand">{n.toLocaleString("pt-BR")}</span>
        {suffix ? <span className="text-gradient-brand">{suffix}</span> : null}
      </div>
      <div className="text-muted-foreground mt-2 text-sm font-medium">{label}</div>
    </div>
  );
}

function Stats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section className="py-24 md:py-28" ref={ref}>
      <div className="container-page">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <StatItem value={250} suffix="+" label="Projetos entregues" inView={inView} />
          <StatItem value={120} suffix="+" label="Clientes atendidos" inView={inView} />
          <StatItem value={98} suffix="%" label="Satisfação" inView={inView} />
          <StatItem value={5} suffix=" anos" label="Tempo de mercado" inView={inView} />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ Testimonials ----------------------------- */

const TESTIMONIALS = [
  {
    name: "Maria Guimarães",
    role: "Gerente operacional, Posto Atem",
    quote:
      "Em 4 meses dobramos a geração de leads qualificados. A JoeSeven se tornou parte do nosso time.",
  },
  {
    name: "Luiz Ribeiro",
    role: "CEO, Mãos a Obra",
    quote:
      "Entregaram uma plataforma sólida, rápida e com um nível de cuidado raro. Recomendo demais.",
  },
  {
    name: "Mauricio Monteiro",
    role: "Engenheiro",
    quote:
      "Profissionalismo e técnica impressionantes. O resultado superou todas as expectativas do board.",
  },
];

function Testimonials() {
  return (
    <section className="bg-surface/60 border-y border-border/60 py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Depoimentos
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Clientes que confiaram e cresceram.
          </h2>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid min-w-0 grid-cols-1 gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <motion.figure
              key={t.name}
              variants={fadeUp}
              className="surface-card flex h-full min-w-0 flex-col p-7"
            >
              <Quote className="text-primary/30 h-8 w-8" />
              <blockquote className="text-foreground/90 mt-4 flex-1 text-base leading-relaxed">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
                <div className="bg-gradient-brand grid h-11 w-11 shrink-0 place-items-center rounded-full font-display text-sm font-bold text-white">
                  {t.name
                    .split(" ")
                    .map((p) => p[0])
                    .slice(0, 2)
                    .join("")}
                </div>
                <figcaption className="min-w-0 flex-1">
                  <div className="text-foreground truncate text-sm font-semibold">{t.name}</div>
                  <div className="text-muted-foreground truncate text-xs">{t.role}</div>
                </figcaption>
                <div className="ml-auto flex shrink-0 gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.figure>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ------------------------------ Technologies ----------------------------- */

const TECHS = [
  "React",
  "Next.js",
  "Node.js",
  "TypeScript",
  "JavaScript",
  "Laravel",
  "PHP",
  "Docker",
  "PostgreSQL",
  "MongoDB",
  "Firebase",
  "Supabase",
  "AWS",
  "Git",
  "GitHub",
  "Figma",
];

function Technologies() {
  return (
    <section className="py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            Stack
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Tecnologias que utilizamos
          </h2>
          <p className="text-muted-foreground mt-4 text-base sm:text-lg">
            Escolhemos ferramentas modernas, robustas e bem suportadas para garantir
            longevidade do seu projeto.
          </p>
        </Reveal>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8"
        >
          {TECHS.map((t) => (
            <motion.div
              key={t}
              variants={fadeUp}
              className="surface-card flex items-center justify-center gap-2 px-3 py-4 text-sm font-medium transition-colors hover:border-primary/30 hover:text-primary"
            >
              <span className="bg-primary/70 inline-block h-1.5 w-1.5 rounded-full" />
              {t}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */

const FAQS = [
  {
    q: "Quanto tempo leva para entregar um projeto?",
    a: "O prazo depende do escopo. Uma landing page leva em torno de 2 a 3 semanas. Sistemas e apps costumam ter um cronograma de 6 a 16 semanas, definido no planejamento.",
  },
  {
    q: "Como funciona o orçamento?",
    a: "Após o briefing, enviamos uma proposta detalhada com escopo, prazo e investimento. Não cobramos pela proposta e ela não tem compromisso.",
  },
  {
    q: "Vocês oferecem suporte após a entrega?",
    a: "Sim. Trabalhamos com planos de suporte e evolução contínua para garantir que sua solução siga performática e segura.",
  },
  {
    q: "Quem é o dono do código?",
    a: "Você. Todo o código é entregue em seu repositório, com documentação e total transparência.",
  },
  {
    q: "Trabalham com empresas de qualquer porte?",
    a: "Atendemos desde startups até grandes empresas. Adaptamos squad e processo ao tamanho do projeto.",
  },
  {
    q: "Preciso ter um domínio antes de começar o projeto?",
    a: "Não é obrigatório. Podemos te orientar na escolha e registro do domínio ideal para o seu negócio, ou usar um domínio que você já possua.",
  },
  {
    q: "Vocês cuidam da hospedagem do site?",
    a: "Sim. Indicamos e configuramos a hospedagem mais adequada ao projeto, seja em servidores tradicionais ou plataformas cloud, e podemos gerenciar tudo para você.",
  },
  {
    q: "O site vai funcionar bem em celulares e tablets?",
    a: "Sim. Todos os projetos são desenvolvidos com design responsivo, garantindo uma boa experiência em qualquer dispositivo.",
  },
  {
    q: "O site já vem otimizado para aparecer no Google?",
    a: "Aplicamos as boas práticas de SEO técnico desde a estrutura do código até performance e metadados, o que ajuda no posicionamento orgânico.",
  },
  {
    q: "E se eu precisar de alterações depois que o site estiver no ar?",
    a: "Sem problemas. Oferecemos planos de manutenção com ajustes, atualizações de conteúdo e novas funcionalidades sempre que precisar.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-surface/60 border-y border-border/60 py-24 md:py-32">
      <div className="container-page">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-primary text-xs font-semibold uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Dúvidas frequentes
          </h2>
        </Reveal>

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className="surface-card overflow-hidden p-0">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-foreground text-base font-semibold sm:text-lg">
                      {f.q}
                    </span>
                    <span
                      className={`bg-primary/8 text-primary grid h-8 w-8 shrink-0 place-items-center rounded-full transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                        }`}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="text-muted-foreground px-6 pb-6 text-sm leading-relaxed sm:text-base">
                      {f.a}
                    </p>
                  </motion.div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------- Final CTA ------------------------------ */

function FinalCTA() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="container-page">
        <Reveal>
          <div className="relative isolate overflow-hidden rounded-3xl bg-gradient-brand px-6 py-16 text-center sm:px-12 md:px-16 md:py-24">
            <div aria-hidden className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,white_0%,transparent_70%)] opacity-20" />
              <svg className="absolute inset-0 h-full w-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                    <path d="M48 0H0V48" fill="none" stroke="white" strokeWidth="1" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium text-white backdrop-blur-md">
              <Lock className="h-3.5 w-3.5" />
              Proposta sem compromisso
            </span>
            <h2 className="font-display mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl lg:text-6xl">
              Vamos transformar sua ideia em um projeto de sucesso.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-white/85 sm:text-lg">
              Conte o que você precisa. Em até 24h retornamos com um plano claro para tirar seu
              projeto do papel.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href={EMAIL_CTA_URL}
                className="text-primary group inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold shadow-[var(--shadow-glow)] transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                Solicitar orçamento
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={WHATSAPP_CTA_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:w-auto"
              >
                <WhatsappIcon className="h-4 w-4 text-green-500" />
                Conversar no WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------------- Footer -------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-surface/40 pt-16 pb-10">
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a
              href="#top"
              onClick={(e) => scrollToSection(e, "top")}
              className="flex items-center gap-2"
              aria-label="JoeSeven — Início"
            >
              <LogoMark className="h-9 w-9 object-contain" />
              <span className="font-display text-lg font-bold tracking-tight">JoeSeven | Soluções Web</span>
            </a>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
              Engenharia, design e marketing trabalhando juntos para construir o futuro digital
              do seu negócio.
            </p>
            <div className="mt-5 flex items-center gap-2">
              {[
                {
                  Icon: Linkedin,
                  label: "LinkedIn",
                  href: "https://www.linkedin.com/company/joeseven7",
                },
                {
                  Icon: Instagram,
                  label: "Instagram",
                  href: "https://www.instagram.com/joeseven.7",
                },
                {
                  Icon: WhatsappIcon,
                  label: "WhatsApp",
                  href: WHATSAPP_CTA_URL,
                },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="border-border bg-background text-muted-foreground hover:text-primary hover:border-primary/40 grid h-10 w-10 place-items-center rounded-full border transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="font-display text-sm font-semibold">Links rápidos</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => scrollToSection(e, l.href.replace("#", ""))}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold">Serviços</div>
            <ul className="text-muted-foreground mt-4 space-y-2.5 text-sm">
              <li>Desenvolvimento Web</li>
              <li>Aplicativos Mobile</li>
              <li>Tráfego Pago & SEO</li>
              <li>Inteligência Artificial</li>
              <li>Consultoria</li>
            </ul>
          </div>

          <div>
            <div className="font-display text-sm font-semibold">Contato</div>
            <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={TRAFFIC_MANAGER_WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground flex items-start gap-2.5 transition-colors"
                >
                  <WhatsappIcon className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span>Gestor de tráfego</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:joesevenn7@gmail.com?subject=Solicita%C3%A7%C3%A3o%20de%20or%C3%A7amento&body=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                  className="hover:text-foreground flex items-start gap-2.5 transition-colors"
                >
                  <Mail className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span>joesevenn7@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_CTA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground flex items-start gap-2.5 transition-colors"
                >
                  <Phone className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                  <span>+55 (41) 9631-5247</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="text-primary mt-0.5 h-4 w-4 shrink-0" />
                Curitiba, PR, Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row">
          <div>© {new Date().getFullYear()} JoeSeven. Todos os direitos reservados.</div>
          <div className="flex gap-5">
            <Link to="/privacy" className="hover:text-foreground transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/terms" className="hover:text-foreground transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}