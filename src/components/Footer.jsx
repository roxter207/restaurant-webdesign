import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50vh;
  /* background-image: linear-gradient(radial, #131424, #343b7c); */
  background-color: white;
  display: flex;
`;
const Left = styled.div`
  flex: 1;
`;
const Title = styled.h1`
  padding-left: 5%;
  color: black;
  font-size: 55px;
  font-weight: lighter;
  font-style: italic;
`;
const Sub = styled.h2`
  padding-left: 5%;
  color: black;
  opacity: 0.6;
  line-height: 1.1px;
`;
const Right = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background-color: white;
  padding-top: 50px;
`;

const Input = styled.input`
  width: 50%;
  height: 35px;
  margin-top: 25px;
  border-radius: 5px;
  background-color: black;
  color: white;
  border: none;
  padding-left: 10px;

  ::placeholder {
    color: white;
    opacity: 0.3;
  }
`;
const Desc = styled.p`
  color: black;
  font-size: 14px;
  width: 45%;
  padding-left: 5%;
  padding-top: 2%;
  opacity: 0.7;
`;

const Icons = styled.p``;
const Icon = styled.p``;

const Button = styled.button`
  margin-top: 25px;
  width: 150px;
  height: 45px;
  border-radius: 25px;
  border: none;
  cursor: pointer;
  background-color: black;
  color: white;
`;

// const Maintitle = styled.h1`
//   font-size: 56px;
//   font-weight: 300;
//   text-align: center;
//   font-style: italic;
//   color: black;
//   margin: 0;
// `;

const Footer = () => {
  return (
    <>
      {/* <Maintitle>Contact Us</Maintitle> */}
      <Container id='contact'>
        <Left>
          <Title>Want to book an amazing experience?</Title>
          <Sub>Book a reservation</Sub>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            vel deleniti repellendus eligendi, aliquid consequuntur asperiores
            laudantium neque corporis eos cum.
          </Desc>
          <Icons>
            <Icon></Icon>
          </Icons>
        </Left>
        <Right>
          <Form>
            <Input placeholder="Jane" text="password" />
            <Input placeholder="Doe" />
            <Input placeholder="Email" />
            <Input placeholder="Phone number" />
            {/* <Message>MESSAGE</Message> */}
            <Button>Submit</Button>
          </Form>
        </Right>
      </Container>
    </>
  );
};

export default Footer;
