import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PostHeader from '../components/PostHeader'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
`
const Codesandbox = styled.iframe`
  width: 100%;
  height: 500px;
`

const Lead = styled.p`
  font-size: 1.3em;
`

class BlogPostTemplate extends React.Component {
  render() {
    const { children, data, location, ...props } = this.props,
      { mdx } = data,
      { frontmatter } = mdx

    return (
      <Layout location={location}>
        <Wrapper>
          <Helmet
            title={`${frontmatter.title} | ${data.site.siteMetadata.title}`}
          />
          <PostHeader postdate={frontmatter.date} />
          <h1>{frontmatter.title}</h1>

          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${frontmatter.videoId}`}
          />

          <Lead>{frontmatter.intro}</Lead>

          <h2>Try it out 👇</h2>
          <Codesandbox
            src={`https://codesandbox.io/embed/${frontmatter.codesandboxId}`}
            class="embedded-codesandbox"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          />

          <div>
            <MDXRenderer scope={this.props.__mdxScope}>
              {mdx.code.body}
            </MDXRenderer>
          </div>
        </Wrapper>
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
        intro
      }
    }
  }
`
