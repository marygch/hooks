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
