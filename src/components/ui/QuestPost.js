import React, { useState, useCallback } from "react";
import {
  CCollapse,
  CButton,
  CRow,
  CCol,
  CCard,
  CCardBody,
} from "@coreui/react";
import "./QuestPost.css";

const QuestPost = () => {
  const [isExpanded01, setIsExpanded01] = useState(false);
  const [isExpanded02, setIsExpanded02] = useState(false);
  const [isExpanded03, setIsExpanded03] = useState(false);
  const [isExpanded04, setIsExpanded04] = useState(false);

  const toggleIsExpanded01 = useCallback(() => {
    setIsExpanded01((isExpanded01) => !isExpanded01);
  }, []);
  const toggleIsExpanded02 = useCallback(() => {
    setIsExpanded02((isExpanded02) => !isExpanded02);
  }, []);
  const toggleIsExpanded03 = useCallback(() => {
    setIsExpanded03((isExpanded03) => !isExpanded03);
  }, []);
  const toggleIsExpanded04 = useCallback(() => {
    setIsExpanded04((isExpanded04) => !isExpanded04);
  }, []);

  return (
    <div className="question-div">
      <div className="question-container">
        <h1 style={{ marginBottom: "20px", fontSize: "30px" }}>
          <p>คำถามที่พบบ่อย</p>
        </h1>
        <div className="question-flex-container">
          <div className="question-item">
            <>
              <p
                className="qusetion-topic"
                style={{ display: "inline-block", marginRight: "3px" }}
              >
                ทำไมต้องจ้างบริษัท Agency ในการทำการตลาด
              </p>
              <button
                style={{ display: "inline-block", padding: "3px" }}
                onClick={toggleIsExpanded01}
              >
                Expand
              </button>
            </>
            <div
              className="collapse"
              style={{ height: isExpanded01 ? "50px" : "0px" }}
            >
              <p className="question-answer">
                บริษัทอเจนซี่มักมีทีมงานที่มีความเชี่ยวชาญและประสบการณ์ในด้านตลาดและโฆษณา
                ซึ่งสามารถช่วยให้โฆษณาของคุณมีประสิทธิภาพมากขึ้นได้
              </p>
            </div>
          </div>
          <div className="question-item">
            <>
              <p
                className="qusetion-topic"
                style={{ display: "inline-block", marginRight: "3px" }}
              >
                DudeStar Digital Marketing โดดเด่นด้านไหน
              </p>
              <button
                style={{ display: "inline-block", padding: "3px" }}
                onClick={toggleIsExpanded02}
              >
                Expand
              </button>
            </>
            <div
              className="collapse"
              style={{ height: isExpanded02 ? "50px" : "0px" }}
            >
              <p className="question-answer">
                เรามีทีมงานที่พร้อมด้วยประสบการณ์ทางด้านการตลาดออนไลน์มากกว่า 5
                ปี
                และยังช่วยแก้ไขปัญหาให้ธุรกิจของคุณดำเนินงานได้อย่างเต็มประสิทธิภาพ
              </p>
            </div>
          </div>
          <div className="question-item">
            <>
              <p
                className="qusetion-topic"
                style={{ display: "inline-block", marginRight: "3px" }}
              >
                ต้องใช้งบประมาณเท่าไหร่ในการจ้างเรา
              </p>
              <button
                style={{ display: "inline-block", padding: "3px" }}
                onClick={toggleIsExpanded03}
              >
                Expand
              </button>
            </>
            <div
              className="collapse"
              style={{ height: isExpanded03 ? "50px" : "0px" }}
            >
              <p className="question-answer">
                ทางแบรนด์สามารถกำหนดงบประมาณในการทำการตลาดตามความเหมาะสมของธุรกิจได้อย่างอิสระ
                และสามารถจัดการงบประมาณในการตลาดในระดับที่เหมาะสมกับทรัพยากรที่มีอยู่
                โดยคำนึงถึงผลตอบแทน ที่ต้องการได้อย่างเหมาะสม
              </p>
            </div>
          </div>
          <div className="question-item">
            <>
              <p
                className="qusetion-topic"
                style={{ display: "inline-block", marginRight: "3px" }}
              >
                จะติดตามข่าวสารเราได้จากช่องทางไหน
              </p>
              <button
                style={{ display: "inline-block", padding: "3px" }}
                onClick={toggleIsExpanded04}
              >
                Expand
              </button>
            </>
            <div
              className="collapse"
              style={{ height: isExpanded04 ? "50px" : "0px" }}
            >
              <p className="question-answer">
                Facebook : Dudestar Digital marketing
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestPost;
