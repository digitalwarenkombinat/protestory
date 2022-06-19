import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import { Header } from './Header'
import { Footer } from './Footer'

import { title } from '../config'

export default function Layout({ children }) {
  return (
    <Container
      maxWidth={false}
      sx={{
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexFlow: 'row wrap',
      }}
    >
      <Header />
      <Grid container component="main">
        {children}
      </Grid>

      <Footer title={title} />
    </Container>
  )
}
