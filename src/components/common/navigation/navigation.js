import {
  ActionsContainer,
  Brand,
  Mobile,
  MobileMenu,
  Nav,
  NavItem,
  NavListWrapper,
  NavStandaloneLink,
  StyledContainer,
} from "./style"
import { Menu, X } from "react-feather"
import React, { Component } from "react"

import AnchorLink from "react-anchor-link-smooth-scroll"
import { Container } from "../../global"
import LogoImage from "./logoImage"
import Scrollspy from "react-scrollspy"

const NAV_ITEMS = ["Features", "Product", "Pricing", ""]

export default class Navigation extends Component {
  state = {
    mobileMenuOpen: false,
    hasScrolled: false,
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  handleScroll = event => {
    const scrollTop = window.pageYOffset

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true })
    } else {
      this.setState({ hasScrolled: false })
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({ mobileMenuOpen: !prevState.mobileMenuOpen }))
  }

  closeMobileMenu = () => {
    if (this.state.mobileMenuOpen) {
      this.setState({ mobileMenuOpen: false })
    }
  }

  getNavAnchorLink = item => (
    <AnchorLink href={`#${item.toLowerCase()}`} onClick={this.closeMobileMenu}>
      {item}
    </AnchorLink>
  )

  getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{this.getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
      <Mobile>
        <ul>
          <NavItem>
            <a href="https://app.mailmasker.com/sign-up">Sign up</a>
          </NavItem>
          <NavItem>
            <a href="https://app.mailmasker.com/log-in">Log in</a>
          </NavItem>
        </ul>
      </Mobile>
    </NavListWrapper>
  )

  render() {
    const { isIndexPage } = this.props
    const { mobileMenuOpen } = this.state

    return (
      <Nav
        {...this.props}
        mobileMenuOpen={mobileMenuOpen}
        scrolled={this.state.hasScrolled}
      >
        <StyledContainer>
          <Brand>
            {isIndexPage ? (
              <Scrollspy offset={-64} item={["top"]} currentClassName="active">
                <AnchorLink href="#top" onClick={this.closeMobileMenu}>
                  <LogoImage />
                </AnchorLink>
              </Scrollspy>
            ) : (
              <a href="/">
                <LogoImage />
              </a>
            )}
          </Brand>
          <Mobile>
            <button
              onClick={this.toggleMobileMenu}
              style={{ color: "black", background: "none" }}
            >
              {this.state.mobileMenuOpen ? (
                <X size={24} alt="close menu" />
              ) : (
                <Menu size={24} alt="open menu" />
              )}
            </button>
          </Mobile>

          {isIndexPage && <Mobile hide>{this.getNavList({})}</Mobile>}
          <ActionsContainer>
            <NavStandaloneLink>
              <a
                href="https://app.mailmasker.com/log-in"
                style={{ marginRight: "12px" }}
              >
                Log in
              </a>
            </NavStandaloneLink>
            <a href="https://app.mailmasker.com/sign-up">
              <button>Sign up</button>
            </a>
          </ActionsContainer>
        </StyledContainer>
        {isIndexPage && (
          <Mobile>
            {mobileMenuOpen && (
              <MobileMenu>
                <Container>{this.getNavList({ mobile: true })}</Container>
              </MobileMenu>
            )}
          </Mobile>
        )}
      </Nav>
    )
  }
}
