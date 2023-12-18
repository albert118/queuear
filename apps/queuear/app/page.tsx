import HomePage, { PropType } from './home-page';
import {
  useCurrentDeployment,
  usePlannedDeployments,
  useEnvironmentInfo,
} from '@queuear/data';

export async function getData() {
  const deploymentRes = await fetch('http://localhost:4200/api/deployments');

  const currentDeploymentInfo = await deploymentRes.json();

  const groupedDeploymentsRes = await fetch('http://localhost:4200/api/');
  const groupedDeployments = await groupedDeploymentsRes.json();

  const environmentRes = await fetch('http://localhost:4200/api/environment');
  const environment = await environmentRes.text();

  return {
    currentDeploymentInfo: currentDeploymentInfo,
    groupedDeployments: groupedDeployments,
    environment: environment,
  } as PropType;
}

export default async function Page() {
  const { currentDeployment } = useCurrentDeployment();
  const { plannedDeployments } = usePlannedDeployments();
  const { environmentInfo } = useEnvironmentInfo();

  const data = {
    currentDeploymentInfo: currentDeployment,
    groupedDeployments: plannedDeployments,
    environment: environmentInfo,
  } as PropType;

  return <HomePage props={data} />;
}
