import Image from 'next/image'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import icon from '../../public/icon.svg'

interface HeaderProps {
  title: false | string
  startPage: boolean
}

export const Header = ({ title, startPage = false }: HeaderProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar
      position="static"
      elevation={0}
      sx={{
        bgcolor: 'transparent',
      }}
    >
      <Toolbar sx={{ px: [0, 2] }}>
        <Typography>
          <Link color="inherit" href="/">
            <Image
              src={icon}
              alt={'Logo von PROTESTORY!'}
              width={300}
              height={300}
            />
          </Link>
        </Typography>
        <Typography
          variant="h2"
          sx={{
            color: startPage ? 'secondary.main' : 'primary.main',
            flexGrow: 1,
            fontSize: ['16rem'],
          }}
        >
          {title}
        </Typography>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 4, height: '4rem', width: '4rem' }}
        >
          <MenuRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
)
