import { graphql, useStaticQuery } from "gatsby"

import { Container } from "../components/global"
import Footer from "../components/sections/footer"
import Img from "gatsby-image"
import Layout from "../components/common/layout/layout"
import Navigation from "../components/common/navigation/navigation"
import React from "react"
import SEO from "../components/common/layout/seo"
import styled from "styled-components"

const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "images" }, name: { eq: "jon" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="About" />
      <Navigation />
      <AboutWrapper>
        <Container>
          <h2>About</h2>
          <ImageWrapper>
            <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
          <p>
            My name is Jon Sibley and I created Mail Masker because I wanted
            more control over inbound email.
          </p>
          <h4>Privacy + Transparency</h4>
          <p>
            Since I feel that most online services undervalue privacy and over
            collect your data, I designed Mail Masker to limit itself to only
            collecting and storing the absolute minimum amount of data required
            to be useful to you.
          </p>
          <p>
            Another goal I strive for is to be as transparent as possible. That
            includes: a clear <a href="/privacy/">Privacy Policy</a> and{" "}
            <a href="/terms/">Terms of Service</a>, and taking the time to{" "}
            <a href="/data/">explain in detail how your data is used</a>. It
            also includes{" "}
            <a href="https://github.com/mailmasker">open sourcing</a> as much of
            the software as possible.
          </p>
          <h4>Reliability + Longevity</h4>
          <p>
            Mail Masker is built on Amazon Web Services (AWS) to last a very
            long time, and I intend to keep it running indefinitely. Practically
            speaking, that means that it runs on cost-effective cloud
            infrastructure that is highly-available, and that I chose AWS
            largely due to their long track record supporting services for many
            years.
          </p>
          <h4>Behind the Keyboard</h4>
          <p>
            I spend most of my time at{" "}
            <a
              href="https://www.sprucehealth.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spruce Health
            </a>
            , where we build delightful healthcare communication software for
            doctors and patients. It's a great company.
          </p>
          <p>
            Email me anytime at{" "}
            <a href="mailto:jon@mailmasker.com">jon@mailmasker.com</a>. I'm{" "}
            <a href="https://twitter.com/jonsibs">@jonsibs</a> on Twitter.
          </p>
        </Container>
      </AboutWrapper>
      <Footer />
    </Layout>
  )
}

export default AboutPage

const AboutWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 160px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const ImageWrapper = styled.div`
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 149px;
  @media (max-width: ${props => props.theme.screen.lg}) {
    width: 149px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 100px;
  }
`
