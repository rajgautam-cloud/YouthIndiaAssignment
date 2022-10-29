import React from "react";

import "./cardList.style.css";
import { Card } from "../card/Card";
export const CardList = (props) => {
  const array = [1, 2, 3, 4, 5, 4, 3, 2, 4, 43];
  return (
    <div className="card-list">
      {props.currentData.map((data, index) => (
        <Card key={index} data={data} />
      ))}
    </div>
  );
};
