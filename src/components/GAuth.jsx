import React, { useRef, useState } from "react";
import { Container } from "../global/Styles";
import { useAuth } from "../context/ContextProvider";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseEvents";

export default function GAuth({ dirction, URL_STATUS }) {
  const EM = useRef();
  const PS = useRef();
  const { dispatch, std_status } = useAuth();
  const [worng, setWorng] = useState("");
  const navigation = useNavigate();

  const regexEmailPattern = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;
  function SAuth(e) {
    e.preventDefault();
    if (!regexEmailPattern.test(EM.current.value)) {
      setWorng("Please Enter Valid Email contain @");
      EM.current.focus();
    } else if (!PS.current.value) {
      setWorng("Please Enter Valid Password");
    } else {
      setWorng("");
      signInWithEmailAndPassword(auth, EM.current.value, PS.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          if (user.email.startsWith("admine") && URL_STATUS != "std") {
            dispatch({
              type: "ADM_STATUS",
              act: true,
            });
            dispatch({
              type: "STD_STATUS",
              act: false,
            });
          }
          if (!user.email.startsWith("admine") && URL_STATUS == "std") {
            dispatch({
              type: "STD_STATUS",
              act: true,
            });
            dispatch({
              type: "ADM_STATUS",
              act: false,
            });
          }
          navigation(`/${dirction}`);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setWorng("Please Check Your Email or Password");
        });
    }
  }
  return (
    <Container>
      <div>
        <form className="shadow dark:bg-gray-700" style={{ padding: "15px" }}>
          <div className="mb-6">
            <p className="text-center text-red-500 font-medium">{worng}</p>
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Email
            </label>
            <input
              ref={EM}
              type="email"
              id="email"
              className="w-full shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@ejust.edu.eg"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="stdid"
              className="block mb-1 text-sm font-medium text-gray-900 dark:text-white"
            >
              Password
            </label>
            <input
              ref={PS}
              type="password"
              id="stdid"
              placeholder="xxxxxx"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            />
          </div>
          <button
            onClick={SAuth}
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Login
          </button>
        </form>
      </div>
    </Container>
  );
}
