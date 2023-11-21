import { currentDeploymentInfoDemo } from '../../data/seed';

export function GET() {
  return new Response(JSON.stringify(currentDeploymentInfoDemo));
}
