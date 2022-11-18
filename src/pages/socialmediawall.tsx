import Head from 'next/head'
import Layout from 'components/Layout'
import { title } from 'config'
import Container from '@mui/material/Container'
import SocialWall from 'components/games/SocialWall'

export default function tweetwall() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Social Media Wall</title>
      </Head>
      <Container sx={{ backgroundColor: 'secondary.main' }} maxWidth={false} component="section">
        <SocialWall />
      </Container>
    </Layout>
  )
}
