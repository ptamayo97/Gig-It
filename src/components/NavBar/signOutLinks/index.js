import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { MDBCol, MDBRow, MDBIcon, MDBBtn } from 'mdbreact';

class SignedOutLinks extends Component {
	render() {
		return (
			<MDBRow>
				<MDBCol sm='5'>
					<div className='input-group md-form form-sm form-1 pl-0'>
						<div className='input-group-prepend'>
							<span className='input-group-text purple lighten-3' id='basic-text1'>
								<MDBIcon className='text-white' icon='search' />
							</span>
						</div>
						<input className='form-control my-0 py-1' type='text' placeholder='Artist' aria-label='Search' />
					</div>
				</MDBCol>
				<MDBCol sm='5'>
					<div className='input-group md-form form-sm form-1 pl-0'>
						<div className='input-group-prepend'>
							<span className='input-group-text purple lighten-3' id='basic-text1'>
								<MDBIcon className='text-white' icon='search' />
							</span>
						</div>
						<input className='form-control my-0 py-1' type='text' placeholder='Location' aria-label='Search' />
					</div>
				</MDBCol>
				<MDBCol sm='2'>
					<NavLink to='/signin'>
						<MDBBtn outline color='success'>
							Login
						</MDBBtn>
					</NavLink>
					<NavLink to='/signup'>
						<MDBBtn outline color='secondary'>
							Sign Up
						</MDBBtn>
					</NavLink>
				</MDBCol>
			</MDBRow>
		);
	}
}

export default SignedOutLinks;
