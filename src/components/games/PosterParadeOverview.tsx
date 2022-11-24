import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import { posterParade } from 'config'
import PosterCarousel from 'services/PosterCarousel'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export default function PosterParadeOverview() {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Grid container alignItems="center" textAlign="center" flexDirection="column" justifyContent="center" mt="8rem" mb="16rem">
      <Grid item>
        <Typography sx={{ mb: 4 }} variant="h2" color="secondary.main">
          Posterparade
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && posterParade[language].description1}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && posterParade[language].description2}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && posterParade[language].description3}
        </Typography>
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <PosterCarousel />
      </Grid>
    </Grid>
  )
}
