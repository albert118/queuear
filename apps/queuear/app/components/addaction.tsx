'use client';

import { useState } from 'react';
import { Button } from './button';
import { FormModal } from './formmodal';
import { AddDeployment } from '../forms/adddeployment';

export function AddAction() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  return (
    <div className="actions wrapper rounded">
      <Button primary={true} onClick={handleOpen}>
        Add
      </Button>
      <FormModal open={open} handleClose={() => setOpen(false)}>
        <AddDeployment onClose={() => setOpen(false)} />
      </FormModal>
    </div>
  );
}
