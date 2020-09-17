import React, { useState, useEffect } from "react";
import API from "../../API/api";
import BookList from "./BookList";

const UsingHooks = () => {
  const [searchTerm, setSearchTerm] = useState("Los hombres que no amaban");
  const [books, setBooks] = useState([]);
  const handleSearchBooks = () => {
    API.searchBooks(searchTerm)
      .then((res) => {
        setBooks(res.data.items);
      })
      .catch((err) => console.log(err));
  };
  useEffect(handleSearchBooks, []);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          style={{ width: "70%" }}
          key="search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
        <button
          style={{
            width: "30%",
            padding: "5px",
            marginLeft: "5px",
            marginRight: "5px",
          }}
          onClick={handleSearchBooks}
        >
          Search
        </button>
      </div>
      <BookList books={books} />
    </>
  );
};

export default UsingHooks;
