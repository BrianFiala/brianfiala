import {h} from 'preact' /** @jsx h */
import MenuIcon from '@material-ui/icons/Menu'
import BrightnessIcon from '@material-ui/icons/Brightness4Outlined'
import {makeStyles, useTheme} from '@material-ui/styles'
import {AppBar, Toolbar, Typography, IconButton} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginRight: theme.spacing(6)
    }
  },
  title: {
    flexGrow: 1
  }
}))

export default function MyAppBar({menuCallback, toggleTheme}) {
  const classes = useStyles(useTheme())

  return (
    <AppBar
      color="primary"
      position="absolute"
      className={classes.appBar}>
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="expand menu"
          onClick={menuCallback}
          className={classes.menuButton}>
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          className={classes.title}>
          Widgety Dashboard
        </Typography>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="toggle theme"
          onClick={toggleTheme}>
          <BrightnessIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}
