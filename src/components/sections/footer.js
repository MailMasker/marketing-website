import { Link, graphql, useStaticQuery } from "gatsby"

import { Container } from "../global"
import { FiMail } from "react-icons/fi"
import Img from "gatsby-image"
import React from "react"
import styled from "styled-components"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "footer-logo" }) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <FooterWrapper id="footer">
      {/*<FooterColumnContainer>
        <FooterColumn>
          <span>Features</span>
          <ul>
            <li>Automation</li>
            <li>Rewards</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <span>Resources</span>
          <ul>
            <li>Compare</li>
            <li>Blog</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <span>Company</span>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
          </ul>
        </FooterColumn>
        <FooterColumn>
          <span>Social</span>
          <ul>
            <li>LinkedIn</li>
            <li>Instagram</li>
          </ul>
        </FooterColumn>
      </FooterColumnContainer>*/}
      <BrandContainer>
        <Logo>
          <StyledImage fluid={data.file.childImageSharp.fluid} />
        </Logo>
        <ul>
          <li>
            <Link to="/terms/">Terms of Service</Link>
          </li>
          <li>
            <Link to="/privacy/">Privacy Policy</Link>
          </li>
          <li>
            <Link to="/data/">Your Data</Link>
          </li>
        </ul>
        <FooterBottomItemsContainer>
          <ul>
            <li>
              <a href="mailto:hello@mailmasker.com">
                <FiMail style={{ marginRight: "6px" }} />
                hello@mailmasker.com
              </a>
            </li>
          </ul>
        </FooterBottomItemsContainer>
      </BrandContainer>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    justify-content: flex-start;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    list-style: none;
    color: ${props => props.theme.color.black.regular};

    @media (max-width: ${props => props.theme.screen.sm}) {
      margin-top: 16px;
      flex-direction: column;
      align-items: center;
    }

    li {
      text-align: right;
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
      padding: 12px;
      margin: 0;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: rgba(7, 20, 53, 0.5);
      }
    }
  }
`
// const FooterColumnContainer = styled(Container)`
//   display: grid;
//   grid-template-columns: repeat(4, 1fr);
//   grid-column-gap: 32px;
//   justify-content: start;
//   @media (max-width: ${props => props.theme.screen.sm}) {
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 32px;
//   }
// `
// const FooterColumn = styled.div`
//   span {
//     font-size: 16px;
//     font-family: ${props => props.theme.font.bold};
//     color: ${props => props.theme.color.primary};
//   }
//   ul {
//     list-style: none;
//     margin: 16px 0;
//     padding: 0;
//     color: ${props => props.theme.color.black.regular};
//     li {
//       margin-bottom: 12px;
//       font-family: ${props => props.theme.font.normal};
//       font-size: 15px;
//     }
//   }
// `

const FooterBottomItemsContainer = styled.div`
  flex-grow: 0;
  font-size: 16px;
  font-family: ${props => props.theme.font.bold};
  color: ${props => props.theme.color.primary};
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      text-align: right;
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
      margin: 0;
      a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: rgba(7, 20, 53, 0.5);
      }
    }
  }

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

const StyledImage = styled(Img)`
  width: 175px;
`

export default Footer
