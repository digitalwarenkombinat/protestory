/* eslint-disable @next/next/no-img-element */
import Masonry from '@mui/lab/Masonry'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { protestart } from 'config'
import { mediaData } from 'config/mediaData'
import { useState } from 'react'
import { MediaDialog } from 'services/MediaDialog'

import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export const MediaGallery = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
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
      <Box mt="8rem" alignItems="center" textAlign="center" justifyContent="center">
        <Typography sx={{ mb: 4 }} variant="h2" color="secondary.main">
          {hasHydrated && protestart[language].title}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && protestart[language].description1}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="secondary.main">
          {hasHydrated && protestart[language].description2}
        </Typography>
      </Box>
      <Masonry columns={{ xs: 1, sm: 2, md: 4 }} spacing={2} defaultHeight={450} defaultColumns={4} defaultSpacing={2} sx={{ marginBottom: '16rem' }}>
        {mediaData.map((item, index) => (
          <Button
            key={index}
            disableRipple
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
