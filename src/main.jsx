import ReactDOM  from "react-dom/client";
import { Root } from "./router/Root";
import 'flowbite';
import { GlobalProvider } from "./context/ContextProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <GlobalProvider>
    <Root/>
    <ToastContainer />
  </GlobalProvider>
)