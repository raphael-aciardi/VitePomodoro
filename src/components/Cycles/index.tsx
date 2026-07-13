import styles from './styles.module.css';

export default function Cycles() {
  return (
    <div className={styles.cicles}>
      <span>Ciclos:</span>

      <div className={styles['cycle-dots']}>
        <span className={`${styles['cycle-dot']} ${styles.workTime}`}></span>
      </div>
    </div>
  );
}
