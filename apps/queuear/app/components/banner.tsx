import styles from './banner.module.scss';
import StatusLabel from './statuslabel';
import { Button } from './button';
import { titleCase } from '../utils';
import { ServerStatus } from '@queuear/models';
import { useCurrentDeployment } from '@queuear/data';

export default async function Banner() {
  const currentDeployment = await useCurrentDeployment();
  const { DeploymentStatus, Features, People, DeployedAt, BranchName } =
    currentDeployment;

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
        Deployed at: {DeployedAt.toLocaleString('en-AU')}
      </label>
      <label className="small-label">
        Branch:&nbsp;
        <a href={BranchName.url.toString()} style={{ color: 'lightgreen' }}>
          {BranchName && BranchName.name}
        </a>
      </label>
    </div>
  );
}
