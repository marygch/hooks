import React, { useState, useEffect } from "react";
import { Button, Input, Row, Col } from 'antd';
import API from "../../../API/api";
import BookList from "../../../Components/Books";

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
      <Row gutter={16}>
        <Col className="gutter-row" span={20}>
          <Input key="search"
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
          />
        </Col>
        <Col className="gutter-row" span={4}>
          <Button type="primary" onClick={handleSearchBooks}>
            Search
          </Button>
        </Col>
      </Row>
      <BookList books={books} />
    </>
  );
};

export default UsingHooks;
