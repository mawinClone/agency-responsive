import React, { useState, useEffect } from "react";
import "./HomeSlide02.css";
import servicePic01 from "../../assets/images/Home/service01.png";
import servicePic02 from "../../assets/images/Home/service02.png";
import servicePic03 from "../../assets/images/Home/service03.png";
import servicePic04 from "../../assets/images/Home/service04.png";
import servicePic05 from "../../assets/images/Home/service05.png";
import servicePic06 from "../../assets/images/Home/service06.png";
import Modal from "../../components/ui/Modal";

const HomeSlide02 = () => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <div className="HomeSlide02">
      <div className="homeslide02-container">
        <div className="overay-service"></div>
        <p className="service-text">SERVICE</p>

        <div className="service-grid-div">
          <div className="service-item">
            <img
              className="topic-img"
              src={servicePic01}
              onClick={showModal}
            ></img>
            <Modal show={show} handleClose={hideModal}>
              <img src={servicePic01}></img>
              <h1>Detail Post</h1>
            </Modal>
            <div className="service-info">
              <p className="topic-info">Mascot Brand</p>
              <p>บริการออกแบบ Mascot & Sticker line</p>
            </div>
            {/* <div className="service-topic-div">
              <p>Mascot Brand</p>
            </div> */}
          </div>
          <div className="service-item">
            <img className="topic-img" src={servicePic02}></img>
            <div className="service-info">
              <p className="topic-info">Social Product Content</p>
              <p>บริการรับออกแบบดูแล Social Media</p>
            </div>
            {/* <div className="service-topic-div">
              <p>Mascot Brand</p>
            </div> */}
          </div>
          <div className="service-item">
            <img className="topic-img" src={servicePic03}></img>
            <div className="service-info">
              <p className="topic-info">Web Design</p>
              <p>บริการรับออกแบบและดูแลเว็บไซต์</p>
            </div>
            {/* <div className="service-topic-div">
              <p>Mascot Brand</p>
            </div> */}
          </div>
          <div className="service-item">
            <img className="topic-img" src={servicePic04}></img>
            <div className="service-info">
              <p className="topic-info">3D Product & Logo Design</p>
              <p>บริการออกแบบ 3D Package & Logo</p>
            </div>
            {/* <div className="service-topic-div">
              <p>Mascot Brand</p>
            </div> */}
          </div>
          <div className="service-item">
            <img className="topic-img" src={servicePic05}></img>
            <div className="service-info">
              <p className="topic-info">Motion Graphic & Editor</p>
              <p>บริการรับออกแบบ VDO Motion & Edit</p>
            </div>
            {/* <div className="service-topic-div">
              <p>Mascot Brand</p>
            </div> */}
          </div>
          <div className="service-item">
            <img className="topic-img" src={servicePic06}></img>
            <div className="service-info">
              <p className="topic-info">Advertising Package Social</p>
              <p>บริการยิงแอดบน Social Media</p>
            </div>
            {/* <div className="service-topic-div">
              <p>Mascot Brand</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide02;
