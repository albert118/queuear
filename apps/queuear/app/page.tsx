import HomePage from './home-page';

import {
  useCurrentDeployment,
  usePlannedDeployments,
  useEnvironmentInfo,
} from '@queuear/data';

export default async function Page() {
  const currentDeployment = await useCurrentDeployment();
  const plannedDeployments = await usePlannedDeployments();
  const environmentInfo = await useEnvironmentInfo();

  return (
    <HomePage
      currentDeployment={currentDeployment}
      environment={environmentInfo}
      deploymentGroups={plannedDeployments}
    />
  );
}
