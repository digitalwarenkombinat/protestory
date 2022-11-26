import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import { concert } from 'config/concert'

export const Timeline = ({ setActiveElement }) => (
  <Box
    sx={{
      position: 'relative',
      display: 'flex',
      backgroundColor: 'text.secondary',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottom: '8px solid black',
      overflow: 'auto',
      height: '106.04px',
      borderTopLeftRadius: '79.33px',
      borderTopRightRadius: '79.33px',
      paddingTop: '8px',
      px: '8px',
    }}
  >
    {concert.timeline.map(({ index, year }) => (
      <Button
        key={index}
        onClick={() => setActiveElement(concert.timeline[index])}
        sx={{
          color: 'text.primary',
          margin: 0.5,
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
          {year}
        </Typography>
      </Button>
    ))}
  </Box>
)
