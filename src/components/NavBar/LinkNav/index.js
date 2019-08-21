import React, { Component } from 'react';
import './style.css';
import { MDBCol, MDBRow, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class LinkNav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			lat: null,
			long: null
		};
		window.navigator.geolocation.getCurrentPosition(
			(position) =>
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				}),
			(err) => console.log(err)
		);
	}

	render() {
		const { lat, long } = this.state;
		return (
			<div>
				<MDBRow middle className='text-center LinkNavRow z-depth-4'>
					<MDBCol md='2' className='offset-md-3'>
						<NavLink to='/'>
							<h1 className='LinkTitle font-weight-bold'>Home</h1>
						</NavLink>
					</MDBCol>

					<MDBCol md='2'>
						<NavLink to='/map'>
							<h1 className='LinkTitle font-weight-bold'>Map</h1>
						</NavLink>
					</MDBCol>
					<MDBCol md='2'>
						<NavLink to='/'>
							<h1 className='LinkTitle font-weight-bold'>Bands</h1>
						</NavLink>
					</MDBCol>
					<hr className='Divider' />
					<MDBCol md='12'>
						<MDBRow middle className='text-center'>
							<MDBCol md='11'>
								<h1 className='LinkTitle font-weight-bold'>
									Location:<MDBIcon icon='map-marker-alt' /> {lat} , {long}
								</h1>
							</MDBCol>
						</MDBRow>
					</MDBCol>
				</MDBRow>
			</div>
		);
	}
}

export default LinkNav;
