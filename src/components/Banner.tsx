import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'

import Typography from '@mui/material/Typography'

import useStore from 'utils/store'
import { banner } from 'config'
import { useHasHydrated } from 'utils/useHasHydrated'
import CustomLink from 'services/CustomLink'

const LeftTriangle = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: '5px',
        bottom: '5px',
        background: "url('../home/artofprotest.webp') center/cover",
        clipPath: 'polygon(0 0, 100% 0, 0 100%)',
      }}
    >
      <CustomLink href="/artofprotest">
        <Box
          sx={{
            color: 'text.secondary',
            opacity: 0.75,
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: '.5s ease',
            backgroundColor: 'secondary.main',
            '&:hover': {
              opacity: 0.75,
            },
          }}
        >
          <Grid container justifyContent="flex-start" alignItems="flex-start" mt="5vh" pl={{ xs: 2, lg: 12 }} height="50vh">
            <Grid item xs={12}>
              <Typography variant="h2">
                <IconButton
                  size="small"
                  edge="start"
                  aria-label="Read more"
                  sx={{
                    color: 'accent.main',
                  }}
                >
                  <ArrowForwardRoundedIcon
                    sx={{
                      fontSize: '3rem',
                    }}
                  />
                </IconButton>
              </Typography>
            </Grid>
            <Grid item xs={5} ml={1}>
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', mt: '5vh', ml: { xs: 8, sm: 12, lg: 18 } }}>
          <Typography
            variant="h2"
            sx={{
              color: 'text.secondary',
              backgroundImage: `linear-gradient(0, transparent 0.2em, #f50057 0.2em, #f50057 0.8em, transparent 0.8em)`,
              backgroundSize: '1px 1.6em',
              backgroundPosition: '1px center',
              backgroundRepeat: 'repeat',
              lineHeight: '1.5',
            }}
          >
            {hasHydrated && banner[language].leftTitle}
          </Typography>
        </Box>
      </CustomLink>
    </Box>
  )
}

const RightTriangle = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '5px',
        left: '5px',
        right: 0,
        bottom: 0,
        background: "url('../home/protestart.webp') center/cover",
        clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
      }}
    >
      <CustomLink href="/protestart">
        <Box
          sx={{
            color: 'text.secondary',
            opacity: 0.75,
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: '.5s ease',
            backgroundColor: 'secondary.main',
            '&:hover': {
              opacity: 0.75,
            },
          }}
        >
          <Grid container justifyContent="flex-end" pr={{ xs: 1, sm: 4, lg: 8 }} pt="55vh" pl="30vw" textAlign="right">
            <Grid item xs={12}>
              <Typography variant="h2">
                <IconButton
                  size="small"
                  edge="start"
                  aria-label="Read more"
                  sx={{
                    color: 'accent.main',
                  }}
                >
                  <ArrowBackRoundedIcon
                    sx={{
                      fontSize: '3rem',
                    }}
                  />
                </IconButton>
              </Typography>
            </Grid>
            <Grid item xs={10} mt={{ xs: 2, sm: 4, lg: 12 }} pr={1}>
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: '55vh', mr: { xs: 7, sm: 12, lg: 18 } }}>
          <Typography
            variant="h2"
            sx={{
              color: 'text.secondary',
              backgroundImage: `linear-gradient(0, transparent 0.2em, #f50057 0.2em, #f50057 0.8em, transparent 0.8em)`,
              backgroundSize: '1px 1.6em',
              backgroundPosition: '1px center',
              backgroundRepeat: 'repeat',
              lineHeight: '1.5',
            }}
          >
            {hasHydrated && banner[language].rightTitle}
          </Typography>
        </Box>
      </CustomLink>
    </Box>
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
