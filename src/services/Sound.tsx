import { useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'

export const Sound = ({ audio = './chat/audio.mp3' }) => {
  const { load } = useAudioPlayer({
    format: 'mp3',
    autoplay: false,
  })

  useEffect(() => {
    load({
      src: audio,
      autoplay: true,
    })
  }, [])

  return null
}
