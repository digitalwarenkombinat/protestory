import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../styles/theme'
import createEmotionCache from '../styles/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>PROTESTORY!</title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="PROTESTORY! - jugendkulturellen Protest digital erleben und historisches Wissen nutzen"
        />
        <link rel="icon" href="./favicon.ico" sizes="any" />
        <link rel="icon" href="./favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
        <link rel="manifest" href="./manifest.webmanifest" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
