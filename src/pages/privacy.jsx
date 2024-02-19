import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import { Container } from "../components/global"
import Footer from "../components/sections/footer"

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy Policy" />
    <Navigation />
    <PrivacyWrapper>
      <Container>
        <h2>Privacy Policy</h2>
        <p>
          Your privacy is important to us. It is Dewpoint Solutions, Inc.'s
          policy to respect your privacy regarding any information we may
          collect from you across our website,{" "}
          <a href="https://www.mailmasker.com">https://www.mailmasker.com</a>{" "}
          and{" "}
          <a href="https://app.mailmasker.com">https://app.mailmasker.com</a>,
          and other sites we own and operate.
        </p>
        <p>
          We do our reasonable best to{" "}
          <Link to="/data">state plainly what information we collect.</Link>
        </p>
        <p>
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </p>
        <p>
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorized access, disclosure, copying, use or
          modification.
        </p>
        <p>
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </p>
        <p>
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </p>
        <p>
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </p>
        <p>
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </p>
        <p>This policy is effective as of 12 June 2020.</p>
        <hr />
        <p>
          See an issue with this Privacy Policy, or have something you'd like to
          discuss? We'd love to discuss it with you at{" "}
          <a href="mailto:privacy@mailmasker.com">privacy@mailmasker.com</a>.
        </p>
      </Container>
    </PrivacyWrapper>
    <Footer />
  </Layout>
)

export default PrivacyPage

const PrivacyWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 160px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
