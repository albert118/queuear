import { ICurrentDeploymentInfo, IPlannedDeployment, IStatus } from './types';
import { PrismaClient } from '@queuear/models';

const prisma = new PrismaClient();

export async function getPlannedDeployments() {
  const data = await prisma.plannedDeployment.findMany();
  return data;
}

export async function updateDeployments(deployment: IPlannedDeployment) {
  await prisma.plannedDeployment.createMany({ data: [deployment] });
  console.log('updated planned deployments');
}

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
