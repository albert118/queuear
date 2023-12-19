'use client';

import { useState } from 'react';
import { Button } from '../components/button';
import TextInput from './textinput';
import styles from './form.module.scss';
import submit from './actions';

export function AddDeployment({ onClose }) {
    // default state is set (IPlannedDeployment)
    // TODO: dropdowns for people + teams + strategies
    const [data, setData] = useState({
        person: null,
        feature: null,
        strategy: 'batch'
    });

    const onUpdate = event => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        });
    };

    const onCancel = () => {
        console.log('canceled');
        onClose(null);
    };

    const onSubmit = async () => {
        console.log('saved and submitted');
        await submit(data);
        onClose(data);
    };

    return (
        <form className={styles['form']}>
            <TextInput
                label='Person'
                value={data.person}
                name='person'
                onChange={onUpdate}
            />

            <TextInput
                label='Feature'
                value={data.feature}
                name='feature'
                onChange={onUpdate}
            />

            <TextInput
                label='Strategy'
                value={data.strategy}
                name='strategy'
                onChange={onUpdate}
            />

            <div className={styles['form-actions']}>
                <Button primary={false} onClick={onCancel}>
                    Cancel
                </Button>
                <Button type='submit' primary={true} onClick={onSubmit}>
                    Save
                </Button>
            </div>
        </form>
    );
}
