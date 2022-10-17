import Head from 'next/head'
import Grid from '@mui/material/Grid'

import Layout from 'components/Layout'
import { MediaGallery } from 'components/MediaGallery'
import { title } from 'config'

export default function protestart() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Protest Art</title>
      </Head>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <MediaGallery />
        </Grid>
      </Grid>
    </Layout>
  )
}
