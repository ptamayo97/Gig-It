import React, { Component } from 'react';
import './App.css';
// import { Switch, Route } from 'react-router-dom';
// import { MDBCol, MDBRow, MDBContainer } from 'mdbreact';
// import RoutesWithNavigation from './components/RoutesWithNavigation';
// import Home from './pages/Home';
import NavBar from './components/NavBar/index';
import MapPage from './components/Map/index';
// import Bands from './pages/Bands';
// import EventRegister from './pages/RegisterEvent';
// import Account from './pages/Account';
// import BandProfile from './pages/BandProfile';

class App extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<MapPage />
			</div>
		);
	}
}

// const App = () => {
// 	return (
// 		<Switch>
// 			<Route path='/pages/Home' exact component={Home} />
// 			<Route path='/pages/Map' exact component={MapPage} />
// 			<Route path='/pages/Bands' exact component={Bands} />
// 			<Route path='/pages/RegisterEvent' exact component={EventRegister} />
// 			<Route path='/pages/Account' exact component={Account} />
// 			<Route path='/pages/BandProfile' exact component={BandProfile} />

// 			<RoutesWithNavigation />
// 		</Switch>
// 	);
// };

export default App;
