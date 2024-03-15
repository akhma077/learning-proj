import { Typography } from 'antd';

import style from './index.module.scss';

export function SiderMenu() {
  return (
    <div className={style.root}>
      <Typography.Title level={5}> правый блок </Typography.Title>
    </div>
  );
}
