import {h} from 'preact' /** @jsx h */
import HomeIcon from '@material-ui/icons/People'
import WeatherIcon from '@material-ui/icons/CloudOutlined'
import StocksIcon from '@material-ui/icons/TrendingUp'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'

export default function NavList({callBack}) {
  return (
    <List>
      <Link href="/">
        <ListItem button key="Home" onClick={callBack}>
          <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link href="/weather">
        <ListItem button key="Weather" onClick={callBack}>
          <ListItemIcon><WeatherIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Weather" />
        </ListItem>
      </Link>
      <Link href="/stocks">
        <ListItem button key="Stocks" onClick={callBack}>
          <ListItemIcon><StocksIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Stocks" />
        </ListItem>
      </Link>
    </List>
  )
}