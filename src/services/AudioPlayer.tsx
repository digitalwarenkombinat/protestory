import {
  useCallback,
  useEffect,
  useRef,
  useState,
  FunctionComponent,
  MouseEvent,
} from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import StopIcon from '@mui/icons-material/Stop'
import VolumeMuteIcon from '@mui/icons-material/VolumeMute'
import Grid from '@mui/material/Grid'
import {
  AudioPlayerProvider,
  useAudioPlayer,
  useAudioPosition,
} from 'react-use-audio-player'
import { formatTime } from 'utils/util'

const TimeLabel = () => {
  const { duration, position } = useAudioPosition({
    highRefreshRate: true,
  })
  if (duration === Infinity) return null
  const elapsed = typeof position === 'number' ? position : 0

  return (
    <Box m={2} minWidth={100}>{`${formatTime(elapsed)} / ${formatTime(
      duration
    )}`}</Box>
  )
}

const AudioSeekBar: FunctionComponent = () => {
  const { duration, seek, percentComplete } = useAudioPosition({
    highRefreshRate: true,
  })
  const { playing } = useAudioPlayer()
  const [barWidth, setBarWidth] = useState('0%')

  const seekBarElem = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setBarWidth(`${percentComplete}%`)
  }, [percentComplete])

  const goTo = useCallback(
    (event: MouseEvent) => {
      const { pageX: eventOffsetX } = event

      if (seekBarElem.current) {
        const elementOffsetX = seekBarElem.current.offsetLeft
        const elementWidth = seekBarElem.current.clientWidth
        const percent = (eventOffsetX - elementOffsetX) / elementWidth
        seek(percent * duration)
      }
    },
    [duration, playing, seek]
  )

  return (
    <Box
      ref={seekBarElem}
      onClick={goTo}
      sx={{
        cursor: 'pointer',
        backgroundColor: 'background.default',
        overflow: 'hidden',
        width: '50px',
        height: '25px',
      }}
    >
      <Box
        style={{ width: barWidth }}
        sx={{
          backgroundColor: 'accent.main',
          height: '100%',
        }}
      />
    </Box>
  )
}

const AudioControls: FunctionComponent<{}> = () => {
  const { play, pause, stop, mute, playing } = useAudioPlayer()
  const [muted, setMuted] = useState(false)

  useEffect(() => {
    mute(muted)
  }, [muted, mute])

  return (
    <Box
      p={2}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <IconButton
        aria-label="play/pause"
        onClick={() => (playing ? pause() : play())}
      >
        {playing ? (
          <PauseIcon
            sx={{ height: 38, width: 38, color: 'accent.main' }}
          />
        ) : (
          <PlayArrowIcon
            sx={{ height: 38, width: 38, color: 'accent.main' }}
          />
        )}
      </IconButton>
      <IconButton aria-label="stop" onClick={() => stop()}>
        <StopIcon
          sx={{ height: 38, width: 38, color: 'accent.main' }}
        />
      </IconButton>
      <IconButton
        aria-label="mute"
        onClick={() => setMuted((lastState) => !lastState)}
      >
        <VolumeMuteIcon
          sx={{ height: 38, width: 38, color: 'accent.main' }}
        />
      </IconButton>
    </Box>
  )
}

const Player = ({ activeDecade }) => {
  const { ready, loading, load } = useAudioPlayer({
    format: 'mp3',
    autoplay: false,
    onend: () => console.log('sound has ended!'),
  })

  useEffect(() => {
    activeDecade &&
      load({
        src: `./concert/song${activeDecade.decade}.mp3`,
        autoplay: true,
      })
  }, [activeDecade])

  return (
    <Card sx={{ display: 'flex' }}>
      {!ready && !loading && (
        <Box p={2}>
          <Typography component="div" variant="h4">
            Bitte wähle ein Jahrzehnt aus!
          </Typography>
        </Box>
      )}
      {loading && (
        <Box p={2}>
          <Typography component="div" variant="h4">
            Audio lädt
          </Typography>
        </Box>
      )}
      {ready && (
        <>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h4">
                {activeDecade.title}
              </Typography>
              <Typography component="div" variant="subtitle1">
                {activeDecade.author}
              </Typography>
            </CardContent>
            <AudioControls />
            <AudioSeekBar />
            <TimeLabel />
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={`./concert/cover${activeDecade.decade}.webp`}
            alt={`Albumcover ${activeDecade.author}`}
          />
        </>
      )}
    </Card>
  )
}

export const AudioPlayer = ({ activeDecade }) => (
  <Grid item>
    <AudioPlayerProvider>
      <Player activeDecade={activeDecade} />
    </AudioPlayerProvider>
  </Grid>
)
