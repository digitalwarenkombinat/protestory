import BackspaceIcon from '@mui/icons-material/Backspace'
import Fade from '@mui/material/Fade'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'

import { revolutionstelephone } from 'config'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'
import { AudioControls, TimeLabel } from './AudioPlayer'

const Dialing = ({ number, onEnd }) => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <>
      <Typography component="p" variant="h5" color="text.secondary">
        {hasHydrated && revolutionstelephone[language].callText}
        {` `}
        {number}
      </Typography>
      {number && (
        <IconButton
          aria-label="Delete"
          sx={{
            color: 'accent.main',
          }}
          onClick={() => onEnd()}
        >
          <BackspaceIcon sx={{ fontSize: '1.5rem' }} />
        </IconButton>
      )}
    </>
  )
}

export const Call = ({ number, caller, onEnd }) => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const { ready, load } = useAudioPlayer({
    format: 'mp3',
    autoplay: false,
  })

  useEffect(() => {
    number &&
      caller !== null &&
      load({
        src: `../revolutionstelephone/${number.slice(1)}.mp3`,
        autoplay: true,
        onend: () => onEnd(),
        onstop: () => onEnd(),
      })
  }, [number, caller])

  return (
    <Grid item xs={12} sx={{ minHeight: ['12rem', '8rem'], display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {!caller ? (
        <Dialing number={number} onEnd={onEnd} />
      ) : (
        <Fade in={ready}>
          <Grid container alignItems="center" justifyContent="center" textAlign="center">
            <Grid item xs={10}>
              <Typography component="p" variant="h5" color="text.secondary">
                {hasHydrated && caller?.description[language]}
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <AudioControls />
            </Grid>
            <Grid
              item
              xs={12}
              md={4}
              sx={{
                backgroundColor: 'text.secondary',
                border: '2px solid black',
                borderRadius: '20px',
                margin: '.5rem',
              }}
            >
              <TimeLabel />
            </Grid>
          </Grid>
        </Fade>
      )}
    </Grid>
  )
}
