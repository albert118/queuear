import Greeter from './components/greeter';
import Banner from './components/banner';
import Footer from './components/footer';

import { PlannedDeploymentsList } from './components/plannedeploymentslist';
import { AddAction } from './components/addaction';

import {
  CurrentDeployment,
  PlannedDeploymentSummary,
  Environment,
} from '@queuear/models';

export default function HomePage({
  environment,
  currentDeployment,
  deploymentGroups,
}: {
  environment: Environment;
  currentDeployment: CurrentDeployment;
  deploymentGroups: PlannedDeploymentSummary[][];
}) {
  return (
    <div className="wrapper">
      <div className="container auto-center">
        <Greeter {...environment} />

        <AddAction />

        <h2>Current Deployment</h2>
        <Banner currentDeployment={currentDeployment} />

        <h2>Planned Deployments</h2>
        <PlannedDeploymentsList deploymentGroups={deploymentGroups} />

        <Footer />
      </div>
    </div>
  );
}
