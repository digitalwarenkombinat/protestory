import { createTheme, responsiveFontSizes } from '@mui/material/styles'

const primaryColor = '#f50057'
const secondaryColor = '#311b92'
const accentColor = '#00f59f'
const backgroundColor = '#ffe1e1'

let theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: accentColor,
    },
    secondary: {
      main: secondaryColor,
      contrastText: accentColor,
    },
    accent: {
      main: accentColor,
    },
    background: {
      default: backgroundColor,
    },
    text: {
      primary: '#000',
      secondary: '#FFF',
    },
  },
  typography: {
    fontFamily: 'Fabrik',
    h1: {
      fontFamily: 'Hey August',
      fontSize: '4rem',
    },
    h2: {
      fontFamily: 'Hey August',
    },
  },
  components: {
    MuiAvatar: {
      styleOverrides: {
        root: {
          margin: '1rem',
          padding: '0.5rem',
          height: '3rem',
          width: '3rem',
        },
        img: {
          objectFit: 'contain',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          fontSize: '6rem',
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          backgroundColor: secondaryColor,
          position: 'fixed',
          bottom: 64,
          right: 64,
        },
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: backgroundColor,
          border: '4px solid #f50057',
          borderRadius: '25px',
          width: '25%',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: 'none',
        },
      },
    },
  },
})

theme = responsiveFontSizes(theme)

export default theme

declare module '@mui/material/styles' {
  interface Palette {
    accent: Palette['primary']
  }
  interface PaletteOptions {
    accent: PaletteOptions['primary']
  }
}
