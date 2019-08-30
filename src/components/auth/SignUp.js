import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import { NavLink } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { signUp } from "../../store/actions/authActions";
class SignUp extends Component {
  state = {
    // userName: "",
    // email: "",
    // password: "",
    // confirmEmail: "",
    // termsAndServices: false
    email: "",
    password: "",
    firstName: "",
    lastName: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.signUp(this.state);
    console.log(this.state);
  };
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' />;

    return (
      <MDBContainer>
        <br />
        <MDBRow center>
          <MDBCol md='6'>
            <MDBCard>
              <MDBCardBody className='mx-4'>
                <div className='text-center'>
                  <h3 className='pink-text mb-5'>
                    <strong>Sign up</strong>
                  </h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                  <div className='grey-text'>
                    {/* <MDBInput
                      id='userName'
                      label='User name'
                      icon='user'
                      group
                      type='text'
                      validate
                      error='wrong'
                      success='right'
                      onChange={this.handleChange}
                    /> */}
                    <MDBInput
                      label='Your email'
                      icon='envelope'
                      group
                      id='email'
                      type='email'
                      validate
                      error='wrong'
                      success='right'
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label='First Name'
                      id='firstName'
                    //   icon='exclamation-triangle'
                      //   group
                      type='text'
                      //   validate
                      //   error='wrong'
                      //   success='right'
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      label='Last Name'
                      id='lastName'
                    //   icon='exclamation-triangle'
                      //   group
                      type='text'
                      //   validate
                      //   error='wrong'
                      //   success='right'
                      onChange={this.handleChange}
                    />
                    <MDBInput
                      id='password'
                      label='Your password'
                      icon='lock'
                      group
                      type='password'
                      validate
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className='md-form pb-3'>
                    <div className='form-check my-4'>
                      <input
                        className='form-check-input'
                        type='checkbox'
                        onChange={this.handleChange}
                        id='termsAndServices'
                      />
                      <label htmlFor='termsAndServices' className='grey-text'>
                        Accept the
                        <a href='#!' className='blue-text'>
                          Terms and Conditions
                        </a>
                      </label>
                    </div>
                  </div>

                  <MDBRow className='d-flex align-items-center mb-4'>
                    <MDBCol md='6' className='text-center'>
                      <button
                        type='submit'
                        className='btn btn-pink btn-block btn-rounded z-depth-1'
                      >
                        Sign up
                      </button>
                    </MDBCol>
                    <MDBCol md='6'>
                      <p className='font-small grey-text d-flex justify-content-end'>
                        Have an account?
                        <NavLink to='/signin' className='blue-text ml-1'>
                          Log in
                        </NavLink>
                      </p>
                    </MDBCol>
                    {authError ? <p>{authError}</p> : null}
                  </MDBRow>
                </form>
              </MDBCardBody>
              <div className='footer pt-3 mdb-color lighten-3'>
                <MDBRow className='d-flex justify-content-center'>
                  <p className='font-small white-text mb-2 pt-3'>
                    or Sign up with:
                  </p>
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
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signUp: creds => dispatch(signUp(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
