import React, { useContext, useState } from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import { ModalContext } from '../../contexts/ModalContext';

const CustomModal = ({ children }) => {
  const { modal, handleModalClose } = useContext(ModalContext);

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={modal.open}
      onClose={handleModalClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={modal.open}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 600,
            height: 800,
            borderRadius: '0.6rem',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          {children}
        </Box>
      </Fade>
    </Modal>
  );
};

export default CustomModal;
