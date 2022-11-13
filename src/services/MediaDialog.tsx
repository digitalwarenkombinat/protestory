import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Image from 'next/image'

export function MediaDialog({ onClose, selectedItem, open }) {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog" open={open} maxWidth="md">
      <DialogTitle id="dialog-title">{selectedItem.name}</DialogTitle>
      <DialogContent>
        <DialogContentText>{selectedItem.description}</DialogContentText>
        <Image
          src={selectedItem.source}
          alt={selectedItem.name}
          width={300}
          height={300}
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
