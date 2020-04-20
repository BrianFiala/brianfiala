import {h} from 'preact' /** @jsx h */
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'
import {CloudOutlined, People, TrendingUp} from '@material-ui/icons'

export default function NavList({callBack}) {
  return (
    <List>
      <Link href="/">
        <ListItem button key="Home" onClick={callBack}>
          <ListItemIcon><People color="primary" /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link href="/weather">
        <ListItem button key="Weather" onClick={callBack}>
          <ListItemIcon><CloudOutlined color="primary" /></ListItemIcon>
          <ListItemText primary="Weather" />
        </ListItem>
      </Link>
      <Link href="/stocks">
        <ListItem button key="Stocks" onClick={callBack}>
          <ListItemIcon><TrendingUp color="primary" /></ListItemIcon>
          <ListItemText primary="Stocks" />
        </ListItem>
      </Link>
    </List>
  )
}