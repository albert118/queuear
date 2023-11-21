import {
  currentDeploymentInfoDemo,
  plannedDeploymentsDemo,
} from '../../data/seed';
import { IPlannedDeployment } from '../../data/types';

export function GET() {
  return new Response(JSON.stringify(currentDeploymentInfoDemo));
}

export async function POST(request: Request) {
  const newDeployment = (await request.json()) as IPlannedDeployment;
  plannedDeploymentsDemo.push(newDeployment);
  return new Response();
}
