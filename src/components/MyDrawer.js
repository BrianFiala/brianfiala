import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import NavList from './NavList'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Drawer} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  appBarSpacer: theme.mixins.toolbar,
  drawerPaper: {
    width: 160,
    [theme.breakpoints.up('sm')]: {
      width: 200
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    width: 0,
    border: 0,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  }
}))

export default function MyDrawer({open, toggleDrawer}) {
  const classes = useStyles(useTheme())

  return (
    <Drawer
      classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}}
      open={open}>
      <div className={classes.appBarSpacer} />
      {/* TODO: toggle drawer is not working */}
      <NavList callback={toggleDrawer} />
    </Drawer>
  )
}
