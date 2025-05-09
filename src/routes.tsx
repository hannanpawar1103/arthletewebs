
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NotFound from './pages/NotFound';
import ComingSoon from './pages/ComingSoon';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/coming-soon',
    element: <ComingSoon />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default router;
