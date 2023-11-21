import { IPlannedDeployment } from '../data/types';
import styles from './list.module.scss';

export function PlannedDeployment({
  plannedDeployment,
}: {
  plannedDeployment: IPlannedDeployment;
}) {
  return (
    <div className={`${styles['list-item']} wrapper rounded`}>
      <span id="person" className="text">
        <label htmlFor="person" className="small-label">
          Person
        </label>
        {plannedDeployment.person}
      </span>
      <span id="feature" className="text">
        <label htmlFor="feature" className="small-label">
          Feature
        </label>
        {plannedDeployment.feature}
      </span>
    </div>
  );
}
