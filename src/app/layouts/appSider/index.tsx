import { Layout } from 'antd';
import { useState } from 'react';

import styles from './index.module.scss';

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
      <h3>Im sider </h3>
    </Layout.Sider>
  );
}
