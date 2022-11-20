import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Image from 'next/image'
import { useState } from 'react'

export function MediaDialog({ onClose, selectedItem, open }) {
  const [portrait, setPortrait] = useState(false)
  const handleClose = () => {
    onClose()
  }

  const handleImageLoad = (img: HTMLImageElement) => {
    setPortrait(img.height > img.width)
  }

  return (
    <Dialog onClose={handleClose} aria-labelledby="dialog" open={open} maxWidth="md">
      <DialogTitle id="dialog-title">{selectedItem.name}</DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        <Image
          onLoadingComplete={(img) => handleImageLoad(img)}
          src={selectedItem.source}
          alt={selectedItem.name}
          width={300}
          height={300}
          style={{
            width: portrait ? '70%' : '100%',
            height: 'auto',
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
