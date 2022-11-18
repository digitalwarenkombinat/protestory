import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import { PureComponent } from 'react'
import Image from 'next/image'
import { title } from 'config'
import Typography from '@mui/material/Typography'
import { Item } from 'utils/store'
import icon from '/public/icon.svg'
type Props = {
  items?: Item[]
}

export class DemoPrintList extends PureComponent<Props> {
  constructor(props) {
    super(props)
  }
  render() {
    const { items } = this.props

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
                    width: '20vw',
                    height: 'auto',
                    maxHeight: '200px',
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
        <Container maxWidth="lg" component="section" sx={{ mt: '2rem' }}>
          <Typography sx={{ mb: 2 }} variant="h2" color="text.primary">
            Get the Protest started!
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
                  margin: '0.25rem',
                  padding: '0.25rem',
                }}
              />
              <Typography variant="h4" color="text.primary">
                {item.name}
              </Typography>
            </Box>
          ))}
        </Container>
      </div>
    )
  }
}
