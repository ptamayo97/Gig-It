import React, { Component } from 'react';
import './style.css';
import { MDBCol, MDBRow, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBIcon, MDBBtn } from 'mdbreact';
import LinkNav from './LinkNav/index';
import LocationNav from './LocationNav/index';
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
					<MDBCol className='Title' sm='2' start>
						<h1 className='font-weight-bold'>Gig It</h1>
					</MDBCol>
					<MDBCol sm='3' middle>
						<div className='input-group md-form form-sm form-1 pl-0'>
							<div className='input-group-prepend'>
								<span className='input-group-text purple lighten-3' id='basic-text1'>
									<MDBIcon className='text-white' icon='search' />
								</span>
							</div>
							<input className='form-control my-0 py-1' type='text' placeholder='Artist' aria-label='Search' />
						</div>
					</MDBCol>
					<MDBCol sm='3' middle>
						<div className='input-group md-form form-sm form-1 pl-0'>
							<div className='input-group-prepend'>
								<span className='input-group-text purple lighten-3' id='basic-text1'>
									<MDBIcon className='text-white' icon='search' />
								</span>
							</div>
							<input className='form-control my-0 py-1' type='text' placeholder='Location' aria-label='Search' />
						</div>
					</MDBCol>
					<MDBBtn sm='2' outline color='success'>
						Login
					</MDBBtn>
					<MDBBtn sm='2' outline color='secondary'>
						Sign Up
					</MDBBtn>
				</MDBNavbar>
				<LinkNav />

				<LocationNav />
			</div>
		);
	}
}

export default NavbarPage;
