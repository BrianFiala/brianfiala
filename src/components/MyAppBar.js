import {h} from 'preact' /** @jsx h */
import {useHeaderState} from '../api/HeaderStateProvider'
import MenuIcon from '@material-ui/icons/Menu'
import BrightnessIcon from '@material-ui/icons/Brightness4Outlined'
import {makeStyles, useTheme} from '@material-ui/styles'
import {AppBar, IconButton, Slide, Toolbar, Typography, useScrollTrigger} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  appBar: {
    zIndex: 1301
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(6)
    }
  }
}))

export default function MyAppBar({toggleTheme}) {
  const {toggleDrawer} = useHeaderState()
  const classes = useStyles(useTheme())
  const trigger = useScrollTrigger({threshold: 32})

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        color="primary"
        className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="expand menu"
            onClick={event => toggleDrawer(event)}
            onKeyDown={event => toggleDrawer(event)}>
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
    </Slide>
  )
}
