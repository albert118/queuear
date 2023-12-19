import { PlannedDeploymentSummary } from '@queuear/models';
import HomePage from './home-page';

import { usePlannedDeployments } from '@queuear/data';

export default async function Page() {
  const plannedDeployments =
    (await usePlannedDeployments()) as PlannedDeploymentSummary[][];

  return <HomePage deploymentGroups={plannedDeployments} />;
}
