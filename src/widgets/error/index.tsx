import { Button, Typography } from 'antd';
import styles from './index.module.scss';

export function ErrorShow() {
  function handleReload() {
    window.location.reload();
  }
  return (
    <div className={styles.root}>
      <Typography.Title level={3}>Произошла непредвиденная ошибка... 😕</Typography.Title>
      <Button type="primary" onClick={handleReload}>
        Обновить приложение
      </Button>
    </div>
  );
}
