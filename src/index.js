import 'typeface-roboto'
import './styles'
import theme from './themes'
import { ThemeProvider } from '@material-ui/styles'
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