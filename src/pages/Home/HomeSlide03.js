import React from "react";
import "./HomeSlide03.css";
import whowePic from "../../assets/images/Home/whowe.png";
import newsPic01 from "../../assets/images/Home/news01.png";
import newsPic02 from "../../assets/images/Home/News02.png";
import newsPic03 from "../../assets/images/Home/news03.png";

const HomeSlide03 = () => {

  


  return (
    <div className="HomeSlide03">
      {/* intro */}
      <div className="intro-container">
        <div className="intro-div">
          <div className="text-intro-div">
            <div className="text-topic"><p style={{ fontSize:"50px"}}>เราคือใคร ?</p></div>
            <p>DudeStar Digital Marketing</p>
            <p>
              เราเป็นทีมการตลาดที่มีความเชี่ยวชาญและมีประสบการณ์ในด้าน Online
              Marketing รวมถึงงานด้าน Production พวกเรามุ่งมั่นที่จะนำเสนอ
              Solution ที่เหมาะสมกับธุรกิจของคุณด้วยประสบการณ์ที่เรามี
              เพื่อให้ธุรกิจของคุณสามารถเติบโตและประสบความสำเร็จในโลกออนไลน์ได้อย่างสมบูรณ์
              ด้วยทีมงานมืออาชีพ
            </p>
          </div>

          <div className="img-intro-div">
            <img src={whowePic}></img>
          </div>
        </div>
      </div>
      {/* news */}
      <div className="news-div">
        <div className="news-container">
          <h1>ข่าวสาร</h1>
          <hr></hr>
          <div className="news-flex-container">
            <div className="news-item">
              <img className="news-pic" src={newsPic01}></img>
              <div className="news-detail">
                <p style={{fontSize:"23px"}}>Trend Marketing 2024</p>
                <p>เทรนด์การตลาดที่น่าจับตามอง</p>
                <p>ในปี 2024 มีอะไรน่าสนใจบ้าง</p>
              </div>
            </div>
            <div className="news-item">
              <img className="news-pic" src={newsPic02}></img>
              <div className="news-detail">
                <p style={{fontSize:"23px"}}>DudeStar Content  2024</p>
                <p>เทรนด์ Content ในปี 2024</p>
                <p>ที่กำลังเป็นกระแส</p>
              </div>
            </div>
            <div className="news-item">
              <img className="news-pic" src={newsPic03}></img>
              <div className="news-detail">
                <p style={{fontSize:"23px"}}>DudeStar Team 2024</p>
                <p>ในปี 2024 เรามีแพลนจะไปในทิศทางไหน</p>
                <p>และมีกิจกรรมด้านใดบ้าง</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="question-div">
        <div className="question-container">
          <h1 style={{ marginBottom: "20px" }}>คำถามที่พบบ่อย</h1>
          <div className="question-flex-container">
            <div className="question-item">
              <h2><p>ทำไมต้องจ้างบริษัท Agency ในการทำการตลาด</p></h2>
              <p>
                บริษัทอเจนซี่มักมีทีมงานที่มีความเชี่ยวชาญและประสบการณ์ในด้านตลาดและโฆษณา
                ซึ่งสามารถช่วยให้โฆษณาของคุณมีประสิทธิภาพมากขึ้นได้
              </p>
            </div>
            <div className="question-item">
              <h2><p>DudeStar Digital Marketing โดดเด่นด้านไหน</p></h2>
              <p>
                เรามีทีมงานที่พร้อมด้วยประสบการณ์ทางด้านการตลาดออนไลน์มากกว่า 5
                ปี
                และยังช่วยแก้ไขปัญหาให้ธุรกิจของคุณดำเนินงานได้อย่างเต็มประสิทธิภาพ
              </p>
            </div>
            <div className="question-item">
              <h2><p>ต้องใช้งบประมาณเท่าไหร่ในการจ้างเรา</p></h2>
              <p>
                ทางแบรนด์สามารถกำหนดงบประมาณในการทำการตลาดตามความเหมาะสมของธุรกิจได้อย่างอิสระ
                และสามารถจัดการงบประมาณในการตลาดในระดับที่เหมาะสมกับทรัพยากรที่มีอยู่
                โดยคำนึงถึงผลตอบแทน ที่ต้องการได้อย่างเหมาะสม
              </p>
            </div>
            <div className="question-item">
              <h2><p>จะติดตามข่าวสารเราได้จากช่องทางไหน</p></h2>
              <p>Facebook : Dudestar Digital marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide03;
