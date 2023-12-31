import { usePlannedDeployments } from '@queuear/data';
import styles from './list.module.scss';
import PlannedDeployment from './planneddeployment';
import { titleCase } from '../utils';

export default async function PlannedDeployments() {
    // each child is a list of planned deployments
    // these already grouped by strategy to simplify display concerns
    const deploymentGroups = await usePlannedDeployments();

    return (
        <>
            <div className={`${styles.list} wrapper rounded`}>
                {deploymentGroups.map((group, idx) => (
                    <DeploymentGroup key={idx} group={group} />
                ))}
            </div>
        </>
    );
}

// group: PlannedDeploymentSummary[]
function DeploymentGroup({ group }) {
    const groupStrategy = group[0].Strategy;
    return (
        <div className={`${styles[groupStrategy.toLowerCase()]} rounded`}>
            {group.map(planned => (
                <PlannedDeployment
                    key={planned.Strategy}
                    plannedDeployment={planned}
                />
            ))}
            <label className='small-label'>{titleCase(groupStrategy)}</label>
        </div>
    );
}
