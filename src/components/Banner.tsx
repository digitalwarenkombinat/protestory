import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import useStore from 'utils/store'
import { banner } from 'config'
import { useHasHydrated } from 'utils/useHasHydrated'

const LeftTriangle = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Link
      color="text.secondary"
      href="artofprotest"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: '5px',
        bottom: '5px',
        textDecoration: 'none',
        background: "url('./home/artofprotest.webp') center/cover",
        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
      }}
    >
      <Box
        sx={{
          opacity: 0,
          position: 'absolute',
          width: '100%',
          height: '100%',
          transition: '.5s ease',
          backgroundColor: 'secondary.main',
          '&:hover': {
            opacity: 0.5,
          },
        }}
      >
        <Grid
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          pt={8}
          pl={8}
          height="50vh"
        >
          <Grid item>
            <IconButton
              size="large"
              edge="start"
              aria-label="Read more"
              sx={{
                color: 'accent.main',
              }}
            >
              <ArrowForwardRoundedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h3" variant="h4">
              {hasHydrated && banner[language].leftDescription1}
            </Typography>
            <Typography component="h3" variant="h4" pt={4}>
              {hasHydrated && banner[language].leftDescription2}
            </Typography>
            <Typography component="h3" variant="h4" pt={4}>
              {hasHydrated && banner[language].leftDescription3}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container pt={[4, 12]} pl={[4, 20]}>
        <Grid item>
          <Typography
            variant="h2"
            sx={{
              backgroundImage: `linear-gradient(0, transparent 0.2em, #f50057 0.2em, #f50057 0.8em, transparent 0.8em)`,
              backgroundSize: '1px 1.6em',
              backgroundPosition: '1px center',
              backgroundRepeat: 'repeat',
              paddingLeft: '0.2em',
              paddingRight: '0.2em',
              marginLeft: '-0.2em',
              marginRight: '-0.2em',
            }}
          >
            {hasHydrated && banner[language].leftTitle}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  )
}

const RightTriangle = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Link
      color="text.secondary"
      href="protestart"
      sx={{
        position: 'absolute',
        top: '5px',
        left: '5px',
        right: 0,
        bottom: 0,
        textDecoration: 'none',
        background: "url('./home/protestart.webp') center/cover",
        clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
      }}
    >
      <Box
        sx={{
          opacity: 0,
          position: 'absolute',
          width: '100%',
          height: '100%',
          transition: '.5s ease',
          backgroundColor: 'secondary.main',
          '&:hover': {
            opacity: 0.5,
          },
        }}
      >
        <Grid
          container
          justifyContent="center"
          pr={4}
          pt="50vh"
          pl="50vw"
          textAlign="right"
        >
          <Grid item>
            <IconButton
              size="large"
              edge="start"
              aria-label="Read more"
              sx={{
                color: 'accent.main',
              }}
            >
              <ArrowForwardRoundedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h3" variant="h4">
              {hasHydrated && banner[language].rightDescription1}
            </Typography>
            <Typography component="h3" variant="h4" pt={4}>
              {hasHydrated && banner[language].rightDescription2}
            </Typography>
            <Typography component="h3" variant="h4" pt={4}>
              {hasHydrated && banner[language].rightDescription3}
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Grid container justifyContent="flex-end" pr={[2, 4]} pt="50vh">
        <Grid item>
          <Typography
            variant="h2"
            sx={{
              backgroundImage: `linear-gradient(0, transparent 0.2em, #f50057 0.2em, #f50057 0.8em, transparent 0.8em)`,
              backgroundSize: '1px 1.6em',
              backgroundPosition: '1px center',
              backgroundRepeat: 'repeat',
              paddingLeft: '0.2em',
              paddingRight: '0.2em',
              marginLeft: '-0.2em',
              marginRight: '-0.2em',
            }}
          >
            {hasHydrated && banner[language].rightTitle}
          </Typography>
        </Grid>
      </Grid>
    </Link>
  )
}

export const Banner = () => (
  <Container
    maxWidth={false}
    component="article"
    sx={{
      height: '100vh',
      position: 'relative',
    }}
  >
    <LeftTriangle />
    <RightTriangle />
  </Container>
)
