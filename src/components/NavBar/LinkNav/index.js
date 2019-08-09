import React, { Component } from 'react';
import './style.css';
import { MDBCol, MDBRow, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBIcon, MDBBtn } from 'mdbreact';

class LinkNav extends Component {
	state = {
		collapseID: ''
	};

	render() {
		return (
			<MDBRow middle className='text-center LinkNavRow z-depth-4'>
				<MDBCol md='2' className='offset-md-3'>
					<h1 className='LinkTitle font-weight-bold'>Home</h1>
				</MDBCol>

				<MDBCol md='2'>
					<h1 className='LinkTitle font-weight-bold'>Map</h1>
				</MDBCol>
				<MDBCol md='2'>
					<h1 className='LinkTitle font-weight-bold'>Bands</h1>
				</MDBCol>
			</MDBRow>
		);
	}
}

export default LinkNav;
