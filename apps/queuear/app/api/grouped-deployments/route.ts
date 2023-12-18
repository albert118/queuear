import { groupDeployments } from '../../utils';
import { PlannedDeploymentSummary, PrismaClient } from '@queuear/models';

const prisma = new PrismaClient();

async function getPlannedDeployments() {
  const result = await prisma.plannedDeployment.findMany();
  return result;
}

export async function GET() {
  const allPlannedDeployments = await getPlannedDeployments();

  console.log(allPlannedDeployments);

  const grouped = groupDeployments(
    allPlannedDeployments
  ) as PlannedDeploymentSummary[][];

  console.log(grouped);
  return new Response(JSON.stringify(grouped));
}
