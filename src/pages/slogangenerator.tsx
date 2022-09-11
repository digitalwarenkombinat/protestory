import Head from 'next/head'
import Layout from 'components/Layout'
import { title } from '../config'
import Container from '@mui/material/Container'
import SloganGenerator from 'components/games/SloganGenerator'

export default function Slogangenerator() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Revolutionstelefon</title>
      </Head>
      <Container maxWidth="xl" component="section">
        <SloganGenerator />
      </Container>
    </Layout>
  )
}
