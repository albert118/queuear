import { useFetch } from '../fetch/useFetch';
import { CurrentDeployment } from '@queuear/models';

export default function useCurrentDeployment(): Promise<CurrentDeployment> {
  const { get } = useFetch();
  return get('api/deployments');
}
