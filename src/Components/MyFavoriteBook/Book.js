import React, { useState } from "react";
import useFetchBook from "./useFetchBook";
import BookList from "./BookList";

const Book = () => {
  const [searchTerm, setSearchTerm] = useState("Los hombres que no amaban");
  const { loading, books } = useFetchBook(searchTerm);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          style={{ width: "100%" }}
          key="search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />
      </div>
      <div>{loading ? "loading data ..." : "My favorite book:"}</div>
      <BookList books={books} />
    </>
  );
};

export default Book;
