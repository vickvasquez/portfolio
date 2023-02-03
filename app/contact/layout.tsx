import styles from './contact.module.css';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <main className={styles.main}>{children}</main>
}
