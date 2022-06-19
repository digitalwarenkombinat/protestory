import Image from 'next/image'

import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Link from '@mui/material/Link'

import logo from '../../public/logo.svg'

export const Header = () => (
  <AppBar
    position="static"
    elevation={0}
    sx={{
      borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
    }}
  >
    <Toolbar sx={{ flexWrap: 'wrap' }}>
      <Typography variant="h5" noWrap sx={{ flexGrow: 1 }}>
        <Link color="inherit" href="/">
          <Image
            src={logo}
            alt={'Logo von PROTESTORY!'}
            width={128}
            height={128}
          />
        </Link>
      </Typography>
      <Button
        href="#"
        variant="contained"
        sx={{ bgcolor: 'secondary.main' }}
      >
        English
      </Button>
    </Toolbar>
  </AppBar>
)
