import React from "react";
import "./ContactSlide01.css";
import Logo from "../../assets/images/service-logo.png";
import ContactMascot from "../../assets/images/contact-mascot.png";

const ContactSlide01 = () => {
  return (
    <div className="ContactSlide01">
      <div className="contact-container">
        <div style={{marginBottom:"30px"}}>contact</div>
        <div
          style={{
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
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

          <h1 style={{ display: "inline-block", marginRight: "30px" }}>|</h1>
          <h1 style={{ display: "inline-block", marginRight: "10px",fontSize:"3vw" }}>
            เราเป็น Digital
          </h1>
          <h1 style={{ display: "inline-block", color: "#6100FF", fontSize:"3vw" }}>
            Marketing Agency
          </h1>
        </div>

        <div className="contact-container-center">
          <div className="contact-center-list">
            <ul>
              <li>พัฒนาธุรกิจ</li>
              <li>วางแผนธุรกิจระดับเริ่มต้นจนถึงขนาดกลาง</li>
              <li>วางแผนการตลาดทางด้านออนไลน์</li>
              <li>วางแผนการตลาดและพัฒนาธุรกิจแฟรนไชส์</li>
            </ul>
          </div>
          <div  className="contact-center-img">
          <img
            src={ContactMascot}
            style={{
              width:"75%"
            }}
            alt="line-logo"
          />
          </div>
        </div>

        <h4>"ให้เราพร้อมที่จะเป็นผู้ดูแลและสนับสนุนธุรกิจของคุณอย่างเต็มที่ ด้วยความคุ้มค่าและความน่าเชื่อถือ </h4>
        <h4>เรามุ่งมั่นที่จะให้บริการที่ดีที่สุดเพื่อช่วยให้ธุรกิจของคุณเติบโตและประสบความสำเร็จอย่างยั่งยืน</h4>
      </div>
    </div>
  );
};

export default ContactSlide01;
