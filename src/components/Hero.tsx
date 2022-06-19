import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

interface HeroProps {
  title: string
}

export const Hero = ({ title }: HeroProps) => (
  <Container
    disableGutters
    maxWidth="lg"
    component="main"
    sx={{ pt: 4, pb: 4 }}
  >
    <Typography
      component="h1"
      variant="h1"
      align="center"
      color="text.secondary"
      gutterBottom
    >
      {title}
    </Typography>
    <Typography
      variant="h5"
      align="center"
      color="text.primary"
      component="p"
      sx={{ mt: 2, mb: 2 }}
    >
      Durch Protest verschaffen sich junge Menschen heute wie gestern
      Gehör, üben politischen Einfluss aus und partizipieren aktiv und
      kreativ an der demokratischen Gesellschaft.
    </Typography>
    <Typography
      variant="h5"
      align="center"
      color="text.primary"
      component="p"
    >
      PROTESTORY! als cross-mediale, multiperspektivische Webplattform
      bietet eine Auseinandersetzung mit Protestkulturen der
      Arbeiter:innenjugend seit dem frühen 20. Jahrhundert bis heute.
    </Typography>
  </Container>
)
