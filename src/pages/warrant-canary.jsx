import { Container } from "../components/global"
import Footer from "../components/sections/footer"
import Layout from "../components/common/layout/layout"
import Navigation from "../components/common/navigation/navigation"
import React from "react"
import SEO from "../components/common/layout/seo"
import styled from "styled-components"

const WarantCanaryPage = () => (
  <Layout>
    <SEO title="Your Data" />
    <Navigation />
    <WarrantCanaryWrapper>
      <Container>
        <h2>Mail Masker Warrant Canary</h2>
        <p>You can find the Mail Masker Warrant Canary at:</p>
        <p>
          <a
            href="https://www.mailmasker.com/canary.txt"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.mailmasker.com/canary.txt
          </a>
        </p>
        <h4>What is a Warrant Canry?</h4>
        <p>
          PrivacyTools.io{" "}
          <a
            href="https://www.privacytools.io/providers/#wc"
            target="_blank"
            rel="noopener noreferrer"
          >
            states it best
          </a>
          : "A warrant canary is a posted document stating that an organization
          has not received any secret subpoenas during a specific period of
          time. If this document fails to be updated during the specified time
          then the user is to assume that the service has received such a
          subpoena and should stop using the service.""
        </p>
        <p>
          See this{" "}
          <a
            href="https://www.eff.org/deeplinks/2014/04/warrant-canary-faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            Warrant Canary Frequently Asked Questions
          </a>{" "}
          for a much better explanation than we can provide.
        </p>
        <h4>How to verify it</h4>
        <p>
          The warrant canary is signed using a PGP key. Install{" "}
          <a
            href="https://www.gnupg.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GnuPG
          </a>{" "}
          if you don't already have it.
        </p>
        <ol>
          <li>
            Download and import the Mail Masker public key from
            https://www.mailmasker.com/pubkey.txt
            <br />
            <pre>gpg --import pubkey.txt</pre>
          </li>
          <li>
            Download the latest canary from
            https://www.mailmasker.com/canary.txt and verify.
            <br />
            <pre>gpg --verify canary.txt</pre>
          </li>
        </ol>
        <hr style={{ marginTop: "32px" }} />
        <p>
          See an issue, or have something you'd like to discuss? We'd love to
          discuss it with you at{" "}
          <a href="mailto:canary@mailmasker.com">canary@mailmasker.com</a>.
        </p>
      </Container>
    </WarrantCanaryWrapper>
    <Footer />
  </Layout>
)

export default WarantCanaryPage

const WarrantCanaryWrapper = styled.div`
  background-color: #f8f8f8;
  padding: 160px 0 160px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
