import { Route, Routes } from 'react-router-dom';
import { RouterConfig } from '../../../shared/config/routeConfig';
import { MainLayout } from '../../layouts';

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        {Object.values(RouterConfig).map(({ path, element }: any) => (
          <Route path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
}
