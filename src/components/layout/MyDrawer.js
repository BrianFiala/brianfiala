import { h } from 'preact' /** @jsx h */
import clsx from 'clsx'
import { Drawer } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/styles'
import NavList from './NavList'

const drawerWidth = 200
const useStyles = makeStyles((theme) => ({
  appBarSpacer: theme.mixins.toolbar,
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    }),
    padding: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(1)
    }
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9)
    }
  }
}))

export default function Header({open}) {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <Drawer
      variant="permanent"
      classes={{ paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose) }}
      open={open}>
      <div className={classes.appBarSpacer} />
      <NavList />
    </Drawer>
  )
}
