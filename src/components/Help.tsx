import { useState } from 'react'

import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import Fab from '@mui/material/Fab'
import HelpIcon from '@mui/icons-material/Help'

import { Chat } from './Chat'

import { chat } from '../config'

const HelpDialog = ({ onClose, open }) => {
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="help-dialog"
      open={open}
      maxWidth={'sm'}
    >
      <DialogTitle
        id="help-dialog"
        sx={{
          backgroundColor: 'secondary.main',
          color: 'text.secondary',
        }}
      >
        {chat.title}
      </DialogTitle>
      <Chat {...chat} />
    </Dialog>
  )
}

export const Help = () => {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }
  return (
    <>
      <Fab
        color="primary"
        aria-label="help"
        onClick={handleClickOpen}
      >
        {open && <CancelRoundedIcon />}
        {!open && <HelpIcon />}
      </Fab>
      <HelpDialog open={open} onClose={handleClose} />
    </>
  )
}
