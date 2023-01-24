import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../context/ContextProvider";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Box = styled.div`
  margin: 0 auto;
  background-color: #1f2937;
  display: flex;
  width: 700px;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: inset 1px 1px 10px #111827, 1px 1px 10px #111827,
    inset -1px -1px 10px #111827, -1px -1px 10px #111827;
  border-radius: 10px;
  @media screen and (max-width: 600px) {
    height: 100%;
    width: 100%;
    padding-top: 50px;
    border-radius: 0px;
  }
`;
const Head = styled.div`
  text-align: center;
  font-size: 1.6rem;
  color: #fd6c6c;
  font-weight: 600;
  padding: 20px;
`;
const List = styled.ul`
  padding: ${(prop) => prop.p};
  list-style: decimal;
  list-style: ${(prop) => prop.list};
  background-color: #111827;
  color: #fff;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  height: ${(prop) => prop.hgh};
  gap: ${(prop) => prop.g};
  overflow: auto;
  border-radius: 5px;
  margin: 20px;
  box-shadow: inset 1px 1px 10px #111827, 1px 1px 10px #111827,
    inset -1px -1px 10px #111827, -1px -1px 10px #111827;
  & strong {
    color: #fd6c6c;
  }

  &::-webkit-scrollbar {
    width: 2px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #111827;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  @media screen and (max-width: 600px) {
    padding: 30px;
    padding: ${(prop) => prop.psm};
  }
`;
export const Button = styled.button`
  background-color: ${(prop) => prop.bg};
  border: ${(prop) => prop.br};
  color: ${(prop) => prop.color};
  padding: 10px 30px;
  border-radius: 3px;
  font-weight: 700;
  transition: all ease 0.4s;
  box-shadow: 0.1px 0.1px 10px #f8d549a7;
  &:hover {
    transform: scale(1.2);
    color: #111827;
  }
`;

export const BTNBOX = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${prop => prop.g};
  padding: 20px 40px;
  @media screen and (max-width: 600px) {
    padding: 20px 15px;
  }
`;

export default function QuizInfo() {
  const { users, dispatch } = useAuth();


  useEffect(() => {
    return () => {
      dispatch({
        type: "STD_STATUS",
        act: false,
      });
    };
  }, []);

  useEffect(() => {
      dispatch({
        type: "STD_STATUS",
        act: true,
      });
  }, []);

  
  return (
    <Container>
      <Box>
        <Head>IMPORTANT RULES</Head>
        <List hgh="500px" g="50px" p="50px" list="circle">
          <li>
            <strong>If you click continue</strong> : the test page will open for
            you, and it is divided as follows: the right half contains the
            question, the left half contains the code, and at the top there is a
            counter for calculating the time, in addition to the button to end
            the test and send the data
          </li>
          <li>
            <strong>If you click back</strong> : you will be taken to the
            re-login page
          </li>
          <li>
            <strong>When finishing the test</strong> : click on finish button at
            the top
          </li>
          <li>
            <strong>If the timer out </strong> : the test will end and the
            answer will be sent automatically
          </li>
          <li>
            <strong>In these cases</strong> : the test will be canceled and
            result will be ATC, which means an attempt to cheat
            <List g="10px" p="30px" psm="30px 20px" style={{ margin: 0 }}>
              <li>
                <strong>Exit full</strong> : screen mode
              </li>
              <li>
                <strong>Turn off</strong> : the computer
              </li>
              <li>
                <strong>Drop</strong> : the site window{" "}
              </li>
              <li>
                <strong>Open the test</strong> : from another device
              </li>
            </List>
          </li>
        </List>
        <BTNBOX>
          <Link to={"/"}>
            <Button bg="#F1C40F" color="#111827">
              Back
            </Button>
          </Link>
          <Link to={"/student/exam"}>
            <Button bg="#fff" br="1px solid #F1C40F" color="#111827">
              Continue
            </Button>
          </Link>
        </BTNBOX>
      </Box>
    </Container>
  );
}
