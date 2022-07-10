import Head from 'next/head'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'

import Layout from 'components/Layout'
import { title } from '../config'

export default function ArtOfProtest() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Kunst des Protestes</title>
      </Head>
      <Grid container alignItems="center" justifyContent="center">
        <Grid item>
          <Link color="inherit" href="/posterparade">
            Poster parade
          </Link>
        </Grid>
      </Grid>
    </Layout>
  )
}
