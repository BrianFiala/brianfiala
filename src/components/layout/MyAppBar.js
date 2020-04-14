import { h } from 'preact' /** @jsx h */
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import SettingsIcon from '@material-ui/icons/Settings'

const useStyles = makeStyles((theme) => ({
  toolbar: {
    paddingRight: theme.spacing(4) // keep right padding when drawer closed
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(6)
    }
  },
  settingsButton: {
    marginRight: -theme.spacing(1) - 4
  },
  title: {
    flexGrow: 1
  }
}))

export default function Header({menuCallback}) {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <AppBar color="primary" position="absolute" className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={menuCallback}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          Widgety Dashboard
        </Typography>
        <IconButton color="inherit" className={classes.settingsButton}>
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
