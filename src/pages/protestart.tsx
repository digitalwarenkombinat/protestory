import Head from 'next/head'
import Grid from '@mui/material/Grid'

import Layout from 'components/Layout'
import { MediaGallery } from 'components/MediaGallery'
import { title } from '../config'

export default function ProtestArt() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Protestkunst</title>
      </Head>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <MediaGallery />
        </Grid>
      </Grid>
    </Layout>
  )
}
