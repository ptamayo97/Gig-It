import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
class UserHeader extends Component {
	componentDidMount() {
		this.props.fetchUser(this.props.userId);
	}

	render() {
		const { user } = this.props;

		// If user does not exist , null
		if (!user) {
			return null;
		}

		// If user does exist display in header
		return <div className='header'>{user.name}</div>;
	}
}
// Extract anything that needs to do computations on our props
const mapStateToProps = (state, ownProps) => {
	// Ownprops is a reference to the above components props without being inside of it
	return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps, { fetchUser })(UserHeader);
