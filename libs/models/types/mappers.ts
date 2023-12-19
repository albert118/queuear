import {
  PersonWithRelations,
  PlannedDeploymentWithRelations,
} from './complexes';
import {
  FeatureSummary,
  PersonDetail,
  PlannedDeploymentSummary,
  TeamDetail,
} from './types';

export const PersonDetailFromEntity = (person: PersonWithRelations) => {
  return {
    name: person.name,
    team: { name: person.team.name } as TeamDetail,
  } as PersonDetail;
};

export const PlannedDeploymentSummaryFromEntity = (
  planned: PlannedDeploymentWithRelations
) => {
  return {
    Person: PersonDetailFromEntity(planned.person),
    Feature: planned.feature as FeatureSummary,
    Strategy: planned.strategy,
  } as PlannedDeploymentSummary;
};
