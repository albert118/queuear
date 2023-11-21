import Greeter from './components/greeter';
import Banner from './components/banner';
import Footer from './components/footer';

import { PlannedDeploymentsList } from './components/plannedeploymentslist';
import { currentDeploymentInfoDemo, groupedDeploymentsDemo } from './data/seed';
import { Actions } from './components/actions';

export default async function Index() {
  return (
    <>
      <div className="wrapper">
        <div className="container auto-center">
          <Greeter />

          <Actions />

          <h2>Current Deployment</h2>
          <Banner {...currentDeploymentInfoDemo} />

          <h2>Planned Deployments</h2>
          <PlannedDeploymentsList deploymentGroups={groupedDeploymentsDemo} />

          <Footer />
        </div>
      </div>
    </>
  );
}
