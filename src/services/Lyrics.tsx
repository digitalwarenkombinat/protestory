import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import NoSsr from '@mui/material/NoSsr'
import { useState } from 'react'
import { YouTubeEmbed } from 'react-social-media-embed'
import { CookieDialog, CookieDialogCategory } from 'services/CookieDialog'
import useStore from 'utils/store'

const categories: CookieDialogCategory[] = [
  {
    key: 'youtube',
    title: 'Youtube',
    description: 'Inhalte von Youtube anzeigen.',
  },
]

export const Lyrics = ({ activeElement }) => {
  const { acceptedCategories } = useStore()
  const [cookieDialogVisible, setCookieDialogVisible] = useState(acceptedCategories.length === 0)
  const handleAccept = (acceptedCategories: CookieDialogCategory[]) => {
    useStore.getState().changeAcceptedCategories(acceptedCategories)
    setCookieDialogVisible(false)
  }

  return (
    <Grid item>
      <Card
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          bgcolor: 'transparent',
          boxShadow: 'none',
        }}
      >
        {activeElement?.link ? (
          <>
            <CookieDialog visible={cookieDialogVisible} categories={categories} onAccept={handleAccept} />
            {!cookieDialogVisible && (
              <NoSsr defer>
                <YouTubeEmbed url={activeElement.link} height={455} />
              </NoSsr>
            )}
          </>
        ) : (
          <CardMedia
            component="img"
            image={activeElement?.link ? activeElement.link : './concert/start.webp'}
            alt={activeElement?.link ? `Lyrics ${activeElement.name}` : `If I can't dance to it, it's not my revolution`}
            sx={{
              height: '455px',
              borderRadius: '64.75px',
              objectPosition: 'top',
            }}
          />
        )}
      </Card>
    </Grid>
  )
}
