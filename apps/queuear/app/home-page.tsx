import Greeter from './components/greeter';
import Banner from './components/banner';
import Footer from './components/footer';

import { PlannedDeploymentsList } from './components/plannedeploymentslist';
import { AddAction } from './components/addaction';

import { PlannedDeploymentSummary, Environment } from '@queuear/models';
import { useEnvironmentInfo } from '@queuear/data';

export default async function HomePage({
  deploymentGroups,
}: {
  deploymentGroups: PlannedDeploymentSummary[][];
}) {
  const environment = (await useEnvironmentInfo()) as Environment;

  return (
    <div className="wrapper">
      <div className="container auto-center">
        <Greeter {...environment} />

        <AddAction />

        <h2>Current Deployment</h2>
        <Banner />

        <h2>Planned Deployments</h2>
        <PlannedDeploymentsList deploymentGroups={deploymentGroups} />

        <Footer />
      </div>
    </div>
  );
}
