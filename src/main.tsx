import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ErrorBoundary, ThemeContextProvider } from './app/providers/index.ts';
import './shared/config/i18n/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
