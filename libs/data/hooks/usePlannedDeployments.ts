import { useEffect, useState } from 'react';
import { useFetch } from '../fetch/useFetch';

export default function usePlannedDeployments() {
  const [plannedDeployments, setPlannedDeployments] = useState(null);
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
