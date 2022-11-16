import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { concert } from 'config'
import { useState } from 'react'
import { AudioPlayer } from 'services/AudioPlayer'
import { Lyrics } from 'services/Lyrics'
import { Timeline } from 'services/Timeline'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export const Concert = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const [activeDecade, setActiveDecade] = useState({})

  return (
    <Grid container alignItems="center" textAlign="center" flexWrap="wrap" justifyContent="center" my="2rem">
      <Grid item>
        <Typography sx={{ mb: 4 }} variant="h2" color="secondary.main">
          If I can`t dance to it, it`s not my revolution
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && concert[language].description1}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && concert[language].description2}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && concert[language].description3}
        </Typography>
      </Grid>
      <Grid
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '1rem .5rem',
          backgroundColor: 'secondary.main',
          border: '8px solid black',
          borderRadius: '1rem',
          transform: 'perspective(90px) rotateX(-.5deg)',
          marginTop: '2rem',
        }}
      >
        <Box
          sx={{
            backgroundColor: 'background.default',
            gridColumn: '1 / span 1',
            gridRow: '4 / span 5',
            border: '8px solid black',
            borderRadius: '1rem',
            minHeight: '50vw',
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: 'text.secondary',
            gridColumn: '2 / span 10',
            gridRow: '2 / span 7',
            border: '8px solid black',
            borderRadius: '20px',
          }}
        >
          <Lyrics activeDecade={activeDecade} />
        </Box>
        <Box
          sx={{
            backgroundColor: 'background.default',
            gridColumn: '12 / span 1',
            gridRow: '4 / span 5',
            border: '8px solid black',
            borderRadius: '1rem',
          }}
        ></Box>
        <Box
          sx={{
            backgroundColor: 'text.secondary',
            gridColumn: '2 / span 10',
            gridRow: '9 / span 2',
            border: '8px solid black',
            borderRadius: '20px',
            marginBottom: '2rem',
          }}
        >
          <Timeline setActiveDecade={setActiveDecade} />
          <AudioPlayer activeDecade={activeDecade} />
        </Box>
      </Grid>
    </Grid>
  )
}
