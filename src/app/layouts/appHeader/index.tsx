import { Layout } from 'antd';
import { Header } from '../../../widgets';

import styles from './index.module.scss';

export function AppHeader() {
  return (
    <Layout.Header className={styles.root}>
      <Header />
    </Layout.Header>
  );
}
