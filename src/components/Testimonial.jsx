import React from 'react'
import styled from "styled-components";
import test1 from "../img/chicken.png"
import test2 from "../img/food22.jpg"
import test3 from "../img/food23.jpg"

const Container = styled.div`
    width: 100% ;
    height: 80vh ;
    display:flex ;
`
const Wrapper = styled.div`
    flex:1 ;
    height: 50vh ;


`
const Wrapper1 = styled.div`
    flex:1 ;
    height: 50vh ;

`
const Wrapper2 = styled.div`
    flex:1 ;
    height: 50vh ;


`
const Image =styled.img`
    width:100% ;
    height: 80vh ;

`
const Image1 =styled.img`
    width:100% ;
    height: 80vh ;
`
const Image2 =styled.img`
    width:100% ;
    height: 80vh ;
`

const Testimonial = () => {
  return (
      <Container>
          <Wrapper>
              <Image src={test1}/>
          </Wrapper>
          <Wrapper1>
          <Image1 src={test2}/>
          </Wrapper1>
          <Wrapper2>
          <Image2 src={test3}/>
          </Wrapper2>
      </Container>
  )
}

export default Testimonial