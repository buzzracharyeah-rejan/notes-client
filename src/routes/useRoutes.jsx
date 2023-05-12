import { createBrowserRouter } from 'react-router-dom';
import Signup from '../views/auth/Signup';
import Signin from '../views/auth/Signin';
import Dashboard from '../views/dashboard/Dashboard';
import PageNotFound from '../views/errorPage/404';

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
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  return { router };
};

export default useRoutes;
