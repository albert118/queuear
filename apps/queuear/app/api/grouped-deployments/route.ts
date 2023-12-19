import { PrismaClient } from '@queuear/models';

const prisma = new PrismaClient();

async function getPlannedDeployments() {
  const result = await prisma.plannedDeployment.findMany();
  return result;
}

export async function GET() {
  const allPlannedDeployments = await getPlannedDeployments();
  return Response.json(allPlannedDeployments);
}
