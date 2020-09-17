import React from "react";

const Content = (pros) => {
  return (
    <div className="containers" style={{ padding: "30px" }}>
      {pros.children}
    </div>
  );
};

export default Content;
