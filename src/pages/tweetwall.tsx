import Head from 'next/head'
import Layout from 'components/Layout'
import { title } from 'config'
import Container from '@mui/material/Container'
import TweetWall from 'components/games/TweetWall'

export default function tweetwall() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Tweetwall</title>
      </Head>
      <Container maxWidth="xl" component="section">
        <TweetWall />
      </Container>
    </Layout>
  )
}
