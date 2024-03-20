import { Component, ErrorInfo, ReactNode } from 'react';
import { ErroPage } from '../../../pages';

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorBoundaryProps {
  children: ReactNode;
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    // Обновляем состояние, чтобы следующий рендер показал запасной UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Можно также записать ошибку в сервис отчетности об ошибках
    logErrorToMyService(error, errorInfo);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      // Можно отрисовать любой пользовательский запасной UI
      return <ErroPage />;
    }

    return children;
  }
}

function logErrorToMyService(error: Error, errorInfo: ErrorInfo) {
  // Здесь должна быть реализация логирования ошибки в ваш сервис обработки ошибок
  console.error(error, errorInfo);
}
