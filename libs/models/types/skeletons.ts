import {
  CurrentDeployment,
  PlannedDeploymentSummary,
  Environment,
} from './types';
import { Status, Strategy } from '@prisma/client';

const loading = 'loading...';

export const CurrentDeploymentSkeleton = {
  DeployedAt: new Date('asdasd'),
  BranchName: { name: loading, url: new URL('/') },
  Features: [{ name: loading, ticketNumber: loading }],
  People: [{ name: loading, team: undefined }],
  Teams: [{ name: loading }],
  DeploymentStatus: Status.PENDING,
} as CurrentDeployment;

export const EnvironmentSkeleton = {
  name: loading,
  welcomeMessage: loading,
} as Environment;

export const PlannedDeploymentSkeleton = {
  Person: { name: loading, team: undefined },
  Feature: { name: loading, ticketNumber: loading },
  Strategy: Strategy.SINGLE,
} as PlannedDeploymentSummary;

export const PlannedGroupsSkeleton = [
  [PlannedDeploymentSkeleton],
  [PlannedDeploymentSkeleton],
  [PlannedDeploymentSkeleton],
] as PlannedDeploymentSummary[][];
