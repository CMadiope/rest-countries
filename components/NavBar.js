import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Nav>
      <Header>Where in the world?</Header>
      <ButtonContainer>Dark Mode</ButtonContainer>
    </Nav>
  );
};

export default NavBar;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  /* position: fixed; */
  top: 0;
  height: 70px;
  width: 100%;
  background-color: hsl(209, 23%, 22%);
  padding: 20px 100px 20px 100px;
`;

const Header = styled.div`
  color: white;
  font-weight: 800;
  font-size: 16px;
  cursor: pointer;
  transition: 1s;

  &:hover {
    opacity: 0.7;
    scale: 1.3;
  }
`;

const ButtonContainer = styled.div`
  color: white;
  cursor: pointer;
  transition: 1s;

  &:hover {
    opacity: 0.7;
    scale: 1.3;
  }
`;
