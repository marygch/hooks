const code = `
import React, { useState } from "react";
import useFetchBook from "./useFetchBook";
import BookList from "../../../Components/Books";

const CustomHook = () => {
  const [searchTerm, setSearchTerm] = useState("Los hombres que no amaban");
  const { loading, books } = useFetchBook(searchTerm);

  return (
    <>
      <div>
        <input
          style={{ width: "100%" }}
          key="search"
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          value={searchTerm}
        />{" "}
      </div>
      <div>
        {loading ? "loading data ..." : "My favorite book:"}
        <BookList books={books} />
      </div>
    </>
  );
};

export default CustomHook;

`; 

const code2 = `
import { useState, useEffect } from "react";
import API from "../../../API/api";

const useFetchBook = (searchTerm) => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearchBooks = () => {
    setLoading(true);
    setTimeout(() => {
      API.searchBooks(searchTerm)
        .then((res) => {
          setBooks(res.data.items);
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, 2000);
  };
  // Like didUpdate
  useEffect(handleSearchBooks, [searchTerm]);
  return { books, loading };
};

export default useFetchBook;

`; 


export { code , code2};