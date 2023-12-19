import { Prisma } from '@prisma/client';

export type CurrentDeploymentWithRelations = Prisma.DeploymentGetPayload<{
    include: {
        ContentInDeployment: {
            include: {
                person: { include: { team: true } };
                feature: true;
                deployment: true;
            };
        };
    };
}>;

export type PlannedDeploymentWithRelations =
    Prisma.PlannedDeploymentGetPayload<{
        include: { feature: true; person: { include: { team: true } } };
    }>;

export type PersonWithRelations = Prisma.PersonGetPayload<{
    include: { team: true };
}>;
