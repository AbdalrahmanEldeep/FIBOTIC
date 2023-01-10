import React from "react";
import styled from "styled-components";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Char } from "../components/Char";

const Box = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const Container = styled.div`
  gap: 30px;
  height: 100%;
  display: grid;
  padding-top: 100px;
  margin-bottom: 40px;
  grid-template-columns: repeat(3, 1fr);
  @media screen and (min-width: 200px) and (max-width: 976px) {
    grid-template-columns: 1fr;
  }
`;
const Card = styled.div`
  height: 200px;
  background: wheat;
  background-image: ${(prop) => prop.bg};
  position: relative;
  overflow: hidden;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  transition: all ease 0.4s;
  &:hover {
    transform: scale(1.1);
  }
  &:after {
    content: "";
    position: absolute;
    width: 300px;
    height: 300px;
    right: -30px;
    top: 100px;
    border-radius: 50%;
    background-color: #ffffff5c;
  }
  &:before {
    content: "";
    position: absolute;
    width: 250px;
    height: 250px;
    right: -100px;
    top: -100px;
    border-radius: 50%;
    background-color: #ffffff5c;
  }
`;
const CardIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const CardInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 50px;
  gap: 20px;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: relative;
  & p {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 200px) and (max-width: 676px) {
    & p {
      font-size: 1.2rem;
    }
    padding-left: 20px;
  }
`;

export default function Users() {
  return (
    <>
      <Box>
        <Container>
          <Card
            className="rounded"
            bg="linear-gradient(to right, #b97be6, #8e4ad3)"
          >
            <CardIcon>
              <PersonAddIcon fontSize="large" />
            </CardIcon>
            <CardInfo>
              <p>Done Quizes</p>
              <p>127</p>
              <span>it's done from 30% from student</span>
            </CardInfo>
          </Card>
          <Card bg="linear-gradient(to right, #5e94db, #5691c8)">
            <CardIcon>
              <PersonRemoveIcon fontSize="large" />
            </CardIcon>
            <CardInfo>
              <p>Not Done Quizes</p>
              <p>219</p>
              <span>it's done from 30% from student</span>
            </CardInfo>
          </Card>
          <Card bg="linear-gradient(to right, #fad075, #ffd194)">
            <CardIcon>
              <AssignmentIcon fontSize="large" />
            </CardIcon>
            <CardInfo>
              <p>Numbers of Quizes</p>
              <p>339</p>
            </CardInfo>
          </Card>
        </Container>
        <Char/>
      </Box>
    </>
  );
}
