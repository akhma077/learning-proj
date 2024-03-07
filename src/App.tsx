import './app/styles/global.scss';
import { useTheme } from './theme/useTheme';

export function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h2>hello world</h2> <button onClick={toggleTheme}>toggle</button>{' '}
    </div>
  );
}
