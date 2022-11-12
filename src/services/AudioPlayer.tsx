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

const TimeLabel = () => {
  const { duration, position } = useAudioPosition({
    highRefreshRate: true,
  })
  if (duration === Infinity) return null
  const elapsed = typeof position === 'number' ? position : 0

  return <Typography component="p" variant="h5">{`${formatTime(elapsed)} / ${formatTime(duration)}`}</Typography>
}

const AudioControls: FunctionComponent<{}> = () => {
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
              height: 64,
              width: 64,
              color: 'accent.main',
            }}
          />
        ) : (
          <PlayArrowIcon
            sx={{
              height: 64,
              width: 64,
              color: 'accent.main',
            }}
          />
        )}
      </IconButton>
      <IconButton aria-label="stop" onClick={() => stop()}>
        <StopIcon
          sx={{
            height: 64,
            width: 64,
            color: 'accent.main',
          }}
        />
      </IconButton>
      <IconButton aria-label="mute" onClick={() => setMuted((lastState) => !lastState)}>
        {muted ? (
          <VolumeUpIcon
            sx={{
              height: 64,
              width: 64,
              color: 'accent.main',
            }}
          />
        ) : (
          <VolumeOffIcon
            sx={{
              height: 64,
              width: 64,
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
            {hasHydrated && concert[language].description}
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
          <Grid container alignItems="center" justifyContent="space-evenly" textAlign="center" spacing={1}>
            <Grid item xs={2}>
              <AudioControls />
            </Grid>
            {/* <AudioSeekBar /> */}
            <Grid
              item
              xs={2}
              sx={{
                backgroundColor: 'text.secondary',
                border: '2px solid black',
                borderRadius: '20px',
              }}
            >
              <TimeLabel />
            </Grid>
            <Grid
              item
              xs={10}
              sx={{
                backgroundColor: 'text.secondary',
                border: '2px solid black',
                borderRadius: '20px',
                padding: '4px',
                marginBottom: '1rem',
              }}
            >
              <Typography component="p" variant="h5">
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
