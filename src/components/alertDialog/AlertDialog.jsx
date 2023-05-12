import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';
import useAlertDialog from '../../hooks/useAlertDialog';
import useAlertDialogContext from '../../hooks/useAlertDialogContext';

const AlertDialog = () => {
  const {
    dialog: { open, dialogConfig },
  } = useAlertDialogContext();
  const { onConfirm, onClose } = useAlertDialog();

  const handleClose = (event) => {
    const dataId = event.currentTarget.getAttribute('data-id');
    if (dataId === 'yes') {
      onConfirm();
    }
    onClose();
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>{dialogConfig.title}</DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            {dialogConfig.message}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant='text' color='error' data-id='no'>
            No
          </Button>
          <Button onClick={handleClose} variant='text' color='success' data-id='yes' autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
