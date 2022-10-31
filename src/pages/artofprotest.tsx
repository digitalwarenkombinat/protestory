import Head from 'next/head'
import Container from '@mui/material/Container'

import Layout from 'components/Layout'
import StartTheDemo from 'components/games/StartTheDemo'
import { title } from 'config'

export default function artofprotest() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Get the Protest started!</title>
      </Head>
      <Container sx={{ backgroundColor: 'secondary.main' }} maxWidth={false} component="section">
        <StartTheDemo />
      </Container>
    </Layout>
  )
}
