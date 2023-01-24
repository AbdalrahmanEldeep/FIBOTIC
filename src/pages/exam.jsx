import React, { useEffect } from 'react'
import { useRef } from 'react';
import styled from 'styled-components';
import { TextEditor } from '../components/TextEditor';
import { useAuth } from '../context/ContextProvider';
import { BTNBOX, Button } from './quizInfo';
import Logo from "/E-JUST_logo.png"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 80px;
  background-color: #1F2937;
  box-shadow: inset 1px 1px 10px #111827, 1px 1px 10px #111827,
    inset -1px -1px 10px #111827, -1px -1px 10px #111827;
`

const View = styled.section`
  height: calc(100vh - 80px);
  display: grid;
  grid-template-columns: repeat(2,1fr);
  background-color: lightblue;
  @media screen and (max-width:976px){
    grid-template-columns: 1fr;
  }
`

const CodeBox = styled.div`
  background-color: lightcoral;
  & .cm-theme{
    height: 100%;
  }
`
const QuizBox = styled.div`
  background-color: azure;
  & iframe{
    width: 100%;
    height: 100%;
  }
`


export default function Exam() {
  const { users, dispatch } = useAuth();
  const container = useRef();

  useEffect(() => {
    dispatch({
        type: "STD_STATUS",
        act: true,
    });

    addEventListener('fullscreenchange', (event) => {
      if (document.fullscreenElement) {
        console.log(`Element: ${document.fullscreenElement.id} entered fullscreen mode.`);
      } else {
        dispatch({
          type: "STD_STATUS",
          act: false,
      });
      }
    });
    
    if(container.current.requestFullscreen) {
      container.current.requestFullscreen();
    }

  }, []);


  return (
    <Container ref={container}>
      <Header>
        <div>
          <img src={Logo} width={35} alt="" />
          <p style={{color:"#fff",fontWeight:"700"}}>Ejust</p>
        </div>
        <BTNBOX g="30px">
          <Button bg="#F1C40F" color="#111827">
              Finish
          </Button>
          <Button bg="#fff" br="1px solid #F1C40F" color="#111827">
              00
            </Button>
        </BTNBOX>
      </Header>
      <View>
        <CodeBox>
          <TextEditor/>
        </CodeBox>
        <QuizBox>
           <iframe src={users.studentData.quezeName}></iframe>
        </QuizBox>
      </View>
    </Container>
  )
}
