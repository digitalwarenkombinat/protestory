import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

interface ArticleProps {
  startPage: {
    title: string
    text: string
  }[]
}

export const Article = ({ startPage }: ArticleProps) => (
  <Container
    maxWidth={false}
    component="article"
    sx={{
      padding: '8em 1em 12em',
      position: 'relative',
      backgroundColor: 'secondary.main',
      color: 'text.secondary',
    }}
  >
    {startPage.map((section, index) => (
      <Grid
        key={index}
        container
        flexWrap="wrap"
        alignItems="center"
        sx={{
          '&:nth-child(2n)': {
            flexDirection: [null, null, null, 'row-reverse'],
          },
          '&:not(:first-of-type)': {
            marginTop: '8em',
          },
        }}
      >
        <Grid
          item
          flexGrow={1}
          flexBasis="15rem"
          pt="1em"
          px="8em"
          sx={{
            '* + *': {
              marginTop: '0.5em',
            },
          }}
        >
          <Typography component="h2" variant="h2">
            {section.title}
          </Typography>
          <Typography component="h3" variant="h4">
            {section.text}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{ minWidth: [null, null, null, '38.2vw'] }}
        ></Grid>
      </Grid>
    ))}
  </Container>
)
