import {h} from 'preact' /** @jsx h */
import {Router} from 'preact-router'
import {StoreProvider} from '../../api/StoreProvider'
import NotFound from '../../routes/NotFound'
import Weather from '../../routes/Weather'
import Stocks from '../../routes/Stocks'
import Home from '../../routes/Home'
import Develop from '../../routes/Develop'

export default function Main() {
  return (
    <StoreProvider>
      <Router>
        <Home path="/" />
        <Weather path="/weather" />
        <Stocks path="/stocks" />
        <Develop path="/develop" />
        <NotFound default />
      </Router>
    </StoreProvider>
  )
}