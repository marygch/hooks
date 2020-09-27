import React, { Component } from "react";
import API from "../../API/api";
import BookList from "../Books";

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
    // calls googlebooks api and returns searched book when search button is clicked
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
      <div>
        <input
          style={{ width: "70%" }}
          key="search"
          onChange={(e) => {
            this.setState({ searchTerm: e.target.value });
          }}
          value={searchTerm}
        />
        <button
          style={{
            width: "25%",
            padding: "5px",
            marginLeft: "5px", 
          }}
          onClick={this.handleSearchBooks}
        >
          Search
        </button>
        <BookList books={books} />
      </div>
    );
  }
}

export default UsingClass;
