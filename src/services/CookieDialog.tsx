import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import { useState, useEffect, ChangeEvent } from 'react'

import { cookieDialogText } from 'config/cookie'
import useStore from 'utils/store'
import { useHasHydrated } from 'utils/useHasHydrated'

export type CookieDialogProps = {
  visible: boolean
  // eslint-disable-next-line no-unused-vars
  onAccept: (categories: CookieDialogCategory[]) => void
}

export interface CookieDialogCategory {
  key: string
  title: string
  description: string
  isNecessary?: boolean
}

export const CookieDialog = (props: CookieDialogProps) => {
  const hasHydrated = useHasHydrated()
  const { language } = useStore()
  const defaultCategories: CookieDialogCategory[] = [
    {
      key: 'twitter',
      title: 'Twitter',
      description: hasHydrated && cookieDialogText[language].descriptionTwitter,
    },
    {
      key: 'instagram',
      title: 'Instagram',
      description: hasHydrated && cookieDialogText[language].descriptionInstagram,
    },
    {
      key: 'youtube',
      title: 'Youtube',
      description: hasHydrated && cookieDialogText[language].descriptionYoutube,
    },
    {
      key: 'facebook',
      title: 'Facebook',
      description: hasHydrated && cookieDialogText[language].descriptionFacebook,
    },
  ]
  const [visible, setVisible] = useState(props.visible)
  const [optionsVisible, setOptionsVisible] = useState(false)
  const [categories, setCategories] = useState<{
    [key: string]: boolean
  }>({})

  useEffect(() => {
    setVisible(props.visible)
  }, [props.visible])

  const handleOptionsClick = () => {
    setOptionsVisible(true)
  }

  const handleAccept = () => {
    props.onAccept(defaultCategories.filter((category) => categories[category.key] ?? category.isNecessary ?? false))
  }

  const handleAcceptAll = () => {
    props.onAccept(defaultCategories)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCategories = { ...categories }
    newCategories[event.target.name] = event.target.checked
    setCategories(newCategories)
  }

  return (
    <Dialog open={visible} scroll="paper">
      {!optionsVisible && (
        <>
          <DialogTitle>{hasHydrated && cookieDialogText[language].mainDialogTitle}</DialogTitle>
          <DialogContent>
            <Typography variant="h6">{hasHydrated && cookieDialogText[language].mainDialogDescription}</Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={handleOptionsClick}>
              <Typography variant="h6">{hasHydrated && cookieDialogText[language].mainDialogOptions}</Typography>
            </Button>
            <Button variant="text" onClick={handleAcceptAll}>
              <Typography variant="h6">{hasHydrated && cookieDialogText[language].mainDialogAccept}</Typography>
            </Button>
          </DialogActions>
        </>
      )}
      {optionsVisible && (
        <>
          <DialogTitle>{hasHydrated && cookieDialogText[language].optionsDialogTitle}</DialogTitle>
          <DialogContent>
            <Typography variant="h6">{hasHydrated && cookieDialogText[language].optionsDialogDescriptionAbove}</Typography>
            <Box
              sx={{
                margin: '0 4px',
              }}
            >
              {defaultCategories?.map((category, index) => {
                return (
                  <Box
                    key={index}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      margin: '12px 8px',
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Switch
                          checked={categories[category.key] ?? category.isNecessary ?? false}
                          onChange={category.isNecessary ?? false ? undefined : handleChange}
                          name={category.key}
                          color="primary"
                        />
                      }
                      label={<Typography variant="h6">{category.title}</Typography>}
                      labelPlacement="end"
                    />
                    <Typography variant="body1">{category.description}</Typography>
                  </Box>
                )
              })}
            </Box>
          </DialogContent>
          <DialogActions>
            <Box marginRight="auto">
              <Button variant="contained" color="primary" onClick={handleAccept} size="small">
                <Typography variant="h6">{hasHydrated && cookieDialogText[language].optionsDialogSave}</Typography>
              </Button>
            </Box>
            <Button variant="text" onClick={handleAcceptAll}>
              <Typography variant="h6">{hasHydrated && cookieDialogText[language].optionsDialogAccept}</Typography>
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}
