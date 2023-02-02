import styles from './about.module.css';

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className={styles.main}>{children}</main>
}