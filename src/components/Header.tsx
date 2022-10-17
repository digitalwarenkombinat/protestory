import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/future/image'
import BasicMenu from './Menu'
import icon from '/public/icon.svg'

interface HeaderProps {
  title: false | string
  startPage: boolean
}

export const Header = ({ title, startPage = false }: HeaderProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: 'transparent',
        }}
      >
        <Toolbar sx={{ px: [0, 2] }}>
          <Typography
            sx={{
              transform: 'rotate(-10deg)',
              width: ['6rem', '8rem', '16rem'],
            }}
          >
            <Link color="inherit" href="/">
              <Image
                priority
                src={icon}
                alt={'Logo PROTESTORY!'}
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
              fontSize: ['4rem', '4rem', '16rem'],
            }}
          >
            {title}
          </Typography>
          <BasicMenu />
        </Toolbar>
      </AppBar>
    </Box>
  )
}
