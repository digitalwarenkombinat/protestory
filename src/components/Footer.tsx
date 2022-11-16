import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import { useTheme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'

import DigitalwarenkombinatIcon from '/public/copyright.svg'
import ArchivIcon from '/public/footer/archiv.png'
import KSBIcon from '/public/footer/ksb.png'
import KSBHorizontalIcon from '/public/footer/ksb_horizontal.png'

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.primary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://digitalwarenkombinat.de/">
        Digitalwarenkombinat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export const Footer = () => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('sm'))
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
          <Link color="inherit" href="https://www.arbeiterjugend.de">
            <Image src={ArchivIcon} alt={'Archiv der Arbeiter:innenjugend'} width={160} height={138} />
          </Link>
        </Grid>
        <Grid item minWidth="220px">
          <Link color="inherit" href="https://digitalwarenkombinat.de/">
            <Image src={DigitalwarenkombinatIcon} alt={'Digitalwarenkombinat'} width={138} height={138} />
            <Typography component="h3" variant="h6" color="text.primary">
              Digitalwarenkombinat
            </Typography>
          </Link>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Link color="inherit" href="https://www.kulturstiftung-des-bundes.de/dive-in">
            {isDesktop ? <Image src={KSBHorizontalIcon} alt={'Kulturstiftung des Bundes'} height={138} /> : <Image src={KSBIcon} alt={'Kulturstiftung des Bundes'} width={160} />}
          </Link>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Copyright />
        </Grid>
      </Grid>
    </Container>
  )
}
