import styles from './styles.module.css';

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>
    {children}
    <footer className={styles.footer}>
      ❤️
      <a href="mailto:vasjvic44@gmail.com">@vickvasquez</a>
    </footer>
  </>
}
