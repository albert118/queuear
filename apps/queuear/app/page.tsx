'use client';

import Greeter from './components/greeter';
import Banner from './components/banner';
import Footer from './components/footer';

import { PlannedDeploymentsList } from './components/plannedeploymentslist';
import { Actions } from './components/actions';
import useData from './data/useData';

export default async function Index() {
  const {
    currentDeploymentInfo,
    groupedDeployments,
    environment,
    toggleRefresh,
  } = useData();

  return (
    <div className="wrapper">
      <div className="container auto-center">
        <Greeter message={environment} />

        <Actions onAdd={() => toggleRefresh()} />

        <h2>Current Deployment</h2>
        <Banner {...currentDeploymentInfo} />

        <h2>Planned Deployments</h2>
        <PlannedDeploymentsList deploymentGroups={groupedDeployments} />

        <Footer />
      </div>
    </div>
  );
}
