import { groupDeployments } from './utils';

export interface IPlannedDeployment {
  person: string;
  feature: string;
  strategy: string;
}

export interface IStatus {
  name: string;
  value: number;
}

export interface ICurrentDeploymentInfo {
  people: string[];
  team: string;
  features: string[];
  status: IStatus;
}

export interface IPerson {
  name: string;
}

export interface IFeature {
  name: string;
}

export const plannedDeploymentsDemo = [
  {
    person: 'jk. rowling',
    feature: 'Yet another QA demo',
    strategy: 'batch',
  },
  {
    person: 'peter F. hamilton',
    feature: 'do the thing!',
    strategy: 'batch',
  },
  {
    person: 'tracy harding',
    feature: 'fixed bug',
    strategy: 'single',
  },
  {
    person: 'lucy hawking',
    feature: 'try this on for size',
    strategy: 'batch',
  },
] as IPlannedDeployment[];

export const groupedDeploymentsDemo = groupDeployments(
  plannedDeploymentsDemo
) as IPlannedDeployment[][];

export const availableStatus = {
  name: 'Available',
  value: 0,
};

export const busyStatus = {
  name: 'Busy',
  value: 1,
};

export const plannedStatus = {
  name: 'Planned',
  value: 2,
};

export const pendingStatus = {
  name: 'Pending',
  value: 3,
};

const statuses = [
  availableStatus,
  busyStatus,
  plannedStatus,
  pendingStatus,
] as IStatus[];

export default function getDemoStatus() {
  return statuses.sort(function () {
    return 0.5 - Math.random();
  })[0];
}

export const currentDeploymentInfoDemo = {
  people: ['tony riggatony', 'juan juan', 'james someone-else'],
  team: 'Hyperion (rocks)',
  features: ['Feature A', 'Feature B', 'Feature C'],
  status: getDemoStatus(),
} as ICurrentDeploymentInfo;
