import React from "react";
import "./ContactSlide01.css";
import Logo from "../../assets/images/service-logo.png";
import ContactMascot from "../../assets/images/contact-mascot.png";

const ContactSlide01 = () => {
  return (
    <div className="ContactSlide01">
      <div className="contact-container">
        <div style={{marginBottom:"30px", fontWeight:"lighter", fontSize:"2vw"}}><p>Contact</p></div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Logo}
            style={{
              marginRight: "3px",
              paddingTop: "10px",
              display: "inline-block",
              width:"15vw"
            }}
            alt="line-logo"
          />

          {/* <h3 style={{ display: "inline-block", marginRight: "30px", fontSize:"1.5vw" }}>|</h3> */}
          <p style={{ display: "inline-block", marginRight: "10px",fontWeight:"normal",fontSize:"2.3vw" }}>
            เราเป็น Digital
          </p>
          <p style={{ display: "inline-block", color: "#6100FF",fontWeight:"normal", fontSize:"2.3vw" }}>
            Marketing Agency
          </p>
        </div>

        <div className="contact-container-center">
          <div className="contact-center-list">
            <ul>
              <li><p>พัฒนาธุรกิจ</p></li>
              <li><p>วางแผนธุรกิจระดับเริ่มต้นจนถึงขนาดกลาง</p></li>
              <li><p>วางแผนการตลาดทางด้านออนไลน์</p></li>
              <li><p>วางแผนการตลาดและพัฒนาธุรกิจแฟรนไชส์</p></li>
            </ul>
          </div>
          <div  className="contact-center-img">
          <img
            src={ContactMascot}
            style={{
              width:"65%"
            }}
            alt="line-logo"
          />
          </div>
        </div>

        <p style={{fontSize:"1vw", fontWeight:"300", color:"gray"}}>"ให้เราพร้อมที่จะเป็นผู้ดูแลและสนับสนุนธุรกิจของคุณอย่างเต็มที่ ด้วยความคุ้มค่าและความน่าเชื่อถือ </p>
        <p style={{fontSize:"1vw", fontWeight:"300", color:"gray"}}>เรามุ่งมั่นที่จะให้บริการที่ดีที่สุดเพื่อช่วยให้ธุรกิจของคุณเติบโตและประสบความสำเร็จอย่างยั่งยืน</p>
      </div>
    </div>
  );
};

export default ContactSlide01;
