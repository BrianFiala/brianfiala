import {h} from 'preact' /** @jsx h */
import {useState} from 'preact/hooks'
import {Paper} from '@material-ui/core'
import MyAppBar from '../MyAppBar'
import MyDrawer from '../MyDrawer'

export default function Header({toggleTheme}) {
  const [open, setOpen] = useState(false)
  function toggleDrawer() {setOpen(!open)}

  return (
    <header>
      <MyAppBar menuCallback={toggleDrawer} toggleTheme={toggleTheme}  />
      <Paper>
        <MyDrawer open={open} />
      </Paper>
    </header>
  )
}
