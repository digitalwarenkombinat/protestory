import { Grid, Button, Typography } from '@mui/material'

import { concert } from 'config/concert'

export const Timeline = ({ setActiveDecade }) => (
  <Grid
    item
    sx={{
      bottom: '55px',
      height: '44px',
      borderTop: '1px solid rgba(0,0,0,.2)',
      transition: '425ms transform cubic-bezier(.4,0,.2,1)',
    }}
  >
    <Grid
      container
      flexDirection="row"
      sx={{
        width: '100%',
        height: '100%',
        overflowX: 'scroll',
        overflowY: 'hidden',
        scrollBehavior: 'smooth',
        backgroundColor: '#fff',
      }}
    >
      <Grid
        item
        px={12}
        sx={{
          whiteSpace: 'nowrap',
          position: 'relative',
          display: 'flex',
          height: 44,
        }}
      >
        {concert.timeline.map(({ index, decade }) => (
          <Button
            key={index}
            onClick={() => setActiveDecade(concert.timeline[index])}
            sx={{
              color: 'rgba(0,0,0,.67)',
              fontSize: '1em',
              verticalAlign: 'bottom',
              position: 'relative',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '60px',
              height: '32px',
              margin: '0 2px',
              padding: 0,
              bottom: 0,
              borderRadius: '16px',
              border: 'none',
              boxShadow: 'none',
              backgroundColor: 'transparent',
            }}
          >
            <Typography>{decade}</Typography>
          </Button>
        ))}
      </Grid>
    </Grid>
  </Grid>
)
