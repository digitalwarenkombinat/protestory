import type { NextPage } from 'next'
import Head from 'next/head'

import Layout from 'components/Layout'

import { Hero } from '../components/Hero'
import { Article } from '../components/Article'
import { Chat } from 'components/Chat'

import { title, sections, chat } from '../config'

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <Hero title={title} />
      <Article sections={sections} />
      <Chat {...chat} />
    </Layout>
  )
}

export default Home
