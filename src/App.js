import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import MapPage from './components/Map';
import Home from './pages/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
// import EventProfile from '../components/Profiles/Event';
const App = () => {
	return (
		<BrowserRouter>
			<div className='App'>
				<NavBar />
				<Switch>
					<Route exact path='/' component={Home} />
					<Route path='/map' component={MapPage} />
					<Route path='/signin' component={SignIn} />
					<Route path='/signup' component={SignUp} />
					{/* <Route path='/creategig' component={CreateEvent} />
					<Route path='/profile' component={UserProfile} /> */}

					{/* <Route path='/project/:id' component={EventProfile} /> */}
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
