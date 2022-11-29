import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export function MediaDialog({ onClose, selectedItem, open }) {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const handleClose = () => {
    onClose()
  }

  return (
    <Dialog onClose={handleClose} onClick={handleClose} aria-labelledby="dialog" open={open} maxWidth="md" disableScrollLock>
      <DialogTitle id="dialog-title">{hasHydrated && selectedItem.name[language]}</DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }}>
        <img
          src={selectedItem.source}
          alt={hasHydrated ? selectedItem.name[language] : 'Dialog'}
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
