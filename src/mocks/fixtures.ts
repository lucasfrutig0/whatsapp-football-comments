import { Fixtures } from "../@types/fixtures";

export const mockFixtures: Fixtures.Fixture[] = [
  {
    fixture: {
      id: 868223,
      referee: "P. Tierney",
      timezone: "UTC",
      date: "2023-03-17T20:00:00+00:00",
      timestamp: 1679083200,
      periods: {
        first: null,
        second: null,
      },
      venue: {
        id: 566,
        name: "The City Ground",
        city: "Nottingham, Nottinghamshire",
      },
      status: {
        long: "No,t Started",
        short: "NS",
        elapsed: null,
      },
    },
    league: {
      id: 39,
      name: "Premier League",
      country: "England",
      logo: "https://media-1.api-sports.io/football/leagues/39.png",
      flag: "https://media-1.api-sports.io/flags/gb.svg",
      season: 2022,
      round: "Regular Season - 28",
    },
    teams: {
      home: {
        id: 65,
        name: "Nottingham Forest",
        logo: "https://media-2.api-sports.io/football/teams/65.png",
        winner: null,
      },
      away: {
        id: 34,
        name: "Newcastle",
        logo: "https://media-1.api-sports.io/football/teams/34.png",
        winner: null,
      },
    },
    goals: {
      home: null,
      away: null,
    },
    score: {
      halftime: {
        home: null,
        away: null,
      },
      fulltime: {
        home: null,
        away: null,
      },
      extratime: {
        home: null,
        away: null,
      },
      penalty: {
        home: null,
        away: null,
      },
    },
  },
];

export const mockFixture = mockFixtures[0];
