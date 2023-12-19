import {
    CurrentDeploymentWithRelations,
    PersonWithRelations,
    PlannedDeploymentWithRelations
} from './complexes';
import {
    FeatureSummary,
    PersonDetail,
    PlannedDeploymentSummary,
    CurrentDeployment,
    TeamDetail,
    GitHubBranch
} from './types';

export const PersonDetailFromEntity = (person: PersonWithRelations) => {
    return {
        name: person.name,
        team: { name: person.team.name } as TeamDetail
    } as PersonDetail;
};

export const PlannedDeploymentSummaryFromEntity = (
    planned: PlannedDeploymentWithRelations
) => {
    return {
        Person: PersonDetailFromEntity(planned.person),
        Feature: planned.feature as FeatureSummary,
        Strategy: planned.strategy
    } as PlannedDeploymentSummary;
};

// TODO:
const defaultExampleBranchUrl = 'https://github.com/albert118/queuear/branches';

export const CurrentDeploymentFromEntity = (
    deployment: CurrentDeploymentWithRelations
) => {
    const branchDetail = {
        name: deployment.branchName,
        url: new URL(defaultExampleBranchUrl)
    } as GitHubBranch;

    const features = [] as FeatureSummary[];
    const people = [] as PersonDetail[];
    const teams = [] as TeamDetail[];

    for (const content of deployment.ContentInDeployment) {
        features.push({
            name: content.feature.name,
            ticketNumber: content.feature.ticketNumber
        } as FeatureSummary);

        const teamDetail = { name: content.person.team.name } as TeamDetail;
        people.push({
            name: content.person.name,
            team: teamDetail
        } as PersonDetail);

        if (!teams.includes(teamDetail)) teams.push(teamDetail);
    }

    return {
        DeploymentStatus: deployment.serverStatus,
        Features: features,
        People: people,
        Teams: teams,
        DeployedAt: deployment.deployedAt
            ? new Date(deployment.deployedAt)
            : new Date(Date.now()),
        BranchName: branchDetail
    } as CurrentDeployment;
};
