import { Container } from "../components/global"
import Footer from "../components/sections/footer"
import Layout from "../components/common/layout/layout"
import Navigation from "../components/common/navigation/navigation"
import React from "react"
import SEO from "../components/common/layout/seo"
import styled from "styled-components"

const DataPage = () => (
  <Layout>
    <SEO title="Your Data" />
    <Navigation />
    <PrivacyWrapper>
      <Container>
        <h2>Your Data</h2>
        <p>
          This page attempts to describe to you clearly and transparently how
          your data is stored, what you can export, and what you can delete.
        </p>
        <h3>What we collect</h3>
        <SectionHeader>Email content</SectionHeader>
        <p>
          <em>includes the sender, subject, body, and attachments</em>
        </p>
        <p>
          Once we receive an email at one of your Mail Masks, we process it
          within a few seconds and then delete it permanently from our servers.
          In detail, that means:
        </p>
        <ul>
          <li>
            if your Mail Mask is set up to forward to one of your Verified
            Emails, then we forward the email and delete the email content from
            our servers immediately
          </li>
          <li>
            if you've stopped your Mail Mask or otherwise disabled it, we don't
            forward the email, and we delete the email content immediately
          </li>
          <li>
            if we receive an email at a Mail Mask which hasn't been reserved by
            anyone, we delete the email content immediately
          </li>
          <li>
            in the event that email content fails to be deleted immediately,
            then our backup mechanism will delete any email content older than 5
            days
          </li>
        </ul>
        <SectionHeader>Your email address</SectionHeader>
        <p>
          Once you verify an email address with us, we keep a record of it in
          our database. When you remove a Verified Email from our system, it is
          permanently erased. Similarly, if you choose to delete your account,
          we remove and erase all of your Verified Email addresses.
        </p>
        <p>
          If you sign up for a paid plan, our payment provider, Stripe, will ask
          you for your name and email address.{" "}
          <u>
            We don't have the ability to fully remove your name and email
            address from Stripe's system.
          </u>
        </p>
        <SectionHeader>Payment information</SectionHeader>
        <p>
          If you sign up for a paid plan, our payment provider, Stripe, will ask
          you for your name and email address.{" "}
          <u>
            We don't have the ability to fully remove your name and email
            address from Stripe's system.
          </u>
        </p>
        <p>
          Stripe also collects your credit card number, but we don't have access
          to it.
        </p>
        <SectionHeader>Your username and password</SectionHeader>
        <p>
          Your username can be deleted by deleting your account. However, in
          order to give you a way to recover your Mail Masks in the future, we
          assign you a random username which you can use to log in and
          reactivate your account and have access to your Mail Masks.
        </p>
        <p>
          Your password is never stored in plain text, but instead, is hashed
          using an industry-standard algorithm called{" "}
          <a
            href="https://en.wikipedia.org/wiki/Bcrypt"
            target="_blank"
            rel="noopener noreferrer"
          >
            bcrypt
          </a>
          . We have no way to read or know your password, nor does any malicious
          person who were to gain access to our database.
        </p>
        <SectionHeader>Usage data</SectionHeader>
        <p>
          We plan to collect usage data to help us make Mail Masker better. When
          we do so, we will only store the bare minimum such as your User ID in
          the analytics service, we will not use a 3rd party that is known to
          track you, such as Google Analytics. At the time of this writing, we
          don't have an analytics service running, but plan to soon.
        </p>
        <h3>What we don't collect</h3>
        <p>
          And for completeness, here's a list of common things that we don't do:
        </p>
        <ul>
          <li>
            We don't use Google Analytics, Facebook SDKs, or anything else that
            allows other companies to track you
          </li>
          <li>
            We don't set any cookies except the one that keeps you logged in
            here at MailMasker.com
          </li>
          <li>
            We will never give or sell your information to another company. If
            for some reason there's a benefit to you in the future that we do
            so, we'll only do so with your expressed consent.
          </li>
        </ul>
        <hr style={{ marginTop: "32px" }} />
        <p>
          See an issue with this page, or have something you'd like to discuss?
          We'd love to discuss it with you at{" "}
          <a href="mailto:data@mailmasker.com">data@mailmasker.com</a>.
        </p>
      </Container>
    </PrivacyWrapper>
    <Footer />
  </Layout>
)

export default DataPage

const PrivacyWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 160px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
const SectionHeader = styled.h4`
  font-size: 1.5em;
  margin-block-start: 1.1em;
  margin-block-end: 1.1em;
`