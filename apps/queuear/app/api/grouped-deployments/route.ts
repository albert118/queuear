import {
  PlannedDeployment,
  PlannedDeploymentSummary,
  PrismaClient,
} from '@queuear/models';

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

async function getPlannedDeployments() {
  const result = await prisma.plannedDeployment.findMany();
  return result;
}

export async function GET() {
  const allPlannedDeployments = await getPlannedDeployments();
  const grouped = groupDeployments(allPlannedDeployments);
  return Response.json(grouped);
}

function groupDeployments(
  plannedDeployments: PlannedDeployment[]
): PlannedDeploymentSummary[][] {
  const groups = [] as PlannedDeploymentSummary[][];
  let nextGroup = [] as PlannedDeploymentSummary[];
  let currStrategy = plannedDeployments[0].strategy;

  for (const key in plannedDeployments) {
    const planned = plannedDeployments[key];
    if (currStrategy !== planned.strategy) {
      currStrategy = planned.strategy;
      groups.push(nextGroup);
      nextGroup = [];
    }

    nextGroup.push(planned as unknown as PlannedDeploymentSummary);
  }

  groups.push(nextGroup);

  return groups;
}
