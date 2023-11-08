export namespace Fixtures {
  export type Fixtures = Fixture[];

  export interface Fixture {
    fixture: FixtureDetails;
    league: League;
    teams: Teams;
    goals: Goals;
    score: Score;
  }

  export interface FixtureDetails {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: Periods;
    venue: Venue;
    status: Status;
  }

  export interface Periods {
    first: null | string;
    second: null | string;
  }

  export interface Venue {
    id: number;
    name: string;
    city: string;
  }

  export interface Status {
    long: string;
    short: string;
    elapsed: null | string;
  }

  export interface League {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  }

  export interface Teams {
    home: Team;
    away: Team;
  }

  export interface Team {
    id: number;
    name: string;
    logo: string;
    winner: null | boolean;
  }

  export interface Goals {
    home: null | number;
    away: null | number;
  }

  export interface Score {
    halftime: Halftime;
    fulltime: Fulltime;
    extratime: Extratime;
    penalty: Penalty;
  }

  export interface Halftime {
    home: null | string;
    away: null | string;
  }

  export interface Fulltime {
    home: null | string;
    away: null | string;
  }

  export interface Extratime {
    home: null | string;
    away: null | string;
  }

  export interface Penalty {
    home: null | string;
    away: null | string;
  }
}
