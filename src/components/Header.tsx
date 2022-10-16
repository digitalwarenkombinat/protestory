import Image from 'next/image'

import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import useStore from 'utils/store'
import icon from '/public/icon.svg'
import Button from '@mui/material/Button'
import { useHasHydrated } from 'utils/useHasHydrated'

interface HeaderProps {
  title: false | string
  startPage: boolean
}

export const Header = ({ title, startPage = false }: HeaderProps) => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
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
              fontSize: ['4rem', '4rem', '16rem'],
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
          <Button
            sx={{
              color: 'secondary.main',
            }}
            onClick={() => useStore.getState().changeLanguage()}
          >
            {hasHydrated && language === 'de' ? 'EN' : 'DE'}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
