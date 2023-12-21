'use client';

import { useState } from 'react';
import submit from './actions';
import { Form, TextInput } from '@queuear/components';

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

    return (
        <Form onSubmit={submit} onComplete={onClose} formData={data}>
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
        </Form>
    );
}
