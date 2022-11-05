import Head from 'next/head'
import Layout from 'components/Layout'
import { title } from 'config'
import Container from '@mui/material/Container'
import LegalNotice from 'components/LegalNotice'

export default function legal() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Legal</title>
      </Head>
      <Container maxWidth={false} component="section">
        <LegalNotice />
      </Container>
    </Layout>
  )
}
