import ReactDOM  from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboute from "./pages/about";
import Home from "./pages/home"

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<Aboute/>}/>
      </Routes>
   </BrowserRouter>
)