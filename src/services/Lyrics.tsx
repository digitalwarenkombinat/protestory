import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useEffect, useState } from 'react'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
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
  const theme = useTheme()
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'lg'))

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
            {!cookieDialogVisible && youtubeAccepted ? (
              <Box sx={{ position: 'fixed' }}>
                <style>{`
                  .youtubeContainer {
                    position: relative;
                  }
                `}</style>
                <YouTubeEmbed url={activeElement.link} height={isTablet ? 300 : 455} width={isTablet ? 400 : 650} youTubeProps={{ containerClassName: 'youtubeContainer' }} />
              </Box>
            ) : (
              <>
                <Typography component="h3" variant="h4" color="text.secondary" sx={{ my: 2 }}>
                  {hasHydrated && socialWallText[language].description3}
                </Typography>
                <Box
                  sx={{
                    cursor: 'pointer',
                    color: 'accent.main',
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(245, 0, 87, 0.5)',
                    lineHeight: '1.75',
                    textTransform: 'uppercase',
                    minWidth: '64px',
                    padding: '5px 15px',
                    '&:hover': {
                      textDecoration: 'none',
                      backgroundColor: 'rgba(245, 0, 87, 0.04)',
                      border: '1px solid #f50057',
                    },
                  }}
                  onClick={() => setCookieDialogVisible(true)}
                >
                  <Typography variant="body1">{hasHydrated && socialWallText[language].settings}</Typography>
                </Box>
              </>
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
