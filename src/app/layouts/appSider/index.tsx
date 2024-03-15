import { Layout } from 'antd';
import { useState } from 'react';

import styles from './index.module.scss';
import { SiderMenu } from '../../../widgets';

export function AppSider() {
  const [isHovered, setIsHovered] = useState(false);
  const siderWidth = isHovered ? '25%' : '10%';

  return (
    <Layout.Sider
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      width={siderWidth}
      className={styles.root}
    >
      <SiderMenu />
    </Layout.Sider>
  );
}
