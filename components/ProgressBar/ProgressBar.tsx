import styles from './ProgressBar.module.css'

interface Props {
  title: string;
  progress: string;
}

function ProgressBar({ title, progress }: Props) {
  return (
    <div>
      <p className={styles.title}>{title}</p>
      <div className={styles.progressbarWrapper}>
        <span style={{ width: `${progress}%` }} className={styles.progress}>{progress}%</span>
      </div>
    </div>
  )
}

export default ProgressBar