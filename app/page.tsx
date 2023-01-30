import { getMe, getSocialMedias } from './services/page.service'
import { Data } from '@/models/me.model'
import { SocialMediaModel } from '@/models/social-media.model'
import { SocialMedia } from '@/components'
import styles from './page.module.css'

export default async function Home() {
  const data = await getMe<Data>()
  const socialMedias = await getSocialMedias<SocialMediaModel[]>()

  return (
    <main className={styles.homeWrapper}>
      <div className={styles.socialMedia}>
        <SocialMedia socialMedias={socialMedias} />
      </div>
      <div className={styles.homeContent}>
        <h1 className={styles.fullName}>
          <span className={styles.name}>{data.name}</span> {data.lastName}
        </h1>
        <p className={styles.jobName}>I{`'`}m a <span className={styles.typing}>{data.careerName}.</span></p>
      </div>
    </main>
  )
}
