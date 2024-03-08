import React, { useState, useEffect } from 'react'
import HomeSlide01 from './HomeSlide01'
import HomeSlide02 from './HomeSlide02'
import HomeSlide03 from './HomeSlide03'
import HomeSlide04 from './HomeSlide04'
import Modal from '../../components/ui/Modal'
import popupPic from "../../assets/images/popupPic.png";



const Home = () => {

  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true)
  };

  const hideModal = () => {
    setShow(false)
  };

  useEffect(()=>{
    showModal();
  },[]);
  

  return (
    <div>
      {/* <button type="button" onClick={showModal}>
          Open
        </button> */}
        <Modal show={show} handleClose={hideModal}>
          <img src={popupPic} style={{width:"90%"}}></img>
        </Modal>
        <HomeSlide01/>
        <HomeSlide02/>
        <HomeSlide03/>
        <HomeSlide04/>
    </div>
  )
}

export default Home