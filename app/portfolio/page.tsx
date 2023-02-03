import { RenderCondition } from "@/components"
import Image from "next/image"
import Link from "next/link"

import styles from './portfolio.module.css'

const PORTFOLIO = [
  {
    image: '/assets/gc.webp',
    name: 'Grain Chain',
    description: `GrainChain creates innovative solutions to solve the complex challenges facing the global agricultural industry at every stage of the supply chain. We use cutting edge technology to make the process easier, faster and safer for all participants.`,
    uri: 'https://www.grainchain.io/'
  },
  {
    image: '/assets/100l.png',
    name: '100 Ladrillos',
    description: 'Plataforma de inversión de bienes raices.',
    uri: 'https://www.100ladrillos.com/'
  },
  {
    image: '/assets/atexto.png',
    name: 'Atexto',
    description: 'Atexto is the most powerful platform to improve speech recognition accuracy, fairness, and language support through customized voice data collected in hours, not months.',
    uri: 'https://www.atexto.com/'
  },
  {
    image: '/assets/regiztra.png',
    name: 'LobbyFix',
    description: 'Agiliza el registro de visitantes y mejora el control de accesos.',
    uri: 'https://www.lobbyfix.com/'
  },
  {
    image: '/assets/mnn.png',
    name: 'Mi negocio en las nubes',
    description: 'El mejor sistema administrativo para tu negocio complementamente en linea, Controla, administra, gestiona y crece de manera exponencial tu negocio.',
    uri: 'https://minegocioenlasnubes.net/'
  },
  {
    image: '/assets/ia.png',
    name: 'Impulsando Academy',
    description: 'Plataforma de educación especializada en línea que busca ayudar a las personas a crecer profesional y académicamente a través de cursos especializados, que les otorgue conocimientos para un óptimo desempeño en áreas de alto impacto.',
    uri: ''
  },
  {
    image: '/assets/jobie.png',
    name: 'Jobie',
    description: 'Plataforma inteligente de reclutamiento de los mejores talentos, donde las personas encuentran su empleo ideal mediante nuestros algoritmos de inteligencia artificial y las empresas encuentran el mejor talento On Demand.',
    uri: ''
  },
]

function Portfolio() {
  return (
    <>
      <h1 className='title-page'><span className="text-red">My</span> Portfolio</h1>
      <h2 className='subtitle-page'> Some Of My <span className="text-red">Works</span></h2>
      <div className={styles.portfolioWrapper}>
        {PORTFOLIO.map(portfolio => {
          return (
            <div className={styles.portfolioItem} key={portfolio.name}>
              <Image width={450} height={300} src={portfolio.image} alt="image" />
              <div className={styles.portfolioText}>
                <p>{portfolio.name}</p>
                <p>{portfolio.description}</p>
                <RenderCondition condition={portfolio.uri !== ''}>
                  <Link className={styles.portfolioLink} href={portfolio.uri} target="_blank" rel="noopener">
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