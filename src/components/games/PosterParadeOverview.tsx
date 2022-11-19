import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Link from 'next/link'
import Carousel from 'react-material-ui-carousel'

import { posterParade } from 'config'
import { posterParadeItems } from 'config/analysis'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'
import left from '/public/icons/left.svg'
import right from '/public/icons/right.svg'

export default function PosterParadeOverview() {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Grid container alignItems="center" textAlign="center" flexDirection="column" justifyContent="center" my="2rem">
      <Grid item>
        <Typography sx={{ mb: 4 }} variant="h2" color="secondary.main">
          Posterparade
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && posterParade[language].description1}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && posterParade[language].description2}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && posterParade[language].description3}
        </Typography>
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <Carousel
          autoPlay={false}
          navButtonsAlwaysVisible={true}
          sx={{
            px: [0, 8],
          }}
          navButtonsProps={{
            style: {
              backgroundColor: 'transparent',
              margin: 0,
              padding: 0,
            },
          }}
          indicatorIconButtonProps={{
            style: {
              padding: '5px',
            },
          }}
          NextIcon={
            <Image
              src={right}
              alt={'Show next image'}
              width={60}
              height={60}
              style={{
                width: '8vw',
                height: 'auto',
                maxHeight: '60px',
                maxWidth: '60px',
              }}
            />
          }
          PrevIcon={
            <Image
              src={left}
              alt={'Show previous image'}
              width={60}
              height={60}
              style={{
                width: '8vw',
                height: 'auto',
                maxHeight: '60px',
                maxWidth: '60px',
              }}
            />
          }
        >
          {posterParadeItems.map((item, index) => (
            <Banner item={item} key={index} contentPosition={item.contentPosition} />
          ))}
        </Carousel>
      </Grid>
    </Grid>
  )
}

const Banner = ({ item, contentPosition = 'left' }) => {
  let items = []
  const content = (
    <Grid item xs={12} md={6} lg={4} key={item.name}>
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Typography variant="h3" align="center" color="text.secondary" gutterBottom>
          {item.name}
        </Typography>
        <Typography component="h4" variant="h6" align="center" color="text.secondary">
          {item.caption}
        </Typography>
      </CardContent>
    </Grid>
  )

  for (let i = 0; i < 2; i++) {
    const mediaItem = item.items[i]

    const media = (
      <Grid item xs={12} md={3} lg={4} key={mediaItem.href} sx={{ p: 1 }} alignSelf={'center'}>
        <Link href={`/posterparade/${encodeURIComponent(mediaItem.href)}`} passHref>
          <CardMedia
            sx={{
              height: '50vh',
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
        color: 'text.secondary',
        backgroundColor: 'rgba(0, 0, 0, 0)',
        boxShadow: 'none',
        border: '32px solid',
        borderImageSource: 'url(/icons/frame.svg)',
        borderImageSlice: [8, 12, 16, 20],
      }}
    >
      <Grid
        container
        alignItems="center"
        textAlign="center"
        justifyContent="center"
        sx={{
          backgroundColor: 'secondary.main',
        }}
      >
        {items}
      </Grid>
    </Card>
  )
}
