import styles from './status.module.scss';

export default function StatusLabel({ status, className }) {
    const classes = `${className ?? ''} ${styles['status-label']} ${
        styles[status.toString().toLowerCase()]
    } rounded shadow`;

    return (
        <div className={classes}>
            <span className='text'>{status.toString()}</span>
        </div>
    );
}
