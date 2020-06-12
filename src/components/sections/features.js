import { Container, Section } from "../global"

import React from "react"
import styled from "styled-components"

const Features = () => (
  <StyledSection id="features">
    <StyledContainer>
      <Subtitle>Features</Subtitle>
      <SectionTitle>Private and convenient</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>Control SPAM</FeatureTitle>
          <FeatureText>
            Receiving unwanted email? Just disable your Mail Mask. Avoid
            companies' painful, unreliable unsubscribe steps.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Free Forever</FeatureTitle>
          <FeatureText>
            Your Mail Masks are yours forever, and there's no pressure to
            upgrade to a paid plan.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Security</FeatureTitle>
          <FeatureText>
            Make it harder for others to access your accounts when they can't
            guess which email address you used to sign up.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Avoid being tracked</FeatureTitle>
          <FeatureText>
            Use a unique email address for every service you sign up for to make
            tracking you harder.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>We don't want your data</FeatureTitle>
          <FeatureText>
            We delete your emails from our servers as soon as they're forwarded
            to you, and we'll never share or sell your data.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Open Source</FeatureTitle>
          <FeatureText>
            We've made Mail Masker is open source to increase transparency,
            accountability, auditability, and trust.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
    </StyledContainer>
  </StyledSection>
)

export default Features

const StyledSection = styled(Section)``

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
