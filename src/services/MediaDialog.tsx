/* eslint-disable @next/next/no-img-element */
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

export function MediaDialog({ onClose, selectedItem, open }) {
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog" open={open} maxWidth="md">
      <DialogTitle id="dialog-title">{selectedItem.name}</DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        <img
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
