import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CustomLink from 'services/CustomLink'
import Typography from '@mui/material/Typography'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {'Copyright © '}
      <CustomLink href="https://digitalwarenkombinat.de/">Digitalwarenkombinat</CustomLink> {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export const Footer = () => {
  return (
    <Container
      maxWidth={false}
      disableGutters
      component="footer"
      sx={{
        bgcolor: 'primary.main',
      }}
    >
      <Grid container alignItems="center" textAlign="center" flexWrap="wrap" justifyContent="center" my="2rem">
        <Grid item minWidth="220px">
          <CustomLink href="https://www.arbeiterjugend.de">
            <img src="../../footer/archiv.webp" alt={'Archiv der Arbeiter:innenjugend'} width={160} height={138} />
          </CustomLink>
        </Grid>
        <Grid item minWidth="220px">
          <CustomLink href="https://digitalwarenkombinat.de/">
            <img src="../../copyright.svg" alt={'Digitalwarenkombinat'} width={138} height={138} />
            <Typography component="h3" variant="h6" color="text.primary">
              Digitalwarenkombinat
            </Typography>
          </CustomLink>
        </Grid>
        <Grid item xs={12} mt={2}>
          <CustomLink href="https://www.kulturstiftung-des-bundes.de/dive-in">
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <img src="../../footer/ksb_horizontal.webp" alt={'Kulturstiftung des Bundes'} height={138} />
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <img src="../../footer/ksb.webp" alt={'Kulturstiftung des Bundes'} width={160} />
            </Box>
          </CustomLink>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  )
}
