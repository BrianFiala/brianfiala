import { useState } from 'preact/hooks'
import MyDrawerNav from './MyDrawerNav'
import { AppBar, Drawer, Hidden, IconButton, Toolbar, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import MenuIcon from '@material-ui/icons/Menu'
import { makeStyles, useTheme } from '@material-ui/core/styles'

const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },

  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  closeMenuButton: {
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1)
  }
}))

function ResponsiveDrawer() {
  const theme = useTheme()
  const classes = useStyles(theme)
  const [open, setOpen] = useState(false)
  function toggleDrawer() { setOpen(!open) }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Super Awesome Webpage
          </Typography>
        </Toolbar>
      </AppBar>
      
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            open={open}
            onClose={toggleDrawer}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <IconButton onClick={toggleDrawer} className={classes.closeMenuButton}>
              <CloseIcon />
            </IconButton>
            <MyDrawerNav callBack={toggleDrawer} />
          </Drawer>
        </Hidden>
      </nav>
    </div>
  )
}
export default ResponsiveDrawer