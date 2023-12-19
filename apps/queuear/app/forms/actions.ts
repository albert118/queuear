import { revalidatePath } from 'next/cache';
import { PlannedDeployment, PrismaClient } from '@queuear/models';

const prisma = new PrismaClient();

async function updateDeployments(newDeploymentToPlan: PlannedDeployment) {
    await prisma.plannedDeployment.createMany({ data: [newDeploymentToPlan] });
    console.log('updated planned deployments');
}

export default async function submit(data: PlannedDeployment) {
    if (!data) return;

    updateDeployments(data);
    revalidatePath('/');
}
