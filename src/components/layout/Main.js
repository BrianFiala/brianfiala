import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Router} from 'preact-router'
import {StoreProvider} from '../../api/StoreProvider'
import NotFound from '../../routes/NotFound'
import Weather from '../../routes/Weather'
import Stocks from '../../routes/Stocks'
import Home from '../../routes/Home'
import Develop from '../../routes/Develop'

function removeLoader(loader) {
  requestAnimationFrame(() => {
    loader.style.opacity = 0
    setTimeout(() => {
      requestAnimationFrame(() => {
        loader.remove()
      })
    }, 300)
  })
}

export default function Main() {

  useEffect(() => {
    document.querySelectorAll('.loader-wrapper').forEach(removeLoader)
  }, [])

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