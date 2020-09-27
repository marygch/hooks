import { useState, useEffect } from "react";
import API from "../../API/api";

const useFetchBook = (searchTerm) => {
  const [books, setBooks] = useState({
    books: [],
    loading: true,
  });

  const handleSearchBooks = () => {
    setTimeout(() => {
      API.searchBooks(searchTerm)
        .then((res) => {
          setBooks({ books: res.data.items });
        })
        .catch((err) => console.log(err));
    }, 2000);
  };
  // Like didUpdate
  useEffect(handleSearchBooks, [searchTerm]);
  return books;
};

export default useFetchBook;
