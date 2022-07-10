/* eslint-disable @next/next/no-img-element */
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Masonry from '@mui/lab/Masonry'

import { mediaData } from '../config/mediaData'

export const MediaGallery = () => (
  <Container disableGutters maxWidth="xl" component="section">
    <Masonry columns={4} spacing={2}>
      {mediaData.map((item, index) => (
        <div key={index}>
          <Link color="inherit" href="/">
            <img
              src={item.source}
              alt={item.name}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </Link>
        </div>
      ))}
    </Masonry>
  </Container>
)
