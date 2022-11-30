import React from 'react';
import { Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import AdminRoute from './components/AdminRoute';
import configs from './config';

export default function Router() {
  return <Routes>
    {configs.map(config => {
      const {
        path,
        component: PageComponent,
        protect,
        admin
      } = config
      if (admin) {
        if (protect) {
          return <Route
            key={path}
            path={path}
            element={
              <React.Suspense fallback={<>...</>}>
                <AdminRoute>
                  <PageComponent />
                </AdminRoute>
              </React.Suspense>
            }
          />
        }
        return <Route
          key={path}
          path={path}
          element={
            <React.Suspense fallback={<>...</>}>
              <PageComponent />
            </React.Suspense>
          }
        />
      }

      if (protect) {
        return <Route
          key={path}
          path={path}
          element={
            <React.Suspense fallback={<>...</>}>
              <ProtectedRoute><PageComponent /></ProtectedRoute>
            </React.Suspense>
          }
        />
      }
      return <Route
        key={path}
        path={path}
        element={
          <React.Suspense fallback={<>...</>}>
            <PageComponent />
          </React.Suspense>
        }
      />
    })}
  </Routes>
}