import Navbar from "./components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
function App() {
return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <Footer/>
    </>
)
}


export default App;