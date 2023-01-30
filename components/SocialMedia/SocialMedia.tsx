import Image from "next/image"

import { SocialMediaModel } from "@/models";
import styles from './SocialMedia.module.css';

interface Props {
  socialMedias: SocialMediaModel[]
}

const SIZE_IMAGE = 25

function SocialMedia({ socialMedias }: Props) {
  return (
    <div className={styles.socialMediaWrapper}>
      {socialMedias.map(socialMedia => (
        <a key={socialMedia.name} href={socialMedia.link} target="_blank" rel="noreferrer">
          <Image
            src={socialMedia.icon}
            width={SIZE_IMAGE}
            height={SIZE_IMAGE}
            alt={socialMedia.link}
          />
        </a>
      ))}
    </div>
  )
}

export default SocialMedia