import React from 'react';
import { RouterProvider as BrowserRouterProvider } from 'react-router-dom';
import useRoutes from '../routes/useRoutes';

const RouterProvider = ({ children }) => {
  const { router } = useRoutes();
  return <BrowserRouterProvider router={router}>{children}</BrowserRouterProvider>;
};

export default RouterProvider;
