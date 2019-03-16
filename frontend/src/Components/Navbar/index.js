import React from "react";
import {firebaseApp} from '../../App';
import "./style.css";

class Navbar extends React.Component {
  constructor() {
      super();

      this.state = {
          displayMenu: false,
      };

      this.showDropdownMenu = this.showDropdownMenu.bind(this);
      this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  };

  showDropdownMenu(event) {
      event.preventDefault();
      this.setState({ displayMenu: true }, () => {
          document.addEventListener('click', this.hideDropdownMenu);
      });
  }

  hideDropdownMenu() {
      this.setState({ displayMenu: false }, () => {
          document.removeEventListener('click', this.hideDropdownMenu);
      });
  }

  render() {
      return (
          <div className="navwrap">
              <div className="dropdown">
                  <div className="ddlist btn btn-outline-light" onClick={this.showDropdownMenu}>☰</div>
                  {this.state.displayMenu ? (
                      <ul className="pages">
                          <li><a href="/bounties">Open Bounties</a></li>
                          <li><a href="/user">User Profile</a></li>
                          <li><a href="/create">Create Bounty</a></li>
                          <li><a href="/mybounties">My Bounties</a></li>
                          <li><a href="/welcome">Home</a></li>
                      </ul>
                  ) :
                      (null)
                  }
              </div>

              <h1 id="title">Bounty Bonus</h1>

              <nav className="signout">
                  <button className="btn btn-outline-light" onClick={() => firebaseApp.auth().signOut()}>Signout</button>
              </nav>
          </div>
      );

  }
}

export default Navbar;
