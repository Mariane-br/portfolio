"use client";

import Image from "next/image";
import { useState, useRef, useCallback } from "react";

const NAV_LINKS = [
  { id: "inicio", label: "Início" },
  { id: "about", label: "Sobre" },
  { id: "experience", label: "Experiência" },
  { id: "skills", label: "Competências" },
  { id: "education", label: "Formação" },
  { id: "contact", label: "Contato" },
];

const SOCIAL = [
  { href: "https://wa.me/5535999922487", label: "WhatsApp", icon: "whatsapp" },
  { href: "mailto:mariane.0306@outlook.com", label: "Email", icon: "email" },
  { href: "https://github.com/Mariane-br", label: "GitHub", icon: "github" },
  { href: "https://www.linkedin.com/in/mariane-barbosa-9a6145233", label: "LinkedIn", icon: "linkedin" },
];

const ABOUT_CARDS = [
  {
    title: "Processos de QA",
    desc: "Estruturação e evolução de processos de QA para padronização e previsibilidade",
    icon: "process",
  },
  {
    title: "Estratégia de Testes",
    desc: "Planejamento baseado em risco e critérios de aceitação",
    icon: "target",
  },
  {
    title: "Automação",
    desc: "Cypress, Postman e JMeter para testes funcionais, API e performance",
    icon: "code",
  },
  {
    title: "Métricas",
    desc: "Indicadores de qualidade e redução de retrabalho em produção",
    icon: "chart",
  },
];

const EXPERIENCES = [
  {
    role: "Analista QA Jr I",
    company: "GTPlan",
    period: "Fev 2025 – Presente",
    location: "São Paulo, SP",
    bullets: [
      "Atuação ativa na estruturação e evolução do processo de QA da empresa.",
      "Planejamento e execução de testes em sistema de Supply Chain com integrações ao ERP, garantindo a validação das regras de negócio e a consistência dos dados.",
      "Criação e acompanhamento de métricas de qualidade, contribuindo para redução de retrabalho em produção.",
      "Desenvolvimento de ferramenta interna utilizando IA (Cursor AI) para otimização da escrita de casos de teste.",
      "Colaboração direta com produto e desenvolvimento na definição de critérios de aceitação.",
      "Análise e conferência de dados diretamente no banco para garantir integridade das informações.",
    ],
    tags: ["QA", "ERP", "SQL", "Métricas", "Scrum", "IA"],
  },
  {
    role: "Analista de Qualidade (QA)",
    company: "Leucotron",
    period: "Fev 2021 – Dez 2024",
    location: "Santa Rita do Sapucaí, MG",
    bullets: [
      "Execução de testes funcionais e regressivos em aplicações web e desktop",
      "Automação de testes utilizando Cypress (JavaScript)",
      "Testes de API e performance",
      "Gestão de bugs e acompanhamento de correções",
      "Produção de relatórios de qualidade e criação de documentação técnica e manuais de produto para apoio a usuários e times internos",
    ],
    tags: ["Cypress", "JavaScript", "API", "JMeter", "Postman"],
  },
];

const SKILLS_LIST = [
  "Estruturação e melhoria de processos de QA",
  "Estratégia de testes baseada em risco",
  "Planejamento e escrita de casos de teste",
  "Testes funcionais, regressivos e exploratórios",
  "Automação de testes (Cypress + JavaScript)",
  "Testes de API (Postman)",
  "Testes de performance (JMeter)",
  "Validação de regras de negócio complexas (ERP / S&OP)",
  "Análise de métricas e indicadores de qualidade",
  "Ambiente ágil (Scrum)",
];

/* Ícones translúcidos do fundo (estilo Quality Level) - distribuídos por todo o portfolio */
const PORTFOLIO_BG_ICONS: { type: string; left: string; top: string }[] = [
  { type: "shield-check", left: "8%", top: "5%" },
  { type: "cog", left: "88%", top: "8%" },
  { type: "chart-bar", left: "14%", top: "22%" },
  { type: "document", left: "82%", top: "18%" },
  { type: "globe", left: "6%", top: "38%" },
  { type: "users", left: "92%", top: "42%" },
  { type: "cart", left: "22%", top: "12%" },
  { type: "arrows-in", left: "76%", top: "78%" },
  { type: "check", left: "50%", top: "92%" },
  { type: "clipboard", left: "72%", top: "28%" },
  { type: "beaker", left: "28%", top: "55%" },
  { type: "chart-pie", left: "90%", top: "62%" },
  { type: "shield-check", left: "12%", top: "75%" },
  { type: "document", left: "85%", top: "88%" },
  { type: "chart-bar", left: "5%", top: "65%" },
  { type: "cog", left: "78%", top: "48%" },
  { type: "check", left: "42%", top: "35%" },
  { type: "clipboard", left: "18%", top: "48%" },
];

function BgIcon({ type }: { type: string }) {
  const cls = "h-8 w-8";
  const stroke = { strokeLinecap: "round" as const, strokeLinejoin: "round" as const, strokeWidth: 1.5 };
  if (type === "shield-check") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>);
  if (type === "cog") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" /><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>);
  if (type === "chart-bar") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>);
  if (type === "document") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>);
  if (type === "globe") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.22-4.418" /></svg>);
  if (type === "users") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>);
  if (type === "cart") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" /></svg>);
  if (type === "arrows-in") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M9 8.25H7.5a2.25 2.25 0 00-2.25 2.25v9a2.25 2.25 0 002.25 2.25h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" /></svg>);
  if (type === "check") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
  if (type === "clipboard") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" /></svg>);
  if (type === "beaker") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57-1.579a2.25 2.25 0 00-.659-1.591V8.104M14.25 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0V5.904m0 5.714v5.714M19.8 15.3l-1.404-1.405M14.25 3.104l.75.082M5.1 14.5l1.404 1.405M4.5 8.104v5.714" /></svg>);
  if (type === "chart-pie") return (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className={cls} {...stroke}><path d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" /></svg>);
  return null;
}

function IconProcess() {
  return (
    <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
  );
}
function IconTarget() {
  return (
    <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
function IconCode() {
  return (
    <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  );
}
function IconChart() {
  return (
    <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  );
}
function IconCalendar() {
  return (
    <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}
function IconLocation() {
  return (
    <svg className="h-4 w-4 shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
function IconGraduation() {
  return (
    <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    </svg>
  );
}
function IconCert() {
  return (
    <svg className="h-8 w-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
    </svg>
  );
}

function openWhatsApp(formData: { nome: string; email: string; mensagem: string }) {
  const text = encodeURIComponent(
    "Olá! Me chamo " + formData.nome + ". Email: " + formData.email + "\n\n" + formData.mensagem
  );
  window.open("https://wa.me/5535999922487?text=" + text, "_blank");
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ nome: "", email: "", mensagem: "" });
  const [glow, setGlow] = useState({ x: 50, y: 50 }); // % da viewport (centro)

  const handlePageMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window === "undefined") return;
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    setGlow({ x, y });
  }, []);

  return (
    <div
      className="min-h-screen overflow-x-hidden text-slate-100 bg-qa-portfolio"
      onMouseMove={handlePageMouseMove}
    >
      {/* Glow interativo em toda a página (fixo na viewport) */}
      <div
        className="pointer-events-none fixed inset-0 z-[1] transition-all duration-300 ease-out"
        aria-hidden
      >
        <div
          className="absolute h-[min(80vw,420px)] w-[min(80vw,420px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-80"
          style={{
            left: `${glow.x}%`,
            top: `${glow.y}%`,
            background: "radial-gradient(circle, rgba(34,211,238,0.12) 0%, rgba(34,211,238,0.04) 40%, transparent 70%)",
          }}
        />
        <div
          className="absolute h-[min(90vw,520px)] w-[min(90vw,520px)] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
          style={{
            left: `${glow.x}%`,
            top: `${glow.y}%`,
            background: "radial-gradient(circle, rgba(167,139,250,0.06) 0%, transparent 60%)",
          }}
        />
      </div>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-cyan-500/20 bg-dark-bg/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6">
          <a href="#" className="text-lg font-semibold text-slate-200 hover:text-cyan-400">
            Mariane Ribeiro Barbosa
          </a>
          <button
            type="button"
            className="rounded p-2 text-slate-400 hover:text-cyan-400 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          <div className="hidden flex-1 items-center justify-center gap-1 md:flex">
            {NAV_LINKS.map(({ id, label }) => (
              <a
                key={id}
                href={id === "inicio" ? "#" : `#${id}`}
                className="rounded px-3 py-2 text-sm text-slate-300 transition hover:text-cyan-400"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-2 md:flex">
            {SOCIAL.map(({ href, label, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-cyan-500/30 bg-slate-800/50 p-2 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-400"
                aria-label={label}
              >
                {icon === "whatsapp" && (
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                )}
                {icon === "email" && (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                )}
                {icon === "github" && (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                )}
                {icon === "linkedin" && (
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                )}
              </a>
            ))}
          </div>
        </nav>
        {/* Mobile menu */}
        <div className={`border-t border-cyan-500/20 bg-dark-bg/98 px-4 py-4 md:hidden ${menuOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={id === "inicio" ? "#" : `#${id}`}
                  className="block rounded px-3 py-2 text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex gap-2">
              {SOCIAL.map(({ href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-cyan-500/30 px-4 py-2 text-sm text-cyan-400">
                  {label}
                </a>
              ))}
            </li>
          </ul>
        </div>
      </header>

      <div className="relative">
        {/* Ícones de fundo em todo o portfolio (estilo Quality Level) */}
        <div className="pointer-events-none absolute inset-0 z-0 min-h-full" aria-hidden>
          {PORTFOLIO_BG_ICONS.map(({ type, left, top }, i) => (
            <div
              key={i}
              className="absolute -translate-x-1/2 -translate-y-1/2 text-sky-400/10 animate-float-icons"
              style={{
                left,
                top,
                width: 32,
                height: 32,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${12 + (i % 6)}s`,
              }}
            >
              <BgIcon type={type} />
            </div>
          ))}
        </div>
        <main className="relative z-10 pt-16">
        {/* Hero */}
        <section
          id="inicio"
          className="relative flex min-h-[85vh] flex-col items-center justify-center overflow-hidden px-4 py-20 md:py-28"
        >
          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              <span className="text-gradient-hero">Mariane Ribeiro Barbosa</span>
            </h1>
            <div className="mt-6 flex justify-center">
              <Image
                src="/perfil.png"
                alt="Mariane Ribeiro Barbosa"
                width={180}
                height={180}
                className="rounded-full object-cover ring-2 ring-cyan-500/50 ring-offset-2 ring-offset-[#0a0e17]"
                priority
              />
            </div>
            <p className="mt-6 font-mono text-lg text-slate-300 md:text-xl">
              &lt;Analista de Qualidade de Software /&gt;
            </p>
            <p className="mt-4 text-slate-400">
              Há <span className="text-cyan-400 font-medium">5 anos</span> impulsionando qualidade e confiabilidade em soluções de software.
            </p>
            <p className="mt-2 text-sm text-slate-500">Santa Rita do Sapucaí – MG</p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
              {SOCIAL.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex shrink-0 items-center justify-center rounded-full border border-cyan-500/50 bg-slate-800/50 p-3 text-cyan-400 transition hover:shadow-glow"
                  aria-label={label}
                >
                  {icon === "whatsapp" && (
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  )}
                  {icon === "email" && (
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {icon === "github" && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {icon === "linkedin" && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Sobre */}
        <section id="about" className="relative border-t border-cyan-500/10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="section-tag text-center text-cyan-400">
              &lt;Sobre Mim /&gt;
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-slate-400">
              Profissional de QA com{" "}
              <span className="text-cyan-400 font-medium">5 anos</span> de experiência em garantia da qualidade, estratégia de testes e automação. Certificada CTFL (ISTQB), com atuação em ERP (S&OP), métricas de qualidade e melhoria contínua em ambientes ágeis, apoiando decisões técnicas e promovendo entregas confiáveis e orientadas ao negócio.
            </p>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ABOUT_CARDS.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-cyan-500/30 bg-slate-900/60 p-6 transition hover:shadow-glow-sm hover:border-cyan-400/50"
                >
                  <div className="mb-4">
                    {card.icon === "process" && <IconProcess />}
                    {card.icon === "target" && <IconTarget />}
                    {card.icon === "code" && <IconCode />}
                    {card.icon === "chart" && <IconChart />}
                  </div>
                  <h3 className="font-semibold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm text-slate-400">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experiência - Timeline */}
        <section id="experience" className="relative border-t border-cyan-500/10 py-20 md:py-28">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="section-tag text-center">
              <span className="text-gradient-section">&lt;Experiência Profissional /&gt;</span>
            </h2>
            <p className="mt-3 text-center text-slate-400">
              5 anos construindo qualidade e confiabilidade em software
            </p>
            <div className="relative mt-16">
              {/* Vertical line - left on mobile, center on desktop */}
              <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-cyan-500/60 to-emerald-500/60 md:left-1/2 md:-translate-x-1/2" />
              {EXPERIENCES.map((job, i) => (
                <div
                  key={`${job.company}-${job.period}`}
                  className={`relative flex flex-col gap-8 pb-16 last:pb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  <div className="relative z-10 ml-12 w-full md:ml-0 md:max-w-[calc(50%-2.5rem)]">
                    <article className="rounded-xl border border-cyan-500/30 bg-slate-900/60 p-6 transition hover:border-cyan-400/40 hover:shadow-glow-sm">
                      <h3 className="text-xl font-bold text-cyan-300">{job.role}</h3>
                      <p className="mt-1 text-white">{job.company}</p>
                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-emerald-400/90">
                        <span className="flex items-center gap-1">
                          <IconCalendar />
                          {job.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <IconLocation />
                          {job.location}
                        </span>
                      </div>
                      <ul className="mt-4 space-y-2 text-sm text-slate-400">
                        {job.bullets.map((b) => (
                          <li key={b} className="flex gap-2">
                            <span className="text-cyan-400">▸</span> {b}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {job.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-md border border-cyan-500/40 bg-slate-800/50 px-2 py-0.5 font-mono text-xs text-cyan-300/90"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </article>
                  </div>
                  <div className="absolute left-4 flex h-4 w-4 shrink-0 items-center justify-center md:left-1/2 md:-translate-x-1/2">
                    <span className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_12px_2px_rgba(34,211,238,0.5)]" />
                  </div>
                  <div className="hidden w-full max-w-[calc(50%-2.5rem)] shrink-0 md:block" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Competências */}
        <section id="skills" className="relative border-t border-cyan-500/10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="section-tag text-center">
              <span className="text-gradient-cyan-magenta">&lt;Competências /&gt;</span>
            </h2>
            <p className="mt-3 text-center text-slate-400">Tecnologias e práticas que uso para garantir qualidade</p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              {SKILLS_LIST.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-cyan-500/30 bg-slate-800/50 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Formação */}
        <section id="education" className="relative border-t border-cyan-500/10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="section-tag text-center">
              <span className="text-gradient-section">&lt;Formação e Cursos /&gt;</span>
            </h2>
            <p className="mt-3 text-center text-slate-400">Formação acadêmica e certificações profissionais</p>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border border-cyan-500/30 bg-slate-900/60 p-6 transition hover:border-cyan-400/40">
                <div className="mb-4">
                  <IconGraduation />
                </div>
                <h3 className="font-mono text-xs uppercase text-slate-500">Formação Acadêmica</h3>
                <ul className="mt-4 space-y-5">
                  <li>
                    <p className="font-semibold text-white">Bacharelado em Engenharia de Software</p>
                    <p className="text-sm text-cyan-400">Centro Universitário Internacional – UNINTER</p>
                    <p className="text-sm text-slate-500">Conclusão em 2025</p>
                  </li>
                  <li>
                    <p className="font-semibold text-white">Técnica em Informática</p>
                    <p className="text-sm text-cyan-400">Colégio Tecnológico Delfim Moreira</p>
                    <p className="text-sm text-slate-500">Santa Rita do Sapucaí – MG · 2018</p>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-cyan-500/30 bg-slate-900/60 p-6 transition hover:border-cyan-400/40">
                <div className="mb-4">
                  <IconCert />
                </div>
                <h3 className="font-mono text-xs uppercase text-slate-500">Certificações</h3>
                <ul className="mt-4 space-y-5">
                  <li>
                    <p className="font-semibold text-white">CTFL – Certified Tester Foundation Level (ISTQB)</p>
                    <p className="text-sm text-slate-500">2025</p>
                  </li>
                  <li>
                    <p className="font-semibold text-white">Formação Completa em Testes Automatizados com Cypress</p>
                    <p className="text-sm text-slate-500">Udemy · 2023</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 rounded-xl border border-cyan-500/30 bg-slate-900/60 p-6">
              <h3 className="font-mono text-xs uppercase text-slate-500">Idiomas</h3>
              <p className="mt-2 text-slate-300">Português · Inglês básico</p>
            </div>
          </div>
        </section>

        {/* Contato - duas colunas */}
        <section id="contact" className="relative border-t border-cyan-500/10 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <h2 className="section-tag text-center text-cyan-400">
              &lt;Contato /&gt;
            </h2>
            <p className="mt-3 text-center text-slate-400">Vamos conversar sobre seu próximo projeto ou oportunidade</p>
            <div className="mt-14 grid gap-10 lg:grid-cols-2">
              <div>
                <h3 className="mb-4 font-semibold text-white">Canais de Contato</h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/5535999922487"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-cyan-500/30 bg-slate-800/50 p-4 transition hover:border-cyan-400/50 hover:shadow-glow-sm"
                  >
                    <div className="rounded-lg bg-emerald-500/20 p-2">
                      <svg className="h-6 w-6 text-emerald-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-sm text-slate-400">(35) 9 9992-2487</p>
                    </div>
                  </a>
                  <a
                    href="mailto:mariane.0306@outlook.com"
                    className="flex items-center gap-4 rounded-xl border border-cyan-500/30 bg-slate-800/50 p-4 transition hover:border-cyan-400/50 hover:shadow-glow-sm"
                  >
                    <div className="rounded-lg bg-cyan-500/20 p-2">
                      <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-sm text-slate-400">mariane.0306@outlook.com</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Mariane-br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-cyan-500/30 bg-slate-800/50 p-4 transition hover:border-cyan-400/50 hover:shadow-glow-sm"
                  >
                    <div className="rounded-lg bg-slate-600/50 p-2">
                      <svg className="h-6 w-6 text-slate-300" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">GitHub</p>
                      <p className="text-sm text-slate-400">github.com/Mariane-br</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/mariane-barbosa-9a6145233"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-cyan-500/30 bg-slate-800/50 p-4 transition hover:border-cyan-400/50 hover:shadow-glow-sm"
                  >
                    <div className="rounded-lg bg-[#0a66c2]/30 p-2">
                      <svg className="h-6 w-6 text-[#0a66c2]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">LinkedIn</p>
                      <p className="text-sm text-slate-400">mariane-barbosa</p>
                    </div>
                  </a>
                </div>
                <p className="mt-4 text-sm text-slate-500">Santa Rita do Sapucaí – MG</p>
              </div>
              <div className="rounded-xl border border-cyan-500/30 bg-slate-900/60 p-6">
                <h3 className="font-semibold text-white">Envie uma Mensagem</h3>
                <p className="mt-1 text-sm text-slate-400">Preencha o formulário e envie sua mensagem via WhatsApp</p>
                <form onSubmit={(e) => { e.preventDefault(); openWhatsApp(formData); }} className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-medium text-slate-300">Nome</label>
                    <input
                      id="nome"
                      type="text"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) => setFormData((p) => ({ ...p, nome: e.target.value }))}
                      className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300">Email</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData((p) => ({ ...p, email: e.target.value }))}
                      className="mt-1 w-full rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="mensagem" className="block text-sm font-medium text-slate-300">Mensagem</label>
                    <textarea
                      id="mensagem"
                      rows={4}
                      placeholder="Sua mensagem..."
                      value={formData.mensagem}
                      onChange={(e) => setFormData((p) => ({ ...p, mensagem: e.target.value }))}
                      className="mt-1 w-full resize-none rounded-lg border border-slate-600 bg-slate-800/50 px-4 py-2 text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-4 py-3 font-semibold text-slate-900 transition hover:bg-amber-300"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Enviar via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        </main>
      </div>

      <footer className="border-t border-cyan-500/20 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Mariane Ribeiro Barbosa · Engenheira de Software & QA
      </footer>
      </div>
  );
}
