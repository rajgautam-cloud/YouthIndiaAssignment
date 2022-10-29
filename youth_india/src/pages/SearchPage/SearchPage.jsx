import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card } from "../../components/card/Card";
import "./searchPage.style.css";
const SearchPage = () => {
  const [text, setText] = useState("a");
  const [data, setData] = useState();
  useEffect(() => {
    text.length > 0
      ? fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
          .then((res) => res.json())
          .then((json) => {
            setData(json);
            console.log(json);
          })
      : console.log("heu");
  }, [text]);

  return (
    <div className="main_div">
      <input
        className="inputBox"
        placeholder="Enter the name of pokemon here"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></input>
      {data ? (
        <div>
          <div
            className="card-container"
            style={{
              width: "300px",
            }}
          >
            <img
              alt="pokemon"
              className="image"
              src={data.sprites.other.dream_world.front_default}
            />
            <h2>{data.name.toUpperCase()}</h2>
          </div>
        </div>
      ) : (
        <h2>Search for a valid name</h2>
      )}
    </div>
  );
};

export default SearchPage;
