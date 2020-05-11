import {h} from 'preact' /** @jsx h */
import clsx from 'clsx'
import NavList from './NavList'
import {useHeaderState} from '../api/HeaderStateProvider'
import {makeStyles, useTheme} from '@material-ui/styles'
import {Drawer, Paper} from '@material-ui/core'

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

export default function MyDrawer() {
  const {open, toggleDrawer} = useHeaderState()
  const classes = useStyles(useTheme())

  return (
    <Paper>
      <Drawer
        classes={{paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose)}}
        open={open}
        onClose={event => toggleDrawer(event, false)}
        transitionDuration={420}>
        <div className={classes.appBarSpacer} />
        <NavList />
      </Drawer>
    </Paper>
  )
}
