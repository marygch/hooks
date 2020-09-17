import React, { Component } from "react"; 
import Book from "../../Components/MyFavoriteBook/Book";


class MyFavoriteBook extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <span>
          <b> My favorite books using custom hooks:</b>
          <Book />
        </span> 
      </div>
    );
  }
}

export default MyFavoriteBook;
