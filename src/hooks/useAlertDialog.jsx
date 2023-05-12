import useAlertDialogContext from './useAlertDialogContext';

const useAlertDialog = () => {
  const {
    dialog: { dialogConfig },
    openDialog,
    resetDialog,
  } = useAlertDialogContext();

  const getConfirmation = ({ ...others }) => {
    return new Promise((res, rej) => {
      openDialog({ actionCallback: res, ...others });
    });
  };

  const onConfirm = () => {
    dialogConfig.actionCallback(true);
  };

  const onClose = () => {
    resetDialog();
    dialogConfig.actionCallback(false);
  };

  return { getConfirmation, onConfirm, onClose };
};

export default useAlertDialog;
