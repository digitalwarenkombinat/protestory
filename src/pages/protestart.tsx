import Head from 'next/head'
import Container from '@mui/material/Container'

import Layout from 'components/Layout'
import { MediaGallery } from 'components/MediaGallery'
import { title } from 'config'

export default function protestart() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Protest Art</title>
      </Head>
      <Container maxWidth={false} component="section">
        <MediaGallery />
      </Container>
    </Layout>
  )
}
