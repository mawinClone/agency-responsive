import React from "react";
import "./CSSTest.css";

const CSSTest = () => {
  return (
    <div className="BoxParent">
      <div className="BoxChild">
        <div className="Box-Table">
          <h1>
            <p>Content</p>
          </h1>
          <h1>
            <p>Content</p>
          </h1>
          <h1>
            <p>Content</p>
          </h1>
          <h1>
            <p>Content</p>
          </h1>
          
        </div>

        {/* <div className="Box">
          <div className="Child-Box">
            <p>live</p>
          </div>
        </div>
        <i class="fa fa-shopping-cart"></i> */}
      </div>
    </div>
  );
};

export default CSSTest;
