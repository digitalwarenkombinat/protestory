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

export interface CookieDialogStrings {
  // Main Dialog
  mainDialogTitle: string
  mainDialogDescription: string
  mainDialogAccept: string
  mainDialogOptions: string
  // Options Dialog
  optionsDialogTitle: string
  optionsDialogDescriptionAbove: string
  optionsDialogSave: string
  optionsDialogAccept: string
}

export const cookieDialogText: CookieDialogStrings = {
  mainDialogTitle: 'Social Media Inhalte',
  mainDialogDescription:
    'Wir nutzen Cookies, um dir Medieninhalte Dritter anzeigen zu können. Wir verarbeiten die Daten nur, wenn du uns durch Klicken auf "Zustimmen und Weiter" deine Einwilligung gibst oder über den Button "Einstellungen" eine spezifische Auswahl festlegst.',
  mainDialogOptions: 'Einstellungen',
  mainDialogAccept: 'Zustimmen und Weiter',
  optionsDialogTitle: 'Deine Einstellungen zu Cookies für diese Website',
  optionsDialogDescriptionAbove: 'Wir nutzen Cookies, um dir Medieninhalte Dritter anzeigen zu können. Triff hier deine persönliche Präferenz:',
  optionsDialogSave: 'Auswahl speichern',
  optionsDialogAccept: 'Alle akzeptieren',
}

export const CookieDialog = (props: CookieDialogProps) => {
  const defaultCategories: CookieDialogCategory[] = [
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
      key: 'youtube',
      title: 'Youtube',
      description: 'Inhalte von Youtube anzeigen.',
    },
    {
      key: 'facebook',
      title: 'Facebook',
      description: 'Inhalte von Facebook anzeigen.',
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
          <DialogTitle>{cookieDialogText.mainDialogTitle}</DialogTitle>
          <DialogContent>
            <Typography variant="h6">{cookieDialogText.mainDialogDescription}</Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" color="primary" onClick={handleOptionsClick}>
              <Typography variant="h6">{cookieDialogText.mainDialogOptions}</Typography>
            </Button>
            <Button variant="text" onClick={handleAcceptAll}>
              <Typography variant="h6">{cookieDialogText.mainDialogAccept}</Typography>
            </Button>
          </DialogActions>
        </>
      )}
      {optionsVisible && (
        <>
          <DialogTitle>{cookieDialogText.optionsDialogTitle}</DialogTitle>
          <DialogContent>
            <Typography variant="h6">{cookieDialogText.optionsDialogDescriptionAbove}</Typography>
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
                <Typography variant="h6">{cookieDialogText.optionsDialogSave}</Typography>
              </Button>
            </Box>
            <Button variant="text" onClick={handleAcceptAll}>
              <Typography variant="h6">{cookieDialogText.optionsDialogAccept}</Typography>
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}
