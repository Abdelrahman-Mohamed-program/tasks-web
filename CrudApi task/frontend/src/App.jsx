import Navbar from "./components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/shared/footer";

function App() {
return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
    </Routes>
    <Footer/>
    </>
)
}


export default App;