import React from "react";
import "./ContactSlide02.css";
import LineOA from "../../assets/images/line-oa.png";

const ContactSlide02 = () => {
  return (
    <div className="ContactSlide02">
      <div className="contact-form-container">
        <div className="left-form">
          <div className="left-form-item">
            <img src={LineOA} alt="line-logo" />
          </div>
          <div className="left-form-item">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#616161",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              ></div>
              
                <p style={{ display: "inline-block" }}>เบอร์ติดต่อ : 091-715-3583 (Q)</p>
             
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "15px",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  width: "40px",
                  height: "40px",
                  backgroundColor: "#616161",
                  borderRadius: "50%",
                  marginRight: "15px",
                }}
              ></div>
              
                <p style={{ display: "inline-block" }}>Email : dudestar_digital_sale@gmail.com</p>
              
            </div>
          </div>

          <div className="left-form-item-circle">
            <div className="contact-form-circle"></div>
            <div className="contact-form-circle"></div>
            <div className="contact-form-circle"></div>
            <div className="contact-form-circle"></div>
          </div>
        </div>

        <div className="right-form">
          <div className="contact-form">
            <div
              style={{ display: "flex", width: "100%", marginBottom: "30px" }}
            >
              <p style={{ fontSize: "30px" }}>ฟอร์มติดต่อเรา</p>
            </div>

            <div>
              <p>ชื่อ-นามสกุล *</p>
              <input type="text" className="form__input" id="name" />
            </div>
            <div>
              <p>Email *</p>
              <input type="text" className="form__input" id="name" />
            </div>
            <div>
              <p>เบอร์โทรศัพท์ *</p>
              <input type="text" className="form__input" id="name" />
            </div>
            <div>
              <p>SERVICE *</p>
              <input type="text" className="form__input" id="name" />
            </div>

            <div
              style={{
                backgroundColor: "#6100FF",
                width: "130px",
                height: "50px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginTop: "15px",
                borderRadius: "10px",
              }}
            >
              <div style={{ color: "white" }}>send</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSlide02;
