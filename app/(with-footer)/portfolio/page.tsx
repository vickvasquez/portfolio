import Image from "next/image"
import Link from "next/link"

import { RenderCondition } from "@/components"
import styles from './portfolio.module.css'
import { getDataPortfolio } from "./services/getDataPortfolio.service"
import { Projects } from "@/models"

async function Portfolio() {
  const projects = await getDataPortfolio<Projects[]>()

  return (
    <>
      <h1 className='title-page'><span className="text-red">My</span> Portfolio</h1>
      <h2 className='subtitle-page'> Some Of My <span className="text-red">Works</span></h2>
      <div className={styles.portfolioWrapper}>
        {projects.map(p => {
          return (
            <div className={styles.portfolioItem} key={p.name}>
              <Image width={450} height={300} src={p.image} alt="image" />
              <div className={styles.portfolioText}>
                <p className={styles.name}>{p.name}</p>
                <p>{p.description}</p>
                <RenderCondition condition={p.uri !== ''}>
                  <Link className={styles.portfolioLink} href={p.uri} target="_blank" rel="noopener">
                    <span className={styles.buttonText}>
                      View Project
                    </span>
                  </Link>
                </RenderCondition>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Portfolio