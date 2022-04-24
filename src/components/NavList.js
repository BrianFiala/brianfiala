import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../api/HeaderStateProvider'
import HomeIcon from '@material-ui/icons/People'
import WeatherIcon from '@material-ui/icons/CloudOutlined'
import StocksIcon from '@material-ui/icons/TrendingUp'
import DeveloperIcon from '@material-ui/icons/DeveloperMode'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import PolicyIcon from '@material-ui/icons/Policy'
import CopyrightIcon from '@material-ui/icons/Copyright'
import {List, Link, ListItem, ListItemText, ListItemIcon} from '@material-ui/core'

const styles = {
  list: {
    overflow: 'hidden'
  },
  link: {
    display: 'flex',
    height: '100%',
    width: '100%'
  }
}

export default function NavList() {
  const {toggleDrawer} = useHeaderState()

  function onClick(event) {
    toggleDrawer(event, false)
  }

  return (
    <List style={styles.list}>
      <ListItem component="li" button key="Home"
        onClick={onClick}>
        <Link style={styles.link} href="/">
          <ListItemIcon><HomeIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Home" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="Weather"
        onClick={onClick}>
        <Link style={styles.link} href="/weather">
          <ListItemIcon><WeatherIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Weather" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="Stocks"
        onClick={onClick}>
        <Link style={styles.link} href="/stocks">
          <ListItemIcon><StocksIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Stocks" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="Videos"
        onClick={onClick}>
        <Link style={styles.link} href="/videos">
          <ListItemIcon><VideoLibraryIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Videos" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="Develop"
        onClick={onClick}>
        <Link style={styles.link} href="/develop">
          <ListItemIcon><DeveloperIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Develop" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="PrivacyPolicy"
        onClick={onClick}>
        <Link style={styles.link} href="/privacypolicy">
          <ListItemIcon><PolicyIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Privacy" />
        </Link>
      </ListItem>
      <ListItem component="li" button key="TermsOfService"
        onClick={onClick}>
        <Link style={styles.link} href="/termsofservice">
          <ListItemIcon><CopyrightIcon color="primary" /></ListItemIcon>
          <ListItemText primary="Terms" />
        </Link>
      </ListItem>
    </List>
  )
}