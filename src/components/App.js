import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './NavBar';
import MapPage from './Map';
import Home from '../pages/Home';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateEvent from './Forms/EventRegister';
import UserProfile from './Profiles/User';
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
					<Route path='/creategig' component={CreateEvent} />
					<Route path='/profile' component={UserProfile} />

					{/* <Route path='/project/:id' component={EventProfile} /> */}
				</Switch>
			</div>
		</BrowserRouter>
	);
};

export default App;
