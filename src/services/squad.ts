import { hygraphFetch } from "@/lib/hygraph";
import type { Squad } from "@/types/player";

export async function getSquad(): Promise<Squad[]> {
  const query = `
      query GetSquad {
        squads(first: 100, orderBy: position_ASC) {
          id
          name
          position
          number
          photo {
            url
          }
        }
      }
  `;

  try {
    // CORREÇÃO 1: Tipagem deve esperar 'squads', não 'players'
    const data = await hygraphFetch<{ squads: Squad[] }>({
      query,
      tags: ["squad", "squads"],
    });

    // CORREÇÃO 2: Verificar e retornar 'squads'
    if (!data || !data.squads) {
      console.warn("⚠️ Nenhum dado retornado para squads");
      return [];
    }

    return data.squads;
  } catch (error) {
    console.error("❌ Erro ao buscar elenco no Hygraph:", error);
    return [];
  }
}