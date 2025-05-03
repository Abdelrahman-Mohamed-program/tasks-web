import Footer from "../shared/Footer";

import {Routes,Route}from "react-router-dom"
import Navbar from "./Navbar";
import NotMatch from "../error404/NotMatch";
import HomeTask from "./HomeTask"
import Scinece from "./Science";
import Sports from "./Sports";
import Weather from "./Weather";
function App(){

    return(
    <>
    
     <Navbar/>
     <Routes> 
        <Route path="/" element={<HomeTask/>}/>
        <Route path="/weather" element={<Weather/>}/>
  
        <Route path="/science" element={<Scinece/>}/>
        <Route path="/sports" element={<Sports/>}/>
        <Route path="*" element={<NotMatch/>}/>
     </Routes>
     <Footer/>
    </>
    );
}
export default App;