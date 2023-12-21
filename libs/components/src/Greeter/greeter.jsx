import { Actions } from '@queuear/components';
import styles from './greeter.module.scss';

export default function Greeter({ welcomeMessage, name, AddDeployment }) {
    return (
        <div className={`${styles['greeter']}`}>
            <span>
                <h1>Environment: {name ?? 'No environment found'}</h1>
                <h2>{welcomeMessage ?? 'Welcome 👋'}</h2>
            </span>
            <Actions ActionForm={AddDeployment} />
        </div>
    );
}
