import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

export const Article = () => (
  <Container maxWidth={false} component="article">
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
      }}
    >
      <Link
        color="text.secondary"
        href="artofprotest"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: '5px',
          bottom: '5px',
          textDecoration: 'none',
          background: "url('./home/artofprotest.webp') center/cover",
          clipPath: 'polygon(0 0, 100% 0, 0 100%)',
        }}
      >
        <Box
          sx={{
            opacity: 0,
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: '.5s ease',
            backgroundColor: 'secondary.main',
            '&:hover': {
              opacity: 0.5,
            },
          }}
        />
        <Grid
          container
          justifyContent="flex-start"
          alignItems="center"
          pt={8}
          pl={8}
          height="50%"
          width="50%"
        >
          <Grid item>
            <Typography
              variant="h2"
              sx={{
                backgroundImage: `linear-gradient(0, transparent 0.2em, #f50057 0.2em, #f50057 0.8em, transparent 0.8em)`,
                backgroundSize: '1px 1.6em',
                backgroundPosition: '1px center',
                backgroundRepeat: 'repeat',
                paddingLeft: '0.2em',
                paddingRight: '0.2em',
                marginLeft: '-0.2em',
                marginRight: '-0.2em',
              }}
            >
              Kunst des Protests
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              size="large"
              edge="start"
              aria-label="Read more"
              sx={{
                color: 'accent.main',
              }}
            >
              <ArrowForwardOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography component="h3" variant="h4">
              Wie wird eigentlich protestiert?
            </Typography>
            <Typography component="h3" variant="h4" pt={4}>
              In welchen Formen wird Protest sichtbar?
            </Typography>
            <Typography component="h3" variant="h4" pt={4}>
              Wie melde ich eine Demo an?
            </Typography>
          </Grid>
        </Grid>
      </Link>
      <Link
        color="text.secondary"
        href="protestart"
        sx={{
          position: 'absolute',
          top: '5px',
          left: '5px',
          right: 0,
          bottom: 0,
          textDecoration: 'none',
          background: "url('./home/protestart.webp') center/cover",
          clipPath: 'polygon(100% 100%, 100% 0, 0 100%)',
        }}
      >
        <Box
          sx={{
            opacity: 0,
            position: 'absolute',
            width: '100%',
            height: '100%',
            transition: '.5s ease',
            backgroundColor: 'secondary.main',
            '&:hover': {
              opacity: 0.5,
            },
          }}
        />
        <Grid
          container
          justifyContent="flex-end"
          alignItems="center"
          pr={8}
          height="100%"
          width="100%"
          pt="50vw"
          pl="50vh"
        >
          <Grid item>
            <Typography component="h3" variant="h4">
              Lieder, Gedichte, Bilder, Plakate, Postkarten,
              Transparente, Objekte, usw., all das, was im Rahmen von
              Protesten (künstlerisch) geschaffen wird.
            </Typography>
          </Grid>
          <Grid item>
            <IconButton
              size="large"
              edge="start"
              aria-label="Read more"
              sx={{
                color: 'accent.main',
              }}
            >
              <ArrowForwardOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Typography
              variant="h2"
              sx={{
                backgroundImage: `linear-gradient(0, transparent 0.2em, #f50057 0.2em, #f50057 0.8em, transparent 0.8em)`,
                backgroundSize: '1px 1.6em',
                backgroundPosition: '1px center',
                backgroundRepeat: 'repeat',
                paddingLeft: '0.2em',
                paddingRight: '0.2em',
                marginLeft: '-0.2em',
                marginRight: '-0.2em',
              }}
            >
              Protestkunst
            </Typography>
          </Grid>
        </Grid>
      </Link>
    </Box>
  </Container>
)
