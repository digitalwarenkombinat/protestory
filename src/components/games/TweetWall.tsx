import Grid from '@mui/material/Grid'
import NoSsr from '@mui/material/NoSsr'
import { useEffect, useState } from 'react'
import { FacebookEmbed, InstagramEmbed, TwitterEmbed } from 'react-social-media-embed'

import { tweetwall } from 'config'
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

const TweetWall = () => {
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
          <Grid container justifyContent="center" spacing={1}>
            {twitterAccepted && (
              <>
                <Grid item>
                  <TwitterEmbed url="https://twitter.com/digiwako/status/1588568318763421696" width={550} />
                </Grid>
                <Grid item>
                  <TwitterEmbed url="https://twitter.com/digiwako/status/1560164606462631936" width={550} />
                </Grid>
                <Grid item>
                  <TwitterEmbed url="https://twitter.com/digiwako/status/1523928527669714944" width={550} />
                </Grid>
              </>
            )}
            {instagramAccepted && (
              <>
                <Grid item>
                  <InstagramEmbed url="https://www.instagram.com/p/ChZJpa_tYNq/" width={550} />
                </Grid>
                <Grid item>
                  <InstagramEmbed url="https://www.instagram.com/p/CfyTsb8Nf63/" width={550} />
                </Grid>
                <Grid item>
                  <InstagramEmbed url="https://www.instagram.com/p/CkidBaMNJlD" width={550} />
                </Grid>
                <Grid item>
                  <InstagramEmbed url="https://www.instagram.com/p/Ch6uqCasDMA" width={550} />
                </Grid>
                <Grid item>
                  <InstagramEmbed url="https://www.instagram.com/p/Cki6HNEtku_" width={550} />
                </Grid>
                <Grid item>
                  <InstagramEmbed url="https://www.instagram.com/p/CkgEtV-tBeF" width={550} />
                </Grid>
                <Grid item>
                  <InstagramEmbed url="https://www.instagram.com/p/CdX_pKyt1M6" width={550} />
                </Grid>
              </>
            )}
            {facebookAccepted && (
              <Grid item>
                <FacebookEmbed url="https://www.facebook.com/permalink.php?story_fbid=4757764157610310&amp;id=809836785736420" width={550} />
              </Grid>
            )}
          </Grid>
        </NoSsr>
      )}
    </Grid>
  )
}

export default TweetWall
