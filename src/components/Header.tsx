import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CustomLink from 'services/CustomLink'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
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
        <Toolbar>
          <Typography
            sx={{
              transform: 'rotate(-10deg)',
            }}
          >
            <CustomLink href="/">
              <Image
                priority
                src={icon}
                alt={'Logo PROTESTORY!'}
                width={300}
                style={{
                  width: '20vw',
                  height: 'auto',
                  maxHeight: '200px',
                }}
              />
            </CustomLink>
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'secondary.main',
              flexGrow: 1,
              fontSize: { sm: '6rem', lg: '8rem' },
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
