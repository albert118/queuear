'use client';

import { useState } from 'react';
import { Button } from './button';
import { FormModal } from './formmodal';
import { AddDeployment } from '../forms/adddeployment';

interface IFormData {
  person?: string;
  feature?: string;
}

export function Actions() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleClose = (data?: IFormData) => {
    setOpen(false);

    console.log(data);
    if (data) {
      // save
      console.log(data);
    }
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
