import { Suspense } from "react";
import { AppRouter } from "./app/routes";
import "./app/styles/global.scss";
import { useTheme } from "./shared/hooks";

export function App() {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <Suspense>
        <AppRouter />
      </Suspense>
    </div>
  );
}
