import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import 'typeface-roboto'
import './styles'
import defaults from './theme'
import {LoaderEffectProvider} from './effects/LoaderEffectProvider'
import Layout from './components/layout'
import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles'
import {CssBaseline} from '@material-ui/core'

export default function App() {
  const [theme, setTheme] = useState(createMuiTheme(defaults))

  function toggleTheme() {
    const newTheme = {...defaults}
    newTheme.palette.type = theme.palette.type === 'light' ? 'dark' : 'light'
    setTheme(createMuiTheme(newTheme))
  }

  return (
    <div id="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LoaderEffectProvider>
          <Layout toggleTheme={toggleTheme} />
        </LoaderEffectProvider>
      </ThemeProvider>
    </div>
  )
}