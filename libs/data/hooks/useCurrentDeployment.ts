'use client';

import { useEffect, useState } from 'react';
import { useFetch } from '../fetch/useFetch';

export default function useCurrentDeployment() {
  const [currentDeployment, setCurrentDeployment] = useState(null);
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
