import ReactDOM  from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboute from "./pages/exame";
import Home from "./pages/home"
import Protecter from "./pages/protecter";
import { Root } from "./router/Root";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <Root/>
)