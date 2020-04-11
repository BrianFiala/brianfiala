import { List, Link, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { Dashboard, People, BarChart } from '@material-ui/icons'

export default function NavList({callBack}) {
  return (
    <List>
      <Link href="/">
        <ListItem button key="Home" onClick={callBack}>
          <ListItemIcon><Dashboard /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link href="/weather">
        <ListItem button key="Weather" onClick={callBack}>
          <ListItemIcon><People /></ListItemIcon>
          <ListItemText primary="Weather" />
        </ListItem>
      </Link>
      <Link href="/stocks">
        <ListItem button key="Stocks" onClick={callBack}>
          <ListItemIcon><BarChart /></ListItemIcon>
          <ListItemText primary="Stocks" />
        </ListItem>
      </Link>
    </List>
  )
}