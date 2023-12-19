'use client';

import { PlannedDeployment } from './planneddeployment';
import styles from './list.module.scss';
import { PlannedDeploymentSummary } from '@queuear/models';
import { titleCase } from '../utils';

export function PlannedDeploymentsList({
  deploymentGroups,
}: {
  deploymentGroups: PlannedDeploymentSummary[][];
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

function DeploymentGroup({ group }: { group: PlannedDeploymentSummary[] }) {
  const groupStrategy = group[0].Strategy;
  return (
    <div className={`${styles[groupStrategy]} rounded`}>
      {group.map((planned) => (
        <PlannedDeployment key={planned.Strategy} plannedDeployment={planned} />
      ))}
      <label className="small-label">{titleCase(groupStrategy)}</label>
    </div>
  );
}
