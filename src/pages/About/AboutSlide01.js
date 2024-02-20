import React from "react";
import "./AboutSlide01.css";
import ServiceLogo from "../../assets/images/dudestar-service-logo.png";

const AboutSlide01 = () => {
  return (
    <div className="AboutSlide01">
      <div className="about-container">
        <h3 style={{color:"gray"}}>ABOUT US</h3>
        <div>
        <h1 style={{display:"inline-block", marginRight:"15px", color:"#6100FF"}}>DUDESTAR </h1>
        <h1 style={{display:"inline-block", color:"#0087FF"}}>DIGITAL MARKETING</h1>
        </div>
        
        <br></br>
        <img
              src={ServiceLogo}
              style={{ marginRight: "10px", maxWidth: "110px", paddingTop:"10px" }}
              alt="line-logo"
            />
        <br></br>
        <p>DudeStar Digital Marketing เราเป็นทีมงาน</p>
        <p>ที่ช่วยธุรกิจในด้านการวางแผนการตลาดการทำวิจัยตลาดเพื่อค้นหา</p>
        <p>ความต้องการของลูกค้าและการออกแบบแบรนด์เพื่อสร้างคุณค่า</p>
        <p>และสร้างความจดจำให้กับลูกค้า เรามุ่งเน้นให้แคมเปญการสื่อสารทางการตลาด</p>
        <p>เป็นไปตามวัตถุประสงค์ของธุรกิจและตอบสนองช่องทางการสื่อสาร</p>
        <p>ในสื่อออนไลน์และออฟไลน์</p>
        <p>เช่น Google, Facebook, Instagram, Line OA, LINE Ads, TikTok เป็นต้น</p>
        <br></br>
        <p>นอกจากนี้ เราทีม DudeStar Digital Marketing</p>
        <p>ยังเน้นการใช้เทคโนโลยีที่เกี่ยวข้องกับการตลาดและการจัดการข้อมูลอย่างเป็นพิเศษในการพัฒนาและสนับสนุนธุรกิจแฟรนไชส์</p>
        <p>ของคุณด้วยการใช้เทคโนโลยี Machine Learning และ AI เพื่อวิเคราะห์ข้อมูลและตลาดอัตโนมัต</p>
        <p>และนำเสนอแนวทางการตลาดที่เป็นมิตรและเหมาะสมกับกลุ่มเป้าหมายของแฟรนไชส์ของคุณ ทั้งนี้</p>
        <p>เรายังใช้เทคโนโลยีพื้นฐานในการพัฒนาและดูแลเว็บไซต์ และแอปพลิเคชันเพื่อเพิ่มประสิทธิภาพในการขยายฐานลูกค้า เพิ่มยอดขาย</p>
        <p>และสร้างความไว้วางใจในแบรนด์ของคุณ ด้วยการร่วมมือกับเรา</p>
        <p>เรามุ่งมั่นที่จะทำให้ธุรกิจแฟรนไชส์ของคุณเติบโตและประสบความสำเร็จอย่างยั่งยืนได้อย่างมีประสิทธิภาพและเป็นไปตามเป้าหมายที่คุณตั้งไว้</p>
      </div>
    </div>
  );
};

export default AboutSlide01;
