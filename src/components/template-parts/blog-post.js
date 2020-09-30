import React from "react"

import { Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../../components/layout/layout"
import { normalizePath } from "../../utils/get-url-path"

function BlogPost({ data }) {
  const { nextPage, previousPage, page } = data
  const { title, content, featuredImage } = page

  return (
    <Layout>
      <h1>
        {title}
      </h1>
      {!!featuredImage?.node?.remoteFile?.childImageSharp && (
        <Img fluid={featuredImage.node.remoteFile.childImageSharp.fluid} />
      )}

      <p dangerouslySetInnerHTML={{ __html: content }} />

      <br />
      {!!nextPage && (
        <Link to={normalizePath(nextPage.uri)}>Next: {nextPage.title}</Link>
      )}
      <br />
      {!!previousPage && (
        <Link to={normalizePath(previousPage.uri)}>
          Previous: {previousPage.title}
        </Link>
      )}
    </Layout>
  )
}

export default BlogPost
