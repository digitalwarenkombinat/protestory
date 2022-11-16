import Head from 'next/head'
import Container from '@mui/material/Container'

import Layout from 'components/Layout'
import { Concert } from 'components/games/Concert'

import { title } from 'config'

export default function concert() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>If I can&apos;t dance to it, it&apos;s not my revolution</title>
      </Head>
      <Container maxWidth="lg" component="section">
        <Concert />
      </Container>
    </Layout>
  )
}
