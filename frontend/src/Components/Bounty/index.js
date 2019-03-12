import React from "react";

function Bounty(props) {
  return (
    <ul className="bounty-group">
      {props.bounties.map(bounty => (
        <div className="card bountyouter">
          <div className="card-body">
            <h5 className="card-title bounty-title">{bounty.title}</h5>
            <p className="card-text bounty-description">{bounty.description}</p>
            <p className="card-text bounty-reward">{bounty.reward}</p>
            <button className="btn btn-primary">Complete this bounty! Once there's a function for it!</button>
          </div>
        </div>
      ))}
    </ul>
  );
}

export default Bounty;