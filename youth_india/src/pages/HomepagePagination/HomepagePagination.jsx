import React, { useState, useMemo, useEffect } from "react";
import Pagination from "../../components/pagination/Pagination";
import "../../App.css";
import { CardList } from "../../components/cardList/cardList";
import { Card } from "../../components/card/Card";
let PageSize = 12;

export default function HomepagePagination() {
  const [currentPage, setCurrentPage] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=1000")
      .then((res) => res.json())
      .then((json) => {
        setData(json.results);
        console.log(json);
        setCurrentPage(1);
      });
  }, []);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  return (
    <>
      <div className="card-list">
        {currentTableData.map((data, index) => (
          <Card
            key={index}
            index={index}
            data={data}
            currentPage={currentPage}
            position="pagination"
          />
        ))}
      </div>
      <Pagination
        className="pagination-bar App"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </>
  );
}
