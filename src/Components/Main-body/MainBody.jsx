import React from 'react'
import styled from 'styled-components'
import Header from '../Header/Header'
import MainBodyChild from './MainBodyChild'

const MainBody = () => {
  return (
    <>
    <MaiContainer>
        <Header/>
        <MainBodyChild/>

    </MaiContainer>
        </>
  )
}

const MaiContainer = styled.div`
    width: 100%;
    height: 100Vh;

`
export default MainBody