import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import NoSsr from '@mui/material/NoSsr'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import { YouTubeEmbed } from 'react-social-media-embed'

import { socialWallText } from 'config'
import { CookieDialog, CookieDialogCategory } from 'services/CookieDialog'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export const Lyrics = ({ activeElement }) => {
  const hasHydrated = useHasHydrated()
  const { acceptedCategories, language } = useStore()
  const [cookieDialogVisible, setCookieDialogVisible] = useState(acceptedCategories.length === 0)
  const [youtubeAccepted, setYoutubeAccepted] = useState(false)

  function setSocialMediaAcceptance() {
    setYoutubeAccepted(acceptedCategories.some((category) => category['key'] === 'youtube'))
  }

  useEffect(() => {
    setSocialMediaAcceptance()
  }, [acceptedCategories])

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
            <CookieDialog visible={cookieDialogVisible} onAccept={handleAccept} />
            {!cookieDialogVisible && (
              <NoSsr defer>
                {youtubeAccepted ? (
                  <YouTubeEmbed url={activeElement.link} height={455} />
                ) : (
                  <>
                    <Typography component="h3" variant="h4" color="text.secondary" sx={{ my: 2 }}>
                      {hasHydrated && socialWallText[language].description3}
                    </Typography>
                    <Button variant="outlined" sx={{ color: 'accent.main' }} onClick={() => setCookieDialogVisible(true)}>
                      <Typography variant="body1">{hasHydrated && socialWallText[language].settings}</Typography>
                    </Button>
                  </>
                )}
              </NoSsr>
            )}
          </>
        ) : (
          <CardMedia
            component="img"
            image={activeElement?.link ? activeElement.link : '../concert/start.webp'}
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
