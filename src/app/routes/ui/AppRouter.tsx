import { Route, Routes } from 'react-router-dom';
import { routes } from '../../../shared/config/routeConfig';
import { MainLayout } from '../../layouts';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {routes.map(({ path, element }) => (
          <Route path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}
