import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Header from './header';
import Home from '../routes/home';
import Profile from '../routes/profile';
import NotFound from '../routes/404';
import Weather from '../routes/weather';
import Stocks from '../routes/stocks';
// import Home from 'async!../routes/home';
// import Profile from 'async!../routes/profile';

export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.setState({
			currentUrl: e.url
		});
	};

	render() {
		return (
			<div id="app">
				<Header selectedRoute={this.state.currentUrl} />
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Profile path="/profile/" user="me" />
					<Profile path="/profile/:user" />
					<Weather path="/weather" />
					<Stocks path="/stocks" />
					<NotFound default />
				</Router>
			</div>
		);
	}
}

// import { h } from 'preact'
// import { Router } from 'preact-router'
// import { useContext } from 'preact/hooks'
// import Header from './header/Header'
// import TopAppBar from 'preact-material-components/TopAppBar'
// import 'preact-material-components/TopAppBar/style.css'
// import Home from '../routes/Home'
// import Weather from '../routes/Weather'
// import Stocks from '../routes/Stocks'
// import { Theme } from '../contexts/ThemeContext'

// export default function App() {
//   const theme = useContext(Theme)

//   return (
//     <div id="app" class={theme}>
//       <TopAppBar className="topappbar">
//         <TopAppBar.Row>
//           <TopAppBar.Section align-start>
//             <TopAppBar.Icon navigation>menu</TopAppBar.Icon>
//             <TopAppBar.Title>
//                   My App
//             </TopAppBar.Title>
//           </TopAppBar.Section>
//           <TopAppBar.Section align-end>
//             <TopAppBar.Icon>more_vert</TopAppBar.Icon>
//           </TopAppBar.Section>
//         </TopAppBar.Row>
//       </TopAppBar>
//       <Header />
//       <Router>
//         <Home path="/" />
//         <Weather path="/weather" />
//         <Stocks path="/stocks" />
//       </Router>
//     </div>
//   )
// }
// App.displayName = 'App'

