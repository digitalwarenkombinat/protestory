import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'

import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export function MediaDialog({ onClose, selectedItem, open }) {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const [portrait, setPortrait] = useState(false)

  const handleImageLoad = (img: HTMLImageElement) => {
    setPortrait(img.height > img.width)
  }

  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} onClick={handleClose} aria-labelledby="dialog" open={open} maxWidth="md" disableScrollLock>
      <DialogTitle id="dialog-title">{hasHydrated && selectedItem.name[language]}</DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        <img
          onLoad={(event) => handleImageLoad(event.target as HTMLImageElement)}
          src={selectedItem.source}
          alt={hasHydrated ? selectedItem.name[language] : 'Dialog'}
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
