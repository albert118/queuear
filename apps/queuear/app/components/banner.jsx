import { Button } from './Button';
import styles from './banner.module.scss';
import StatusLabel from './statuslabel';

export default async function Banner({ status, people, features }) {
  return (
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

      {/* only show queue when available */}
      {status.value === 0 && <Button>Queue a deployment</Button>}
    </div>
  );
}

function titleCase(str) {
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
}
