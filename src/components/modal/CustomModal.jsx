import React, { useState } from 'react';
import { Backdrop, Box, Modal, Fade, Button, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../store/slices/modalSlice';

const CustomModal = ({ children }) => {
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  const handleClose = () => dispatch(closeModal());

  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isOpen}>
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
