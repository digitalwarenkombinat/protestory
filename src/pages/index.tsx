import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from 'components/Layout'

import { Hero } from '../components/Hero'
import { Article } from '../components/Article'
import { Banner } from '../components/Banner'

import { title } from '../config'
import { Footer } from 'components/Footer'

const Home: NextPage = () => {
  return (
    <Layout headerTitle={false} startPage>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero title={title} />
      <Banner />
      <Article />
      <Footer />
    </Layout>
  )
}

export default Home
