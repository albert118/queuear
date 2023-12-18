import { PlannedDeploymentSummary } from '@queuear/models';
import styles from './list.module.scss';

export function PlannedDeployment({
  plannedDeployment,
}: {
  plannedDeployment: PlannedDeploymentSummary;
}) {
  const { Person, Feature } = plannedDeployment;

  return (
    <div className={`${styles['list-item']} wrapper rounded`}>
      <span id="person" className="text">
        <label htmlFor="person" className="small-label">
          Person
        </label>
        {Person.name}&nbsp;{Person.team !== undefined ?? `(${Person.team})`}
      </span>
      <span id="feature" className="text">
        <label htmlFor="feature" className="small-label">
          Feature
        </label>
        {Feature.ticketNumber} - {Feature.name}
      </span>
    </div>
  );
}
