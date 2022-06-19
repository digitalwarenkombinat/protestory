import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'

interface ArticleProps {
  sections: ReadonlyArray<{
    title: string
    url: string
  }>
}

export const Article = ({ sections = [] }: ArticleProps) => (
  <Container maxWidth="xl" component="article">
    <Grid container alignItems="flex-end" justifyContent="center">
      {sections.map((section) => (
        <Grid
          item
          key={section.title}
          xs={12}
          sm={6}
          md={3}
          sx={{
            transition: '0.25s',
            transform: 'skew(-10deg)',
            '&:hover': {
              transform:
                'translateX(-0.5rem) translateY(-0.5rem) skew(-10deg)',
              filter: 'opacity(50%)',
            },
            '&::before': {
              content: '""',
              left: 0,
              top: 0,
              height: 'calc(100% - 10px)',
              width: 'calc(100% - 10px)',
              borderRadius: '40px',
              opacity: 0,
              border: (theme) =>
                `2px solid ${theme.palette.accent.main}`,
              position: 'absolute',
              zIndex: -1,
              transition: '0.5s 0.05s',
            },
            '&:hover::before': {
              opacity: 1,
              transform: 'translateY(1.5rem) translateX(1.5rem)',
            },
          }}
        >
          <Link color="inherit" href={section.url}>
            <Card
              sx={{
                bgcolor: 'transparent',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&::after': {
                  transform: 'skew(10deg) scale(1.2)',
                  transition: '0.25s',
                },
              }}
            >
              <CardMedia
                component="img"
                image={`./home/${section.url}.webp`}
                alt={section.title}
              />
              <CardActions>
                <Button
                  fullWidth
                  variant="outlined"
                  sx={{
                    color: 'secondary.main',
                  }}
                >
                  {section.title}
                </Button>
              </CardActions>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  </Container>
)
