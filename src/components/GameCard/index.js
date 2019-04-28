import React from "react";
import "./style.css";

function GameCard(props) {
  return (
    <div className="card" onClick={() => { props.clickCard(props.id); }}>
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <h3>{props.name}</h3>
          </li>
          <li>
            <strong>Powers:</strong> {props.powers}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GameCard;
