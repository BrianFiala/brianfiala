import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, grey } from '@material-ui/core/colors'
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    type: 'light',
    primary: grey,
    secondary: blueGrey
  }
})

export default theme