import { DirectionItem, SocialMedia } from "@/components"
import { SocialMediaModel } from "@/models"
import { getSocialMedias } from "../services/page.service"

import styles from './contact.module.css'

const DATA_OF_CONTACT = [
  {
    icon: '/assets/icons/icon-name.png',
    title: 'Name',
    value: 'Victor Vásquez Jiménez'
  },
  {
    icon: '/assets/icons/icon-location.png',
    title: 'Location',
    value: 'Oaxaca, México'
  },
  {
    icon: '/assets/icons/icon-email.png',
    title: 'Email',
    value: 'vasjvic44@gmail.com'
  },
]

async function Contact() {
  const socialMedias = await getSocialMedias<SocialMediaModel[]>()

  return (
    <>
      <SocialMedia socialMedias={socialMedias} />
      <div className={styles.contactContainer}>
        {DATA_OF_CONTACT.map(data => <DirectionItem key={data.title} icon={data.icon} title={data.title} value={data.value} />)}
      </div>
    </>
  )
}

export default Contact