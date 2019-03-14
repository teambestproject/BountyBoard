import React from "react";
import "./style.css";

 
class Dropdown extends React.Component {
constructor(){
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
        <div  className="dropdown" style = {{background:"lightgrey",width:"200px"}} >
        <div className="button" onClick={this.showDropdownMenu}> Pages+ </div>
          { this.state.displayMenu ? (
            <ul class="pages">
                <li><a href="/bounties">Open Bounties</a></li>
                <li><a href="/user">User Profile</a></li>
                <li><a href="/create">Create a Bounty</a></li>
                <li><a href="/mybounties">My Bounties</a></li>
                <li><a href="/welcome">Home</a></li>
            </ul>
            ):
        (null)
          }
        </div>
        );
      }
    }
 
export default Dropdown;