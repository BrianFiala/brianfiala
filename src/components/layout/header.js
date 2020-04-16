import { h } from 'preact' /** @jsx h */
import { useState } from 'preact/hooks'
import { Paper } from '@material-ui/core'
import MyAppBar from './MyAppBar'
import MyDrawer from './MyDrawer'

export default function Header() {
  const [open, setOpen] = useState(false)
  function toggleDrawer() { setOpen(!open) }

  return (
    <header>
      <MyAppBar menuCallback={toggleDrawer} />
      <Paper>
        <MyDrawer open={open} />
      </Paper>
    </header>
  )
}
