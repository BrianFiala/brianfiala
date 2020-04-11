import 'typeface-roboto'
import theme from './theme.js'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Layout from './components/Layout'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout />
    </ThemeProvider>
  )
}