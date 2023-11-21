'use client';

import { useState } from 'react';
import { Button } from '../components/button';
import TextInput from './textinput';
import styles from './form.module.scss';

export function AddDeployment({ onClose }) {
  const [data, setData] = useState({
    person: null,
    feature: null,
  });

  const onUpdate = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onCancel = () => {
    console.log('canceled');
    console.log(data);
    onClose();
  };

  const onSubmit = () => {
    console.log('saved and submitted');
    console.log(data);
    onClose();
  };

  return (
    <form onSubmit={onSubmit} className={styles['form']}>
      <TextInput
        label="Person"
        value={data.person}
        name="person"
        onChange={onUpdate}
      />

      <TextInput
        label="Feature"
        value={data.feature}
        name="feature"
        onChange={onUpdate}
      />

      <div className={styles['form-actions']}>
        <Button primary={false} onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" primary={true} onClick={onSubmit}>
          Save
        </Button>
      </div>
    </form>
  );
}
