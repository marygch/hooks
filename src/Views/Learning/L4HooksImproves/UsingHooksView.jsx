import React, { useState, useEffect, useCallback, useMemo } from "react";
import { Button, Input, Row, Col } from 'antd';
import API from "../../../API/api";
import BookList from "../../../Components/Books";
import { MemoSelect } from '../../../Components/Core';

const spliceIntoChunks = (arr, chunkSize) => {
  const res = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, chunkSize);
    res.push(chunk);
  }
  return res;
}

const UsingHooks = () => {
  const [searchTerm, setSearchTerm] = useState("Los hombres que no amaban");
  const [books, setBooks] = useState([]); 
  const [pageSize, setPageSize] = useState(2);

  const handleChange = useCallback((elements) => {
    setPageSize(elements);
  });

  const handleSearchBooks = useCallback(() => {
    API.searchBooks(searchTerm)
      .then((res) => {
        setBooks(res.data.items);        
      })
      .catch((err) => console.log(err));
  });

  const formatedBook = useMemo(() =>
    spliceIntoChunks([...books], pageSize),
    [pageSize, books]
  );
  useEffect(handleSearchBooks, [searchTerm]);

  return (
    <>
      <Row gutter={16}>
        <Col className="gutter-row" span={16}>
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
        <Col className="gutter-row" span={4}>
          <MemoSelect handleChange={handleChange} />
        </Col>
      </Row>
      <BookList books={formatedBook[0]} />
    </>
  );
};

export default UsingHooks;
