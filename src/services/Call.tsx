import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useEffect } from 'react'
import { useAudioPlayer } from 'react-use-audio-player'

import { revolutionstelephone } from 'config'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export const Call = ({ number, caller, onEnd }) => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const { ready, loading, load, playing, ended } = useAudioPlayer({
    format: 'mp3',
    autoplay: false,
  })

  useEffect(() => {
    number &&
      caller !== null &&
      load({
        src: `./revolutionstelephone/${number.slice(1)}.mp3`,
        autoplay: true,
        onend: () => onEnd(),
      })
  }, [number, caller])

  return (
    <Grid item xs={12}>
      {!ready && !loading && (
        <Box p={2}>
          <Typography component="p" variant="h4">
            {hasHydrated && revolutionstelephone[language].callText}
            {` `}
            {number}
          </Typography>
        </Box>
      )}
      {loading && (
        <Box p={2}>
          <Typography component="p" variant="h4">
            {hasHydrated && revolutionstelephone[language].callText}
            {` `}
            {number}
          </Typography>
        </Box>
      )}
      {(playing || ended) && !caller && (
        <Box p={2}>
          <Typography component="p" variant="h4">
            {hasHydrated && revolutionstelephone[language].callText}
            {` `}
            {number}
          </Typography>
        </Box>
      )}
      {ready && caller && (
        <Box p={2}>
          <Typography component="p" variant="h4">
            {caller?.name}
            {` `}
            {hasHydrated && revolutionstelephone[language].speakText}
          </Typography>
        </Box>
      )}
    </Grid>
  )
}
