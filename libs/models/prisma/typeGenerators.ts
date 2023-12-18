import {
  PlannedDeployment,
  Team,
  Person,
  PrismaClient,
  Strategy,
  Feature,
  Deployment,
  ContentInDeployment,
  Status,
} from '@prisma/client';

export async function generateDeployment(prisma: PrismaClient) {
  // generate a deployment that is on the target
  // this is an example of a batched deployment
  const currentDeployment = {
    id: 'current-deployment-1',
    deployedAt: new Date('2023-12-18T11:23:10.000Z'),
    strategy: Strategy.BATCHED,
    status: Status.PLANNED,
  } as Deployment;

  const contentInDeployment = [
    {
      deploymentId: 'current-deployment-1',
      personId: 'person-1',
      featureId: 'feature-1',
    },
    {
      deploymentId: 'current-deployment-1',
      personId: 'person-2',
      featureId: 'feature-2',
    },
    {
      deploymentId: 'current-deployment-1',
      personId: 'person-3',
      featureId: 'feature-3',
    },
    {
      deploymentId: 'current-deployment-1',
      personId: 'person-4',
      featureId: 'feature-4',
    },
  ] as ContentInDeployment[];

  await prisma.deployment.create({
    data: currentDeployment,
  });

  await prisma.contentInDeployment.createMany({ data: contentInDeployment });

  console.log(`seeded a 'deployment' entity as the current deployment`);
  console.log(
    `seeded '${contentInDeployment.length}' 'planned deployment' entities for the current deployment`
  );
}

export async function generatePlannedDeployments(prisma: PrismaClient) {
  const plannedDeployments = [
    {
      personId: 'person-1',
      featureId: 'feature-5',
      strategy: Strategy.BATCHED,
    },
    {
      personId: 'person-2',
      featureId: 'feature-6',
      strategy: Strategy.BATCHED,
    },
    {
      personId: 'person-3',
      featureId: 'feature-7',
      strategy: Strategy.SINGLE,
    },
    {
      personId: 'person-4',
      featureId: 'feature-8',
      strategy: Strategy.BATCHED,
    },
  ] as PlannedDeployment[];

  await prisma.plannedDeployment.createMany({ data: plannedDeployments });
  console.log(
    `seeded '${plannedDeployments.length}' 'planned deployment' entities`
  );
}

export async function generateTeams(prisma: PrismaClient) {
  const teams = [
    { id: 'team-1', name: 'Best team' },
    { id: 'team-2', name: 'Epic team' },
  ] as Team[];

  await prisma.team.createMany({ data: teams });
  console.log(`seeded '${teams.length}' 'team' entities`);
}

export async function generateFeatures(prisma: PrismaClient) {
  const features = [
    { id: 'feature-1', name: 'Yet another QA demo', ticketNumber: 'ABC-3214' },
    { id: 'feature-2', name: 'do the thing!', ticketNumber: 'CDE-5511' },
    { id: 'feature-3', name: 'fixed bug', ticketNumber: 'ABC-1121' },
    { id: 'feature-4', name: 'try this on for size', ticketNumber: 'ABC-1127' },
    { id: 'feature-5', name: 'testing something', ticketNumber: 'ABC-3214' },
    { id: 'feature-6', name: 'working this time', ticketNumber: 'CDE-5511' },
    { id: 'feature-7', name: 'Added new modal', ticketNumber: 'XYZ-8712' },
    { id: 'feature-8', name: 'broke everything', ticketNumber: 'XD-666' },
  ] as Feature[];

  await prisma.feature.createMany({ data: features });
  console.log(`seeded '${features.length}' 'feature' entities`);
}

export async function generatePeople(prisma: PrismaClient) {
  const people = [
    {
      id: 'person-1',
      name: 'jk. rowling',
      teamId: 'team-1',
    },
    {
      id: 'person-2',
      name: 'peter F. hamilton',
      teamId: 'team-1',
    },
    {
      id: 'person-3',
      name: 'tracy harding',
      teamId: 'team-2',
    },
    {
      id: 'person-4',
      name: 'lucy hawking',
      teamId: 'team-2',
    },
  ] as Person[];

  await prisma.person.createMany({ data: people });
  console.log(`seeded '${people.length}' 'person' entities`);
}
