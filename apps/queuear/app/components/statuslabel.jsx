import styles from './status.module.scss';

export default function StatusLabel({ status, className }) {
  return (
    <div
      className={`${className ?? ''} ${styles['status-label']} ${
        styles[status.name.toLowerCase()]
      } rounded shadow`}
    >
      <span className="text">{status.name}</span>
    </div>
  );
}
