import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import "../index.css"
const Nav = styled.div`
  width: 100%;
  min-height: 10vh;
  background-color: black;
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  flex: 1;
`;
const Right = styled.div`
  flex: 1;
`;

const LogoText = styled.h1`
  font-size: 36px;
  margin: 10px 55px 0px 40px;
  color: white;
  font-weight: lighter;
  font-style: italic;
  font-family: sans-serif ;
`;
const LinkBox = styled.div`
  display: inline-flex;
  align-items: right;
`;

const Links = styled.a`
  width: auto;
  cursor: pointer;
  margin-top: 25px;
  display: flex;
  flex-direction: column;
  color: gold;
  padding-left: 20px;
  text-decoration: none ;

`;

const Navbar = () => {
  return (
    <Nav>
      <LogoText>Aye-Carumba</LogoText>
      <Left></Left>
      <Right>
        <LinkBox>
          <Link to="#home" smooth style={{textDecoration:"none"}}>
            <Links>Home</Links>
          </Link>
          <Link to="#aboutus" smooth style={{textDecoration:"none"}}>
            <Links>About us</Links>
          </Link>
          <Link to="#cuisine" smooth style={{textDecoration:"none"}}>
            <Links>Cuisine</Links>
          </Link>
          <Link to="#contact" smooth style={{textDecoration:"none"}}>
            <Links>Contact us</Links>
          </Link>
        </LinkBox>
      </Right>
    </Nav>
  );
};

export default Navbar;
