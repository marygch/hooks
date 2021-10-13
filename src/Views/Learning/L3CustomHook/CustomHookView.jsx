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
