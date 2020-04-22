import {h} from 'preact' /** @jsx h */
import {Router} from 'preact-router'
import {StateProvider} from '../../api/StateProvider'
import NotFound from '../../routes/NotFound'
import Weather from '../../routes/Weather'
import Stocks from '../../routes/Stocks'
import Home from '../../routes/Home'
import Develop from '../../routes/Develop'

export default function Main() {  
  return (
    <StateProvider>
      <Router>
        <Home path="/" />
        <Weather path="/weather" />
        <Stocks path="/stocks" />
        <Develop path="/develop" />
        <NotFound default />
      </Router>
    </StateProvider>
  )
}