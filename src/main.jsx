import ReactDOM  from "react-dom/client";
import { Root } from "./router/Root";
import 'flowbite';
import { GlobalProvider } from "./context/ContextProvider";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <GlobalProvider>
    <Root/>
  </GlobalProvider>
)