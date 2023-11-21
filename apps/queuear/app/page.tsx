import HomePage, { PropType } from './home-page';

export async function getData() {
  const deploymentRes = await fetch('http://localhost:4200/api/deployments');
  const currentDeploymentInfo = await deploymentRes.json();

  const groupedDeploymentsRes = await fetch(
    'http://localhost:4200/api/grouped-deployments'
  );
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
  const data = await getData();
  return <HomePage props={data} />;
}
