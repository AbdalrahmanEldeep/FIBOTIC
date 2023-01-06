import ReactDOM  from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboute from "./pages/about";
import Home from "./pages/home"
import Protecter from "./pages/protecter";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<Protecter statuse={true}><Home/></Protecter>}/>
         <Route path="/about" element={<Protecter><Aboute/></Protecter>}/>
      </Routes>
   </BrowserRouter>
)