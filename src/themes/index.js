import { createMuiTheme } from '@material-ui/core/styles'
import { blueGrey, grey } from '@material-ui/core/colors'
const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: blueGrey,
    secondary: grey
  }
})

export default theme