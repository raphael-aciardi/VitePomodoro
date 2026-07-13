import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailaableThemes = 'dark' | 'light';

export function Menu() {
  const [theme, setTheme] = useState<AvailaableThemes>('dark');

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  ) {
    event.preventDefault();
    setTheme(prevTheme => {
      const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Ir para a home'
        title='Ir para a home'
      >
        <HouseIcon />
      </a>
      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Ver Histórico'
        title='Ver histórico'
      >
        <HistoryIcon />
      </a>
      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Configurações'
        title='Configurações'
      >
        <SettingsIcon />
      </a>
      <a
        className={styles['menu-link']}
        href='#'
        aria-label='Mudar Tema'
        title='Mudar Tema'
        onClick={handleThemeChange}
      >
        <SunIcon />
      </a>
    </nav>
  );
}
