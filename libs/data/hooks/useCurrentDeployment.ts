import { useFetch } from '../fetch/useFetch';
import {
    CurrentDeploymentFromEntity,
    CurrentDeployment,
    CurrentDeploymentWithRelations
} from '@queuear/models';

export default async function useCurrentDeployment(): Promise<CurrentDeployment> {
    const { get } = useFetch();
    const deployment = (await get(
        'api/deployments'
    )) as CurrentDeploymentWithRelations;

    return CurrentDeploymentFromEntity(deployment);
}
