import React from 'react'
import styled from 'styled-components'
import { Form } from '../components/Form'

const Container = styled.div`
  
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80%;
  margin: 0 auto;

`

export default function Home() {
  return (
    <>
    <Container className='sm:w-6'>
      <Form/>
    </Container>
    </>
  )
}
