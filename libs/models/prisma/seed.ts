import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('seeding data...');

  const plannedDeploymentsDemo = [
    {
      person: 'jk. rowling',
      feature: 'Yet another QA demo',
      strategy: 'batch',
    },
    {
      person: 'peter F. hamilton',
      feature: 'do the thing!',
      strategy: 'batch',
    },
    {
      person: 'tracy harding',
      feature: 'fixed bug',
      strategy: 'single',
    },
    {
      person: 'lucy hawking',
      feature: 'try this on for size',
      strategy: 'batch',
    },
  ];

  const dataCount = plannedDeploymentsDemo.length;
  console.log(`will seed '${dataCount}' planned deployment entities`);

  //   ] as IPlannedDeployment[];

  // TODO:
  // export const currentDeploymentInfoDemo = {
  //   people: ['tony riggatony', 'juan juan', 'james someone-else'],
  //   team: 'Hyperion (rocks)',
  //   features: ['Feature A', 'Feature B', 'Feature C'],
  //   status: getDemoStatus(),
  // } as ICurrentDeploymentInfo;

  await prisma.plannedDeployment.createMany({ data: plannedDeploymentsDemo });
}

main()
  .then(async () => {
    console.log('finished seeding data');
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
