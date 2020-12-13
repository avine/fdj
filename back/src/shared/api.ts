export interface LeagueApi {
  _id?: string;
  name: string;
}

export interface TeamApi {
  _id?: string;
  name: string;
  thumbnail: string;
}

export interface PlayerApi {
  _id?: string;
  name: string;
  position: string;
  thumbnail: string;
  born: string;
  signin: { amount: number; currency: string; };
}

export interface LeagueWithTeamsApi extends LeagueApi {
  teams: TeamApi[];
}

export interface TeamWithPlayersApi extends TeamApi {
  players: PlayerApi[];
}
