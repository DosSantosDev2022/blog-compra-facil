export interface Squad {
  id: string;
  name: string;
  position: string;
  photo: {
    url: string;
  };
  number?: string;
}

export interface SquadResponse {
  squads: Squad[];
}