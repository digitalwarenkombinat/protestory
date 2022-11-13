/* eslint-disable @next/next/no-img-element */
import Masonry from '@mui/lab/Masonry'
import Button from '@mui/material/Button'
import { mediaData } from 'config/mediaData'
import { useState } from 'react'
import { MediaDialog } from 'services/MediaDialog'

export const MediaGallery = () => {
  const [open, setOpen] = useState(false)
  const [selectedItem, setSelectedItem] = useState(null)

  const handleClickOpen = (item) => {
    setSelectedItem(item)
    setOpen(true)
  }

  const handleClose = () => {
    setSelectedItem(null)
    setOpen(false)
  }
  return (
    <div>
      <Masonry columns={{ xs: 1, sm: 2, md: 3 }} spacing={{ xs: 1, sm: 2, md: 3 }} sx={{ pt: 2 }}>
        {mediaData.map((item, index) => (
          <Button
            key={index}
            onClick={() => handleClickOpen(item)}
            sx={{
              transition: 'all .25s linear',
              backfaceVisibility: 'hidden',
              '&:hover': {
                opacity: '0.5',
              },
            }}
          >
            <img
              src={item.source}
              alt={item.name}
              loading="lazy"
              style={{
                border: '8px solid white',
                width: '100%',
                height: 'auto',
              }}
            />
          </Button>
        ))}
      </Masonry>
      {selectedItem && <MediaDialog selectedItem={selectedItem} open={open} onClose={handleClose} />}
    </div>
  )
}
