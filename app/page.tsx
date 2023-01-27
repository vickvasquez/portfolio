import Image from 'next/image'

import { socialMedias } from '../models'
import styles from './page.module.css'

const SIZE_IMAGE = 25

export default function Home() {
  return (
    <main className={styles.homeWrapper}>
      <div className={styles.socialMedia}>
        {socialMedias.map(socialMedia => (
          <a key={socialMedia.name} href={socialMedia.link} target="_blank" rel="noreferrer">
            <Image src={socialMedia.icon} width={SIZE_IMAGE} height={SIZE_IMAGE} alt={socialMedia.link} />
          </a>
        ))}
      </div>
      <div className={styles.homeContent}>
        <h1 className={styles.fullName}>
          <span className={styles.name}>Victor</span> Vásquez
        </h1>
        <p className={styles.jobName}>I{`'`}m a <span className={styles.typing}>Software Engineer.</span></p>
      </div>
    </main>
  )
}
