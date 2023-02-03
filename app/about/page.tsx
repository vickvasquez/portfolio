import Image from 'next/image'

import styles from './about.module.css'
import image from '../../public/assets/about-me.jpg'
import { ProgressBar } from '@/components'
import about from '../../data/about.json'

function Home() {
  return (
    <>
      <h1 className='title-page'>About <span className='text-red'>Me</span></h1>
      <p className='subtitle-page'>Get to Know <span className='text-red'>me.</span></p>
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
      <section>
        <h3 className={styles.titleSkills}>Some of my <span className='text-red'>Skills</span></h3>
        <article className={styles.containerSkills}>
          {
            about.skills.map(skill => (
              <ProgressBar title={skill.name} progress={skill.level} key={skill.name} />
            ))
          }
        </article>
      </section>
    </>
  )
}

export default Home