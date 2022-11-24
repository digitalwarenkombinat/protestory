import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'

export const Lyrics = ({ activeDecade }) => (
  <Grid item>
    <Card
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: 'transparent',
        boxShadow: 'none',
      }}
    >
      <CardMedia
        component="img"
        image={activeDecade?.decade ? `./concert/${activeDecade.key}.webp` : './concert/start.webp'}
        alt={activeDecade?.decade ? `Lyrics ${activeDecade.name}` : `If I can't dance to it, it's not my revolution`}
        sx={{
          height: '455px',
          borderRadius: '64.75px',
          objectPosition: 'top',
        }}
      />
    </Card>
  </Grid>
)
