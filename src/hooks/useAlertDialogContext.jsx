import { useContext } from 'react';
import { AlertDialogContext } from '../contexts/AlertDialogContext';

const useAlertDialogContext = () => {
  const context = useContext(AlertDialogContext);
  if (!context) throw new Error('Invalid context');
  return context;
};

export default useAlertDialogContext;
