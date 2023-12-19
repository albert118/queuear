import { Prisma } from '@prisma/client';

export type PlannedDeploymentWithRelations =
  Prisma.PlannedDeploymentGetPayload<{
    include: { feature: true; person: { include: { team: true } } };
  }>;

export type PersonWithRelations = Prisma.PersonGetPayload<{
  include: { team: true };
}>;
