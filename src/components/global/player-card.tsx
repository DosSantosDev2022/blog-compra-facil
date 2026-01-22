import type { Squad } from "@/types/player";
import Image from "next/image";

const PlayerCard = ({ player }: { player: Squad }) => {
  return (
    <div className="group flex flex-col items-center">
      <div className="relative w-full aspect-3/4 overflow-hidden bg-zinc-100 dark:bg-zinc-800 rounded-t-lg">
        <Image
          src={player.photo?.url}
          alt={player.name}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      {/* Tarja Vermelha com Nome */}
      <div className="w-full bg-red-600 p-2 text-center shadow-lg">
        <h3 className="text-white font-black uppercase italic text-xs md:text-sm tracking-tighter truncate">
          {player.name}
        </h3>
      </div>
    </div>
  );
}

export { PlayerCard }