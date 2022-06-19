import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'

const primaryColor = '#e73257'
const secondaryColor = '#292780'
const accentColor = '#ffe1e1'

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
      contrastText: '#000000',
    },
    text: {
      secondary: accentColor,
    },
  },
  typography: {
    h1: {
      fontFamily: 'Hey August',
    },
    h2: {
      fontFamily: 'Hey August',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          fontFamily: 'Hey August';
          fontStyle: 'normal';
          fontDisplay: 'swap';
          fontWeight: 400;
          src: local('Hey August'), url(./fonts/HeyAugust.otf) format('opentype');
        }
      `,
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
