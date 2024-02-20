import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer">
            <div className="sb-footer section-padding">
                <div className="sb-footer-links">
                    <div className="sb-footer-links-div">
                        <h2>Home</h2>
                        <a><p>Service</p></a>
                        <a><p>About us</p></a>
                        <a><p>Contract</p></a>
                        <a><p>Blog</p></a>
                    </div>
                    <div className="sb-footer-links-div">
                        <h2>Service</h2>
                        <a><p>Mascot Branding</p></a>
                        <a><p>Social Media Content</p></a>
                        <a><p>3D Photo Packshot</p></a>
                        <a><p>Package Deisgn</p></a>
                        <a><p>Logo Design</p></a>
                        <a><p>TikTok Content</p></a>
                        <a><p>TikTok Effect</p></a>
                        <a><p>Motion Graphic</p></a>
                        <a><p>Advertising Package Social</p></a>
                    </div>
                    <div className="sb-footer-links-div">
                        <div className="socialMedia">
                            <h1>D | </h1>
                            <a>.</a>
                            <a>.</a>
                            <a>.</a>
                        </div>
                        <a><p>เหนือกว่า One-stop service เพราะเราคือ Digital Marketing Agency ที่นำ Innovation มาเพิ่มประสิทธิภาพการตลาดออนไลน์ของคุณให้ถึงขีดสุด เราพร้อมผลักดันการตลาดของคุณ ให้รวดเร็วฉับไวทันต่อสถานการณ์เสมอ ด้วยระบบ Agile Management ที่เหนือกว่าใคร ทั้งหมดนี้ในราคาที่คุณจะต้องพอใจ</p></a>

                    </div>

                    {/* <hr></hr> */}



                </div>
                <div className="sb-footer-below">
                <div className="sb-footer-copyright" style={{ textAlign: "center", marginTop:"3rem"}}>
                    <p>© 2023 DudeStar Digital Marketing</p>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Footer;
