import { useState } from 'react'

import CancelRoundedIcon from '@mui/icons-material/CancelRounded'
import Dialog from '@mui/material/Dialog'
import Fab from '@mui/material/Fab'
import HelpIcon from '@mui/icons-material/Help'

import { Chat } from './Chat'

import { chat } from '../config/chat'

const HelpDialog = ({ onClose, open }) => {
  const handleClose = () => {
    onClose()
  }
  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': {
          backgroundColor: 'background.default',
          maxHeight: '75vh',
          minWidth: '600px',
        },
      }}
      maxWidth="sm"
      onClose={handleClose}
      open={open}
    >
      <Chat {...chat} />
    </Dialog>

    // <Dialog
    //   onClose={handleClose}
    //   aria-labelledby="help-dialog"
    //   open={open}
    //   maxWidth={'sm'}
    // >
    //   <DialogTitle
    //     id="help-dialog"
    //     component="div"
    //     sx={{
    //       display: 'flex',
    //       alignItems: 'center',
    //       backgroundColor: 'secondary.main',
    //     }}
    //   >
    //     <Avatar
    //       sx={{ height: '6rem', width: '6rem', mr: '1rem' }}
    //       alt="Bot"
    //       src="avatar-chatbot.png"
    //     />
    //     <Typography variant="h3" color="text.secondary">
    //       {chat.title}
    //     </Typography>
    //   </DialogTitle>
    //   <Chat {...chat} />
    // </Dialog>
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
