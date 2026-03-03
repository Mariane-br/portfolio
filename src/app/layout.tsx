import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mariane Ribeiro Barbosa | Analista de Qualidade de Software",
  description:
    "Engenheira de Software com 5 anos em Qualidade de Software, certificada CTFL (ISTQB). QA, automação de testes, Cypress, Postman, JMeter.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
