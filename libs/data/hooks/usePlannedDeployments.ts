import { useFetch } from '../fetch/useFetch';
import {
    PlannedDeploymentSummary,
    PlannedDeploymentSummaryFromEntity,
    PlannedDeploymentWithRelations
} from '@queuear/models';

export default async function usePlannedDeployments(): Promise<
    PlannedDeploymentSummary[][]
> {
    const { get } = useFetch();
    const allPlannedDeployments = (await get(
        'api/grouped-deployments'
    )) as PlannedDeploymentWithRelations[];
    const grouped = groupDeployments(allPlannedDeployments);

    return grouped;
}

function groupDeployments(
    plannedDeployments: PlannedDeploymentWithRelations[]
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

        nextGroup.push(PlannedDeploymentSummaryFromEntity(planned));
    }

    groups.push(nextGroup);

    return groups;
}
