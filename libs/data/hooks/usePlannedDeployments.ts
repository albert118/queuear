import { useFetch } from '../fetch/useFetch';
import { PlannedDeployment, PlannedDeploymentSummary } from '@queuear/models';

export default async function usePlannedDeployments(): Promise<
  PlannedDeploymentSummary[][]
> {
  const { get } = useFetch();
  const allPlannedDeployments = (await get(
    'api/grouped-deployments'
  )) as PlannedDeployment[];
  const grouped = groupDeployments(allPlannedDeployments);

  return grouped;
}

function groupDeployments(
  plannedDeployments: PlannedDeployment[]
): PlannedDeploymentSummary[][] {
  const groups = [] as PlannedDeploymentSummary[][];
  let nextGroup = [] as PlannedDeploymentSummary[];
  let currStrategy = plannedDeployments[0].strategy;

  for (const key in plannedDeployments) {
    const planned = plannedDeployments[key];
    if (currStrategy !== planned.strategy) {
      currStrategy = planned.strategy;
      groups.push(nextGroup);
      nextGroup = [];
    }

    nextGroup.push(planned as unknown as PlannedDeploymentSummary);
  }

  groups.push(nextGroup);

  return groups;
}
