/* eslint-disable @next/next/no-img-element */
import Masonry from '@mui/lab/Masonry'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import { mediaData } from 'config/mediaData'

export const MediaGallery = () => (
  <Container maxWidth={false} component="section">
    <Masonry columns={4} spacing={2}>
      {mediaData.map((item, index) => (
        <Box key={index}>
          <Box
            sx={{
              transition: 'all .25s linear',
              boxShadow: '0px 1px 2px 0px rgba(0,0,0,0.4)',
              opacity: '1',
              backfaceVisibility: 'hidden',
              '&:hover': {
                boxShadow: '-1px 10px 29px 0px rgba(0,0,0,0.8)',
                opacity: '0.3',
              },
            }}
          >
            <img
              src={item.source}
              alt={item.name}
              loading="lazy"
              style={{
                border: '8px solid white',
                display: 'block',
                width: '100%',
                height: 'auto',
              }}
            />
          </Box>
          <Box
            sx={{
              backgroundColor: 'secondary.main',
              transition: '.5s ease',
              opacity: 0,
              alignItems: 'center',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              lineHeight: '1.1em',
              '&:hover': {
                opacity: 1,
              },
            }}
          >
            <Typography>{item.name}</Typography>
          </Box>
        </Box>
      ))}
    </Masonry>
  </Container>
)
