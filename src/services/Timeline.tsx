import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { concert } from 'config/concert'

export const Timeline = ({ setActiveDecade }) => (
  <Grid
    container
    flexDirection="row"
    sx={{
      backgroundColor: 'text.secondary',
    }}
  >
    <Grid
      item
      xs={12}
      sx={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderBottom: '8px solid black',
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
            {/* {index !== 0 || 'vor '} */}
            {decade}
          </Typography>
        </Button>
      ))}
    </Grid>
  </Grid>
)
