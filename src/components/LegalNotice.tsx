import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useStore from 'utils/store'
import { legalNotice } from 'config'
import { useHasHydrated } from 'utils/useHasHydrated'
import CustomLink from 'services/CustomLink'

const LegalNotice = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Grid container textAlign="center" flexWrap="wrap" justifyContent="center" maxWidth="lg" mx="auto" mt="8rem" mb="16rem">
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
          {hasHydrated && legalNotice[language].description5}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          #protestory #proletariart #kulturstiftungdesbundes #ProgrammDiveIn #NeustartKultur #aajb #archivderarbeiterjugendbewegung #digitalwarenkombinat
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description6}
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Zeltlagerplatz e. V.
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Saarstraße 14
        </Typography>
        <Typography sx={{ mb: 2 }} component="h3" variant="h4" color="secondary.main">
          12161 Berlin
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Archiv der Arbeiterjugendbewegung
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Haardgrenzweg 77
        </Typography>
        <Typography sx={{ mb: 2 }} component="h3" variant="h4" color="secondary.main">
          45739 Oer-Erkenschwick
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          <CustomLink href="https://www.arbeiterjugend.de">www.arbeiterjugend.de</CustomLink>
        </Typography>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          <CustomLink href="mailto:archiv@arbeiterjugend.de">Email: archiv@arbeiterjugend.de</CustomLink>
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description8}: Maria Daldrup
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description9}: Sophie Reinlassöder, Arne Schott
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description10}: Julia Wember, Flemming Menges
        </Typography>
      </Grid>
      <Grid item md={6}>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description7}
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Digitalwarenkombinat GbR
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          Eilenburger Straße 27
        </Typography>
        <Typography sx={{ mb: 2 }} component="h3" variant="h4" color="secondary.main">
          04317 Leipzig
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          <CustomLink href="https://digitalwarenkombinat.de/">www.digitalwarenkombinat.de</CustomLink>
        </Typography>
        <Typography sx={{ my: 2 }} component="h3" variant="h4" color="secondary.main">
          <CustomLink href="mailto:info@digitalwarenkombinat.de">E-Mail: info@digitalwarenkombinat.de</CustomLink>
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description11}: Anne Mühlich
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description12}: Gerd Müller
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          UX/UI: Natalie Bührmann
        </Typography>
        <Typography component="h3" variant="h4" color="secondary.main">
          {hasHydrated && legalNotice[language].description13}: Nina Heinke
        </Typography>
      </Grid>
    </Grid>
  )
}

export default LegalNotice
