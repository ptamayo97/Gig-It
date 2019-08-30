import React, { Component } from "react";
import "./style.css";
import { MDBCol, MDBNavbar } from "mdbreact";
import LinkNav from "./LinkNav/index";
import { Link } from "react-router-dom";
// import LocationNav from './LocationNav/index';
<<<<<<< HEAD
import SignedInLinks from "./signInLinks";
import SignedOutLinks from "./signOutLinks";
import { connect } from "react-redux";

=======
import SignedInLinks from './signInLinks';
// import SignedOutLinks from './signOutLinks';
>>>>>>> origin
class NavbarPage extends Component {
  state = {
    collapseID: ""
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ""
    }));

  render() {
    const { auth, profile } = this.props;
    // console.log(auth);
    const links = auth.uid ? (
      <SignedInLinks profile={profile} />
    ) : (
      <SignedOutLinks />
	);
	
    return (
      <div>
        <MDBNavbar
          color='unique-color-dark'
          style={{ marginTop: "0px" }}
          className='z-depth-2'
          dark
        >
          <MDBCol className='Title' sm='1'>
            <Link to='/'>
              {" "}
              <h1 className='font-weight-bold deep-purple-text'>Gig It</h1>
            </Link>
          </MDBCol>

<<<<<<< HEAD
          <MDBCol sm='11'>{links}</MDBCol>
        </MDBNavbar>
        <LinkNav />
        {/* <LocationNav /> */}
      </div>
    );
  }
=======
					<MDBCol sm='11'>
						{/* <SignedOutLinks /> */}
						<SignedInLinks />
					</MDBCol>
				</MDBNavbar>
				<LinkNav />
				{/* <LocationNav /> */}
			</div>
		);
	}
>>>>>>> origin
}

const mapStateToProps = state => {
  // console.log(state);
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapStateToProps)(NavbarPage);
