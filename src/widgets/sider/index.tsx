import { Typography } from 'antd';

import style from './index.module.scss';
import { useState } from 'react';

export function SiderMenu() {
  const [c, setC] = useState(0);

  function fn() {
    setC(c + 1);
    setC(c + 1);
    setC(c + 1);
  }
  return (
    <div className={style.root}>
      <button onClick={fn}>btn</button>
      <Typography.Title level={5}> {c} </Typography.Title>
    </div>
  );
}
