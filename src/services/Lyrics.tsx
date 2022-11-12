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
      {activeDecade?.decade && <CardMedia component="img" sx={{ width: '80%' }} image={`./concert/${activeDecade.key}.webp`} alt={`Lyrics ${activeDecade.name}`} />}
    </Card>
  </Grid>
)
