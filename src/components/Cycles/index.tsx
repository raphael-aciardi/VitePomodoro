import styles from './styles.module.css';

export default function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles['cycle-dots']}>
        <span className={`${styles['cycle-dot']} ${styles.workTime}`}></span>
        <span
          className={`${styles['cycle-dot']} ${styles.shortBreakTime}`}
        ></span>
        <span className={`${styles['cycle-dot']} ${styles.workTime}`}></span>
        <span
          className={`${styles['cycle-dot']} ${styles.shortBreakTime}`}
        ></span>
        <span className={`${styles['cycle-dot']} ${styles.workTime}`}></span>
        <span
          className={`${styles['cycle-dot']} ${styles.shortBreakTime}`}
        ></span>
        <span className={`${styles['cycle-dot']} ${styles.workTime}`}></span>
        <span
          className={`${styles['cycle-dot']} ${styles.shortBreakTime}`}
        ></span>
        <span
          className={`${styles['cycle-dot']} ${styles.longBreakTime}`}
        ></span>
      </div>
    </div>
  );
}
