import React, { Component } from 'react';
import './style.css';
import { MDBCol, MDBRow, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBIcon, MDBBtn } from 'mdbreact';

class LocationNav extends Component {
	state = {};

	render() {
		return (
			<MDBRow middle className='text-center LinkNavRow z-depth-3 '>
				<MDBCol md='5' className='offset-md-1'>
					<h1 className='LinkTitle font-weight-bold'>
						Location:<MDBIcon icon='map-marker-alt' />
					</h1>
				</MDBCol>
			</MDBRow>
		);
	}
}

export default LocationNav;
