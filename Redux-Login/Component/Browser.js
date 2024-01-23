import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import ShowData from "./ShowData";
import Sign from "./Sign";

const Browser =()=>{
    return(
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="/Sign-Up" element={<Sign/>}/>
                    <Route path="/Data/:id" element={<ShowData/>}/>
                </Routes>
            </BrowserRouter>
    );
};
export default Browser;