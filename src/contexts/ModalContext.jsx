import { createContext, useState } from 'react';

export const ModalContext = createContext(null);

const ModalProvider = ({ children }) => {
  const [modal, setModal] = useState({ open: false });

  const handleModalOpen = () => {
    setModal({ open: true });
  };
  const handleModalClose = () => {
    setModal({ open: false });
  };
  return (
    <ModalContext.Provider value={{ modal, handleModalClose, handleModalOpen }}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
