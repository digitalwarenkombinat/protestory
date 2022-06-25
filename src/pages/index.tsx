import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from 'components/Layout'

import { Hero } from '../components/Hero'
import { Article } from '../components/Article'

import { title, sections } from '../config'

const Home: NextPage = () => {
  return (
    <Layout headerTitle={false}>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero title={title} />
      <Article sections={sections} />
    </Layout>
  )
}

export default Home
