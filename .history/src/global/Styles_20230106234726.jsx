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