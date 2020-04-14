import { h } from 'preact' /** @jsx h */
import 'typeface-roboto'
import './styles'
import theme from './themes'
import { ThemeProvider } from '@material-ui/styles'
import { CssBaseline } from '@material-ui/core'
import Layout from './components/layout/Layout'

export default function App() {
  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </div>
  )
}