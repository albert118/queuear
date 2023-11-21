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
  const [refresh, setRefresh] = useState(false);

  const toggleRefresh = () => {
    console.log('refreshed!');
    setRefresh(!refresh);
  };

  useEffect(() => {
    console.log('loading data...');
    fetch('/api/deployments')
      .then((res) => res.json())
      .then((data) => setCurrentDeploymentInfo(data));

    fetch('api/grouped-deployments')
      .then((res) => res.json())
      .then((data) => setGroupedDeployments(data));

    fetch('/api/environment')
      .then((res) => res.text())
      .then((data) => setEnvironment(data));
  }, [refresh]);

  return {
    currentDeploymentInfo,
    groupedDeployments,
    environment,
    toggleRefresh,
  };
}
