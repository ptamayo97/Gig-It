import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBCard, MDBCardBody, MDBInput } from 'mdbreact';
import { NavLink } from 'react-router-dom';
class SignIn extends Component {
	state = {
		email: '',
		password: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = (e) => {
		e.preventDefault();

		console.log(this.state);
	};
	render() {
		return (
			<MDBContainer>
				<br />
				<MDBRow center>
					<MDBCol md='6'>
						<MDBCard>
							<div className='header pt-3 peach-gradient'>
								<MDBRow className='d-flex justify-content-center'>
									<h3 className='white-text mb-3 pt-3 font-weight-bold'>Log in</h3>
								</MDBRow>
								<MDBRow className='mt-2 mb-3 d-flex justify-content-center'>
									<a href='#!' className='fa-lg p-2 m-2 fb-ic'>
										<MDBIcon size='2x' fab icon='facebook-square' />
									</a>
									<a href='#!' className='fa-lg p-2 m-2 tw-ic'>
										<MDBIcon size='2x' fab icon='twitter' />
									</a>
									<a href='#!' className='fa-lg p-2 m-2 gplus-ic'>
										<MDBIcon size='2x' fab icon='google' />
									</a>
								</MDBRow>
							</div>
							<MDBCardBody className='mx-4 mt-4'>
								<form onSubmit={this.handleSubmit}>
									<MDBInput
										label='Your email'
										group
										type='text'
										id='email'
										validate
										onChange={this.handleChange}
									/>
									<MDBInput
										id='password'
										label='Your password'
										group
										type='password'
										validate
										containerClass='mb-0'
										onChange={this.handleChange}
									/>
									<p className='font-small grey-text d-flex justify-content-end'>
										Forgot
										<a href='#!' className='dark-grey-text ml-1 font-weight-bold'>
											Password?
										</a>
									</p>
									<MDBRow className='d-flex align-items-center mb-4 mt-5'>
										<MDBCol md='5' className='d-flex align-items-start'>
											<div className='text-center'>
												<MDBBtn color='grey' rounded type='submit' className='z-depth-1a'>
													Log in
												</MDBBtn>
											</div>
										</MDBCol>

										<MDBCol md='7' className='d-flex justify-content-end'>
											<p className='font-small grey-text mt-3'>
												Don't have an account?
												<NavLink to='/signup' className='dark-grey-text ml-1 font-weight-bold'>
													Sign up
												</NavLink>
											</p>
										</MDBCol>
									</MDBRow>
								</form>
							</MDBCardBody>
						</MDBCard>
					</MDBCol>
				</MDBRow>
			</MDBContainer>
		);
	}
}

export default SignIn;
