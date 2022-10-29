import React from "react";
import "./card.style.css";
export const Card = (props) => (
  <div className="card-container" key={props.key}>
    <img
      alt="pokemon"
      className="image"
      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
        props.position == "pagination"
          ? props.currentPage * 12 - 12 + 1 + props.index
          : props.index + 1
      }.svg`}
    />
    <h2>{props.data.name.toUpperCase()}</h2>
  </div>
);
