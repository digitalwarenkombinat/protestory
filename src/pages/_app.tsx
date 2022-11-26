import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from 'styles/theme'
import createEmotionCache from 'styles/createEmotionCache'
import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>PROTESTORY!</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta name="title" content="PROTESTORY!" />
        <meta name="description" content="PROTESTORY! | jugendkulturellen Protest digital erleben und historisches Wissen nutzen" />
        <meta name="copyright" content="Digitalwarenkombinat" />
        <meta name="keywords" content="Protest, Archiv, Demokratie, Arbeiterjugend, Open Source, Webdesign, Entwicklung, Digitalwarenkombinat" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://protestory.de/" />
        <meta property="og:title" content="PROTESTORY!" />
        <meta property="og:description" content="PROTESTORY! | jugendkulturellen Protest digital erleben und historisches Wissen nutzen" />
        <meta property="og:image" content="https://protestory.de/icon-512.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://protestory.de/" />
        <meta property="twitter:title" content="PROTESTORY!" />
        <meta property="twitter:description" content="PROTESTORY! | jugendkulturellen Protest digital erleben und historisches Wissen nutzen" />
        <meta property="twitter:image" content="https://protestory.de/icon-512.png" />
        <link rel="preload" href="../fonts/HeyAugust.woff2" as="font" crossOrigin="" />
        <link rel="preload" href="../fonts/Fabrik.woff2" as="font" crossOrigin="" />
        <link rel="icon" href="../favicon.ico" sizes="any" />
        <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="../apple-touch-icon.png" />
        <link rel="manifest" href="../manifest.webmanifest" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}
