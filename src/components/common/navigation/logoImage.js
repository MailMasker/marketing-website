import { graphql, useStaticQuery } from "gatsby"

import React from "react"
import { StaticImage } from "gatsby-plugin-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const LogoImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(
        sourceInstanceName: { eq: "images" }
        relativePath: { eq: "header-logo.png" }
      ) {
        childImageSharp {
          fluid(maxWidth: 175) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <StaticImage fluid={data.file.childImageSharp.fluid} />
}

export default LogoImage
