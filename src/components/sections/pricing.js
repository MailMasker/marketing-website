import "tippy.js/dist/tippy.css" // eslint-disable-line

import { Container, Section } from "../global"

import Tippy from "@tippyjs/react"
import React from "react"
import styled from "styled-components"

const premiumFeatures = [
  {
    title: "Your Mail Masks are yours forever",
    description:
      "Once you create a Mail Mask (ex: you@mailmasker.com), it belongs to your account forever and no one else can use it.",
  },
  {
    title: "Unlimited secondary Mail Masks",
    description:
      "A secondary Mail Mask has a dot after the alias of one of your primary Mail Masks. For example, if your primary Mail Mask was you@example.com, then you could create a secondary mask by sending an email to you.whatever@example.com.",
  },
  {
    title: "Data export",
    description:
      "We allow you to download a full record of your data in our system.",
  },
  {
    title: "Unlimited primary Mail Masks",
    description:
      "Create as many as you'd like: you1@mailmasker.com, you2@mailmasker.com, etc",
  },
  {
    title: "Forward to unlimited addresses",
    description:
      "Set up complex workflows by forwarding email received at each Mail Mask to a different email inbox.",
  },
  {
    title: "Automatically-stopping Mail Masks",
    description: `You can add ".14d" to any Mail Mask (ex: you.14d@mailmasker.com) and that Mail Mask will automatically stop forwarding email in 14 days.`,
  },
  {
    title: "Forward to stop@mailmasker.com",
    description:
      "Stopping your Mail Mask is the quickest way to completely stop unwanted email, and you can stop your Mail Mask simply by re-forwarding any email to stop@mailmasker.com.",
  },
]

const Pricing = () => (
  <Section id="pricing">
    <StyledContainer>
      <Subtitle>Pricing</Subtitle>
      <SectionTitle>One plan with no surprises</SectionTitle>
      <SectionBody>
        Mail Masker is a paid service. Instead of a free trial, we offer a 30
        day money-back guarantee.
      </SectionBody>
      <FeaturesGrid>
        <FeatureItemPremium>
          <FeatureTitlePremium>Premium</FeatureTitlePremium>
          <FeatureSubtitlePremium>$24 / year</FeatureSubtitlePremium>
          {premiumFeatures.map((feature, index) =>
            index > 0 ? (
              <Tippy content={<span>{feature.description}</span>}>
                <FeatureLineItemPremium>
                  <span>{feature.title}</span>
                </FeatureLineItemPremium>
              </Tippy>
            ) : (
              <Tippy content={<span>{feature.description}</span>}>
                <FeatureLineItem>
                  <span>{feature.title}</span>
                </FeatureLineItem>
              </Tippy>
            )
          )}
        </FeatureItemPremium>
      </FeaturesGrid>
    </StyledContainer>
  </Section>
)

export default Pricing

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`
const SectionBody = styled.p`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: flex;
  justify-content: center;
  margin: 0px auto;
`

const FeatureItemPremium = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: 1px solid #3e898b;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin: 16px 0 10px 0;
  padding: 0;
  @media (max-width: ${props => props.theme.screen.sm}) {
    font-size: 1.6em;
  }
`

const FeatureTitlePremium = styled(FeatureTitle)`
  color: #3e898b;
`

const FeatureSubtitle = styled.h3`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  margin: 0;
  padding: 0 0 16px 0;
  width: 100%;
  text-align: center;
  font-size: 1.2em;
  @media (max-width: ${props => props.theme.screen.sm}) {
    font-size: 1.2em;
  }
`

const FeatureSubtitlePremium = styled(FeatureSubtitle)``

// const FeatureSubSubtitle = styled.span`
//   font-size: 0.8em;
// `

const FeatureLineItem = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  width: 100%;
  text-align: center;
  padding: 16px;
  :last-child {
    border-bottom: none;
  }
  cursor: help;
`
const FeatureLineItemPremium = styled(FeatureLineItem)`
  color: #3e898b;
  font-weight: bolder;
`

const BottomText = styled.p`
  margin-top: 50px;
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  line-height: 1.4em;
  a {
    text-decoration: none;
    font-weight: bolder;
    color: ${props => props.theme.color.primary};
  }
`
