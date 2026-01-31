import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Footer, Navbar } from "@/components/global";

const poppins = Poppins({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://comprafacil.com.br"),

  title: {
    default: "Compra Fácil | Reviews e Recomendações de Produtos",
    template: "%s | Compra Fácil"
  },

  // 2. Descrição focada em conversão e ajuda ao consumidor
  description: "Encontre as melhores análises de produtos físicos. No Compra Fácil, testamos e selecionamos os melhores itens para sua casa, tecnologia e dia a dia com links de afiliados confiáveis.",

  // 3. Palavras-chave relevantes para o nicho de afiliados
  keywords: [
    "review de produtos",
    "melhores produtos do ano",
    "guia de compra",
    "análise de eletrônicos",
    "compras online",
    "recomendações de produtos"
  ],

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // 4. Metadados para Redes Sociais (Opcional, mas recomendado)
  openGraph: {
    title: "Compra Fácil - Reviews de Produtos",
    description: "As melhores análises de produtos físicos para ajudar você a comprar com segurança.",
    type: "website",
    locale: "pt_BR",
    url: "https://comprafacil.com.br",
    siteName: "Compra Fácil",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2827166560948178"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        <meta name="google-site-verification" content="BQ3BsKxQv9wmjdsELFbZEa887IFYp_9gIOeMQ_mgnZc" />
      </head>
      <body
        className={`${poppins.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
