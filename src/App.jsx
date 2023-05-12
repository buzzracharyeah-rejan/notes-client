import AlertDialog from './components/alertDialog/AlertDialog';
import RouterProvider from './components/RouterProvider.jsx';
import ModalProvider from './contexts/ModalContext';

const App = () => {
  return (
    <>
      <AlertDialog />
      <ModalProvider>
        <RouterProvider />
      </ModalProvider>
    </>
  );
};

export default App;
