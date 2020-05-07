import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../api/HeaderStateProvider'
import HomeIcon from '@material-ui/icons/People'
import WeatherIcon from '@material-ui/icons/CloudOutlined'
import StocksIcon from '@material-ui/icons/TrendingUp'
import DeveloperIcon from '@material-ui/icons/DeveloperMode'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'

const styles = {
  list: {
    overflow: 'hidden'
  },
  link: {
    display: 'flex'
  }
}

// TODO: callback not working
export default function NavList() {
  const {toggleDrawer} = useHeaderState()
  return (
    <List style={styles.list}>
      <ListItem component="li" button key="Home" onClick={event => toggleDrawer(event, false)}>
        <Link style={styles.link} href="/">
          <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="Weather" onClick={event => toggleDrawer(event, false)}>
        <Link style={styles.link} href="/weather">
          <ListItemIcon><WeatherIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Weather" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="Stocks" onClick={event => toggleDrawer(event, false)}>
        <Link style={styles.link} href="/stocks">
          <ListItemIcon><StocksIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Stocks" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="Develop" onClick={event => toggleDrawer(event, false)}>
        <Link style={styles.link} href="/develop">
          <ListItemIcon><DeveloperIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Develop" />
        </Link>
      </ListItem>
    </List>
  )
}