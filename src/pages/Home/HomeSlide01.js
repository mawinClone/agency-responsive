import React from "react";
import "./HomeSlide01.css";
import Logo from "../../assets/images/logo.png";

const HomeSlide01 = () => {
  return (
    <div className="HomeSlide">
      {/* <img src="https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg"></img> */}
      <div className="overay"></div>
      <div className="contact-us-div ">
        <p className="font-link">บริการให้คำปรึกษาฟรี</p>
        <p className="font-link">สำหรับผู้ที่มีความสนใจในบริการของเรา</p>

        <div className="contact-btn">
          <p>ติดต่อเรา</p>
        </div>
        {/* <im src={Logo}></im> */}
      </div>
    </div>
  );
};

export default HomeSlide01;
