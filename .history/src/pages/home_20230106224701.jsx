import React from 'react'
import styled from 'styled-components'
import { Form } from '../components/Form'

const Container = styled.div`
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 500px;

`

export default function Home() {
  return (
    <>
    <Container>
      <Form/>
    </Container>
    </>
  )
}
