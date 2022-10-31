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
}

export const Header = ({ title }: HeaderProps) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{
          bgcolor: 'primary.main',
        }}
      >
        <Toolbar sx={{ px: [0, 2] }}>
          <Typography
            sx={{
              transform: 'rotate(-10deg)',
            }}
          >
            <Link color="inherit" href="/">
              <Image priority src={icon} alt={'Logo PROTESTORY!'} width={300} height={300} />
            </Link>
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'secondary.main',
              flexGrow: 1,
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
