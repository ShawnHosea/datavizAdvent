import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostHeader from '../components/PostHeader'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

class BlogPostTemplate extends React.Component {
  render() {
    const { children, data, location, ...props } = this.props,
      { mdx } = data

    return (
      <Layout location={location}>
        <Helmet
          title={`${mdx.frontmatter.title} | ${data.site.siteMetadata.title}`}
        />
        <PostHeader postdate={mdx.frontmatter.date} />
        <h1>{mdx.frontmatter.title}</h1>

        <div>
          <MDXRenderer scope={this.props.__mdxScope}>
            {mdx.code.body}
          </MDXRenderer>
        </div>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      code {
        body
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        videoId
        codesandboxId
      }
    }
  }
`
