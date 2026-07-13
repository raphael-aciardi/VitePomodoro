import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon } from 'lucide-react';
import styles from './styles.module.css';

export function Menu() {
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
      >
        <SunIcon />
      </a>
    </nav>
  );
}
