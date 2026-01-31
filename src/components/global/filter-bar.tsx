"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";

const FilterBar = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // Função para transformar texto em Slug (URL Friendly)
  const slugify = (text: string) => {
    return text
      .toString()
      .normalize("NFD")                   // Decompõe caracteres acentuados
      .replace(/[\u0300-\u036f]/g, "")    // Remove os acentos
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")               // Substitui espaços por -
      .replace(/[^\w-]+/g, "")            // Remove caracteres especiais
      .replace(/--+/g, "-");              // Evita hifens duplos
  };

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("search", term);
    } else {
      params.delete("search");
    }
    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };

  const setCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);

    if (category === "all") {
      params.delete("category");
    } else {
      // Aplica a normalização antes de setar na URL
      params.set("category", slugify(category));
    }

    params.delete("page");
    replace(`${pathname}?${params.toString()}`);
  };

  const currentCategory = searchParams.get("category") || "all";

  return (
    <div className="space-y-6 bg-white dark:bg-zinc-900 p-6 rounded-[24px] border border-zinc-100 dark:border-zinc-800 shadow-sm">
      <div>
        <h3 className="text-sm font-black uppercase italic tracking-wider mb-4 text-zinc-900 dark:text-white">
          Pesquisar Notícia
        </h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400" />
          <Input
            placeholder="Ex: Smartphone, notebook..."
            className="pl-9 rounded-xl border-border focus:ring-ring"
            defaultValue={searchParams.get("search")?.toString()}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>

      <div>
        <h3 className="text-sm font-black uppercase italic tracking-wider mb-4 text-zinc-900 dark:text-white">
          Categorias
        </h3>
        <div className="flex flex-wrap gap-2">
          {["all", "Smartphone", "Notebook", "Eletrodomésticos", "Eletrônicos", "Casa", "Decoração", "Automotivo", "Fitness"].map((cat) => {
            const catSlug = slugify(cat);
            const isActive = currentCategory === catSlug || (cat === "all" && currentCategory === "all");

            return (
              <Button
                key={cat}
                variant={isActive ? "default" : "outline"}
                size="sm"
                onClick={() => setCategory(cat)}
                className={isActive
                  ? " text-white border-none rounded-full font-bold px-4"
                  : "rounded-full hover:border-accent transition-all px-4"
                }
              >
                {cat === "all" ? "Todas" : cat}
              </Button>
            );
          })}
        </div>
      </div>

      {(searchParams.get("search") || searchParams.get("category")) && (
        <Button
          variant="ghost"
          className="w-full  font-bold text-xs uppercase tracking-widest transition-colors"
          onClick={() => replace(pathname)}
        >
          <X className="mr-2 h-4 w-4" /> Limpar Filtros
        </Button>
      )}
    </div>
  );
}

export { FilterBar };