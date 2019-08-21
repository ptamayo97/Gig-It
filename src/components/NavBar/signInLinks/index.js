import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
	MDBCol,
	MDBRow,
	MDBDropdownItem,
	MDBDropdownMenu,
	MDBDropdownToggle,
	MDBDropdown,
	MDBIcon,
	MDBCollapse,
	MDBCollapseHeader
} from 'mdbreact';

class SignedInLinks extends Component {
	state = {
		collapseID: ''
	};

	toggleCollapse = (collapseID) => () =>
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}));
	render() {
		const { collapseID } = this.state;

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
				<MDBCol center sm='1'>
					{' '}
					<MDBDropdown>
						<MDBDropdownToggle nav caret>
							<MDBIcon size='3x' icon='user' />
						</MDBDropdownToggle>
						<MDBDropdownMenu left basics>
							<MDBDropdownItem>
								{' '}
								<NavLink to='/'>Sign Out</NavLink>
							</MDBDropdownItem>
							<MDBDropdownItem>
								<NavLink to='/'>Create Event</NavLink>
							</MDBDropdownItem>
							<MDBDropdownItem>
								<NavLink to='/'>Account</NavLink>
							</MDBDropdownItem>
							{/* <MDBDropdownItem> */}
							<MDBCollapseHeader onClick={this.toggleCollapse('collapse1')}>
								Billing {' '}
								<i className={collapseID === 'collapse1' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-up'} />
							</MDBCollapseHeader>
							<MDBCollapse id='collapse1' isOpen={collapseID}>
								<hr />
								<MDBDropdownItem>
									<NavLink to='/'>Payment Info.</NavLink>
								</MDBDropdownItem>
								<hr />
								<MDBDropdownItem>
									<NavLink to='/'>Past Events</NavLink>
								</MDBDropdownItem>
								<hr />
								<MDBDropdownItem>
									<NavLink to='/'>Upcoming Events</NavLink>
								</MDBDropdownItem>
								<hr />
							</MDBCollapse>
							{/* </MDBDropdownItem> */}
							<MDBCollapseHeader onClick={this.toggleCollapse('collapse2')}>
								Settings{' '}
								<i className={collapseID === 'collapse2' ? 'fa fa-angle-down rotate-icon' : 'fa fa-angle-up'} />
							</MDBCollapseHeader>
							<MDBCollapse id='collapse2' isOpen={collapseID}>
								<hr />
								<MDBDropdownItem>
									<NavLink center to='/'>
										General
									</NavLink>
								</MDBDropdownItem>
								<hr />
								<MDBDropdownItem>
									<NavLink to='/'>Password</NavLink>
								</MDBDropdownItem>
								<hr />
								<MDBDropdownItem>
									<NavLink center to='/'>
										Deactivate
									</NavLink>
								</MDBDropdownItem>
								<hr />
								<MDBDropdownItem>
									<NavLink to='/'>Help</NavLink>
								</MDBDropdownItem>
							</MDBCollapse>
						</MDBDropdownMenu>
					</MDBDropdown>
				</MDBCol>
			</MDBRow>
		);
	}
}

export default SignedInLinks;
