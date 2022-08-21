import { useState } from 'react'
import Grid from '@mui/material/Grid'
import { AudioPlayer } from 'services/AudioPlayer'
import { Timeline } from 'services/Timeline'
import { Lyrics } from 'services/Lyrics'

export const Concert = () => {
  const [activeDecade, setActiveDecade] = useState({})

  return (
    <Grid
      container
      flexDirection="column"
      flexWrap="nowrap"
      justifyContent="center"
      alignItems="center"
      textAlign="center"
    >
      <Lyrics activeDecade={activeDecade} />
      <Timeline setActiveDecade={setActiveDecade} />
      <AudioPlayer activeDecade={activeDecade} />
    </Grid>
  )
}
