'use client';

import HomePage from './home-page';
import {
  useCurrentDeployment,
  usePlannedDeployments,
  useEnvironmentInfo,
} from '@queuear/data';

export default async function Page() {
  const { currentDeployment } = useCurrentDeployment();
  const { plannedDeployments } = usePlannedDeployments();
  const { environmentInfo } = useEnvironmentInfo();

  return (
    <HomePage
      currentDeployment={currentDeployment}
      environment={environmentInfo}
      deploymentGroups={plannedDeployments}
    />
  );
}
