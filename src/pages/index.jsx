import Features from "../components/sections/features"
import Footer from "../components/sections/footer"
import GetStarted from "../components/sections/getstarted"
import Header from "../components/sections/header"
import Layout from "../components/common/layout/layout"
import Navigation from "../components/common/navigation/navigation"
import Pricing from "../components/sections/pricing"
import Product from "../components/sections/product"
import React from "react"
import SEO from "../components/common/layout/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Mail Masker" />
    <Navigation isIndexPage />
    <Header />
    <Features />
    <Product />
    <Pricing />
    <GetStarted />
    <Footer />
  </Layout>
)

export default IndexPage
