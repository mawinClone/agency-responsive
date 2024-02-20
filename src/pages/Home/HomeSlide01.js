import React from "react";
import "./HomeSlide01.css";
import Logo from "../../assets/images/logo.png";

const HomeSlide01 = () => {
  return (
    <div className="HomeSlide">
      {/* <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"></img> */}
      <div className="overay"></div>
      <div className="contact-us-div">
        <p>บริการให้คำปรึกษาฟรี</p>
        <p>สำหรับผู้ที่มีความสนใจในบริการของเรา</p>

        <a>
          <p>ติดต่อเรา</p>
        </a>
        <image src={Logo}></image>
      </div>
    </div>
  );
};

export default HomeSlide01;
