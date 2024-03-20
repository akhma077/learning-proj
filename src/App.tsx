import { Suspense, useEffect } from 'react';
import { AppRouter } from './app/routes';
import './app/styles/global.scss';
import { useTheme } from './shared/hooks';

export function App() {
  const { theme } = useTheme();

  useEffect(() => {
    throw new Error('hhh');
  }, []);

  return (
    <div className={`app ${theme}`}>
      <Suspense>
        <AppRouter />
      </Suspense>
    </div>
  );
}
