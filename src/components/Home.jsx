import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import food1 from "../img/food2.png";
import cardamon from "../img/cardamon.png";
import turmeric from "../img/turmeric.png";
// import spoon from "../img/sppon.png";
import chilli from "../img/spices-chilli.png";
import Rellax from "rellax"






const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow:hidden ;
  background-color: black ;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-left: 45px;
`;

const Title = styled.h1`
  color: gold;
  font-size: 76px;
  font-weight: lighter;
  font-style:italic;
  font-family: sans-serif ;

`;

const Button = styled.button`
  background: transparent;
  border: 1px solid white;
  width: 150px;
  height: 50px;
  border-radius: 10px;
  color:white ;
  align-items:left ;
  cursor: pointer;
  transition: 0.3s ease-in-out ;

  &:hover{
    width:155px ;
    height:53px ;
    font-size: 16px ;
  }
`;
const Right = styled.div`
  flex: 1.8;
  position: relative;
`;

const Image = styled.img`
  width: 75%;
  position: absolute;
  z-index: 20;
  right: 15%;
  top: 5%;
`;
const Pic = styled.img`
  width: 190px;
  height: 190px;
  margin-top: 50px;
  margin-left:30px ;
`;
const Pic1 = styled.img`
  width: 300px;
  height: 300px;
  position: absolute;
  bottom: 2%;
  left: 1%;
  z-index:24;
`;
const Pic2 = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  right: 11%;
  top:4%;
`;


const Home = () => {

  const plateRef = useRef();
  const chilliRef = useRef();
  const cardamonRef = useRef();
  const turmericRef = useRef();

useEffect(()=>{
  new Rellax(plateRef.current,{
    speed: 5,
    center: false,
    
  });
  new Rellax(chilliRef.current,{
    speed: 3,
    center: false,
    
  });
  new Rellax(cardamonRef.current,{
    speed: -1,
    center: false,
    
  });
  new Rellax(turmericRef.current,{
    speed: 4,
    center: false,
    
  });
  
},[]);
  
  return (
    <Container id='home'>
      <Left>
        <Title>A Premium And Authentic Cuisine</Title>
        <Button>About Us</Button>
      </Left>
      <Right>
        <Pic src={cardamon} ref={cardamonRef}/>
        <Pic1 src={chilli} ref={chilliRef}/>
        <Pic2 src={turmeric} ref={turmericRef}/>
        {/* <Pic3 src={spoon} /> */}
        <Image src={food1} ref={plateRef}  />
      </Right>
    </Container>
  );
};

export default Home;
