import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import Image from "next/image";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const options = ["Africa", "America", "Asia"];

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const menuToggle = () => {
    setIsOpen(!isOpen);
  };

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    console.log(selectedOption);
  };

  return (
    <Container>
      <NavBar />
      <Main>
        <SearchFilter>
          <Search>
            <Img>
              <BsSearch color='white' />
            </Img>
            <Input placeholder='search for a country' />
          </Search>
          <Filter>
            <DropDownContainer>
              <DropDownHeader onClick={menuToggle}>
                {selectedOption || "Filter by region"}{" "}
                <Icon>
                  {isOpen ? (
                    <AiOutlineUp color='white' />
                  ) : (
                    <AiOutlineDown color='white' />
                  )}
                </Icon>
              </DropDownHeader>
              {isOpen && (
                <DropDownListContainer>
                  <DropDownList>
                    {options.map((option) => (
                      <ListItem
                        onClick={onOptionClicked(option)}
                        key={Math.random()}
                      >
                        {option}
                      </ListItem>
                    ))}
                  </DropDownList>
                </DropDownListContainer>
              )}
            </DropDownContainer>
          </Filter>
        </SearchFilter>
      </Main>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  background: hsl(207, 26%, 17%);
  height: 100vh;
  width: 100vw;
`;

const Main = styled.div``;

const SearchFilter = styled.div`
  display: flex;
  padding-top: 80px;
  justify-content: space-between;
  /* margin: 100px; */
  padding-left: 100px;
  padding-right: 100px;
`;

const Search = styled.div`
  display: flex;
  background-color: hsl(209, 23%, 22%);
  border-radius: 5px;
`;

const Filter = styled.div``;

const Img = styled.div`
  width: 25px;
  height: 25px;
  padding-top: 18px;
  padding-left: 25px;
`;

const Input = styled.input`
  background-color: transparent;
  outline: none;
  border: none;
  color: white;
  margin-right: 60px;
  font-size: 14px;
  padding-left: 40px;
  &::placeholder {
    color: white;
  }
`;

const DropDownContainer = styled.div`
  background-color: hsl(209, 23%, 22%);
  padding: 15px;
`;

const DropDownHeader = styled.div`
  color: white;
  padding-right: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: 1.5s;
  min-width: 150px;
  display: flex;

  &:hover {
    opacity: 0.8;
    scale: 1.1;
  }
`;

const DropDownListContainer = styled.div`
  position: absolute;
`;

const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  padding-left: 10px;
  font-size: 14px;
  color: white;
  box-sizing: border-box;

  &:first-child {
    padding-top: 20px;
  }
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 0.8em;
  cursor: pointer;
`;

const Icon = styled.div`
  padding-left: 30px;
  padding-top: 3.5px;
`;
