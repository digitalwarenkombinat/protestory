import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Typography from '@mui/material/Typography'
import { menu } from 'config/menu'
import CustomLink from 'services/CustomLink'
import { MouseEvent, useState } from 'react'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export default function BasicMenu() {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div>
      <IconButton
        id="basic-button"
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuRoundedIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        disableScrollLock
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        PaperProps={{
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            backgroundColor: 'primary.main',
            width: 'auto',
            border: 'none',
            borderRadius: '4px',
            m: '-1rem',
          },
        }}
      >
        <Button
          sx={{
            color: 'secondary.main',
          }}
          onClick={() => useStore.getState().changeLanguage()}
        >
          <Typography component="h3" variant="h4" color="text.secondary">
            {hasHydrated && language === 'de' ? 'EN' : 'DE'}
          </Typography>
        </Button>
        {menu[language].map((item, index) => (
          <div key={index}>
            <Divider
              variant="middle"
              sx={{
                borderBottomWidth: 'medium',
                borderColor: '#FFF',
              }}
            />
            <CustomLink href={item.href}>
              <MenuItem onClick={handleClose} sx={{ whiteSpace: 'normal' }}>
                <Typography component="h3" variant="h4" color="text.secondary">
                  {hasHydrated && item.title}
                </Typography>
              </MenuItem>
            </CustomLink>
          </div>
        ))}
      </Menu>
    </div>
  )
}
