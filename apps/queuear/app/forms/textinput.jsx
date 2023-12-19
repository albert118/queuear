'use client';

import styles from './form.module.scss';

export default function TextInput({
    label,
    value,
    onChange,
    ...additionalProps
}) {
    function handleKeyDown(event) {
        if (event.key !== 'Enter') return;
        event.preventDefault();

        const { onEnter } = additionalProps;
        onEnter && typeof onEnter === 'function'
            ? onEnter(event)
            : onChange(event);
    }

    return (
        <div className={`${styles['text-input']} wrapper`}>
            <input
                id={label}
                onKeyDown={handleKeyDown}
                onChange={onChange}
                type='text'
                value={value}
                {...additionalProps}
            />
            <label htmlFor={label}>{label.toLowerCase()}</label>
        </div>
    );
}
