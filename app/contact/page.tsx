import { ContactItem, SocialMedia } from "@/components"
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
      <h1 className='title-page'>Contact <span className="text-red">Me</span></h1>
      <h2 className="subtitle-page"><span className="text-red">Get</span> in Touch.</h2>
      <div className={styles.contactContainer}>
        <div>
          {DATA_OF_CONTACT.map(data => <ContactItem key={data.title} icon={data.icon} title={data.title} value={data.value} />)}
        </div>
      </div>
    </>
  )
}

export default Contact