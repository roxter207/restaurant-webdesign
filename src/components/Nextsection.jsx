import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import food1 from "../img/food1.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Maintitle = styled.h1`
  font-size: 56px;
  font-weight: 300;
  text-align: center;
  font-style: italic;
  background-color: black;
  color: white;
  margin: 0;
`;
const Container = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  display: flex;
  flex-direction: row;
  padding-top: 100px;
`;
const Left = styled.div`
  flex: 0.2;
`;
const FoodImage = styled.img`
  width: 350px;
  height: 350px;
`;
const Desc = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  color: white;
`;

const Container1 = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  display: flex;
  flex-direction: row;
`;

const Left1 = styled.div`
  flex: 0.8;
`;

const FoodImage1 = styled.img`
  width: 350px;
  height: 350px;
`;
const Desc1 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  text-align: right;
  color: white;
`;

const Container2 = styled.div`
  width: 100%;
  height: 50vh;
  background-color: black;
  display: flex;
  flex-direction: row;
`;
const Left2 = styled.div`
  flex: 0.2;
`;
const FoodImage2 = styled.img`
  width: 350px;
  height: 350px;
`;
const Desc2 = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45%;
  color: white;
`;

const Nextsection = () => {
  const fernFood = useRef(null);
  const para1 = useRef(null);
  const para2 = useRef(null);
  const image1 = useRef(null);
  const para3 = useRef(null);
  const image2 = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.fromTo(
      fernFood.current,
      { x: -500, y: 0, opacity:0},
      {
        x: 1,
        y: 0,
        opacity:1 ,
        duration: 1,
        ease: "power1.active",
        scrollTrigger: {
          trigger: fernFood.current,
        },
      }
    );
    gsap.fromTo(
      para1.current,
      { x: 90, y: 0, opacity:0},
      {
        x: 1,
        y: 0,
        opacity:1,
        duration: 1,
        ease: "power1.active",
        scrollTrigger: {
          trigger: para1.current,
        },
      }
    );
    gsap.fromTo(
      para2.current,
      { x: -500, y: 0,opacity:0 },
      {
        x: 1,
        y: 0,
        opacity:1,
        duration: 1,
        ease: "power1.active",
        scrollTrigger: {
          trigger: para2.current,
        },
      }
    );
    gsap.fromTo(
      image1.current,
      { x: 90, y: 0,opacity:0 },
      {
        x: 1,
        y: 0,
        opacity:1,
        duration: 1,
        ease: "power1.active",
        scrollTrigger: {
          trigger: image1.current,
        },
      }
    );
    gsap.fromTo(
      para3.current,
      { x: 90, y: 0,opacity:0 },
      {
        x: 1,
        y: 0,
        opacity:1,
        duration: 1,
        ease: "power1.active",
        scrollTrigger: {
          trigger: para3.current,
        },
      }
    );
    gsap.fromTo(
      image2.current,
      { x: -500, y: 0,opacity:0 },
      {
        x: 1,
        y: 0,
        opacity:1,
        duration: 1,
        ease: "power1.active",
        scrollTrigger: {
          trigger: image2.current,
        },
      }
    );
  }, []);

  return (
    <>
      <Maintitle id='cuisine'>A Luxurious Experience</Maintitle>
      <Container >
        <Left></Left>
        <FoodImage src={food1} ref={fernFood} />
        <Desc ref={para1}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, eius
          officiis? Asperiores quos perferendis fugiat dolores sed error ad
          totam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, labore dolorem numquam, ipsam quia recusandae deleniti
          vel vero aperiam inventore repudiandae expedita dicta odit laudantium?
          Hic culpa dolorum ad, excepturi non consequuntur minima accusantium
          debitis deserunt. Impedit suscipit quisquam eius!
        </Desc>
      </Container>
      <Container1>
        <Left1></Left1>
        <Desc1 ref={para2}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, eius
          officiis? Asperiores quos perferendis fugiat dolores sed error ad
          totam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, labore dolorem numquam, ipsam quia recusandae deleniti
          vel vero aperiam inventore repudiandae expedita dicta odit laudantium?
          Hic culpa dolorum ad, excepturi non consequuntur minima accusantium
          debitis deserunt. Impedit suscipit quisquam eius!
        </Desc1>
        <FoodImage1 src={food1} ref={image1} />
      </Container1>
      <Container2>
        <Left2></Left2>
        <FoodImage2 src={food1} ref={image2} />
        <Desc2 ref={para3}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto, eius
          officiis? Asperiores quos perferendis fugiat dolores sed error ad
          totam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Voluptatibus, labore dolorem numquam, ipsam quia recusandae deleniti
          vel vero aperiam inventore repudiandae expedita dicta odit laudantium?
          Hic culpa dolorum ad, excepturi non consequuntur minima accusantium
          debitis deserunt. Impedit suscipit quisquam eius!
        </Desc2>
      </Container2>
    </>
  );
};

export default Nextsection;
