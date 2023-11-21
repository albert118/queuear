import { groupDeployments } from '../utils';
import { ICurrentDeploymentInfo, IPlannedDeployment, IStatus } from './types';

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

const availableStatus = {
  name: 'Available',
  value: 0,
};

const busyStatus = {
  name: 'Busy',
  value: 1,
};

const plannedStatus = {
  name: 'Planned',
  value: 2,
};

const pendingStatus = {
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

export const groupedDeploymentsDemo = groupDeployments(
  plannedDeploymentsDemo
) as IPlannedDeployment[][];
