import React from "react";
import styled from "styled-components";
import chicken from "../img/chicken.png";
import fern from "../img/fern.png";
// import Rellax from "rellax";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  position: relative;
  overflow: hidden;
`;
const Wrapper = styled.div`
  background-color: white;
  width: 75%;
  height: 550px;
  display: flex;
  z-index: 10;
  border: 1px solid black;
  border-radius: 10px;
`;
const Info = styled.div`
  flex: 1.5;
  padding-left: 20px;
  margin-top: 130px;
`;
const Image = styled.img`
  flex: 1;
`;

const Title = styled.h1`
  font-size: 56px;
  font-style: italic;
  margin: 0;
  text-align: left;
  font-weight: 300;
`;
const Subtitle = styled.p`
  font-size: 24px;
  font-weight: lighter;
  opacity: 0.6;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid black;
  margin-top: 18px;
  width: 120px;
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: lighter;
  font-style: italic;
`;

const FernImage = styled.img`
  width: 300px;
  position: absolute;
  z-index: 20;
  right: 6%;
  bottom: 1%;
  transform: rotateZ(45deg);
`;

const Filter = styled.div`
  /* width: 350px ;
  height: 480px ;
  background-color: beige ;
  filter:blur(90px) ;
  position: absolute ;
  z-index: 2;
  left:20%; */
`;

const Aboutus = () => {
  // const fernRef = useRef();

  // useEffect(() => {
  //   new Rellax(fernRef.current, {
  //     speed: -5,
  //     wrapper:null,
  //   });
  // });

  return (
    <Container id="aboutus">
      <Filter></Filter>
      <Wrapper>
        <Image src={chicken} />
        <Info>
          <Title>Our Story</Title>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            magnam dolorem fuga alias laborum numquam ex voluptatibus
            aspernatur! Distinctio libero molestiae at ipsa cupiditate
            recusandae dolore minus sed expedita quisquam.
          </Subtitle>
          <Button>About Us</Button>
        </Info>
      </Wrapper>
      <FernImage src={fern}  />
    </Container>
  );
};

export default Aboutus;
