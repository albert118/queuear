import styles from './list.module.scss';
import { titleCase } from '../utils';

// plannedDeployment: PlannedDeploymentSummary
export default function PlannedDeployment({ plannedDeployment }) {
    const { Person, Feature } = plannedDeployment;

    if (!(Person && Feature)) return <></>;

    return (
        <div className={`${styles['list-item']} wrapper rounded`}>
            <span id='person' className='text'>
                <label htmlFor='person' className='small-label'>
                    Person
                </label>
                {titleCase(Person.name)}&nbsp;
                {Person.team !== undefined ?? `(${titleCase(Person.team)})`}
            </span>
            <span id='feature' className='text'>
                <label htmlFor='feature' className='small-label'>
                    Feature
                </label>
                {Feature.ticketNumber.toUpperCase()} |{' '}
                {Feature.name.toLowerCase()}
            </span>
        </div>
    );
}
