import "./App.css";
import CSSTest from "./components/CSSTest";
import GridTest from "./components/GridTest";
import Navbar from "./components/NavBar";


function App() {
  return (
    // App 100% of ViewPort
    <div className="App"> 
      <Navbar/>

      {/* content  */}
      <CSSTest/>
      <CSSTest/>
      {/* <GridTest/> */}
      
    </div>
  );
}

export default App;
