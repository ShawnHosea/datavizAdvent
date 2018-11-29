import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'
import styled from 'styled-components'

import Hero from '../components/Hero';
import Layout from '../components/Layout'
import DripEmail from '../components/DripEmail';

const WrapperCard = styled.div`
 .Card {
  width: 300px;
  height: 300px;
  margin: 2rem;
  padding: 1rem;
  background-color: #efefef;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(0,0,0,0.25);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .Card:hover {
    transform: scale(1.1, 1.1);
  }
`;
const CardLayout = styled.div`
display: grid;
align-items: center;
justify-items: center;
grid-template-columns: 1fr 1fr 1fr;
@media (max-width: 940px) {
  grid-template-columns: 1fr;
}
`;

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(
      this,
      'props.data.site.siteMetadata.description'
    )
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout>
        <Hero/>
        <DripEmail/>
        <CardLayout>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
        <WrapperCard>
          <div className='Card'>
              <div  key={node.fields.slug}>
                <h3>
                  <Link  to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            </div>
          </WrapperCard>
            )
          })}
        </CardLayout>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
