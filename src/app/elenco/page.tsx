import { PlayerCard } from "@/components/global";
import { Separator } from "@/components/ui/separator";
import { getSquad } from "@/services/squad";


export default async function SquadPage() {
  // Para buscar do CMS futuramente:
  const players = await getSquad();

  // Define a ordem desejada das posições para exibição na tela
  const order = [
    "Goleiro",
    "Lateral direito",
    "Zagueiro",
    "Lateral esquerdo",
    "Meia",
    "Atacante"
  ];

  // Agrupa os jogadores apenas se existirem dados
  const positions = order.filter(pos =>
    players.some(p => p.position === pos)
  );

  if (players.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-2xl font-bold">Elenco em manutenção...</h1>
        <p className="text-muted-foreground">Estamos atualizando as fotos dos craques! 🇾🇪</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
      {/* Header da Página */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
          Elenco <span className="text-red-600">2026</span>
        </h1>
        <p className="text-zinc-500 max-w-2xl text-lg">
          Confira o elenco atual do São Paulo FC para a temporada. Técnica, raça e a tradição do Soberano.
        </p>
        <Separator className="bg-zinc-800" />
      </header>

      {/* Listagem por Posições */}
      <div className="space-y-20">
        {positions.map((pos) => (
          <section key={pos} className="space-y-8">
            <h2 className="text-2xl md:text-3xl font-black uppercase italic border-l-4 border-red-600 pl-4 tracking-tight">
              {pos}
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6">
              {players
                .filter(p => p.position === pos)
                .map(player => (
                  <PlayerCard key={player.id} player={player} />
                ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}