import React, { useState } from "react"
import { graphql, useStaticQuery } from "gatsby"

import { Container } from "../global"
import Img from "gatsby-image"
import styled from "styled-components"

const Header = () => {
  const [email, setEmail] = useState("")

  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "green-skew" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const handleSubmit = event => {
    event.preventDefault()
    window.location.href = `https://app.mailmasker.com/sign-up?alias=${email}`
  }

  return (
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>Email on your terms</Subtitle>
            <h1>
              It's your privacy,
              <br />
              use a Mail Mask.
            </h1>
            <h2>
              Instead of giving companies your email address, give them your
              Mail Mask.
            </h2>
            <h2>
              We forward email to you, and you can stop the forwarding whenever
              you want. Free forever.
            </h2>
            <HeaderForm onSubmit={handleSubmit}>
              <HeaderInputWrapper>
                <HeaderInput
                  placeholder="you"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                />
                <HeaderInputRightLabel>@mailmasker.com</HeaderInputRightLabel>
              </HeaderInputWrapper>
              <HeaderButton>Claim Mail Mask</HeaderButton>
            </HeaderForm>
            <FormSubtitle>
              Already have an account?{" "}
              <FormSubtitleLink href="https://app.mailmasker.com/log-in">
                Log in
              </FormSubtitleLink>
            </FormSubtitle>
          </HeaderTextGroup>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
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
  max-width: 100%;

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

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FormSubtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled.a`
  color: ${props => props.theme.color.secondary};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const HeaderInputWrapper = styled.div`
  display: flex;
  justify-content: stretch;
  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

const HeaderInput = styled.input`
  width: 50%;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  text-align: right;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px 0px 0px 4px;
  border-right: none;
  padding: 8px 6px 8px 8px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
`

const HeaderInputRightLabel = styled.div`
  width: 50%;
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  height: 60px;
  padding: 8px 8px 8px 2px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-radius: 0px 4px 4px 0px;
  border-left: none;
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.lg}) {
    width: 300px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 300px;
    display: none;
  }
`
