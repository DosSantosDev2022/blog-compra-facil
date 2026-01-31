import Link from "next/link";
import { Mail, Github, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Logo } from "./logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Coluna 1: Branding e Sobre */}
          <div className="space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed">
              Encontre as melhores análises de produtos físicos. No Compra Fácil, testamos e selecionamos os melhores itens para sua casa, tecnologia e dia a dia com links de afiliados confiáveis.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></Link>
              <Link href="#" className="hover:text-primary transition-colors"><Mail size={20} /></Link>
            </div>
          </div>

          {/* Coluna 2: Navegação Rápida */}
          <div className="space-y-4">
            <h3 className="text-primary font-bold uppercase text-sm tracking-widest">Navegação</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/artigos" className="hover:text-primary transition-colors">Todas as Notícias</Link></li>
              <li><Link href="/artigos?category=Jogos" className="hover:text-primary transition-colors">Próximos Jogos</Link></li>
              <li><Link href="/artigos?category=Mercado" className="hover:text-primary transition-colors">Mercado da Bola</Link></li>
              <li><Link href="/produtos" className="hover:text-primary transition-colors">Produtos Recomendados</Link></li>
            </ul>
          </div>

          {/* Coluna 3: Institucional */}
          <div className="space-y-4">
            <h3 className="text-primary font-bold uppercase text-sm tracking-widest">Suporte</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacidade" className="hover:text-primary transition-colors">Política de Privacidade</Link></li>
            </ul>
          </div>

          {/* Coluna 4: Newsletter */}
          <div className="space-y-4">
            <h3 className="text-primary font-bold uppercase text-sm tracking-widest">Fique Atualizado</h3>
            <p className="text-sm">Receba as últimas do MorumBIS no seu e-mail.</p>
            <div className="flex flex-col gap-2">
              <Input
                placeholder="Seu melhor e-mail"
                className="border border-muted-foreground focus-visible:ring-ring"
              />
              <Button>
                INSCREVER
              </Button>
            </div>
          </div>
        </div>

        {/* Linha Inferior: Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Compra fácil - Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <span>Desenvolvido por</span>
            <span className="text-primary">dossantosdev</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export { Footer }