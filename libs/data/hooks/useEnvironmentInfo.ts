import { useFetch } from '../fetch/useFetch';
import { Environment } from '@queuear/models';

export default async function useEnvironmentInfo(): Promise<Environment> {
  const { get } = useFetch();
  return get('api/environment');
}
