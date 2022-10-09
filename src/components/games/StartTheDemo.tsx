import { useState } from 'react'
import HelpRoundedIcon from '@mui/icons-material/HelpRounded'
import Grid from '@mui/material/Grid'
import {
  Avatar,
  AvatarGroup,
  Box,
  Link,
  Typography,
} from '@mui/material'
import { StartTheDemoSVG } from 'services/StartTheDemoSVG'
import { items } from 'config/startthedemo'

const StartTheDemo = () => {
  const [itemList, setItemList] = useState(items)
  const [description, setDescription] = useState('')

  const updateSelectedItem = (item) => {
    setDescription(item.description)
    return { ...item, active: !item.leave || true }
  }

  const handleItem = (itemId) => {
    console.log(itemId)
    setItemList(
      itemList.map((item) =>
        item.id === itemId ? updateSelectedItem(item) : item
      )
    )
  }

  return (
    <Grid
      container
      alignItems="center"
      textAlign="center"
      flexWrap="wrap"
      justifyContent="center"
    >
      <Grid item sx={{ mb: 2 }}>
        <Typography
          component="h2"
          variant="h2"
          color="secondary.main"
        >
          Start the demo!
        </Typography>
        <Typography component="p" variant="h5" color="secondary.main">
          Gemeinsam mit deiner Freundin Karla hast du eine
          Demonstration gegen die Erweiterung eines Braunkohletagebaus
          und die damit einhergehende Zerstörung von 3 Dörfern in
          eurer Region angemeldet. Da es die erste Demo ist, die ihr
          in eurem Leben organisiert habt, ist alles etwas chaotisch.
          Alle benötigten Unterlagen und Ausrüstungsgegenstände
          befinden sich irgendwo in Karlas WG- Zimmer, wo ihr die Demo
          mehrheitlich vorbereitet habt. Versuche ihr dabei zu helfen,
          alle benötigten Gegenstände und Dokumente zu finden, damit
          die Demo wie geplant stattfinden kann.
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          width: '100%',
          height: '100%',
          position: 'relative',
          backgroundColor: 'secondary.main',
          boxShadow: 'none',
          border: '30px solid transparent',
          borderImage: 'url(/icons/frame.svg) 25 25 round',
          padding: 6,
          backgroundClip: 'padding-box',
        }}
      >
        <Typography
          sx={{ mt: 4 }}
          component="h3"
          variant="h4"
          color="primary.main"
        >
          Hilf Karla, in ihrem WG-Zimmer alle 17 Objekte zu finden,
          die für die Demo wichtig sind. Tippe oder klicke dazu auf
          die verschiedenen Gegenstände.
        </Typography>
        <AvatarGroup sx={{ justifyContent: 'center' }} max={17}>
          {itemList
            .filter((leaveItems) => leaveItems.leave !== true)
            .map((item, index) =>
              item.active ? (
                <Link key={index} href={item.link}>
                  <Avatar
                    alt={item.name}
                    src={item.source}
                    sx={{
                      backgroundColor: 'text.secondary',
                      cursor: 'pointer',
                    }}
                  />
                </Link>
              ) : (
                <Avatar
                  key={index}
                  alt="Fragezeichen"
                  sx={{
                    backgroundColor: 'text.primary',
                    opacity: '0.8',
                  }}
                >
                  <HelpRoundedIcon />
                </Avatar>
              )
            )}
        </AvatarGroup>
        <Typography component="p" variant="h5" color="primary.main">
          {description}
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '100%',
          }}
        >
          <StartTheDemoSVG handleItem={handleItem} />
        </Box>
      </Grid>
    </Grid>
  )
}

export default StartTheDemo
