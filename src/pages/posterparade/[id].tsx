import Head from 'next/head'
import { useRouter } from 'next/router'

import PosterParade from 'components/games/PosterParade'
import Layout from 'components/Layout'

import styles from 'styles/posterparade.module.css'
import { title } from '../../config'
import { posterParadeTexts } from '../../config/analysis'

export default function PosterParadeItem() {
  const router = useRouter()
  const { id } = router.query
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Bildanalyse {id}</title>
      </Head>
      <PosterParade
        id={id as string}
        image={`/posterParade/${id}.webp`}
        header={posterParadeTexts[id as string].header}
        texts={posterParadeTexts[id as string].texts}
        styles={styles}
      />
    </Layout>
  )
}
