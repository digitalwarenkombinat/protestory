import Grid from '@mui/material/Grid'
import { useEffect, useState } from 'react'
import { FacebookEmbed, InstagramEmbed, TwitterEmbed } from 'react-social-media-embed'

import { socialWallText } from 'config'
import { socialwall } from 'config/socialwall'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'
import { CookieDialog, CookieDialogCategory } from 'services/CookieDialog'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const SocialWall = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const { acceptedCategories } = useStore()
  const [cookieDialogVisible, setCookieDialogVisible] = useState(acceptedCategories.length === 0)
  const [twitterAccepted, setTwitterAccepted] = useState(false)
  const [instagramAccepted, setInstagramAccepted] = useState(false)
  const [facebookAccepted, setFacebookAccepted] = useState(false)

  function setSocialMediaAcceptance() {
    setTwitterAccepted(acceptedCategories.some((category) => category['key'] === 'twitter'))
    setInstagramAccepted(acceptedCategories.some((category) => category['key'] === 'instagram'))
    setFacebookAccepted(acceptedCategories.some((category) => category['key'] === 'facebook'))
  }

  useEffect(() => {
    setSocialMediaAcceptance()
  }, [acceptedCategories])

  const handleAccept = (acceptedCategories: CookieDialogCategory[]) => {
    useStore.getState().changeAcceptedCategories(acceptedCategories)
    setSocialMediaAcceptance()
    setCookieDialogVisible(false)
  }

  return (
    <Grid container alignItems="center" textAlign="center" flexWrap="wrap" justifyContent="center" my="6rem">
      <Grid item maxWidth="md" mx="auto">
        <Typography sx={{ mb: 4 }} component="h2" variant="h2" color="text.secondary">
          Social Media Wall
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="text.secondary">
          {hasHydrated && socialWallText[language].description1}
        </Typography>
        <Typography sx={{ my: 4 }} component="h3" variant="h4" color="text.secondary">
          {hasHydrated && socialWallText[language].description2}
        </Typography>
      </Grid>
      <CookieDialog visible={cookieDialogVisible} onAccept={handleAccept} />
      {!cookieDialogVisible && (
        <Grid container justifyContent="center" spacing={{ xs: 1, sm: 2, md: 3 }}>
          {instagramAccepted && socialwall.instagram && (
            <>
              {socialwall.instagram.map((item, index) => (
                <Grid item key={index}>
                  <InstagramEmbed url={item} width={380} />
                </Grid>
              ))}
            </>
          )}
          {twitterAccepted && socialwall.twitter && (
            <>
              {socialwall.twitter.map((item, index) => (
                <Grid item key={index}>
                  <TwitterEmbed url={item} width={380} height={650} />
                </Grid>
              ))}
            </>
          )}
          {facebookAccepted && socialwall.facebook && (
            <>
              {socialwall.facebook.map((item, index) => (
                <Grid item key={index}>
                  <FacebookEmbed url={item} width={380} />
                </Grid>
              ))}
            </>
          )}
          {!(twitterAccepted || instagramAccepted || facebookAccepted) && (
            <Grid item maxWidth="lg" mx="auto">
              <Typography component="h3" variant="h4" color="text.secondary" sx={{ my: 2 }}>
                {hasHydrated && socialWallText[language].description3}
              </Typography>
              <Button variant="outlined" sx={{ color: 'accent.main' }} onClick={() => setCookieDialogVisible(true)}>
                <Typography variant="body1">{hasHydrated && socialWallText[language].settings}</Typography>
              </Button>
            </Grid>
          )}
        </Grid>
      )}
    </Grid>
  )
}

export default SocialWall
