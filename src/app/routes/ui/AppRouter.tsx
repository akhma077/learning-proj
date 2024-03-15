import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from '../../../shared/config/routeConfig';
import { MainLayout } from '../../layouts';
import { Suspense } from 'react';
import { SpinLoader } from '../../../shared/ui';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {Object.values(RouterConfig).map(({ path, element }: any) => (
          <Route
            key={path}
            path={path}
            element={<Suspense fallback={<SpinLoader />}> {element} </Suspense>}
          />
        ))}
      </Route>
    </Routes>
  );
}
