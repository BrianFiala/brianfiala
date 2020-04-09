// import { h, Component } from 'preact' /** @jsx h */
// import { route } from 'preact-router'
// import { 
//   // TopAppBar,
//   Button,
//   Drawer
//   // List,
//   // Dialog,
//   // Switch
// } from '@material-ui/core'
// // import style from './style';

// export default class Header extends Component {
//   drawerRef = drawer => (this.drawer = drawer);
//   dialogRef = dialog => (this.dialog = dialog);
//   openSettings = () => this.dialog.MDComponent.show();
//   openDrawer = () => (this.drawer.MDComponent.open = true);
//   closeDrawer() {
//     this.drawer.MDComponent.open = false
//     this.state = { darkThemeEnabled: false }
//   }

//   toggleDarkTheme = () => {
//     this.setState({ darkThemeEnabled: !this.state.darkThemeEnabled },
//       () => {
//         if (this.state.darkThemeEnabled) document.body.classList.add('mdc-theme--dark')
//         else document.body.classList.remove('mdc-theme--dark')
//       }
//     )
//   }

//   linkTo = path => () => {
//     route(path)
//     this.closeDrawer()
//   };
  
//   goHome = this.linkTo('/');
//   goToWeather = this.linkTo('/weather');
//   goToStocks = this.linkTo('/stocks');

//   render(props) {
// 	  return (
// 	    <div>
// 	        {/* <Drawer anchor={'left'} open={true} variant={'temporary'}>
// 	          a bunch of stuff in a drawer
// 	        </Drawer> */}
// 	      {/* <TopAppBar className="topappbar">
// 	        <TopAppBar.Row>
// 	          <TopAppBar.Section align-start>
// 	            <TopAppBar.Icon menu onClick={this.openDrawer}>menu</TopAppBar.Icon>
// 	            <TopAppBar.Title>Amazeballer Website</TopAppBar.Title>
// 	          </TopAppBar.Section>
// 	          <TopAppBar.Section align-end shrink-to-fit onClick={this.openSettings}>
// 	            <TopAppBar.Icon>settings</TopAppBar.Icon>
// 	          </TopAppBar.Section>
// 	        </TopAppBar.Row>
// 	      </TopAppBar>
// 	      <Drawer modal ref={this.drawerRef}>
// 	        <Drawer.DrawerContent>
// 	          <Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
// 	            <List.ItemGraphic>home</List.ItemGraphic>
// 							Home
// 	          </Drawer.DrawerItem>
// 	          <Drawer.DrawerItem selected={props.selectedRoute === '/weather'} onClick={this.goToWeather}>
// 	            <List.ItemGraphic>account_circle</List.ItemGraphic>
// 							Weather
// 	          </Drawer.DrawerItem>
// 	          <Drawer.DrawerItem selected={props.selectedRoute === '/stocks'} onClick={this.goToStocks}>
// 	            <List.ItemGraphic>account_circle</List.ItemGraphic>
// 							Stocks
// 	          </Drawer.DrawerItem>
// 	        </Drawer.DrawerContent>
// 	      </Drawer>
// 	      <Dialog ref={this.dialogRef}>
// 	        <Dialog.Header>Settings</Dialog.Header>
// 	        <Dialog.Body>
// 	          <div>
// 							Enable dark theme <Switch onClick={this.toggleDarkTheme} />
// 	          </div>
// 	        </Dialog.Body>
// 	        <Dialog.Footer>
// 	          <Dialog.FooterButton accept>OK</Dialog.FooterButton>
// 	        </Dialog.Footer>
// 	      </Dialog> */}
// 	    </div>
// 	  )
//   }
// }

// import React from 'react'
import { useState } from 'preact/hooks'
import AppBar from '@material-ui/core/AppBar'
import Drawer from '@material-ui/core/Drawer'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Link from '@material-ui/core/Link'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { makeStyles, useTheme } from '@material-ui/core/styles'
// import VisibleItemList from '../containers/VisibleItemList'

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
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
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
    marginRight: 'auto',
    marginLeft: 0
  }
}))

function ResponsiveDrawer() {
  const classes = useStyles()
  const theme = useTheme()
  const [mobileOpen, setMobileOpen] = useState(false)
  function handleDrawerToggle() { setMobileOpen(!mobileOpen) }

  const drawer = (
    <div>
      <List>
        <Link href="/">
          <ListItem button key="Home">
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <Link href="/weather">
          <ListItem button key="Weather">
            <ListItemText primary="Weather" />
          </ListItem>
        </Link>
        <Link href="/stocks">
          <ListItem button key="Stocks">
            <ListItemText primary="Stocks" />
          </ListItem>
        </Link>
      </List>
    </div>
  )

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="Open drawer"
            edge="start"
            onClick={handleDrawerToggle}
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
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
              <CloseIcon />
            </IconButton>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            {drawer}
          </Drawer>  
        </Hidden>
      </nav>
      <div className={classes.content}>
        <div className={classes.toolbar} />
        {/* <VisibleItemList /> */}
      </div>
    </div>
  )
}
export default ResponsiveDrawer