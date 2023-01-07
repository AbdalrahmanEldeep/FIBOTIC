import React, { useEffect } from 'react'
import { writeUserData } from '../../firebaseEvents';
import { CntForm } from '../components/cntForm'
import { Container } from '../global/Styles'


export default function Home() {
  return (
    <>
    <Container>
      <CntForm/>
    </Container>
    </>
  )
}
