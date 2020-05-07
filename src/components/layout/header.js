import {h} from 'preact' /** @jsx h */
import MyAppBar from '../MyAppBar'
import MyDrawer from '../MyDrawer'
import { HeaderStateProvider } from '../../api/HeaderStateProvider'

export default function Header({toggleTheme}) {
  return (
    <HeaderStateProvider>
      <header>
        <MyAppBar toggleTheme={toggleTheme} />
        <MyDrawer />
      </header>
    </HeaderStateProvider>
  )
}
