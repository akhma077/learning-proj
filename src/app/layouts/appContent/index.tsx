import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import styles from './index.module.scss';

export function AppContent() {
  return (
    <Layout.Content className={styles.root}>
      <Outlet />
    </Layout.Content>
  );
}
