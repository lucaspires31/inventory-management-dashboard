import { createBrowserRouter, Navigate } from 'react-router-dom';

import { AppLayout } from '../components/layout/AppLayout';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { ProductsPage } from '../pages/Products/ProductsPage';
import { ReportsPage } from '../pages/Reports/ReportsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: 'dashboard',
        element: <DashboardPage />,
      },
      {
        path: 'produtos',
        element: <ProductsPage />,
      },
      {
        path: 'relatorios',
        element: <ReportsPage />,
      },
    ],
  },
]);
