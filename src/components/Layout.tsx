import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

import { Header } from './Header'
import { Help } from './Help'
//import { Footer } from './Footer'

//import { title } from '../config'

export default function Layout({
  headerTitle,
  children,
  startPage = false,
}) {
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
      <Header title={headerTitle} startPage={startPage} />
      <Grid container component="main">
        {children}
      </Grid>
      <Help />
      {/* <Footer title={title} /> */}
    </Container>
  )
}
