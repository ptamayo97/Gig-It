import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import RoutesWithNavigation from './components/RoutesWithNavigation';

import Login from './components/pages/Login';
import Register from './components/pages/Register';
import About from './components/pages/About';
import SinglePost from './components/pages/SinglePost';
import PostListing from './components/pages/PostListing';
import Landing from './components/pages/Landing';

const App = () => {
	return (
		<Switch>
			<Route path='/pages/login' exact component={Login} />
			<Route path='/pages/register' exact component={Register} />
			<Route path='/pages/about' exact component={About} />
			<Route path='/pages/post' exact component={SinglePost} />
			<Route path='/pages/posts' exact component={PostListing} />
			<Route path='/pages/landing' exact component={Landing} />
			<RoutesWithNavigation />
		</Switch>
	);
};

export default App;
