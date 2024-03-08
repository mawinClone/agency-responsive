import React from "react";
import "./GridContent.css";

const GridContent = () => {
  return (
    <div className="grid-parent">
      <div>
        <p style={{ textAlign: "center", paddingTop:"30px", color:"white", fontSize:"20px"}}>
          OUR SERVICE
        </p>
      </div>
      <div>
        <h3
          style={{
            textAlign: "center",
            margin: "30px 0px 30px 0px",
            fontWeight: "lighter",
            color:"white"
          }}
        >
          Mascot Branding
        </h3>
      </div>
      <div className="grid-container" style={{marginBottom:"30px"}}>
        <div className="grid-item">item 1</div>
        <div className="grid-item">item 2</div>
        <div className="grid-item">item 3</div>
        <div className="grid-item">item 4</div>
        <div className="grid-item">item 5</div>
        <div className="grid-item">item 6</div>
        <div className="grid-item">item 7</div>
      </div>

      <div>
        <h3
          style={{
            textAlign: "center",
            margin: "70px 0px 30px 0px",
            fontWeight: "lighter",
            color:"white"
          }}
        >
          Social Media Content
        </h3>
      </div>

      <div className="grid-container">
        <div className="grid-item2">item 1</div>
        <div className="grid-item2">item 2</div>
        <div className="grid-item2">item 3</div>
        <div className="grid-item2">item 4</div>
        <div className="grid-item2">item 5</div>
        <div className="grid-item2">item 6</div>
        <div className="grid-item2">item 7</div>
      </div>
    </div>
  );
};

export default GridContent;
