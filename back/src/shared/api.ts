export interface LeagueSummary {
  _id?: string;
  name: string;
}

export interface TeamSummary {
  _id?: string;
  name: string;
  thumbnail: string;
}

export interface Player {
  _id?: string;
  name: string;
  position: string;
  thumbnail: string;
  born: string;
  signin: { amount: number; currency: string; };
}
