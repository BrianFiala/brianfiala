import { h } from 'preact' /** @jsx h */
import { useState } from 'preact/hooks'
import 'typeface-roboto'
import './styles'
import defaults from './themes'
import { CssBaseline } from '@material-ui/core'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Layout from './components/layout/Layout'

export default function App() {
  const [theme, setTheme] = useState(createMuiTheme(defaults))

  function toggleTheme() {
    const newTheme = { ...defaults }
    newTheme.palette.type = theme.palette.type === 'light' ? 'dark' : 'light'
    setTheme(createMuiTheme(newTheme))
  }

  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout toggleTheme={toggleTheme} />
      </ThemeProvider>
    </div>
  )
}