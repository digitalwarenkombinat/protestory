import Image from 'next/future/image'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

import ArchivIcon from '/public/footer/archiv.png'
import DigitalwarenkombinatIcon from '/public/copyright.svg'
import KulturstiftungIcon from '/public/footer/kulturstiftung.svg'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.primary"
      align="center"
      {...props}
    >
      {'Copyright © Gerd Müller'}{' '}
      <Link color="inherit" href="https://digitalwarenkombinat.de/">
        Digitalwarenkombinat
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export const Footer = () => (
  <Container
    maxWidth={false}
    disableGutters
    component="footer"
    sx={{
      bgcolor: 'primary.main',
    }}
  >
    <Grid
      container
      alignItems="center"
      textAlign="center"
      flexWrap="wrap"
      justifyContent="center"
      my="2em"
    >
      <Grid item minWidth="220px">
        <Link color="inherit" href="https://www.arbeiterjugend.de">
          <Image
            src={ArchivIcon}
            alt={'Archiv der Arbeiter:innenjugend'}
            width={160}
            height={138}
          />
        </Link>
      </Grid>
      <Grid item minWidth="220px">
        <Link color="inherit" href="https://digitalwarenkombinat.de/">
          <Image
            src={DigitalwarenkombinatIcon}
            alt={'Digitalwarenkombinat'}
            width={96}
            height={96}
          />
          <Typography
            component="h3"
            variant="h6"
            color="text.primary"
          >
            Digitalwarenkombinat
          </Typography>
        </Link>
      </Grid>
      <Grid item minWidth="220px">
        <Link
          color="inherit"
          href="https://www.kulturstiftung-des-bundes.de"
        >
          <Image
            src={KulturstiftungIcon}
            alt={'Kulturstiftung des Bundes'}
            width={160}
            height={160}
          />
        </Link>
      </Grid>
      <Grid item xs={12} mt={2}>
        <Copyright />
      </Grid>
    </Grid>
  </Container>
)
