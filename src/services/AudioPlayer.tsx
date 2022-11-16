import { useEffect, useState, FunctionComponent } from 'react'
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
import { AudioPlayerProvider, useAudioPlayer, useAudioPosition } from 'react-use-audio-player'

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
          <VolumeUpIcon
            sx={{
              height: '3rem',
              width: '3rem',
              color: 'accent.main',
            }}
          />
        ) : (
          <VolumeOffIcon
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

const Player = ({ activeDecade }) => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const { ready, loading, load } = useAudioPlayer({
    format: 'mp3',
    autoplay: false,
  })

  useEffect(() => {
    activeDecade &&
      load({
        src: `./concert/${activeDecade.key}.mp3`,
        autoplay: true,
      })
  }, [activeDecade])

  return (
    <Card
      sx={{
        display: 'flex',
        backgroundColor: 'background.default',
        justifyContent: 'center',
      }}
    >
      {!ready && !loading && (
        <Box p={2}>
          <Typography component="p" variant="h4">
            {hasHydrated && concert[language].select}
          </Typography>
        </Box>
      )}
      {loading && (
        <Box p={2}>
          <Typography component="p" variant="h4">
            {hasHydrated && concert[language].loading}
          </Typography>
        </Box>
      )}
      {ready && (
        <>
          <Grid container alignItems="center" justifyContent="center" textAlign="center">
            <Grid item xs={12} md={4}>
              <AudioControls />
            </Grid>
            {/* <AudioSeekBar /> */}
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
            <Grid
              item
              xs={12}
              md={8}
              sx={{
                backgroundColor: 'text.secondary',
                border: '2px solid black',
                borderRadius: '20px',
                margin: '.5rem',
              }}
            >
              <Typography component="p" variant="h4">
                {activeDecade.title}
              </Typography>
            </Grid>
          </Grid>
        </>
      )}
    </Card>
  )
}

export const AudioPlayer = ({ activeDecade }) => (
  <Grid item xs={12}>
    <AudioPlayerProvider>
      <Player activeDecade={activeDecade} />
    </AudioPlayerProvider>
  </Grid>
)
