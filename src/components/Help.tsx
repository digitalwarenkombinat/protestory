import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import HelpIcon from '@mui/icons-material/Help'
import Dialog from '@mui/material/Dialog'
import Fab from '@mui/material/Fab'
import { useEffect, useState } from 'react'

import { chat } from 'config/chat'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'
import { Chat } from './Chat'

const HelpDialog = ({ onClose, open }) => {
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog
      sx={{
        '& .MuiDialog-root': {
          bottom: 64,
          right: 64,
          alignItems: 'flex-end',
        },
        '& .MuiDialog-container': {
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        },
        '& .MuiDialog-paper': {
          backgroundColor: 'background.default',
          maxHeight: '66vh',
          marginBottom: '8rem',
        },
      }}
      maxWidth="sm"
      onClose={handleClose}
      open={open}
      hideBackdrop={true}
      disableScrollLock
    >
      <Chat {...chat} />
    </Dialog>
  )
}

export const Help = () => {
  const hasHydrated = useHasHydrated()
  const { showChatInitial } = useStore()
  const [open, setOpen] = useState(false)
  useEffect(() => setOpen(hasHydrated && showChatInitial), [hasHydrated, showChatInitial])

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    useStore.getState().chatInitialDisplayed()
  }
  return (
    <>
      <Fab color="primary" aria-label="help" onClick={handleClickOpen}>
        {open && <CancelRoundedIcon />}
        {!open && <HelpIcon />}
      </Fab>
      <HelpDialog open={open} onClose={handleClose} />
    </>
  )
}
