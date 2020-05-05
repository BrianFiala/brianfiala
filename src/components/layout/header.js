import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import MyAppBar from '../MyAppBar'
import MyDrawer from '../MyDrawer'
import {Paper} from '@material-ui/core'

export default function Header({toggleTheme}) {
  const [open, setOpen] = useState(false)
  function toggleDrawer() {setOpen(!open)}

  return (
    <header>
      <MyAppBar
        menuCallback={toggleDrawer}
        toggleTheme={toggleTheme}  />
      <Paper>
        {/* TODO: toggle drawer is not working */}
        <MyDrawer open={open} toggleDrawer={toggleDrawer} />
      </Paper>
    </header>
  )
}
