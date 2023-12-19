import { useFetch } from '../fetch/useFetch';
import { PlannedDeploymentSummary } from '@queuear/models';

export default function usePlannedDeployments(): Promise<
  PlannedDeploymentSummary[][]
> {
  const { get } = useFetch();
  return get('api/grouped-deployments');
}
