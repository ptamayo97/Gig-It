import React, { Component } from 'react';
import { MDBRow, MDBCol } from 'mdbreact';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import MapStyles from './MapStyle.json';
import NightStyle from './NightStyle.json';
const style = {
	width: '99%',
	height: '100%',
	position: 'relative'
	// top: '20px'
};

class MapPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			collapseID: '',
			errorMessage: '',
			lat: 32.7157,
			long: -117.1611
		};
		window.navigator.geolocation.getCurrentPosition(
			(position) =>
				this.setState({
					lat: position.coords.latitude,
					long: position.coords.longitude
				}),
			(err) => {
				this.setState({
					errorMessage: err.message
				});
			}
		);
	}

	toggleCollapse = (collapseID) => () =>
		this.setState((prevState) => ({
			collapseID: prevState.collapseID !== collapseID ? collapseID : ''
		}));

	render() {
		const { lat, long } = this.state;
		console.log(lat, long);

		if (lat === null && long === null) {
			return 'loading';
		}
		return (
			<MDBRow center>
				<MDBCol lg='12'>
					<div style={{ height: 537 }}>
						<Map
							yesIWantToUseGoogleMapApiInternals
							maxZoom={19}
							onChange={this.handleMapChange}
							onReady={this.fetchPlaces}
							google={this.props.google}
							zoom={11}
							style={style}
							styles={NightStyle}
							initialCenter={{
								lat: lat,
								lng: long
							}}
						/>
					</div>
				</MDBCol>
			</MDBRow>
		);
	}
}

const LoadingContainer = (props) => <div>Fancy loading container!</div>;

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBBdrrchiVVEcgcVy2ssar7l4Ypzz1-81I',
	LoadingContainer: LoadingContainer
})(MapPage);
