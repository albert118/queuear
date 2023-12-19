import { useFetch } from '../fetch/useFetch';
import { Environment } from '@queuear/models';

export default async function useEnvironmentInfo(): Promise<Environment> {
    const { get } = useFetch();
    const environment = (await get('api/environment')) as Environment;
    return environment;
}
