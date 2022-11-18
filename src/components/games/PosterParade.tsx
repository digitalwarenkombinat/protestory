import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import { useMemo, useRef, useState } from 'react'

import { posterParade } from 'config'
import { ScrollIcon } from 'services/ScrollIcon'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'
import { useIntersection } from 'utils/useIntersection'

interface Source {
  text: string
  link: string
}

interface PosterParadeProps {
  id: string
  image: string
  header: string
  texts: string[]
  sources: Source[]
  styles: any
}

function PosterParade({ id, image, header, texts, sources, styles }: PosterParadeProps) {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const ScrollContainerRef = useRef(null)
  const [activeTransform, setActiveTransform] = useState(0)
  const handler = useMemo(
    () => (entry, index: number) => {
      if (entry.isIntersecting) {
        setActiveTransform(index)
      }
    },
    []
  )

  const options = { threshold: 0.75 }
  const paragraph = '.caption-wrapper'

  let className = styles[id + '_' + activeTransform]
  className += ' ' + styles.imageTransistion

  useIntersection(ScrollContainerRef, paragraph, handler, options)

  return (
    <Container maxWidth="lg" component="section">
      <style>{`
      .imageWrapper {
          margin-top: 2rem;
        }

      .imageContainer {
        position: sticky;
        top: 2rem;
        width: 100%;
        height: 100vh;
        overflow: hidden;
        box-sizing: border-box;
      }

      .imageInnerContainer {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0;
        width: 100%;
        height: 100%;
        max-width: unset;
      }

      .textContainer {
        position: relative;
        margin-top: -100vh;
      }

      .caption-wrapper.cover {
        align-items: flex-end;
      }

      .caption-wrapper {
        min-height: 75vh;
        display: flex;
        align-items: center;
      }

      .caption-spacer {
        min-height: 75vh;
        display: flex;
        align-items: center;
      }

      .appHeader,
      .appHeading {
        text-align: center;
        width: 100%;
        hyphens: auto;
        background-color: rgba(255, 255, 255, 0.8);
        margin-right: 1rem
      }

      .close-read-kicker {
        display: inline-block;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        border-bottom: 1px solid white;
        margin: 1em auto 1.2em;
      }

      .appText {
        margin: 0 auto;
        padding: 15px 20px;
        margin-bottom: 0;
        text-align: center;
        max-width: 20em;
        background-color: rgba(255, 255, 255, 0.8);
      }

      @media (min-width: 1024px) {
        .imageWrapper {
          display: flex;
        }

        .imageContainer {
          flex-grow: 0;
          order: 1;
        }

        .textContainer {
          box-sizing: border-box;
          width: 400px;
          margin-top: 0;
          flex-shrink: 0;
          order: 0;
        }

        .caption-wrapper.cover {
          align-items: center;
        }

        .appHeader,
        .appHeading {
          text-align: left;
          background-color: transparent;
        }

        .appHeading {
          text-align: left;
        }

        .appText {
          background-color: transparent;
        }
      }

      `}</style>
      <Box className="imageWrapper">
        <Box className="imageContainer">
          <Image
            className={className}
            src={image}
            width={800}
            height={600}
            style={{
              width: '100%',
              height: 'auto',
            }}
            priority
            alt="Poster Parade"
          />
        </Box>

        <Box className="textContainer" ref={ScrollContainerRef}>
          <Box className="caption-wrapper cover">
            <Box className="appHeader">
              <Typography component="p" variant="body1" color="text.primary" className="close-read-kicker">
                {hasHydrated && posterParade[language].analysis}
              </Typography>
              <Typography component="h2" variant="h2" color="text.primary" className="appHeading">
                {header}
              </Typography>
              <ScrollIcon />
            </Box>
          </Box>
          <Box className="caption-spacer cover"></Box>

          {texts.map((text, index) => (
            <Box key={index} className="caption-wrapper">
              <Typography component="p" variant="h5" color="text.primary" sx={{ bgcolor: 'background.default' }} className="appText">
                {text}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
      {sources && (
        <Box mt={'2rem'} mb={'8rem'} textAlign={'center'}>
          <Typography component="p" variant="h5" color="text.primary" sx={{ bgcolor: 'background.default', mb: 2 }}>
            {hasHydrated && posterParade[language].sources}
          </Typography>
          {sources.map((source, index) => (
            <Box key={index}>
              <Link color="inherit" href={source.link}>
                <Typography component="p" variant="h6" color="text.primary" sx={{ bgcolor: 'background.default' }}>
                  {source.text}
                </Typography>
              </Link>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  )
}

export default PosterParade
