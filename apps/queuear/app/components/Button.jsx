'use client';
import styles from './button.module.scss';

export function Button({ children }) {
  return (
    <button
      className={`${styles['button-pill']} rounded shadow hover-transition`}
      onClick={() => console.log('queued')}
    >
      <span className="text">{children}</span>
    </button>
  );
}
