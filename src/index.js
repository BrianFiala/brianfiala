// import { ThemeProvider } from '@material-ui/styles'
import 'typeface-roboto'
import './style'
import Body from './components/app'
import CssBaseline from '@material-ui/core/CssBaseline'

export default function App() {
  return (
    <>
      <CssBaseline />
      <Body />
    </>
  )
}