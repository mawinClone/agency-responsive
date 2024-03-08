import "./Modal.css";
import closeBtn from "../../assets/icons/closeBtn.png";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <div className="btn-flex">
          <img src={closeBtn} onClick={handleClose}></img>
          {/* <button type="reset" onClick={handleClose} className='close-btn' >dsda</button> */}
        </div>
      </section>
    </div>
  );
};
export default Modal;
