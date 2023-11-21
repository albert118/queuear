'use client';

import Greeter from './components/greeter';
import Banner from './components/banner';
import Footer from './components/footer';

import { PlannedDeploymentsList } from './components/plannedeploymentslist';
import { Actions } from './components/actions';
import { ICurrentDeploymentInfo, IPlannedDeployment } from './data/types';

export type PropType = {
  currentDeploymentInfo: ICurrentDeploymentInfo;
  groupedDeployments: IPlannedDeployment[][];
  environment: string;
};

export default function HomePage({ props }: { props: PropType }) {
  const { environment, currentDeploymentInfo, groupedDeployments } = props;

  return (
    <div className="wrapper">
      <div className="container auto-center">
        <Greeter message={environment} />

        <Actions />

        <h2>Current Deployment</h2>
        <Banner {...currentDeploymentInfo} />

        <h2>Planned Deployments</h2>
        <PlannedDeploymentsList deploymentGroups={groupedDeployments} />

        <Footer />
      </div>
    </div>
  );
}
