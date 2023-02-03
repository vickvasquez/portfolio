import Image from "next/image"

import styles from './ContactItem.module.css'

interface Props {
  icon: string
  title: string
  value: string
}

function ContactItem({ icon, title, value }: Props) {
  return (
    <div className={styles.directionItemWrapper}>
      <Image src={icon} alt='icon' width={30} height={30} />
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  )
}

export default ContactItem