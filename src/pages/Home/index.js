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
				<MDBRow>
					<MDBCol sm='3' start>
						<MDBIcon icon='music' />Featured Bands
					</MDBCol>
					<MDBCol sm='3' end>
						<MDBBtn color='white'>
							<MDBIcon icon='magic' className='mr-1' /> See All
						</MDBBtn>
					</MDBCol>
					<MDBCol sm='3' end>
						Featured Bands
					</MDBCol>
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
