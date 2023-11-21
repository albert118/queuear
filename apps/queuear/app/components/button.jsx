'use client';
import styles from './button.module.scss';

export function Button({ primary, children }) {
  const _primary = primary ?? true;
  const color = _primary ? 'primary' : 'secondary';

  return (
    <button
      className={`${styles['button-pill']} ${styles[color]} rounded shadow hover-transition`}
      onClick={() => console.log('queued')}
    >
      <span className="text">{children}</span>
    </button>
  );
}
