import Greeter from './components/greeter';
import Banner from './components/banner';
import Footer from './components/footer';

import { PlannedDeploymentsList } from './components/plannedeploymentslist';
import { Actions } from './components/actions';
import { ICurrentDeploymentInfo, IPlannedDeployment } from './data/types';

export default async function Index() {
  const infoResponse = await fetch('http://localhost:4200/api/deployments');
  const currentDeploymentInfo =
    (await infoResponse.json()) as ICurrentDeploymentInfo;

  const groupResponse = await fetch(
    'http://localhost:4200/api/grouped-deployments'
  );
  const groupedtDeployments =
    (await groupResponse.json()) as IPlannedDeployment[][];

  const res = await fetch('http://localhost:4200/api/environment');
  const environment = res.text() ?? 'No environment found';

  return (
    <div className="wrapper">
      <div className="container auto-center">
        <Greeter message={environment} />

        <Actions />

        <h2>Current Deployment</h2>
        <Banner {...currentDeploymentInfo} />

        <h2>Planned Deployments</h2>
        <PlannedDeploymentsList deploymentGroups={groupedtDeployments} />

        <Footer />
      </div>
    </div>
  );
}
