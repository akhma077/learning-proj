import { AboutPage, MainPage } from '../../../pages';

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
};
export const RouterConfig: Record<AppRoutes, any> = {
  [AppRoutes.MAIN]: {
    path: RoutePaths.main,
    element: <MainPage />,
  },

  [AppRoutes.ABOUT]: {
    path: RoutePaths.about,
    element: <AboutPage />,
  },
};
export const routes = [
  { path: '/', element: <MainPage /> },
  { path: '/about', element: <AboutPage /> },
];
