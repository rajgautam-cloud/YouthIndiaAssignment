import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomepagePagination from "./pages/HomepagePagination/HomepagePagination";
import HomepageScroll from "./pages/HomepageScroll/HomepageScroll";
import SearchPage from "./pages/SearchPage/SearchPage";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomepagePagination />} />
        <Route path="scroll" element={<HomepageScroll />} />
        <Route path="search" element={<SearchPage />} />
      </Routes>
    </div>
  );
}
