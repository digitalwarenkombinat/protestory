import Box from '@mui/material/Box'
import { useState } from 'react'
import { AudioPlayer } from 'services/AudioPlayer'
import { Lyrics } from 'services/Lyrics'
import { Timeline } from 'services/Timeline'

export const Concert = () => {
  const [activeDecade, setActiveDecade] = useState({})

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: '4rem .5rem',
        backgroundColor: 'secondary.main',
        border: '8px solid black',
        borderRadius: '1rem',
        transform: 'perspective(90px) rotateX(-.5deg)',
        margin: '100px',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'background.default',
          gridColumn: '1 / span 1',
          gridRow: '4 / span 5',
          border: '8px solid black',
          borderRadius: '1rem',
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: 'text.secondary',
          gridColumn: '3 / span 8',
          gridRow: '2 / span 6',
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
      <Box
        sx={{
          backgroundColor: 'background.default',
          gridColumn: '1 / span 1',
          gridRow: '10 / span 2',
          border: '8px solid black',
          borderRadius: '1rem',
          transform: 'translate(100%, 100%)',
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: 'background.default',
          gridColumn: '12 / span 1',
          gridRow: '10 / span 2',
          border: '8px solid black',
          borderRadius: '1rem',
          transform: 'translate(-100%, 100%)',
        }}
      ></Box>
    </Box>
  )
}
