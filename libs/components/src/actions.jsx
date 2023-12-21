'use client';

import { useState } from 'react';
import Button from './button';
import FormModal from './formmodal';
import styles from './actions.module.scss';
import { propagateProps } from './utils';

export default function Actions({ children }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    return (
        <div className={`${styles['actions-banner']} rounded`}>
            <Button primary={true} onClick={handleOpen}>
                Add
            </Button>
            <FormModal open={open} handleClose={() => setOpen(false)}>
                {propagateProps(children, { onClose: () => setOpen(false) })}
            </FormModal>
        </div>
    );
}
