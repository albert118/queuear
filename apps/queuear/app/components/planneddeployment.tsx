import { IPlannedDeployment } from '../page';
import styles from './list.module.scss';

export function PlannedDeployment({
  plannedDeployment,
}: {
  plannedDeployment: IPlannedDeployment;
}) {
  return (
    <div className={`${styles['list-item']} wrapper rounded`}>
      <span className="text">{plannedDeployment.person}</span>
      <span className="text">{plannedDeployment.feature}</span>
    </div>
  );
}
