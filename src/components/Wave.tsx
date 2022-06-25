import Box from '@mui/material/Box'
import { keyframes } from '@mui/system'

const wave = keyframes`
  0%,
  100%,
  50% {
    transform: initial;
  }
  25% {
    transform: translateY(-15px);
  }
`

export const Wave = (
  <Box sx={{ display: 'flex', margin: 4 }}>
    <Box
      sx={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        marginRight: '2px',
        background: '#000',
        animation: `${wave} 1.2s ease-in-out infinite`,
      }}
    />
    <Box
      sx={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        marginRight: '2px',
        background: '#000',
        animation: `${wave} 1.2s ease-in-out infinite`,
        animationDelay: '0.1s',
      }}
    />
    <Box
      sx={{
        width: '6px',
        height: '6px',
        borderRadius: '50%',
        marginRight: '2px',
        background: '#000',
        animation: `${wave} 1.2s ease-in-out infinite`,
        animationDelay: '0.2s',
      }}
    />
  </Box>
)
