import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'

import { AudioControls } from './AudioPlayer'

export const Sound = ({ audio = './chat/audio.mp3' }) => {
  const { load } = useAudioPlayer({
    format: 'mp3',
    autoplay: false,
  })

  useEffect(() => {
    load({
      src: audio,
      autoplay: false,
    })
  }, [])

  return (
    <Box>
      <AudioControls />
    </Box>
  )
}
