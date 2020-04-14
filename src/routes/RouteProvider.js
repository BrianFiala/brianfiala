import { h } from 'preact' /** @jsx h */
import { Router } from 'preact-router'
import NotFound from '../routes/NotFound.js'
import Weather from '../routes/Weather'
import Stocks from '../routes/Stocks'
import Home from '../routes/Home'

export default function RouteProvider() {
  return (
    <Router>
      <Home path="/" />
      <Weather path="/weather" />
      <Stocks path="/stocks" />
      <NotFound default />
    </Router>
  )
}

