'use client';

import { useEffect, useState } from 'react';
import { useFetch } from '../fetch/useFetch';
import { Environment, EnvironmentSkeleton } from '@queuear/models';

export default function useEnvironmentInfo(): {
  environmentInfo: Environment;
} {
  const [environmentInfo, setEnvironmentInfo] =
    useState<Environment>(EnvironmentSkeleton);
  const { get } = useFetch();

  useEffect(() => {
    get('api/environment')
      .then((data) => setEnvironmentInfo(data))
      .catch(() => {});
  });

  return {
    environmentInfo,
  };
}
