import Navbar from "./components/shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import Create from "./components/pages/Create"
import Footer from "./components/shared/footer";
import NotFound from "./components/error404/NotFound"
import Details from "./components/pages/Details";
import Edit from "./components/pages/Edit";
function App() {
return (
    <>
    <Navbar/>
    <Routes>
        <Route path="/edit/:id" element={<Edit/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        {/* to send a prameter to through the url of an component use : then variable name and this is called dynamic route
        Ex path=":id" id here is an prameter that you can change its value
         */}
        <Route path="/" element={<Home/>}/>
        <Route path="/create" element={<Create/>} />
        <Route path="/*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </>
)
}


export default App;