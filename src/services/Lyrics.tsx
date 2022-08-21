import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
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
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h2">
            If I can&apos;t dance to it, it&apos;s not my revolution
          </Typography>
          <Typography component="div" variant="subtitle1">
            {activeDecade.title}
          </Typography>
        </CardContent>
      </Box>
      {activeDecade?.decade && (
        <CardMedia
          component="img"
          sx={{ width: '50vw' }}
          image={`./concert/lyrics${activeDecade.decade}.webp`}
          alt={`Lyrics ${activeDecade.author}`}
        />
      )}
    </Card>
  </Grid>
)
