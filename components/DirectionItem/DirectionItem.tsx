import Image from "next/image"

import styles from './DirectionItem.module.css'

interface Props {
  icon: string
  title: string
  value: string
}

function DirectionItem({ icon, title, value }: Props) {
  return (
    <div className={styles.directionItemWrapper}>
      <Image src={icon} alt='icon' width={30} height={30} />
      <div>
        <h6 className={styles.title}>{title}</h6>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  )
}

export default DirectionItem