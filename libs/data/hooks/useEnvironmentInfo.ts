import { useEffect, useState } from 'react';
import { useFetch } from '../fetch/useFetch';

export default function useEnvironmentInfo() {
  const [environmentInfo, setEnvironmentInfo] = useState(null);
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
