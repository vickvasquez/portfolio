import Image from 'next/image'

import styles from './about.module.css'

import image from '../../public/assets/about-me.jpg'

function Home() {
  return (
    <>
      <header className={styles.title}>
        <h1>About <span className='text-red'>Me</span></h1>
      </header>
      <section className={styles.section}>
        <article>
          <h2 className={styles.subtitle}>
            I{`'`}m <span className='text-red'>Software Engineer</span> based in
            <p>Oaxaca, México.</p>
          </h2>

          <p className={styles.description}>
            With +8 years of experience as a professional Software Engineer, I have acquired the skills and knowledge necessary to make your project a success.
            I enjoy every step while working.
          </p>
          <a href="/assets/vickvasquez.pdf" download className={styles.containerButton}>
            <button className={styles.button}>
              Download CV
            </button>
          </a>
        </article>
        <Image placeholder='blur' className={styles.image} src={image} alt="Developer" />
      </section>
    </>
  )
}

export default Home