import Grid from '@mui/material/Grid'
import NoSsr from '@mui/material/NoSsr'
import { useEffect, useState } from 'react'
import { FacebookEmbed, InstagramEmbed, TwitterEmbed } from 'react-social-media-embed'

import { tweetwall } from 'config'
import { socialwall } from 'config/socialwall'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'
import { CookieDialog, CookieDialogCategory } from 'utils/CookieDialog'
import Typography from '@mui/material/Typography'

const categories: CookieDialogCategory[] = [
  {
    key: 'twitter',
    title: 'Twitter',
    description: 'Inhalte von Twitter anzeigen.',
  },
  {
    key: 'instagram',
    title: 'Instagram',
    description: 'Inhalte von Instagram anzeigen.',
  },
  {
    key: 'facebook',
    title: 'Facebook',
    description: 'Inhalte von Facebook anzeigen.',
  },
]

const SocialWall = () => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const { acceptedCategories } = useStore()
  const [cookieDialogVisible, setCookieDialogVisible] = useState(acceptedCategories.length === 0)
  const [twitterAccepted, setTwitterAccepted] = useState(false)
  const [instagramAccepted, setInstagramAccepted] = useState(false)
  const [facebookAccepted, setFacebookAccepted] = useState(false)

  useEffect(() => {
    setTwitterAccepted(acceptedCategories.some((category) => category['key'] === 'twitter'))
    setInstagramAccepted(acceptedCategories.some((category) => category['key'] === 'instagram'))
    setFacebookAccepted(acceptedCategories.some((category) => category['key'] === 'facebook'))
  }, [])

  const handleAccept = (acceptedCategories: CookieDialogCategory[]) => {
    useStore.getState().changeAcceptedCategories(acceptedCategories)
    setTwitterAccepted(acceptedCategories.some((category) => category['key'] === 'twitter'))
    setInstagramAccepted(acceptedCategories.some((category) => category['key'] === 'instagram'))
    setFacebookAccepted(acceptedCategories.some((category) => category['key'] === 'facebook'))
    setCookieDialogVisible(false)
  }

  return (
    <Grid container alignItems="center" textAlign="center" flexWrap="wrap" justifyContent="center" my="2em">
      <Grid item maxWidth="lg" mx="auto">
        <Typography component="h2" variant="h2" color="text.secondary">
          Social Media Wall
        </Typography>
        <Typography component="h3" variant="h4" color="text.secondary">
          {hasHydrated && tweetwall[language].description1}
        </Typography>
        <Typography component="h3" variant="h4" color="text.secondary" sx={{ my: 2 }}>
          {hasHydrated && tweetwall[language].description2}
        </Typography>
      </Grid>
      <CookieDialog visible={cookieDialogVisible} categories={categories} onAccept={handleAccept} />
      {!cookieDialogVisible && (
        <NoSsr defer>
          <Grid container justifyContent="center" spacing={{ xs: 1, sm: 2, md: 3 }}>
            {twitterAccepted && socialwall.twitter && (
              <>
                {socialwall.twitter.map((item, index) => (
                  <Grid item key={index}>
                    <TwitterEmbed url={item} width={380} />
                  </Grid>
                ))}
              </>
            )}
            {instagramAccepted && socialwall.instagram && (
              <>
                {socialwall.instagram.map((item, index) => (
                  <Grid item key={index}>
                    <InstagramEmbed url={item} width={380} />
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
          </Grid>
        </NoSsr>
      )}
    </Grid>
  )
}

export default SocialWall
