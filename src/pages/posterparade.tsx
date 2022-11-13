import Container from '@mui/material/Container'
import Head from 'next/head'

import PosterParadeOverview from 'components/games/PosterParadeOverview'
import Layout from 'components/Layout'
import { title } from 'config'

export default function posterparade() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Poster Parade</title>
      </Head>
      <Container maxWidth="xl" component="section">
        <PosterParadeOverview />
      </Container>
    </Layout>
  )
}
