import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import FormControlLabel from '@mui/material/FormControlLabel'
import { useTheme } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState, useEffect, ChangeEvent } from 'react'

export type CookieDialogProps = {
  visible: boolean
  categories: CookieDialogCategory[]
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
  optionsDialogDescriptionBelow: string
  optionsDialogSave: string
  optionsDialogAccept: string
}

export const cookieDialogText: CookieDialogStrings = {
  mainDialogTitle: 'Social Media Inhalte',
  mainDialogDescription:
    'Wir nutzen Cookies, um Ihnen die bestmögliche Nutzung unserer Webseite zu ' +
    'ermöglichen und unsere Kommunikation mit Ihnen zu verbessern. Wir berücksichtigen hierbei ' +
    'Ihre Präferenzen und verarbeiten Daten für Marketing, Analytics und Personalisierung nur, ' +
    'wenn Sie uns durch Klicken auf "Zustimmen und weiter" Ihre Einwilligung geben oder über den ' +
    'Button „Cookie Präferenzen setzen“ eine spezifische Auswahl festlegen. Sie können Ihre ' +
    'Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Informationen zu den einzelnen ' +
    'verwendeten Cookies sowie die Widerrufsmöglichkeit finden Sie in unserer Datenschutzerklärung und in der Cookie-Richtlinie.',
  mainDialogOptions: 'Einstellungen',
  mainDialogAccept: 'Zustimmen und Weiter',
  optionsDialogTitle: 'Ihre Einstellungen zu Cookies für diese Website',
  optionsDialogDescriptionAbove:
    'Wir nutzen Cookies, um Ihnen die bestmögliche Nutzung unserer Webseite zu ermöglichen und ' +
    'unsere Kommunikation mit Ihnen zu verbessern. Treffen Sie hier Ihre persönliche Präferenz:',
  optionsDialogDescriptionBelow:
    'Detaillierte Informationen zu den Cookies und eingesetzten Tracking Tools können Sie unserer ' +
    'Datenschutzerklärung oder der Cookie-Richtlinie entnehmen. Sie können Ihre gesetzte Präferenz ' +
    'jederzeit anpassen, indem Sie diesen Cookie Manager über den Link in der Datenschutzerklärung aufrufen.',
  optionsDialogSave: 'Auswahl speichern',
  optionsDialogAccept: 'Alle akzeptieren',
}

export const CookieDialog = (props: CookieDialogProps) => {
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))

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
    props.onAccept(props.categories.filter((category) => categories[category.key] ?? category.isNecessary ?? false))
  }

  const handleAcceptAll = () => {
    props.onAccept(props.categories)
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newCategories = { ...categories }
    newCategories[event.target.name] = event.target.checked
    setCategories(newCategories)
  }

  return (
    <Dialog open={visible} fullScreen={fullScreen} scroll="paper">
      {!optionsVisible && (
        <>
          <DialogTitle>{cookieDialogText.mainDialogTitle}</DialogTitle>
          <DialogContent>
            <Typography variant="body1">{cookieDialogText.mainDialogDescription}</Typography>
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={handleOptionsClick}>
              <Typography variant="body1">{cookieDialogText.mainDialogOptions}</Typography>
            </Button>
            <Button variant="contained" color="primary" onClick={handleAcceptAll}>
              <Typography variant="body1">{cookieDialogText.mainDialogAccept}</Typography>
            </Button>
          </DialogActions>
        </>
      )}
      {optionsVisible && (
        <>
          <DialogTitle>{cookieDialogText.optionsDialogTitle}</DialogTitle>
          <DialogContent>
            <Typography variant="body1">{cookieDialogText.optionsDialogDescriptionAbove}</Typography>
            <Box
              sx={{
                margin: '0 4px',
              }}
            >
              {props.categories?.map((category, index) => {
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
                      label={<Typography variant="body1">{category.title}</Typography>}
                      labelPlacement="end"
                    />
                    <Typography
                      variant="body2"
                      sx={{
                        fontSize: '11px',
                      }}
                    >
                      {category.description}
                    </Typography>
                  </Box>
                )
              })}
            </Box>
            <Typography variant="body1">{cookieDialogText.optionsDialogDescriptionBelow}</Typography>
          </DialogContent>
          <DialogActions>
            <Box marginRight="auto">
              <Button variant="text" onClick={handleAccept} size="small">
                <Typography variant="body1">{cookieDialogText.optionsDialogSave}</Typography>
              </Button>
            </Box>
            <Button variant="contained" color="primary" onClick={handleAcceptAll}>
              <Typography variant="body1">{cookieDialogText.optionsDialogAccept}</Typography>
            </Button>
          </DialogActions>
        </>
      )}
    </Dialog>
  )
}
