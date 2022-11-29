import DownloadIcon from '@mui/icons-material/Download'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import Avatar from '@mui/material/Avatar'
import Badge from '@mui/material/Badge'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import NoSsr from '@mui/material/NoSsr'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import { MouseEvent, useCallback, useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'

import { cartMessage } from 'config/startthedemo'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'
import { DemoPrintList } from './DemoPrintList'
import { print } from 'config'

export const Cart = () => {
  const hasHydrated = useHasHydrated()
  const { getActivatedCorrectItems, getCorrectItems, allCorrectItemsActivated, chatCompletedDisplayed, showCompletedCart, language } = useStore()
  const count = getActivatedCorrectItems().length
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const iconRef = useRef()
  const componentRef = useRef(null)

  const open = Boolean(anchorEl)
  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const isFirstOrLastElement = (count) => {
    if (showCompletedCart) {
      return false
    }

    const firstElement = 1
    const lastElement = getCorrectItems().length
    count === lastElement && chatCompletedDisplayed()
    return count === firstElement || count === lastElement
  }

  useEffect(() => {
    hasHydrated && isFirstOrLastElement(count) && setAnchorEl(iconRef.current)
  }, [hasHydrated, iconRef, count])

  const reactToPrintContent = useCallback(() => {
    return componentRef.current
  }, [componentRef.current])

  const handlePrint = useReactToPrint({
    content: reactToPrintContent,
  })

  return (
    <div>
      <NoSsr defer>
        <div style={{ display: 'none' }}>
          <DemoPrintList ref={componentRef} items={getActivatedCorrectItems()} printTitle={hasHydrated && print[language].title} language={hasHydrated && language} />
        </div>
      </NoSsr>
      <IconButton
        ref={iconRef}
        aria-label="cart"
        aria-controls={open ? 'cart-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          color: 'accent.main',
        }}
      >
        <Badge color="primary" badgeContent={hasHydrated && count}>
          <ShoppingBasketIcon sx={{ fontSize: '4rem' }} />
        </Badge>
      </IconButton>
      <Popover
        id="cart-menu"
        disableScrollLock
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={{
          '& .MuiPopover-paper': {
            backgroundColor: 'primary.main',
            width: 'auto',
            maxWidth: ['66%', '33%'],
            marginLeft: '-.5rem',
            marginTop: '1rem',
            padding: '0.25rem',
          },
        }}
      >
        {hasHydrated && (
          <Typography component="p" variant="h6" color="text.secondary">
            {allCorrectItemsActivated() ? (
              <>
                {cartMessage[language].finish}
                <IconButton
                  aria-label="Download"
                  sx={{
                    color: 'accent.main',
                  }}
                  onClick={handlePrint}
                >
                  <DownloadIcon sx={{ fontSize: '1.5rem' }} />
                </IconButton>
              </>
            ) : count === 0 ? (
              cartMessage[language].start
            ) : (
              cartMessage[language].playing
            )}
          </Typography>
        )}
        {getActivatedCorrectItems().map((item) => (
          <Box key={item.id} onClick={handleClose} sx={{ display: 'flex', alignItems: 'center' }}>
            <Avatar
              alt={hasHydrated ? item.name[language] : 'Avatar'}
              src={item.source}
              sx={{
                backgroundColor: 'text.secondary',
                height: '40px',
                width: '40px',
                margin: '0.25rem',
              }}
            />
            <Typography component="p" variant="body1" color="text.secondary">
              {hasHydrated && item.name[language]}
            </Typography>
          </Box>
        ))}
      </Popover>
    </div>
  )
}
