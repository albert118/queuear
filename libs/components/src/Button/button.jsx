'use client';

import styles from './button.module.scss';

export default function Button({ primary, ...additionalProps }) {
    const _primary = primary ?? true;
    const color = _primary ? 'primary' : 'secondary';

    return (
        <button
            className={`${styles['button-pill']} ${styles[color]} rounded shadow hover-transition`}
            {...additionalProps}
        >
            <span className='text'>{additionalProps.children}</span>
        </button>
    );
}
