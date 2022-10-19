import React from 'react'
import styled from 'styled-components'
import NavBar from './NavBar'

const HomePage = () => {
  return (
    <Container>
      <NavBar/>
    </Container>
  )
}

export default HomePage;

const Container = styled.div`
  background: hsl(207, 26%, 17%);
  height: 100vh;
  width: 100vw;
`;
