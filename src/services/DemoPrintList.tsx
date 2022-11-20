import AppBar from '@mui/material/AppBar'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import { PureComponent } from 'react'

import { title } from 'config'
import { Item } from 'utils/store'
import icon from '/public/icon.svg'

type Props = {
  items?: Item[]
  printTitle: string
}

export class DemoPrintList extends PureComponent<Props> {
  constructor(props) {
    super(props)
  }

  render() {
    const { items, printTitle } = this.props

    return (
      <div>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar
            position="static"
            elevation={0}
            sx={{
              bgcolor: 'primary.main',
            }}
          >
            <Toolbar disableGutters>
              <Typography
                sx={{
                  transform: 'rotate(-10deg)',
                }}
              >
                <Image
                  priority
                  src={icon}
                  alt={'Logo PROTESTORY!'}
                  width={300}
                  style={{
                    maxHeight: '100px',
                  }}
                />
              </Typography>
              <Typography
                variant="h1"
                sx={{
                  color: 'secondary.main',
                  flexGrow: 1,
                }}
              >
                {title}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
        <Container component="section" sx={{ mt: '2rem' }}>
          <Typography sx={{ mb: 2 }} component="h2" variant="h4" color="text.primary">
            {printTitle}
          </Typography>
          {items.map((item) => (
            <Box key={item.id} sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                alt={item.name}
                src={item.source}
                sx={{
                  backgroundColor: 'text.secondary',
                  height: '40px',
                  width: '40px',
                  margin: 0,
                  padding: '0.25rem',
                }}
              />
              <Box textAlign="left" sx={{ mb: '0.25rem' }}>
                <Typography component="p" variant="body1" color="text.primary">
                  {item.name}
                </Typography>
                <Typography component="span" variant="body2" color="text.primary">
                  {item.print}
                </Typography>
              </Box>
            </Box>
          ))}
        </Container>
      </div>
    )
  }
}
