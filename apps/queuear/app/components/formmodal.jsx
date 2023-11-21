'use client';

import React from 'react';
import Modal from '@mui/material/Modal';
import styles from './modal.module.scss';

export function FormModal({ open, handleClose, children }) {
  return (
    <Modal className="wrapper" open={open} onClose={handleClose}>
      <div className={`${styles.modal} rounded container auto-center`}>
        {children}
      </div>
    </Modal>
  );
}
