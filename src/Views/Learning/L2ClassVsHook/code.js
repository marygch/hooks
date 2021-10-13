const code = `
import React, { Component } from "react";
import { Button, Input, Row, Col } from 'antd';
import API from "../../../API/api";
import BookList from "../../../Components/Books";

class UsingClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "La chica que soñaba",
    };
  }

  componentDidMount() {
    this.handleSearchBooks();
  }

  handleSearchBooks = () => {
    const { searchTerm } = this.state;
    API.searchBooks(searchTerm)
      .then((res) => {
        this.setState({ books: res.data.items });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { books, searchTerm } = this.state;
    return (
      <>
        <Row gutter={16}>
          <Col className="gutter-row" span={20}>
            <Input key="search"
              onChange={(e) => this.setState({ searchTerm: e.target.value })}
              value={searchTerm}
            />
          </Col>
          <Col className="gutter-row" span={4}>
            <Button type="primary" onClick={this.handleSearchBooks}>
              Search
            </Button>
          </Col>
        </Row>
        <BookList books={books} />
      </>
    );
  }
}
export default UsingClass;
`;

export { code };