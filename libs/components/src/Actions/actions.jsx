'use client';

import { useState } from 'react';
import { Button, FormModal } from '@queuear/components';
import styles from './actions.module.scss';

export default function Actions({ ActionForm }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <div className={`${styles['actions-banner']} rounded`}>
            <Button primary={true} onClick={handleOpen}>
                Add
            </Button>
            <FormModal open={open} handleClose={() => setOpen(false)}>
                <ActionForm onClose={() => setOpen(false)} />
            </FormModal>
        </div>
    );
}
