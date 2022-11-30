import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { concert } from 'config/concert'

export const Timeline = ({ setActiveElement }) => (
  <Grid item xs={12}>
    <Card
      sx={{
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
      <Grid container alignItems="center" justifyContent="center" textAlign="center">
        {concert.timeline.map(({ index, year }) => (
          <Box
            key={index}
            onClick={() => setActiveElement(concert.timeline[index])}
            sx={{
              cursor: 'pointer',
              padding: '6px 8px',
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
          </Box>
        ))}
      </Grid>
    </Card>
  </Grid>
)
