import styled from "styled-components";

export const Container = styled.div`
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80%;
  margin: 0 auto;
  @media screen and (min-width:976px) {
    width: 400px;
  }
  
`

export const FLEX = styled.div`
  display: grid;
  grid-template-columns: 20% 80%;
  @media screen and (min-width:676px) and (max-width:976px){
    grid-template-columns: 30% 70%;
  }
  @media screen and (min-width:200px) and (max-width:676px){
    grid-template-columns: 1fr;
  }
`

export const AsideRes = styled.div`
  @media screen and (min-width:200px) and (max-width:676px){
    position: fixed;
    transition: left ease .4s;
    left: -100%;
    left: ${prop => prop.left};
    z-index: 1000;
    top: 0;
  }
`
export const BtnToggler = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  background-color: #000;
  border-radius: 50%;
  padding: 10px;
  display: none;
  @media screen and (min-width:200px) and (max-width:676px){
    display: block;
  }
`