import React, { Component } from 'react';
import './App.css';
import Bounty from './Components/Bounty';


class App extends Component {
  render() {
    return (
      <Bounty>
        <Bounty.BountyTitle></Bounty.BountyTitle>
        <Bounty.BountyInfo></Bounty.BountyInfo>
        <Bounty.BountyRewards></Bounty.BountyRewards>
      </Bounty>
    );
  }
}

export default App;
