import { useState } from 'preact/hooks'
import { Router } from 'preact-router'
import Header from './header'
import Home from '../routes/home'
import NotFound from '../routes/404'
import Weather from '../routes/weather'
import Stocks from '../routes/stocks'

export default function Body() {
  const [currentUrl, setCurrentUrl] = useState('')
  function handleRoute(e) { setCurrentUrl(e.url) }

  return (
    <div id="app">
      <Header selectedRoute={currentUrl} />
      <Router onChange={handleRoute}>
        <Home path="/" />
        <Weather path="/weather" />
        <Stocks path="/stocks" />
        <NotFound default />
      </Router>
    </div>
  )
}