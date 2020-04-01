import { h, Component } from 'preact';
import { Router } from 'preact-router';
import Header from './header/Header';
import Home from '../routes/home/Home';
import Profile from '../routes/profile/Profile';
import Demos from '../routes/demos/Demos';

export default () => (
	<div id="app">
		<Header />
		<Router>
			<Home path="/" />
			<Profile path="/profile/" user="Brian Fiala" />
			<Profile path="/profile/:user" />
			<Demos path="/demos" />
		</Router>
	</div>
)