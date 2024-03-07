import React from "react";
import "./HomeSlide04.css";
import "./AskForm.css";

import mascot from "../../assets/images/ask-mascot.png";
import correctPic from "../../assets/images/correctPic.png";
import lineoaPic from "../../assets/images/line-oa.png";

const HomeSlide04 = () => {
  return (
    <div className="HomeSlide04">
      <div className="ask-container">
        <div className="ask-flex">
          <div className="ask-detail">
            <div className="ask-topic">
              <p
                style={{ color: "white", fontSize: "60px", fontWeight: "bold" }}
              >
                สอบถามข้อมูล / รับคำปรึกษาฟรี
              </p>
              <p style={{ color: "#8BEAFF", marginBottom:"90px"}}>
                บริการจัดทำวางแผน และดูแลการตลาดออนไลน์โดยทีมงานมืออาชีพ
              </p>
            </div>

            <div className="center-detail">
              <div className="list-detail">
                <div className="list-detail-item">
                  <img src={correctPic}></img>
                  <p>พร้อมให้คำปรึกษาที่ตรงประเด็น</p>
                </div>
                <div className="list-detail-item">
                  <img src={correctPic}></img>
                  <p>ดำเนินการวางแผนให้อย่างชัดเจน</p>
                </div>
                <div className="list-detail-item">
                  <img src={correctPic}></img>
                  <p>พร้อมให้ความช่วยเหลือทุกกรณี</p>
                </div>
              </div>
              <div style={{ width: "45%" }}>
                <img src={mascot} style={{ width: "100%" }}></img>
              </div>
            </div>

            <div style={{ color: "white", marginTop:"30px", display:"flex", alignItems:"center"}}>
              <img src={lineoaPic} style={{borderRadius:"50%", width:"15%", marginRight:"30px"}}></img>
              <p className="line-oa">
                LineOA | เบอร์ติดต่อ : 091-715-3583
              </p>
            </div>
          </div>

          <div className="ask-form">
            <div className="ask-form-div">
              <h1
                style={{
                  textAlign: "center",
                  marginTop: "50px",
                  marginBottom: "50px",
                }}
              >
                ให้เราติดต่อคุณ
              </h1>
              <form action="#" className="form-container">
                <div className="form-row">
                  <div className="input-data">
                    <input type="text" required />
                    <div className="underline"></div>
                    <label>ชื่อ*</label>
                  </div>
                  <div className="input-data">
                    <input type="text" required />
                    <div className="underline"></div>
                    <label>อีเมล*</label>
                  </div>
                </div>
                <div className="form-row">
                  <div className="input-data">
                    <input type="text" required />
                    <div className="underline"></div>
                    <label>เบอร์มือถือ*</label>
                  </div>
                  <div className="input-data">
                    <input type="text" required />
                    <div className="underline"></div>
                    <label>บริการที่สนใจ*</label>
                  </div>
                </div>
              </form>
              <p>Confirm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide04;
