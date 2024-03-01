import "./App.css";

import Footer from "./components/ui/Footer";
import Navbar from "./components/ui/NavBar";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";

function App() {
  return (
    

    <div className="App"> 
      <Navbar/>
      <Home/>
      {/* <Service/> */}
      {/* <About/> */}
      {/* <Contact/> */}
      <Footer/>
      
    </div>
  );
}

export default App;
