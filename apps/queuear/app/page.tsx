import {
    Banner,
    Footer,
    Greeter,
    PlannedDeployments
} from '@queuear/components';
import { AddDeployment } from './forms';
import { useEnvironmentInfo } from '@queuear/data';

export default async function Page() {
    const environment = await useEnvironmentInfo();

    return (
        <div className='wrapper'>
            <div className='container auto-center'>
                <Greeter {...{ ...environment, AddDeployment }} />

                <h2>Current Deployment</h2>
                <Banner />

                <h2>Planned Deployments</h2>
                <PlannedDeployments />

                <Footer />
            </div>
        </div>
    );
}
