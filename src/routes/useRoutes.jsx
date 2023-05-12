import { createBrowserRouter } from 'react-router-dom';
import Signup from '../views/auth/Signup';
import Signin from '../views/auth/Signin';
import Dashboard from '../views/dashboard/Dashboard';
import PageNotFound from '../views/errorPage/404';
import MockView from '../views/mock/MockView';
import AddNotesForm from '../views/dashboard/forms/AddNotes';
import EditNotesForm from '../views/dashboard/forms/EditNotes';

const useRoutes = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/login',
      element: <Signin />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/notes/add',
      element: <AddNotesForm />,
    },
    {
      path: '/notes/edit/:id',
      element: <EditNotesForm />,
    },
    {
      path: '/mock',
      element: <MockView />,
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  return { router };
};

export default useRoutes;
