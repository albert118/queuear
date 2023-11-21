'use client';

import styles from './banner.module.scss';
import StatusLabel from './statuslabel';
import { Button } from './button';

export default function Banner({ status, people, features }) {
  const exampleDateTime = '11:23am';
  const exampleBranch = 'staging/dev2-example';

  return (
    <div className="wrapper">
      <div className={`${styles.banner} wrapper rounded shadow`}>
        <StatusLabel className="banner--status" status={status} />
        <div className={styles['banner--content']}>
          <div className="text-container">
            {people.map((person, idx) => (
              <div key={idx} className="text">
                {titleCase(person)}
              </div>
            ))}
          </div>
          <div className="text-container">
            {features.map((feature, idx) => (
              <div key={idx} className="text">
                {titleCase(feature)}
              </div>
            ))}
          </div>
        </div>

        {status.value === 1 && (
          <Button primary={false} disabled={true}>
            Cancel
          </Button>
        )}
      </div>
      <label className="small-label">Deployed at: {exampleDateTime}</label>
      <label className="small-label">
        Branch:{' '}
        <a
          href="https://github.com/albert118/queuear/branches"
          style={{ color: 'lightgreen' }}
        >
          {exampleBranch}
        </a>
      </label>
    </div>
  );
}

function titleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}
