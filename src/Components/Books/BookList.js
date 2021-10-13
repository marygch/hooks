import React from "react";
import { Row, Col, Divider } from 'antd';


const BookList = ({ books }) => {
  if (!books || books?.length === 0) {
    return [];
  }
console.log("books", books)
  return (
    books?.length > 0 &&
    books?.map(({ id, volumeInfo }) => {
      return (
        <Row gutter={16} >
          <Divider orientation="left" />
          <Col className="gutter-row" span={5}>
            <img
              style={{ maxHeight: "100px" }}
              alt="#"
              src={
                volumeInfo?.imageLinks?.thumbnail
                  ? `${volumeInfo.imageLinks.thumbnail}`
                  : "https://www.generationsforpeace.org/wp-content/uploads/2018/03/empty.jpg"
              }
            />
          </Col>
          <Col className="gutter-row" span={19}>
            <b>{volumeInfo.title}</b>
            <p><b>Written By </b> {[volumeInfo.authors].flat().join(", ") || "Not found"}</p>
            <p>
              {volumeInfo.description
                ? `${volumeInfo.description.substring(0, 30)} ...`
                : "..."}
              <a
                rel="noreferrer noopener"
                className="btn btn-lg btn-primary input-lg view"
                target="_blank"
                href={volumeInfo.infoLink}
              >
                View
              </a>
            </p>
          </Col>
        </Row>
      );
    })
  );
};

export default BookList;
