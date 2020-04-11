import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#ED4C67',
      main: '#833471',
      dark: '#6F1E51',
      contrastText: '#FFFFFF'
    },
    secondary: {
      light: '#FDA7DF',
      main: '#9980FA',
      dark: '#5758BB',
      contrastText: '#FFFFFF'
    }
  }
})

export default theme