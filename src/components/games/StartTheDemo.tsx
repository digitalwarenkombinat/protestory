import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState, useEffect, Suspense } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import { Avatar, AvatarGroup, Link, Typography } from '@mui/material'

import useStore from 'utils/store'
import { startTheDemo } from 'config'
import left from '/public/icons/left.svg'
import right from '/public/icons/right.svg'

const DynamicComponent = dynamic(() =>
  import('services/StartTheDemoSVG').then(
    (mod) => mod.StartTheDemoSVG
  )
)

const StartTheDemo = () => {
  const { items, language } = useStore()
  const [description, setDescription] = useState('')
  const [imagePart, setImagePart] = useState(1)
  const theme = useTheme()
  const splitSVG = useMediaQuery(theme.breakpoints.down('xl'))
  const [viewBox, setViewBox] = useState('0 0 1350 800')

  useEffect(() => {
    if (!splitSVG) {
      setViewBox('0 0 1350 800')
    } else {
      setImagePart(1)
      setViewBox(`${1 * 450} 0 450 800`)
    }
  }, [splitSVG])

  const updateViewBox = (imageNumber) => {
    setImagePart(imageNumber)
    setViewBox(`${imageNumber * 450} 0 450 800`)
  }

  const handleItem = (itemId: string) => {
    useStore.getState().activateItem(itemId)
    setDescription(
      items.find((item) => item.id === itemId)?.description
    )
  }

  return (
    <Grid
      container
      alignItems="center"
      textAlign="center"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Grid item sx={{ mb: 2 }}>
        <Typography
          component="h2"
          variant="h2"
          color="secondary.main"
        >
          Get the Protest started!
        </Typography>
        <Typography component="p" variant="h5" color="secondary.main">
          {startTheDemo[language].description}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          backgroundColor: 'secondary.main',
          boxShadow: 'none',
          border: '48px solid transparent',
          borderImage: 'url(/icons/frame.svg) 45 45 round',
          backgroundClip: 'padding-box',
        }}
      >
        <Typography
          sx={{ mt: 4 }}
          component="h3"
          variant="h4"
          color="primary.main"
        >
          {startTheDemo[language].subDescription}
        </Typography>
        <AvatarGroup
          sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
          max={6}
        >
          {items.map((item) => (
            <Link key={item.id} href={item.link}>
              <Avatar
                alt={item.name}
                src={item.source}
                sx={{
                  backgroundColor: 'text.secondary',
                  cursor: 'pointer',
                  //display: item.active ? 'block' : 'none',
                }}
              />
            </Link>
          ))}
        </AvatarGroup>
        <Typography component="p" variant="h5" color="primary.main">
          {description}
        </Typography>
        <Grid container alignItems="center">
          {splitSVG && (
            <Grid
              item
              xs={1}
              sx={{
                cursor: 'pointer',
              }}
            >
              <Image
                src={left}
                alt={'Show previous image'}
                width={60}
                height={60}
                onClick={() => updateViewBox(imagePart - 1)}
              />
            </Grid>
          )}
          <Grid item xs={splitSVG ? 10 : 12}>
            <Suspense fallback={`Loading...`}>
              <DynamicComponent
                handleItem={handleItem}
                viewBox={viewBox}
              />
            </Suspense>
          </Grid>
          {splitSVG && (
            <Grid
              item
              xs={1}
              sx={{
                cursor: 'pointer',
              }}
            >
              <Image
                src={right}
                alt={'Show next image'}
                width={60}
                height={60}
                onClick={() => updateViewBox(imagePart + 1)}
              />
            </Grid>
          )}
          {splitSVG}
        </Grid>
      </Grid>
    </Grid>
  )
}

export default StartTheDemo
