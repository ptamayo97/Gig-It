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
					<MDBContainer className='caro1'>
						<MDBCarousel
							activeItem={1}
							length={3}
							slide={true}
							showControls={true}
							showIndicators={false}
							multiItem>
							<MDBRow>
								<MDBCol sm='8' start='true'>
									<h1 className='font-weight-bold'>
										<MDBIcon icon='music' /> Featured Bands
									</h1>
								</MDBCol>
								<MDBCol sm='4' end='true'>
									<MDBBtn className='font-weight-bold' color='white'>
										See All
									</MDBBtn>
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

					<MDBContainer className='caro2'>
						<MDBCarousel
							activeItem={1}
							length={3}
							slide={true}
							showControls={true}
							showIndicators={false}
							multiItem>
							<MDBRow>
								<MDBCol sm='8' start='true'>
									<h1 className='font-weight-bold'>
										<MDBIcon icon='music' /> Upcoming Events
									</h1>
								</MDBCol>
								<MDBCol sm='4' end='true'>
									<MDBBtn color='white' className='font-weight-bold'>
										See All
									</MDBBtn>
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
