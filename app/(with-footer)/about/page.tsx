import Image from 'next/image'

import { About, Data } from '@/models'
import { getDataAboutMe } from './services/getDataAboutMe.service'
import { ProgressBar } from '@/components'
import image from '../../../public/assets/about-me.jpg'
import styles from './about.module.css'
import { getMe } from '../../services/page.service'

async function Home() {
  const about = await getDataAboutMe<About>()
  const me = await getMe<Data>()

  return (
    <main className={styles.main}>
      <h1 className='title-page'>About <span className='text-red'>Me</span></h1>
      <p className='subtitle-page'>Get to Know <span className='text-red'>me.</span></p>
      <section className={styles.section}>
        <article>
          <h2 className={styles.subtitle}>
            I{`'`}m <span className='text-red'>{me.careerName}</span> based in
            <p>{me.location.city}, {me.location.country}.</p>
          </h2>

          <p className={styles.description}>
            {about.description}
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
    </main>
  )
}

export default Home