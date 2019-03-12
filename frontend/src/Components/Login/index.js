import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../Redux-JS/actions/authentication';
import classnames from 'classnames';
import "./style.css";
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
require('dotenv').config();

const {
	REACT_APP_FIREBASE_API_KEY,
	REACT_APP_FIREBASE_AUTH_DOMAIN,
	REACT_APP_FIREBASE_DATABASE_URL,
	REACT_APP_FIREBASE_PROJECT_ID,
	REACT_APP_FIREBASE_STORAGE_BUCKET,
	REACT_APP_FIREBASE_MESSAGING_SENDER_ID
} = process.env;
const firebaseConfig = {
	apiKey: REACT_APP_FIREBASE_API_KEY,
	authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: REACT_APP_FIREBASE_DATABASE_URL,
	projectId: REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};


firebase.initializeApp(firebaseConfig);

class Login extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      
      if (!!user){     
        sessionStorage.setItem('usersignedin', user.displayName);
        sessionStorage.setItem('usersphoto',user.photoURL);
        sessionStorage.setItem('issignIN',!!user);

      }else {
          sessionStorage.setItem('issignIN',false);
      }
      console.log(
    sessionStorage.getItem('issignIN')
      );
    })
    
  }


  

  render() {
    return (
      <div className="Login">
        {this.state.isSignedIn ? (
          <span>
            <div class="sign">
              <h5>Signed in as: {firebase.auth().currentUser.displayName}</h5>
              <h5><button onClick={() => firebase.auth().signOut()}>Sign out!</button></h5>
            </div>

<Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Welcome} />
          <Route exact path="/welcome" component={Welcome} />
          <Route exact path="/bounties" component={Bounties} />
          <Route exact path="/updates" component={Updates} />
          <Route exact path="/user" component={User} />
        </Wrapper>
        <Footer />
      </div>
    </Router>


          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    )
  }
}

export default (Login);
