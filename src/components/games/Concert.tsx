import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { concert } from 'config'
import { useState } from 'react'
import { AudioPlayer } from 'services/AudioPlayer'
import { Lyrics } from 'services/Lyrics'
import { Timeline } from 'services/Timeline'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export const Concert = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const [activeDecade, setActiveDecade] = useState({})

  return (
    <Grid container alignItems="center" textAlign="center" flexWrap="wrap" justifyContent="center" mt="8rem" mb="16rem">
      <Grid item>
        <Typography sx={{ mb: 4 }} variant="h2" color="secondary.main">
          If I can`t dance to it, it`s not my revolution
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && concert[language].description1}
        </Typography>
        <Typography sx={{ mt: 4, mb: 8 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && concert[language].description2}
        </Typography>
      </Grid>
      <Grid item sx={{ width: '100%' }}>
        <style>{`
        .b,.j,.m,.n{stroke-width:9px;stroke:#000;stroke-miterlimit:10}
        .b{fill:#311b92}
        .j,.n{fill:#ffe1e1}
        `}</style>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1210 968.19">
          <path
            d="M1081.62 821.69H122.91c-22.78 0-41.26-18.45-41.3-41.23L13.66 122.35 5 46.37C4.96 23.54 23.46 5 46.3 5h1117.4c22.78 0 41.26 18.44 41.3 41.22l-82.09 734.09c.04 22.83-18.46 41.37-41.3 41.37Z"
            className="b"
          />
          <path d="M180.43 963.69H175c-13.62 0-24.67-11.04-24.67-24.67V824.35l132-2.67-72.49 121.98a31.615 31.615 0 0 1-29.41 20.02Z" className="j" />
          <path d="M1026.48 963.68c12.43 0 22.52-10.08 22.52-22.51V824.35H923.57l71.66 118.12c5.09 12.8 17.48 21.2 31.25 21.21Z" className="j" />
          <path d="M101 243.66v296.69c0 15.1-12.24 27.33-27.33 27.33h-10.5L28.06 259.79l-5.49-48.15h46.4c17.69 0 32.02 14.34 32.02 32.02Z" className="n" />
          <path d="M1183.53 211.64h-55.18c-15.11 0-27.36 12.25-27.36 27.36v302.02c0 14.73 11.94 26.67 26.67 26.67h12.38l43.49-356.05Z" className="n" />
          <rect width="896.32" height="220.08" x="152.51" y="567.69" rx="79.33" ry="79.33" className="m" />
          <foreignObject x="156.51" y="571.69" width="888.32" height="212.08">
            <Timeline setActiveDecade={setActiveDecade} />
            <AudioPlayer activeDecade={activeDecade} />
          </foreignObject>
          <rect width="802.98" height="458" x="197.51" y="49.43" rx="64.75" ry="64.75" className="m" />
          <foreignObject x="201.51" y="51.43" width="794.98" height="452">
            <Lyrics activeDecade={activeDecade} />
          </foreignObject>
        </svg>
      </Grid>
    </Grid>
  )
}
