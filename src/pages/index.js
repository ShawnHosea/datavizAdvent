import React, { Component } from 'react'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import CardList from '../components/CardList'
import DripEmail from '../components/DripEmail'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default class index extends Component {
  render() {
    console.log('STUFF')
    console.log(this.props.data)
    return (
      <Layout>
        <Header />
        <Hero />
        <DripEmail />
        <CardList posts={data.allMdx.edges} />
        <Footer />
      </Layout>
    )
  }
}

export const query = graphql`
  {
    allMdx(sort: { fields: [frontmatter___date], order: DESC }, limit: 1000) {
      edges {
        node {
          code {
            scope
          }
          fields {
            slug
          }
          frontmatter {
            title
            date
            videoId
            codesandboxId
          }
        }
      }
    }
  }
`
