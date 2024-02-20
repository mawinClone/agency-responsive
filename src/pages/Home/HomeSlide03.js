import React from "react";
import "./HomeSlide03.css";

const HomeSlide03 = () => {
  return (
    <div className="HomeSlide03">
      {/* intro */}
      <div className="intro-container">
        <div className="intro-div">
          <div className="text-intro-div">
            <p className="text-topic">เราคือใคร ?</p>
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
            <img src="https://blog.hubspot.de/hubfs/Germany/Blog_images/Optimize_Online-Marketing.jpg"></img>
          </div>
        </div>
      </div>
      {/* news */}
      <div className="news-div">
        <div className="news-container">
          <h1>ข่าวสาร</h1>
          <hr></hr>
          <div className="news-flex-container">
            <div className="news-item"></div>
            <div className="news-item"></div>
            <div className="news-item"></div>
          </div>
        </div>
        
      </div>

      <div className="question-div">
        <div className="question-container">
          <h1 style={{ marginBottom: "20px" }}>คำถามที่พบบ่อย</h1>
          <div className="question-flex-container">
            <div className="question item">
              <h2>ทำไมต้องจ้างบริษัท Agency ในการทำการตลาด</h2>
              <p>
                บริษัทอเจนซี่มักมีทีมงานที่มีความเชี่ยวชาญและประสบการณ์ในด้านตลาดและโฆษณา
                ซึ่งสามารถช่วยให้โฆษณาของคุณมีประสิทธิภาพมากขึ้นได้
              </p>
            </div>
            <div className="question item">
              <h2>DudeStar Digital Marketing โดดเด่นด้านไหน</h2>
              <p>
                เรามีทีมงานที่พร้อมด้วยประสบการณ์ทางด้านการตลาดออนไลน์มากกว่า 5 ปี
                และยังช่วยแก้ไขปัญหาให้ธุรกิจของคุณดำเนินงานได้อย่างเต็มประสิทธิภาพ
              </p>
            </div>
            <div className="question item">
              <h2>ต้องใช้งบประมาณเท่าไหร่ในการจ้างเรา</h2>
              <p>
                ทางแบรนด์สามารถกำหนดงบประมาณในการทำการตลาดตามความเหมาะสมของธุรกิจได้อย่างอิสระ
                และสามารถจัดการงบประมาณในการตลาดในระดับที่เหมาะสมกับทรัพยากรที่มีอยู่
                โดยคำนึงถึงผลตอบแทน ที่ต้องการได้อย่างเหมาะสม
              </p>
            </div>
            <div className="question item">
              <h2>จะติดตามข่าวสารเราได้จากช่องทางไหน</h2>
              <p>Facebook : Dudestar Digital marketing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide03;
