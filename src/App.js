import "./App.css";
import CSSTest from "./components/test/CSSTest";
import Footer from "./components/ui/Footer";
import GridContent from "./components/test/GridContent";
// import GridTest from "./components/GridTest";
import HomeSlide01 from "./components/HomeSlide01";
import HomeSlide02 from "./components/HomeSlide02";
import Navbar from "./components/ui/NavBar";
import Body from "./components/ui/Body";


function App() {
  return (
    // App 100% of ViewPort
    <div className="App"> 
      <Navbar/>

      {/* <HomeSlide01/>
      <CSSTest/> */}
      
      <GridContent/>
      
      <Footer/>
      
    </div>
  );
}

export default App;
