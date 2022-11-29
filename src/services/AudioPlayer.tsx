import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import StopIcon from '@mui/icons-material/Stop'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import VolumeOffIcon from '@mui/icons-material/VolumeOff'
import Grid from '@mui/material/Grid'
import { useAudioPlayer, useAudioPosition } from 'react-use-audio-player'

import { formatTime } from 'utils/util'
import useStore from 'utils/store'
import { concert } from 'config'
import { useHasHydrated } from 'utils/useHasHydrated'

export const TimeLabel = () => {
  const { duration, position } = useAudioPosition({
    highRefreshRate: true,
  })
  if (duration === Infinity) return null
  const elapsed = typeof position === 'number' ? position : 0

  return <Typography component="p" variant="h4">{`${formatTime(elapsed)} / ${formatTime(duration)}`}</Typography>
}

export const AudioControls = () => {
  const { play, pause, stop, mute, playing } = useAudioPlayer()
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    mute(muted)
  }, [muted, mute])

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <IconButton aria-label="play/pause" onClick={() => (playing ? pause() : play())}>
        {playing ? (
          <PauseIcon
            sx={{
              height: '3rem',
              width: '3rem',
              color: 'accent.main',
            }}
          />
        ) : (
          <PlayArrowIcon
            sx={{
              height: '3rem',
              width: '3rem',
              color: 'accent.main',
            }}
          />
        )}
      </IconButton>
      <IconButton aria-label="stop" onClick={() => stop()}>
        <StopIcon
          sx={{
            height: '3rem',
            width: '3rem',
            color: 'accent.main',
          }}
        />
      </IconButton>
      <IconButton aria-label="mute" onClick={() => setMuted((lastState) => !lastState)}>
        {muted ? (
          <VolumeOffIcon
            sx={{
              height: '3rem',
              width: '3rem',
              color: 'accent.main',
            }}
          />
        ) : (
          <VolumeUpIcon
            sx={{
              height: '3rem',
              width: '3rem',
              color: 'accent.main',
            }}
          />
        )}
      </IconButton>
    </Box>
  )
}

const Player = ({ activeElement }) => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: 'background.default',
        justifyContent: 'center',
        height: '106.04px',
        borderBottomLeftRadius: '79.33px',
        borderBottomRightRadius: '79.33px',
      }}
    >
      <Grid container alignItems="center" justifyContent="center" textAlign="center">
        <Grid
          item
          xs={8}
          sx={{
            backgroundColor: 'text.secondary',
            borderRadius: '20px',
            margin: '.5rem',
          }}
        >
          <Typography component="p" variant="h4">
            {activeElement?.title || (hasHydrated && concert[language].select)}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  )
}

export const AudioPlayer = ({ activeElement }) => (
  <Grid item xs={12}>
    <Player activeElement={activeElement} />
  </Grid>
)
