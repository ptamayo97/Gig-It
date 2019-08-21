import React, { Component } from 'react';
import './style.css';
import {
	MDBCol,
	MDBRow,
	MDBContainer,
	MDBIcon,
	MDBBtn,
	MDBCarousel,
	MDBCarouselInner,
	MDBCarouselItem
} from 'mdbreact';
import Event from '../../components/Events/index';

class Home extends Component {
	render() {
		return (
			<MDBContainer>
				{/* <MDBRow>
					<MDBCol sm='6' start='true'>
						<h1>
							<MDBIcon icon='music' />Featured Bands
						</h1>
					</MDBCol>
					<MDBCol sm='6' end='true'>
						<MDBBtn color='white'>
							<MDBIcon icon='magic' className='mr-1' /> See All
						</MDBBtn>
					</MDBCol>
				</MDBRow> */}

				<MDBRow>
					<MDBContainer>
						<MDBCarousel
							activeItem={1}
							length={3}
							slide={true}
							showControls={true}
							showIndicators={true}
							multiItem>
							<MDBRow>
								<MDBCol sm='8' start='true'>
									<h1>
										<MDBIcon icon='music' />Featured Bands
									</h1>
								</MDBCol>
								<MDBCol sm='4' end='true'>
									<MDBBtn color='white'>See All</MDBBtn>
								</MDBCol>
							</MDBRow>
							<MDBCarouselInner>
								<MDBRow>
									<MDBCarouselItem itemId='1'>
										<Event />
									</MDBCarouselItem>
									<MDBCarouselItem itemId='2'>
										<Event />
									</MDBCarouselItem>
									<MDBCarouselItem itemId='3'>
										<Event />
									</MDBCarouselItem>
								</MDBRow>
							</MDBCarouselInner>
						</MDBCarousel>
					</MDBContainer>
				</MDBRow>

				<MDBRow>
					<MDBContainer>
						<MDBCarousel
							activeItem={1}
							length={3}
							slide={true}
							showControls={true}
							showIndicators={true}
							multiItem>
							<MDBRow>
								<MDBCol sm='8' start='true'>
									<h1>
										<MDBIcon icon='music' />Upcoming Events
									</h1>
								</MDBCol>
								<MDBCol sm='4' end='true'>
									<MDBBtn color='white'>See All</MDBBtn>
								</MDBCol>
							</MDBRow>
							<MDBCarouselInner>
								<MDBRow>
									<MDBCarouselItem itemId='1'>
										<Event />
									</MDBCarouselItem>
									<MDBCarouselItem itemId='2'>
										<Event />
									</MDBCarouselItem>
									<MDBCarouselItem itemId='3'>
										<Event />
									</MDBCarouselItem>
								</MDBRow>
							</MDBCarouselInner>
						</MDBCarousel>
					</MDBContainer>
				</MDBRow>
			</MDBContainer>
		);
	}
}

export default Home;
