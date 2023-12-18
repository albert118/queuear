'use client';

import { useEffect, useState } from 'react';
import { useFetch } from '../fetch/useFetch';
import {
  PlannedGroupsSkeleton,
  PlannedDeploymentSummary,
} from '@queuear/models';

export default function usePlannedDeployments(): {
  plannedDeployments: PlannedDeploymentSummary[][];
} {
  const [plannedDeployments, setPlannedDeployments] = useState<
    PlannedDeploymentSummary[][]
  >(PlannedGroupsSkeleton);
  const { get } = useFetch();

  useEffect(() => {
    get('api/grouped-deployments') // TODO: update API naming and mapping
      .then((data) => setPlannedDeployments(data))
      .catch(() => {});
  });

  return {
    plannedDeployments,
  };
}
