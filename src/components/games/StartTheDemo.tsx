import { Button } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import AvatarGroup from '@mui/material/AvatarGroup'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import NoSsr from '@mui/material/NoSsr'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

import { startTheDemo } from 'config'
import { useEffect, useState } from 'react'
import { Cart } from 'services/Cart'
import CustomLink from 'services/CustomLink'
import { StartTheDemoSVG } from 'services/StartTheDemoSVG'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

const StartTheDemo = () => {
  const hasHydrated = useHasHydrated()
  const { getLinkedItems, language } = useStore()
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

  return (
    <Grid container alignItems="center" textAlign="center" flexWrap="wrap" justifyContent="center" maxWidth="lg" mx="auto" mt="8rem" mb="16rem">
      <Grid item>
        <Typography sx={{ mb: 4 }} variant="h2" color="text.secondary">
          {hasHydrated && startTheDemo[language].title}
        </Typography>
        <Typography component="h3" variant="h4" color="text.secondary">
          {hasHydrated && startTheDemo[language].description}
        </Typography>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="text.secondary">
          {hasHydrated && startTheDemo[language].subDescription}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          backgroundClip: 'padding-box',
        }}
      >
        <Grid container justifyContent="end">
          <Grid item>
            <Cart />
          </Grid>
        </Grid>
        <Grid container alignItems="center">
          <Grid
            item
            xs={1}
            sx={{
              display: { xs: 'block', xl: 'none' },
            }}
          >
            <Button
              disabled={imagePart === 0}
              onClick={() => imagePart > 0 && updateViewBox(imagePart - 1)}
              sx={{
                minWidth: '40px',
                padding: 0,
              }}
            >
              <img src="../symbol/left.svg" alt={'Show previous image'} width={40} height={40} />
            </Button>
          </Grid>
          <Grid item xs={splitSVG ? 10 : 12}>
            <NoSsr defer>
              <StartTheDemoSVG viewBox={viewBox} />
            </NoSsr>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{
              display: { xs: 'block', xl: 'none' },
            }}
          >
            <Button
              disabled={imagePart === 2}
              onClick={() => imagePart < 2 && updateViewBox(imagePart + 1)}
              sx={{
                minWidth: '40px',
                padding: 0,
              }}
            >
              <img src="../symbol/right.svg" alt={'Show next image'} width={40} height={40} />
            </Button>
          </Grid>
        </Grid>
        <AvatarGroup
          sx={{
            alignContent: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column',
            marginTop: '8rem',
          }}
          max={6}
        >
          {getLinkedItems().map((item) => (
            <CustomLink key={item.id} href={item.link}>
              <Box sx={{ display: 'flex', cursor: 'pointer' }}>
                <Avatar
                  alt={hasHydrated ? item.name[language] : 'Avatar'}
                  src={item.source}
                  sx={{
                    backgroundColor: 'text.secondary',
                    display: hasHydrated && item.active ? 'block' : 'none',
                  }}
                />
                <Box sx={{ textAlign: 'left' }}>
                  <Typography component="h4" variant="h2" color="text.secondary">
                    {hasHydrated && item.active ? item.linkName[language] : ''}
                  </Typography>
                  <Typography component="p" variant="h6" color="text.secondary">
                    {hasHydrated && item.active && item.linkText[language]}
                  </Typography>
                </Box>
              </Box>
            </CustomLink>
          ))}
        </AvatarGroup>
      </Grid>
    </Grid>
  )
}

export default StartTheDemo
