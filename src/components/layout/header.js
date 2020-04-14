import { h } from 'preact' /** @jsx h */
import { useState } from 'preact/hooks'
import MyAppBar from './MyAppBar'
import MyDrawer from './MyDrawer'

export default function Header() {
  const [open, setOpen] = useState(false)
  function toggleDrawer() { setOpen(!open) }

  return (
    <header>
      <MyAppBar menuCallback={toggleDrawer} />
      <MyDrawer open={open} />
    </header>
  )
}
