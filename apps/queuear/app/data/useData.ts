import { useState, useEffect } from 'react';

import {
  ICurrentDeploymentInfo,
  IPlannedDeployment,
  SkeletonCurrentDeploymentInfo,
  SkeletonPlannedDeployment,
} from './types';

export default function useData() {
  const [currentDeploymentInfo, setCurrentDeploymentInfo] = useState(
    SkeletonCurrentDeploymentInfo as ICurrentDeploymentInfo
  );
  const [groupedDeployments, setGroupedDeployments] = useState([
    [SkeletonPlannedDeployment],
    [SkeletonPlannedDeployment],
    [SkeletonPlannedDeployment],
  ] as IPlannedDeployment[][]);
  const [environment, setEnvironment] = useState('No environment found');

  async function load() {
    console.log('loading data...');
    try {
      const [deploymentRes, groupedDeploymentsRes, environmentRes] =
        await Promise.all([
          fetch('/api/deployments').then((res) => res.json()),
          fetch('/api/grouped-deployments').then((res) => res.json()),
          fetch('/api/environment').then((res) => res.text()),
        ]);

      setCurrentDeploymentInfo(deploymentRes);
      setGroupedDeployments(groupedDeploymentsRes);
      setEnvironment(environmentRes);
    } catch (error) {
      console.error('Error loading data:', error);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return {
    currentDeploymentInfo,
    groupedDeployments,
    environment,
    refresh: load,
  };
}
