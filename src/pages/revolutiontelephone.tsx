import Head from 'next/head'
import Layout from 'components/Layout'
import { title } from '../config'
import Container from '@mui/material/Container'
import RevolutionTelephone from 'components/games/RevolutionTelephone'

export default function Revolutiontelephone() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Revolutionstelefon</title>
      </Head>
      <Container maxWidth="xl" component="section">
        <RevolutionTelephone />
      </Container>
    </Layout>
  )
}
