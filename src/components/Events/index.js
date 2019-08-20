import React, { Component } from 'react';
import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardTitle,
	MDBCardText,
	MDBRow,
	MDBCol,
	MDBIcon,
	MDBCarouselItem
} from 'mdbreact';

class EventCard extends Component {
	constructor(props) {
		super(props);
		this.state = {
			bandImage: this.props.bandImage,
			bandName: this.props.bandName,
			eventSummary: this.props.eventSummary,
			eventDate: this.props.eventDate,
			amountOfEventComments: this.props.amountOfEventComments,
			amountOfEventCheckIns: this.props.amountOfEventCheckIns
		};
	}
	render() {
		const { bandImage, bandName, eventSummary, eventDate, amountOfEventComments, amountOfEventCheckIns } = this.state;
		return (
			<MDBRow>
				{/* <MDBCol md='3'>
						<MDBCard cascade>
							<MDBCardImage cascade className='img-fluid' src={bandImage} />
							<MDBBtn floating tag='a' className='ml-auto mr-4 lighten-3 mdb-coalor' action>
								<MDBIcon icon='chevron-right' />
							</MDBBtn>
							<MDBCardBody cascade>
								<MDBCardTitle>{bandName}</MDBCardTitle>
								<MDBCardText>{eventSummary}</MDBCardText>
							</MDBCardBody>
							<div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
								<ul className='list-unstyled list-inline font-small'>
									<li className='list-inline-item pr-2 white-text'>
										<MDBIcon far icon='clock' /> {eventDate}
									</li>
									<li className='list-inline-item pr-2'>
										<a href='#!' className='white-text'>
											<MDBIcon far icon='comments' />
											{amountOfEventComments}
										</a>
									</li>
									<li className='list-inline-item pr-2'>
										<a href='#!' className='white-text'>
											<MDBIcon far icon='calendar-check' />

											{amountOfEventCheckIns}
										</a>
									</li>
								</ul>
							</div>
						</MDBCard>
                    </MDBCol> */}
				<MDBCol md='3'>
					<MDBCard cascade>
						<MDBCardImage
							cascade
							className='img-fluid'
							src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg'
						/>
						<MDBBtn floating tag='a' className='ml-auto mr-4 lighten-3 mdb-coalor' action>
							<MDBIcon icon='chevron-right' />
						</MDBBtn>
						<MDBCardBody cascade>
							<MDBCardTitle>MDBCard title</MDBCardTitle>
							<MDBCardText>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</MDBCardText>
						</MDBCardBody>
						<div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
							<ul className='list-unstyled list-inline font-small'>
								<li className='list-inline-item pr-2 white-text'>
									<MDBIcon far icon='clock' /> 05/10/2015
								</li>
								<li className='list-inline-item pr-2'>
									<a href='#!' className='white-text'>
										<MDBIcon far icon='comments' />
										12
									</a>
								</li>
								<li className='list-inline-item pr-2'>
									<a href='#!' className='white-text'>
										<MDBIcon fab icon='facebook-f'>
											{' '}
										</MDBIcon>
										21
									</a>
								</li>
								<li className='list-inline-item'>
									<a href='#!' className='white-text'>
										<MDBIcon fab icon='twitter'>
											{' '}
										</MDBIcon>5
									</a>
								</li>
							</ul>
						</div>
					</MDBCard>
				</MDBCol>
				<MDBCol md='3'>
					<MDBCard cascade>
						<MDBCardImage
							cascade
							className='img-fluid'
							src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg'
						/>
						<MDBBtn floating tag='a' className='ml-auto mr-4 lighten-3 mdb-coalor' action>
							<MDBIcon icon='chevron-right' />
						</MDBBtn>
						<MDBCardBody cascade>
							<MDBCardTitle>MDBCard title</MDBCardTitle>
							<MDBCardText>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</MDBCardText>
						</MDBCardBody>
						<div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
							<ul className='list-unstyled list-inline font-small'>
								<li className='list-inline-item pr-2 white-text'>
									<MDBIcon far icon='clock' /> 05/10/2015
								</li>
								<li className='list-inline-item pr-2'>
									<a href='#!' className='white-text'>
										<MDBIcon far icon='comments' />
										12
									</a>
								</li>
								<li className='list-inline-item pr-2'>
									<a href='#!' className='white-text'>
										<MDBIcon fab icon='facebook-f'>
											{' '}
										</MDBIcon>
										21
									</a>
								</li>
								<li className='list-inline-item'>
									<a href='#!' className='white-text'>
										<MDBIcon fab icon='twitter'>
											{' '}
										</MDBIcon>5
									</a>
								</li>
							</ul>
						</div>
					</MDBCard>
				</MDBCol>
				<MDBCol md='3'>
					<MDBCard cascade>
						<MDBCardImage
							cascade
							className='img-fluid'
							src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg'
						/>
						<MDBBtn floating tag='a' className='ml-auto mr-4 lighten-3 mdb-coalor' action>
							<MDBIcon icon='chevron-right' />
						</MDBBtn>
						<MDBCardBody cascade>
							<MDBCardTitle>MDBCard title</MDBCardTitle>
							<MDBCardText>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</MDBCardText>
						</MDBCardBody>
						<div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
							<ul className='list-unstyled list-inline font-small'>
								<li className='list-inline-item pr-2 white-text'>
									<MDBIcon far icon='clock' /> 05/10/2015
								</li>
								<li className='list-inline-item pr-2'>
									<a href='#!' className='white-text'>
										<MDBIcon far icon='comments' />
										12
									</a>
								</li>
								<li className='list-inline-item pr-2'>
									<a href='#!' className='white-text'>
										<MDBIcon fab icon='facebook-f'>
											{' '}
										</MDBIcon>
										21
									</a>
								</li>
								<li className='list-inline-item'>
									<a href='#!' className='white-text'>
										<MDBIcon fab icon='twitter'>
											{' '}
										</MDBIcon>5
									</a>
								</li>
							</ul>
						</div>
					</MDBCard>
				</MDBCol>
				<MDBCol md='3'>
					<MDBCard cascade>
						<MDBCardImage
							cascade
							className='img-fluid'
							src='https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg'
						/>
						<MDBBtn floating tag='a' className='ml-auto mr-4 lighten-3 mdb-coalor' action>
							<MDBIcon icon='chevron-right' />
						</MDBBtn>
						<MDBCardBody cascade>
							<MDBCardTitle>MDBCard title</MDBCardTitle>
							<MDBCardText>
								Some quick example text to build on the card title and make up the bulk of the card's content.
							</MDBCardText>
						</MDBCardBody>
						<div className='rounded-bottom mdb-color lighten-3 text-center pt-3'>
							<ul className='list-unstyled list-inline font-small'>
								<li className='list-inline-item pr-2 white-text'>
									<MDBIcon far icon='clock' /> 05/10/2015
								</li>
								<li className='list-inline-item pr-2'>
									<a href='#!' className='white-text'>
										<MDBIcon far icon='comments' />
										12
									</a>
								</li>
								<li className='list-inline-item pr-2'>
									<a href='#!' className='white-text'>
										<MDBIcon fab icon='facebook-f'>
											{' '}
										</MDBIcon>
										21
									</a>
								</li>
								<li className='list-inline-item'>
									<a href='#!' className='white-text'>
										<MDBIcon fab icon='twitter'>
											{' '}
										</MDBIcon>5
									</a>
								</li>
							</ul>
						</div>
					</MDBCard>
				</MDBCol>
			</MDBRow>
		);
	}
}

export default EventCard;
