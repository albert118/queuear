'use client';

import { useEffect, useState } from 'react';
import { useFetch } from '../fetch/useFetch';
import { CurrentDeployment, CurrentDeploymentSkeleton } from '@queuear/models';

export default function useCurrentDeployment(): {
  currentDeployment: CurrentDeployment;
} {
  const [currentDeployment, setCurrentDeployment] = useState<CurrentDeployment>(
    CurrentDeploymentSkeleton
  );
  const { get } = useFetch();

  useEffect(() => {
    get('api/deployments')
      .then((data) => setCurrentDeployment(data))
      .catch(() => {});
  });

  return {
    currentDeployment,
  };
}
