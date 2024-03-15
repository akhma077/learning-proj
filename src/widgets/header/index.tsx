import { DingdingOutlined } from '@ant-design/icons';

import slyles from './index.module.scss';
import { useTheme } from '../../shared/hooks';

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
  const { toggleTheme, theme } = useTheme();
  return (
    <header className={slyles.root}>
      <DingdingOutlined
        className={slyles.root__icon}
        onClick={toggleTheme}
        style={{ color: theme === 'light' ? '#000' : 'white' }}
      />
    </header>
  );
}
