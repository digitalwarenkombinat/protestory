import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Carousel from 'react-material-ui-carousel'

import Layout from 'components/Layout'
import left from '/public/icons/left.svg'
import right from '/public/icons/right.svg'
import { title } from 'config'
import { posterParade } from 'config'
import { posterParadeItems } from 'config/analysis'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export default function PosterParade() {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Poster Parade</title>
      </Head>
      <Container maxWidth={false} component="section">
        <Grid container alignItems="center" textAlign="center" flexDirection="column" justifyContent="center">
          <Grid item sx={{ mt: 4 }} maxWidth="lg" mx="auto">
            <Typography sx={{ mb: 4 }} component="h2" variant="h2" color="secondary.main">
              Posterparade
            </Typography>
            <Typography component="h3" variant="h4" color="secondary.main">
              {hasHydrated && posterParade[language].description1}
            </Typography>
            <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
              {hasHydrated && posterParade[language].description2}
            </Typography>
            <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
              {hasHydrated && posterParade[language].description3}
            </Typography>
          </Grid>
          <Grid item sx={{ width: '100%', mb: 8 }}>
            <Carousel
              autoPlay={false}
              navButtonsAlwaysVisible={true}
              sx={{
                px: 20,
                pt: 6,
              }}
              navButtonsProps={{
                style: {
                  backgroundColor: 'transparent',
                },
              }}
              indicatorIconButtonProps={{
                style: {
                  padding: '5px',
                },
              }}
              NextIcon={<Image src={right} alt={'Show next image'} width={120} height={120} />}
              PrevIcon={<Image src={left} alt={'Show previous image'} width={120} height={120} />}
            >
              {posterParadeItems.map((item, index) => (
                <Banner item={item} key={index} contentPosition={item.contentPosition} />
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

const Banner = ({ item, contentPosition = 'left' }) => {
  let items = []
  const content = (
    <Grid item xs={4} key={item.name}>
      <CardContent
        sx={{
          height: '600px',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography component="h3" variant="h3" align="center" color="text.secondary" gutterBottom>
          {item.name}
        </Typography>
        <Typography component="h4" variant="h5" align="center" color="text.secondary" gutterBottom>
          {item.caption}
        </Typography>
      </CardContent>
    </Grid>
  )

  for (let i = 0; i < 2; i++) {
    const mediaItem = item.items[i]

    const media = (
      <Grid item xs={4} key={mediaItem.href} sx={{ p: 2 }}>
        <Link href={`/posterparade/${encodeURIComponent(mediaItem.href)}`} passHref>
          <CardMedia
            sx={{
              p: 4,
              height: '100%',
              overflow: 'hidden',
              backgroundSize: 'contain',
            }}
            image={mediaItem.image}
            title={mediaItem.name}
          ></CardMedia>
        </Link>
      </Grid>
    )

    items.push(media)
  }

  if (contentPosition === 'left') {
    items.unshift(content)
  } else if (contentPosition === 'right') {
    items.push(content)
  } else if (contentPosition === 'middle') {
    items.splice(items.length / 2, 0, content)
  }

  return (
    <Card
      raised
      sx={{
        height: '100%',
        position: 'relative',
        color: 'text.secondary',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        boxShadow: 'none',
        border: '48px solid transparent',
        borderImage: 'url(/icons/frame.svg) 30 30 round',
      }}
    >
      <Grid
        container
        sx={{
          height: '100%',
          position: 'relative',
          backgroundColor: 'secondary.main',
        }}
      >
        {items}
      </Grid>
    </Card>
  )
}
