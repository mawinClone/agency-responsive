import "./App.css";
import CSSTest from "./components/CSSTest";
import GridTest from "./components/GridTest";
import HomeSlide01 from "./components/HomeSlide01";
import HomeSlide02 from "./components/HomeSlide02";
import Navbar from "./components/NavBar";


function App() {
  return (
    // App 100% of ViewPort
    <div className="App"> 
      <Navbar/>
      <HomeSlide01/>
      <HomeSlide02/>

      
      {/* <CSSTest/> */}
      
      
      
    </div>
  );
}

export default App;
