import React from "react";

const BookList = ({ books }) => {
  if (!books || books.length === 0) {
    return [];
  }
  const buttonStyle = {
    width: "100%",
    height: "30px",
    borderRadius: "5px",
    color: "white",
    backgroundColor: "#6c6771",
  };

  return (
    books.length > 0 &&
    books.map(({ id, volumeInfo }) => {
      return (
        <div style={{ display: "flex", paddingTop: "30px" }}>
          <div style={{ width: "150px" }}>
            <img
              style={{
                maxHeight: "200px",
              }}
              alt="#"
              src={
                volumeInfo.imageLinks === undefined
                  ? "http://siddallheatingandcooling.net/_imgstore/5/1360415/thumbnail/FSeY96wEdX_eY4XkBN2jfYnuY9A.png"
                  : `${volumeInfo.imageLinks.thumbnail}`
              }
            />
            {!id ? (
              <button style={buttonStyle} type="success" className="input-lg">
                Save
              </button>
            ) : (
              <button style={buttonStyle} type="danger" className="input-lg">
                Delete
              </button>
            )}
          </div>
          <div style={{ paddingLeft: "30px", width: "100%" }}>
            <h5>{volumeInfo.title}</h5>
            <p>Written By {[volumeInfo.authors].flat().join(", ")}</p>
            <p>
              {volumeInfo.description
                ? `${volumeInfo.description.substring(0, 150)} ...`
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
          </div>
        </div>
      );
    })
  );
};

export default BookList;
