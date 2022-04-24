import {h} from 'preact' /** @jsx h */
import {useEffect} from 'preact/hooks'
import {Router} from 'preact-router'
import {StoreProvider} from '../../api/StoreProvider'
// import NotFound from '../../routes/NotFound'
import Weather from '../../routes/Weather'
import Stocks from '../../routes/Stocks'
import Home from '../../routes/Home'
import Videos from '../../routes/Videos'
import Develop from '../../routes/Develop'
import PrivacyPolicy from '../../routes/PrivacyPolicy'
import TermsOfService from '../../routes/TermsOfService'

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
    document.querySelectorAll('.loader-wrapper').forEach(loader => removeLoader(loader))
  }, [])

  return (
    <StoreProvider>
      <Router>
        <Home default path="/" />
        <Weather path="/weather" />
        <Stocks path="/stocks" />
        <Videos path="/videos" />
        <Develop path="/develop" />
        <PrivacyPolicy path="/privacypolicy" />
        <TermsOfService path="/termsofservice" />
        {/* <NotFound  /> */}
      </Router>
    </StoreProvider>
  )
}