import { PrismaClient } from '@prisma/client';
import {
  generateTeams,
  generatePeople,
  generateFeatures,
  generatePlannedDeployments,
  generateDeployment,
} from './typeGenerators';

const prisma = new PrismaClient();

async function main() {
  console.log('seeding data...');

  await generateTeams(prisma);
  await generatePeople(prisma);
  await generateFeatures(prisma);
  await generatePlannedDeployments(prisma);
  await generateDeployment(prisma);
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
