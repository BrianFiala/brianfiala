import 'typeface-roboto'
import './style'
import theme from './theme.js'
import { ThemeProvider } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Layout from './components/Layout'

export default function App() {
  return (
    <div id="app">
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </div>
  )
}