import { Typography } from 'antd';
import slyles from './index.module.scss';

// export function Component() {

//   function toggleLanguange() {
//     i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
//   }

//   return (
//     <div>
//       <button onClick={toggleLanguange}>{t('Перевод')}</button>

//       {t('Тестовый пример')}
//     </div>
//   );
// }

export function Header() {
    return (
        <header className={slyles.root}>
            <Typography.Title level={5}> Привет, мир! </Typography.Title>
        </header>
    );
}
