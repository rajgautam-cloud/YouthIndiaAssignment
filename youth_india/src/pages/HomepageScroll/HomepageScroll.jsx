import React, { useState, useMemo, useEffect, useRef } from "react";
import Pagination from "../../components/pagination/Pagination";
import "../../App.css";
import { CardList } from "../../components/cardList/cardList";
import { Card } from "../../components/card/Card";
import useOnScreen from "../../components/Scroll/scroll";
let PageSize = 12;

export default function HomepageScroll() {
  const [data, setData] = useState([]);
  const [call, setCall] = useState(0);
  const bottomRef = useRef();
  const reachedBottom = useOnScreen(bottomRef);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${call * 12}`)
      .then((res) => res.json())
      .then((json) => {
        setData([...data, ...json?.results]);
        setCall(call + 1);
        console.log(json);
      });
  }, []);
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon?limit=12&offset=${call * 12}`)
      .then((res) => res.json())
      .then((json) => {
        setData([...data, ...json?.results]);
        setCall(call + 1);
        console.log(json);
      });
  }, [reachedBottom]);

  return (
    <>
      <div className="card-list">
        {data.map((data, index) => (
          <Card key={index} index={index} data={data} position="scroll" />
        ))}
      </div>
      <div ref={bottomRef}>{reachedBottom && ``}</div>
    </>
  );
}
