import { ServerStatus, Strategy } from '@prisma/client';

// flyweights / display orientated classes based on the schema models

export type CurrentDeployment = {
  DeployedAt: Date;
  BranchName: GitHubBranch;
  Features: FeatureSummary[];
  People: PersonDetail[];
  Teams: TeamDetail[];
  DeploymentStatus: ServerStatus;
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

export type PlannedDeploymentSummary = {
  Person: PersonDetail;
  Feature: FeatureSummary;
  Strategy: Strategy;
};

export type Environment = {
  name: string;
  welcomeMessage: string;
};

export type GitHubBranch = {
  name: string;
  url: URL;
};
