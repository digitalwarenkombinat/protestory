import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useStore from 'utils/store'
import { legalNotice } from 'config'
import { useHasHydrated } from 'utils/useHasHydrated'
import Link from 'next/link'

const LegalNotice = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Grid container textAlign="center" flexWrap="wrap" justifyContent="center" maxWidth="lg" mx="auto" my="2rem">
      <Grid item>
        <Typography sx={{ mb: 4 }} variant="h2" color="secondary.main">
          {hasHydrated && legalNotice[language].title}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description1}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description2}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description3}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description4}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          #protestory #proletariart #kulturstiftungdesbundes #ProgrammDiveIn #NeustartKultur #aajb #archivderarbeiterjugendbewegung #digitalwarenkombinat
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description5}
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Archiv der Arbeiterjugendbewegung
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Haardgrenzweg 77
        </Typography>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          45739 Oer-Erkenschwick
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          <Link color="inherit" href="https://www.arbeiterjugend.de">
            www.arbeiterjugend.de
          </Link>
        </Typography>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          <Link color="inherit" href="mailto:archiv@arbeiterjugend.de">
            Email: archiv@arbeiterjugend.de
          </Link>
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Projektleitung: Maria Daldrup
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Konzeption: Sophie Reinlassöder, Arne Schott
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description6}
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Digitalwarenkombinat GbR
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Eilenburger Straße 27
        </Typography>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          04317 Leipzig
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          <Link color="inherit" href="https://digitalwarenkombinat.de/">
            www.digitalwarenkombinat.de
          </Link>
        </Typography>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          <Link color="inherit" href="mailto:info@digitalwarenkombinat.de">
            E-Mail: info@digitalwarenkombinat.de
          </Link>
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Konzeption, Grafik: Anne Mühlich
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Entwicklung: Gerd Müller
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          UX/UI: Natalie Bührmann
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Sprecherin: Nina Heinke
        </Typography>
      </Grid>
    </Grid>
  )
}

export default LegalNotice
