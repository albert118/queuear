'use client';

import styles from './banner.module.scss';
import StatusLabel from './statuslabel';
import { Button } from './button';
import { titleCase } from '../utils';
import { CurrentDeployment, ServerStatus } from '@queuear/models';

export default function Banner({
  currentDeployment,
}: {
  currentDeployment: CurrentDeployment;
}) {
  const { DeploymentStatus, DeployedAt, BranchName, Features, People } =
    currentDeployment;

  const defaultExampleBranchUrl =
    'https://github.com/albert118/queuear/branches';

  return (
    <div className="wrapper">
      <div className={`${styles.banner} wrapper rounded shadow`}>
        <StatusLabel
          className="banner--status"
          status={titleCase(DeploymentStatus)}
        />
        <div className={styles['banner--content']}>
          <div className="text-container">
            {People.map((person, idx) => (
              <div key={idx} className="text">
                {titleCase(person.name)}
              </div>
            ))}
          </div>
          <div className="text-container">
            {Features.map((feature, idx) => (
              <div key={idx} className="text">
                {titleCase(feature.name)}
              </div>
            ))}
          </div>
        </div>

        {DeploymentStatus === ServerStatus.DEPLOYED && (
          <Button primary={false} disabled={true}>
            Cancel
          </Button>
        )}
      </div>
      <label className="small-label">
        Deployed at: {DeployedAt.toString()}
      </label>
      <label className="small-label">
        Branch:&nbsp;
        <a
          href={BranchName.url?.toString() ?? defaultExampleBranchUrl}
          style={{ color: 'lightgreen' }}
        >
          {BranchName.name}
        </a>
      </label>
    </div>
  );
}
