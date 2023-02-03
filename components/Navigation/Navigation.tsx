'use client'

import { useState } from 'react'
import Link from 'next/link'

import { Route } from '@/models'
import { RenderCondition } from '../'
import styles from './Navigation.module.css'

interface Props {
  routes: Route[]
}

function Navigation({ routes }: Props) {
  const [displayNavigation, setDisplayNavigation] = useState<boolean>(false)

  const toggleNavigation = () => {
    setDisplayNavigation((prevState) => !prevState)
  }

  return (
    <>
      <div className={styles.navigationBar}>
        <button onClick={toggleNavigation} aria-label="Open navigation"className={styles.hamburgerMenu}>
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
      </div>
      <RenderCondition condition={displayNavigation}>
        <nav className={styles.navigationWrapper}>
          <span className={styles.closeWrapper}>
            <button onClick={toggleNavigation} aria-label="Close navigation" className={styles.closeButton}>
              <span className={styles.line} />
              <span className={styles.line} />
            </button>
          </span>
          {routes.map(route => <Link onClick={toggleNavigation} href={route.pathname} key={route.name}>{route.name}</Link>)}
        </nav>
      </RenderCondition>
    </>
  )
}

export default Navigation