'use client';

import { useState } from 'react';
import { Button } from './button';
import { FormModal } from './formmodal';
import { AddDeployment } from '../forms/adddeployment';
import { IPlannedDeployment } from '../data/types';

export function Actions({ onAdd }: { onAdd: () => void }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = async (data?: IPlannedDeployment) => {
    setOpen(false);

    if (data) {
      await fetch('/api/deployments', {
        method: 'POST',
        body: JSON.stringify(data),
      });
    }

    onAdd();
  };

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
