import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import MainLayout from '../layouts';
import HomePage from '../pages/Home';
import NotFound from '../pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    
    // Main Routes
    {
      path: '*',
      children: [
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" replace /> },
      ],
    },
    {
      path: '/',
      element: <MainLayout />,
      children: [
        { element: <HomePage />, index: true },
      ],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
