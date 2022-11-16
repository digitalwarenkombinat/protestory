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
      }}
    >
      {activeDecade?.decade ? (
        <CardMedia component="img" image={`./concert/${activeDecade.key}.webp`} alt={`Lyrics ${activeDecade.name}`} />
      ) : (
        <CardMedia component="img" image={`./concert/start.webp`} alt={`If I can't dance to it, it's not my revolution`} />
      )}
    </Card>
  </Grid>
)
