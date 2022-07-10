import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import Grid from '@mui/material/Grid'
import Carousel from 'react-material-ui-carousel'

import Layout from 'components/Layout'
import next from '../../public/icons/next.svg'
import prev from '../../public/icons/prev.svg'
import { title } from '../config'
import { posterParadeItems } from '../config/analysis'
import CardMedia from '@mui/material/CardMedia'
import Card from '@mui/material/Card'
import Container from '@mui/material/Container'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

export default function PosterParade() {
  return (
    <Layout headerTitle={title}>
      <Head>
        <title>Gallerie der Bildanalysen</title>
      </Head>
      <Container maxWidth={false} component="section">
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
          NextIcon={
            <Image src={next} alt={'Next'} width={120} height={120} />
          }
          PrevIcon={
            <Image src={prev} alt={'Prev'} width={120} height={120} />
          }
        >
          {posterParadeItems.map((item, index) => {
            return (
              <Banner
                item={item}
                key={index}
                contentPosition={item.contentPosition}
              />
            )
          })}
        </Carousel>
      </Container>
    </Layout>
  )
}

const Banner = ({ item, contentPosition = 'left' }) => {
  let items = []
  const content = (
    <Grid item xs={4} key="content">
      <CardContent
        sx={{
          height: '600px',
          position: 'relative',
        }}
      >
        <Typography
          component="h3"
          variant="h3"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          {item.name}
        </Typography>
        <Typography
          component="h4"
          variant="h5"
          align="center"
          color="text.secondary"
          gutterBottom
        >
          {item.caption}
        </Typography>
      </CardContent>
    </Grid>
  )

  for (let i = 0; i < 2; i++) {
    const mediaItem = item.items[i]

    const media = (
      <Grid item xs={4} key={mediaItem.name} sx={{ p: 2 }}>
        <Link
          href={`/posterparade/${encodeURIComponent(mediaItem.href)}`}
          passHref
        >
          <CardMedia
            sx={{
              p: 4,
              height: '100%',
              overflow: 'hidden',
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
        border: '30px solid transparent',
        borderImage: 'url(/icons/frame.svg) 25 25 round',
      }}
    >
      <Grid
        container
        spacing={4}
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
