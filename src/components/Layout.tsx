import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import { Footer } from 'components/Footer'
import { Header } from './Header'
import { Help } from './Help'

export default function Layout({ headerTitle, children, startPage = false }) {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        bgcolor: startPage ? 'primary.main' : 'primary.secondary',
        color: 'primary.contrastText',
        height: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexFlow: 'row wrap',
      }}
    >
      <Header title={headerTitle} />
      <Grid container component="main">
        {children}
      </Grid>
      <Help />
      <Footer />
    </Container>
  )
}
