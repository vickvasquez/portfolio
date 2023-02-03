import { ContactItem, SocialMedia } from "@/components"
import { Contact, SocialMediaModel } from "@/models"
import { getSocialMedias } from "../services/page.service"

import styles from './contact.module.css'
import { getDataContact } from "./services/getDataContact.service"

async function Contact() {
  const socialMedias = await getSocialMedias<SocialMediaModel[]>()
  const contact = await getDataContact<Contact[]>()

  return (
    <>
      <SocialMedia socialMedias={socialMedias} />
      <h1 className='title-page'>Contact <span className="text-red">Me</span></h1>
      <h2 className="subtitle-page"><span className="text-red">Get</span> in Touch.</h2>
      <div className={styles.contactContainer}>
        <div>
          {contact.map(data => <ContactItem key={data.title} icon={data.icon} title={data.title} value={data.value} />)}
        </div>
      </div>
    </>
  )
}

export default Contact