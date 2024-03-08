import React from "react";
import "./Footer.css";
import logo from "../../assets/images/logo.png";

import facebookCircle from "../../assets/images/Service/facebook-circle.png";
import tiktokCircle from "../../assets/images/Service/tiktok-circle.png";
import igCircle from "../../assets/images/Service/ig-circle.png";
import lineCircle from "../../assets/images/Service/line-circle.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="sb-footer section-padding">
        <div className="sb-footer-links">
          <div className="sb-footer-links-div" style={{ width: "300px" }}>
            <h2>Home</h2>
            <a>
              <p>Service</p>
            </a>
            <a>
              <p>About us</p>
            </a>
            <a>
              <p>Contact</p>
            </a>
          </div>
          <div className="sb-footer-links-div" style={{ width: "300px" }}>
            <h2>Service</h2>
            <a>
              <p>Mascot Branding</p>
            </a>
            <a>
              <p>Social Media Content</p>
            </a>
            <a>
              <p>3D Photo Packshot</p>
            </a>
            <a>
              <p>Package Deisgn</p>
            </a>
            <a>
              <p>Logo Design</p>
            </a>
            <a>
              <p>TikTok Content</p>
            </a>
            <a>
              <p>TikTok Effect</p>
            </a>
            <a>
              <p>Motion Graphic</p>
            </a>
            <a>
              <p>Advertising Package Social</p>
            </a>
            <a>
              <p>Franchise Product</p>
            </a>
            <a>
              <p>menu</p>
            </a>
            <a>
              <p>Web Design</p>
            </a>
          </div>
          <div className="sb-footer-links-div" style={{ width: "500px"}}>
            <div className="socialMedia" style={{marginBottom:"30px"}}>
              <img src={logo} style={{ width: "40%", marginRight:"30px" }}></img>
              <img src={facebookCircle} style={{ width: "40px", marginRight:"10px" }}></img>
              <img src={tiktokCircle} style={{ width: "40px", marginRight:"10px" }}></img>
              <img src={igCircle} style={{ width: "40px", marginRight:"10px" }}></img>
              <img src={lineCircle} style={{ width: "40px", marginRight:"10px" }}></img>
            </div>
            <a>
              <p>
                เราเป็น Digital Marketing Agency
                ที่มุ่งมั่นที่จะสร้างแผนการตลาดออนไลน์
                ที่ไม่เพียงแต่เติบโตอย่างมีประสิทธิภาพและทันสมัยเท่านั้นแต่ยังมีความเป็นเอกลักษณ์
                และการดำเนินธุรกิจที่ไม่เหมือนใคร
                เราใส่ใจในทุกขั้นตอนของการทำงานเพื่อให้แน่ใจว่า
                แผนการตลาดของคุณได้รับการวางแผนและดำเนินการอย่างครบวงจร มีคุณภาพ
                และเป็นไปตามเป้าหมายที่คุณตั้งไว้
                เราเชื่อมั่นในความสำเร็จของลูกค้าและยังให้ความสำคัญ
                กับการปรับราคาให้เหมาะสมกับความต้องการในงบประมาณของคุณอย่างแท้จริง
              </p>
            </a>
          </div>

          {/* <hr></hr> */}
        </div>
        <div className="sb-footer-below">
          <div
            className="sb-footer-copyright"
            style={{ textAlign: "center"}}
          >
            <p>© 2023 DudeStar Digital Marketing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
