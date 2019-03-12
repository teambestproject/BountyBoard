import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux-JS/store';

import Welcome from "./pages/Welcome";
import Bounties from "./pages/Bounties";
import Updates from "./pages/Updates";
import User from "./pages/User";
import Create from "./pages/Create";
import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Wrapper from "./Components/Wrapper";
import LoginPage from './Components/LoginPage';
require('dotenv').config();

class App extends Component {
  state = { 
    isSignedIn: false, 
  }
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
    this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
    })
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }

  render() {
    return (
      <Provider store={store}>
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
            <Router>
              <div>
                <Navbar currentuser={firebase.auth().currentUser} />
                <Wrapper>
                  <Route exact path="/" component={Welcome} />
                  <Route exact path="/welcome" component={Welcome} />
                  <Route exact path="/bounties" component={Bounties} />
                  <Route exact path="/updates" component={Updates} />
                  <Route exact path="/user" component={User} />
                  <Route exact path="/create" component={Create} />
                </Wrapper>
                <Footer />
              </div>
            </Router>


          </span>
        ) : (
            <span>
              <LoginPage />
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
            </span>
          )}
      </div>
      </Provider>
    )
  }
}

export default App;
