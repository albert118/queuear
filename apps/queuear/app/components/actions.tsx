'use client';

import { useState } from 'react';
import { Button } from './button';
import { FormModal } from './formmodal';
import { AddDeployment } from '../forms/adddeployment';

export function Actions() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="actions wrapper rounded">
      <Button primary={true} onClick={handleOpen}>
        Add
      </Button>
      <FormModal open={open} handleClose={handleClose}>
        <AddDeployment onClose={handleClose} />
      </FormModal>
    </div>
  );
}
