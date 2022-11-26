import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import useStore from 'utils/store'
import { article } from 'config'
import { useHasHydrated } from 'utils/useHasHydrated'

export const Article = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  return (
    <Container
      maxWidth={false}
      component="article"
      sx={{
        padding: ['2rem', '8em 1em 12em'],
        position: 'relative',
        backgroundColor: 'secondary.main',
        color: 'text.secondary',
      }}
    >
      {article[language].map((section, index) => (
        <Grid
          key={index}
          container
          flexWrap="wrap"
          alignItems="center"
          sx={{
            '&:nth-of-type(2n)': {
              flexDirection: [null, null, null, 'row-reverse'],
            },
            '&:not(:first-of-type)': {
              marginTop: ['4em', '8em'],
            },
          }}
        >
          <Grid
            item
            flexGrow={1}
            flexBasis="15rem"
            pt="1em"
            px={[0, 0, 0, '8em']}
            sx={{
              '* + *': {
                marginTop: '0.5em',
              },
            }}
          >
            <Typography component="h2" variant="h2">
              {hasHydrated && section.title}
            </Typography>
            <Typography component="h3" variant="h4">
              {hasHydrated && section.text}
            </Typography>
          </Grid>
          <Grid item sx={{ minWidth: [null, null, null, '38.2vw'] }}></Grid>
        </Grid>
      ))}
    </Container>
  )
}
