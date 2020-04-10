import { ThemeProvider } from '@material-ui/core/styles'
import { useState } from 'preact/hooks'
import { Router } from 'preact-router'
import theme from '../themes'
import Header from './Header'
import Home from '../routes/home'
import NotFound from '../routes/404'
import Weather from '../routes/weather'
import Stocks from '../routes/stocks'

export default function Body() {
  const [currentUrl, setCurrentUrl] = useState('')
  function handleRoute(e) { setCurrentUrl(e.url) }

  return (
    <ThemeProvider theme={theme}>
      <div id="app">
        <Header selectedRoute={currentUrl} />
        <Router onChange={handleRoute}>
          <Home path="/" />
          <Weather path="/weather" />
          <Stocks path="/stocks" />
          <NotFound default />
        </Router>
      </div>
    </ThemeProvider>
  )
}