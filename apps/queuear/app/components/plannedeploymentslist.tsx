import { PlannedDeployment } from './planneddeployment';
import { IPlannedDeployment } from '../types';
import styles from './list.module.scss';

export function PlannedDeploymentsList({
  deploymentGroups,
}: {
  deploymentGroups: IPlannedDeployment[][];
}) {
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

function DeploymentGroup({ group }: { group: IPlannedDeployment[] }) {
  const groupStrategy = group[0].strategy;
  return (
    <div className={`${styles[groupStrategy]} rounded`}>
      {group.map((planned) => (
        <PlannedDeployment key={planned.feature} plannedDeployment={planned} />
      ))}
      <label className="small-label">{groupStrategy}</label>
    </div>
  );
}
