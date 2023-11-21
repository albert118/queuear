import { getPlannedDeployments } from '../../data/seed';
import { IPlannedDeployment } from '../../data/types';
import { groupDeployments } from '../../utils';

export async function GET() {
  const plannedDeploymentsDemo = await getPlannedDeployments();
  console.log(plannedDeploymentsDemo);

  const grouped = groupDeployments(
    plannedDeploymentsDemo
  ) as IPlannedDeployment[][];

  console.log(grouped);
  return new Response(JSON.stringify(grouped));
}
