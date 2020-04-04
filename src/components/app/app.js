import { h, render } from 'preact'
import { Router } from 'preact-router'
import Header from '../header/Header'
import Home from '../../routes/home/Home'
import Profile from '../../routes/profile/Profile'
import Demos from '../../routes/demos/Demos'
import { Theme } from '../../context/ThemeContext'
import { useContext } from 'preact/hooks'

export default function App() {
  const theme = useContext(Theme)

  return (
    <div id="app" class={theme}>
      <Header />
      <Router>
        <Home path="/" />
        <Profile path="/profile/" user="Brian Fiala" />
        <Profile path="/profile/:user" />
        <Demos path="/demos" />
      </Router>
    </div>
  )
}
App.displayName = 'App'

