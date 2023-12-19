import { PrismaClient } from '@queuear/models';

const prisma = new PrismaClient();

async function getCurrentDeployment() {
  const result = await prisma.deployment.findFirst({
    where: {
      deployedAt: { not: null },
      completedAt: null,
    },
    orderBy: {
      deployedAt: { sort: 'desc' },
    },
  });

  return result;
}

export async function GET() {
  const currentDeployment = await getCurrentDeployment();
  return Response.json(currentDeployment);
}
