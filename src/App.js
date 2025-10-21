import { Header, Header1 } from "./header";
import MainContent from "./mainContent";
import Footer from "./footer";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/home";
import Users from "./Pages/users";
import AboutUs from "./Pages/aboutUs";

function App() {
    return (
        <>
            <BrowserRouter>
                <Header></Header>
                <Routes>
                    <Route path="/home" element={<Home></Home>} />
                    <Route path="/users" element={<Users></Users>} />
                    <Route path="/aboutUs" element={<AboutUs></AboutUs>} /> 
                    <Route path="*" default element={<Home></Home>} />                
                </Routes>
                <Footer></Footer>
            </BrowserRouter>
        </>
    )
}

export default App;