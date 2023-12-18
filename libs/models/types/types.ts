import { Status, Strategy } from '@prisma/client';

// flyweights / display orientated classes based on the schema models

export type CurrentDeployment = {
  Features: FeatureSummary[];
  People: PersonDetail[];
  Teams: TeamDetail[];
  Status: Status;
};

export type FeatureSummary = {
  name: string;
  ticketNumber: string;
};

export type PersonDetail = {
  name: string;
  team: TeamDetail | undefined;
};

export type TeamDetail = {
  name: string;
};

export type PlannedDeployment = {
  Person: PersonDetail;
  Feature: FeatureSummary;
  Strategy: Strategy;
};

export type Environment = {
  name: string;
  welcomeMessage: string;
};
