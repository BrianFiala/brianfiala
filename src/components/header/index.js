import { h, Component } from 'preact' /** @jsx h */
import { route } from 'preact-router'
import { 
  // TopAppBar,
  Button,
  Drawer
  // List,
  // Dialog,
  // Switch
} from '@material-ui/core'
// import style from './style';

export default class Header extends Component {
  drawerRef = drawer => (this.drawer = drawer);
  dialogRef = dialog => (this.dialog = dialog);
  openSettings = () => this.dialog.MDComponent.show();
  openDrawer = () => (this.drawer.MDComponent.open = true);
  closeDrawer() {
    this.drawer.MDComponent.open = false
    this.state = { darkThemeEnabled: false }
  }

  toggleDarkTheme = () => {
    this.setState({ darkThemeEnabled: !this.state.darkThemeEnabled },
      () => {
        if (this.state.darkThemeEnabled) document.body.classList.add('mdc-theme--dark')
        else document.body.classList.remove('mdc-theme--dark')
      }
    )
  }

  linkTo = path => () => {
    route(path)
    this.closeDrawer()
  };
  
  goHome = this.linkTo('/');
  goToWeather = this.linkTo('/weather');
  goToStocks = this.linkTo('/stocks');

  render(props) {
	  return (
	    <div>
        JUST A DIV
	        {/* <Button onClick={toggleDrawer('left', true)}>{'left'}</Button>
	        <Drawer anchor={'left'} open={true}>
	          {list('left')}
	        </Drawer> */}
	      {/* <TopAppBar className="topappbar">
	        <TopAppBar.Row>
	          <TopAppBar.Section align-start>
	            <TopAppBar.Icon menu onClick={this.openDrawer}>menu</TopAppBar.Icon>
	            <TopAppBar.Title>Amazeballer Website</TopAppBar.Title>
	          </TopAppBar.Section>
	          <TopAppBar.Section align-end shrink-to-fit onClick={this.openSettings}>
	            <TopAppBar.Icon>settings</TopAppBar.Icon>
	          </TopAppBar.Section>
	        </TopAppBar.Row>
	      </TopAppBar>
	      <Drawer modal ref={this.drawerRef}>
	        <Drawer.DrawerContent>
	          <Drawer.DrawerItem selected={props.selectedRoute === '/'} onClick={this.goHome}>
	            <List.ItemGraphic>home</List.ItemGraphic>
							Home
	          </Drawer.DrawerItem>
	          <Drawer.DrawerItem selected={props.selectedRoute === '/weather'} onClick={this.goToWeather}>
	            <List.ItemGraphic>account_circle</List.ItemGraphic>
							Weather
	          </Drawer.DrawerItem>
	          <Drawer.DrawerItem selected={props.selectedRoute === '/stocks'} onClick={this.goToStocks}>
	            <List.ItemGraphic>account_circle</List.ItemGraphic>
							Stocks
	          </Drawer.DrawerItem>
	        </Drawer.DrawerContent>
	      </Drawer>
	      <Dialog ref={this.dialogRef}>
	        <Dialog.Header>Settings</Dialog.Header>
	        <Dialog.Body>
	          <div>
							Enable dark theme <Switch onClick={this.toggleDarkTheme} />
	          </div>
	        </Dialog.Body>
	        <Dialog.Footer>
	          <Dialog.FooterButton accept>OK</Dialog.FooterButton>
	        </Dialog.Footer>
	      </Dialog> */}
	    </div>
	  )
  }
}