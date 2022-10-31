import ArrowDownwardRoundedIcon from '@mui/icons-material/ArrowDownwardRounded'
import Container from '@mui/material/Container'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

interface HeroProps {
  title: string
}

export const Hero = ({ title }: HeroProps) => (
  <Container disableGutters maxWidth="xl" component="section">
    <Grid container justifyContent="center" alignItems="flex-end" sx={{ height: 'calc(100vh - 6rem)' }}>
      <Grid item xs={12}>
        <Typography component="h1" variant="h1" align="center" color="secondary.main" gutterBottom sx={{ fontSize: { xs: '4rem', lg: '16rem' } }}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mb: 4 }}>
          <ArrowDownwardRoundedIcon />
        </IconButton>
      </Grid>
    </Grid>
  </Container>
)
