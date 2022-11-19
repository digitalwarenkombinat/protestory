import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { concert } from 'config/concert'

export const Timeline = ({ setActiveDecade }) => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      backgroundColor: 'text.secondary',
      alignItems: 'center',
      justifyContent: 'flex-start',
      borderBottom: '8px solid black',
      overflow: 'auto',
      height: '73.36px',
      borderTopLeftRadius: '79.33px',
      borderTopRightRadius: '79.33px',
      paddingTop: '8px',
      px: '8px',
    }}
  >
    {concert.timeline.map(({ index, decade }) => (
      <Button
        key={index}
        onClick={() => setActiveDecade(concert.timeline[index])}
        sx={{
          color: 'text.primary',
          textTransform: 'none',
          borderRight: '2px solid black',
          borderRadius: 0,
          boxShadow: 'none',
          backgroundColor: 'transparent',
          '&:last-child': {
            borderRight: 'none',
          },
        }}
      >
        <Typography component="p" variant="h4">
          {decade}
        </Typography>
      </Button>
    ))}
  </Box>
)
