import { createContext, useState } from 'react';

const initialState = {
  open: false,
  dialogConfig: {
    title: '',
    message: '',
    actionCallback: (res) => {},
  },
};

export const AlertDialogContext = createContext(null);

const AlertDialogProvider = ({ children }) => {
  const [dialog, setDialog] = useState(initialState);

  const openDialog = (config) => {
    setDialog({ open: true, dialogConfig: { ...config } });
  };

  const resetDialog = () => {
    setDialog({ ...initialState });
  };

  return (
    <AlertDialogContext.Provider value={{ dialog, openDialog, resetDialog }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

export default AlertDialogProvider;
