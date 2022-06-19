import type { NextPage } from 'next'
import Container from '@mui/material/Container'

import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { Article } from '../components/Article'
import { Chat } from 'components/Chat'
import { Footer } from '../components/Footer'

import { title, sections, chat } from '../config'

const Home: NextPage = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        height: '100%',
        display: 'flex',
        flexFlow: 'row wrap',
      }}
    >
      <Header />
      <Hero title={title} />
      <Article sections={sections} />
      <Chat {...chat} />
      <Footer title={title} />
    </Container>
  )
}

export default Home
