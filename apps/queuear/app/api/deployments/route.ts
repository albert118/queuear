// TODO: naming of this should be updated (also correc the route)
import { PrismaClient } from '@queuear/models';

const prisma = new PrismaClient();

async function getCurrentDeployment() {
    const result = await prisma.deployment.findFirst({
        where: {
            deployedAt: { not: null },
            completedAt: null
        },
        orderBy: {
            deployedAt: { sort: 'desc' }
        },
        include: {
            ContentInDeployment: {
                include: {
                    person: { include: { team: true } },
                    feature: true,
                    deployment: true
                }
            }
        }
    });

    return result;
}

export async function GET() {
    const currentDeployment = await getCurrentDeployment();
    return Response.json(currentDeployment);
}
