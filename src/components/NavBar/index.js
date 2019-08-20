import React, { Component } from 'react';
import './style.css';
import { MDBCol, MDBRow, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBIcon, MDBBtn } from 'mdbreact';
import LinkNav from './LinkNav/index';
import { Link } from 'react-router-dom';
import LocationNav from './LocationNav/index';
import SignedInLinks from './signInLinks';
import SignedOutLinks from './signOutLinks';
class NavbarPage extends Component {
	state = {
		collapseID: ''
	};

	toggleCollapse = (collapseID) => () =>
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}));

	render() {
		return (
			<div>
				<MDBNavbar color='unique-color-dark' style={{ marginTop: '0px' }} className='z-depth-2' dark>
					<MDBCol className='Title' sm='1'>
						<Link to='/'>
							{' '}
							<h1 className='font-weight-bold'>Gig It</h1>
						</Link>
					</MDBCol>

					<MDBCol sm='11'>
						<SignedOutLinks />
						{/* <SignedInLinks /> */}
					</MDBCol>
				</MDBNavbar>
				<LinkNav />
				{/* <LocationNav /> */}
			</div>
		);
	}
}

export default NavbarPage;
