// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Bounties from "./pages/Bounties";
import Updates from "./pages/Updates";
import User from "./pages/User";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

function AppTest() {
  return (
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
  );
}

export default AppTest;