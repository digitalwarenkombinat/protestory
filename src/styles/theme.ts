import {
  createTheme,
  responsiveFontSizes,
} from '@mui/material/styles'

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
    fontFamily: 'Fabrik, Arial',
    h1: {
      fontFamily: 'Hey August',
      fontSize: '10rem',
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
        },
        @font-face {
          fontFamily: 'Fabrik';
          fontStyle: 'normal';
          fontDisplay: 'swap';
          fontWeight: 400;
          src: local('Fabrik'), url(./fonts/Fabrik.otf) format('opentype');
        },
      `,
    },
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
    MuiDialog: {
      styleOverrides: {
        root: {
          bottom: 64,
          right: 64,
          alignItems: 'flex-end',
        },
        container: {
          alignItems: 'flex-end',
          justifyContent: 'flex-end',
        },
        paper: {
          minWidth: 400,
          minHeight: 400,
          marginBottom: '96px',
          marginRight: '24px',
          border: 'none',
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
