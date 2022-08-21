import Head from 'next/head'
import Container from '@mui/material/Container'

import Layout from 'components/Layout'
import StartTheDemo from 'components/games/StartTheDemo'
import { title } from '../config'

export default function ArtOfProtest() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Kunst des Protestes</title>
      </Head>
      <Container maxWidth={false} component="section">
        <StartTheDemo />
      </Container>
    </Layout>
  )
}
