import { ICurrentDeploymentInfo, IPlannedDeployment } from './types';
import { PrismaClient } from '@queuear/models';
import { Status, enumAsArray } from '@queuear/models';

const prisma = new PrismaClient();

export async function getPlannedDeployments() {
  const data = await prisma.plannedDeployment.findMany();
  return data;
}

export async function updateDeployments(deployment: IPlannedDeployment) {
  await prisma.plannedDeployment.createMany({ data: [deployment] });
  console.log('updated planned deployments');
}

export default function getDemoStatus(): Status {
  const statusArray = enumAsArray(Status);
  const randStatusIdx = statusArray.sort(() => 0.5 - Math.random())[0];
  return Status[randStatusIdx as keyof typeof Status];
}

export const currentDeploymentInfoDemo = {
  people: ['tony riggatony', 'juan juan', 'james someone-else'],
  team: 'Hyperion (rocks)',
  features: ['Feature A', 'Feature B', 'Feature C'],
  status: getDemoStatus(),
} as ICurrentDeploymentInfo;
