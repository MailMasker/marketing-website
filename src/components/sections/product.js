import { Container } from "../global"
import React from "react"
import styled from "styled-components"

const Product = () => {
  return (
    <SectionWrapper id="product">
      <Container>
        <HeaderTextGroup>
          <Subtitle>Product</Subtitle>
          <h1>
            Your Mail Mask forwards
            <br />
            to your real email
          </h1>
          <h2>Let's look at some examples:</h2>
        </HeaderTextGroup>
        <ImagesContainer>
          <FirstProductImage />
          <SecondProductImage />
          <ThirdProductImage />
        </ImagesContainer>
      </Container>
    </SectionWrapper>
  )
}

export default Product

const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const FirstProductImage = styled.div`
  width: 885px;
  height: 100px;
  margin: 0 0 12px 0;
  background: url(/website/the-basics.svg) no-repeat top left;

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 355px;
    height: 210px;
    margin: 0 0 10px 0;
    background: url(/website/the-basics-mobile.svg) no-repeat top left;
  }
`

const SecondProductImage = styled.div`
  width: 885px;
  height: 100px;
  margin: 0 0 12px 0;
  background: url(/website/create-masks-on-the-fly.svg) no-repeat top left;

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 355px;
    height: 211px;
    margin: 0 0 10px 0;
    background: url(/website/create-masks-on-the-fly-mobile.svg) no-repeat top
      left;
  }
`

const ThirdProductImage = styled.div`
  width: 885px;
  height: 100px;
  margin: 0 0 12px 0;
  background: url(/website/auto-stop-after-time.svg) no-repeat top left;

  @media (max-width: ${props => props.theme.screen.md}) {
    width: 355px;
    height: 204px;
    margin: 0 0 10px 0;
    background: url(/website/auto-stop-after-time-mobile.svg) no-repeat top left;
  }
`

const SectionWrapper = styled.section`
  background-color: #f8f8f8;
  padding: 160px 0 150px 0;
  position: relative;
  text-align: center;
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 100px 0 150px 0;
    clip-path: polygon(0 0, 100% 4%, 100% 100%, 0 calc(100% - 5vw));
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`
