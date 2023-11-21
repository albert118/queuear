import Greeter from './components/greeter';
import Banner from './components/banner';
import Footer from './components/footer';
import GetDemoStatus from './statuses';
import { PlannedDeploymentsList } from './components/plannedeploymentslist';
import { groupDeployments } from './utils';
import { Button } from './components/button';

export interface IPlannedDeployment {
  person: string;
  feature: string;
  strategy: string;
}

const plannedDeployments = [
  {
    person: 'jk. rowling',
    feature: 'Yet another QA demo',
    strategy: 'batch',
  },
  {
    person: 'peter F. hamilton',
    feature: 'do the thing!',
    strategy: 'batch',
  },
  {
    person: 'tracy harding',
    feature: 'fixed bug',
    strategy: 'single',
  },
  {
    person: 'lucy hawking',
    feature: 'try this on for size',
    strategy: 'batch',
  },
];

const groupedDeployments = groupDeployments(plannedDeployments);

const bannerInfo = {
  people: ['tony riggatony', 'juan juan', 'james someone-else'],
  features: ['Feature A', 'Feature B', 'Feature C'],
  status: GetDemoStatus(),
};

export default async function Index() {
  return (
    <>
      <div className="wrapper">
        <div className="container auto-center">
          <Greeter />

          <Actions />
          <h2>Current Deployment</h2>
          <Banner {...bannerInfo} />

          <h2>Planned Deployments</h2>
          <PlannedDeploymentsList deploymentGroups={groupedDeployments} />

          <Footer />
        </div>
      </div>
    </>
  );
}

function Actions() {
  return (
    <div className="actions wrapper rounded">
      <Button>Add</Button>
      <Button primary={false}>Cancel</Button>
    </div>
  );
}
