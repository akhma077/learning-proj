import { Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";

export function Page() {
  const navigate = useNavigate();
  return (
    <div className={styles.root}>
      <Typography.Title className={styles.root__title} level={3}>
        Страница не найдена...
      </Typography.Title>
      <div onClick={() => navigate(-1)} className={styles.root__goBack}>
        <LeftOutlined /> вернуться на главную
      </div>
    </div>
  );
}
