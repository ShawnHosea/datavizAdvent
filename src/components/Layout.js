import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import './layout.css'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'ShawnHosea', content: 'Product Designer | Frontend Engineer' },
          ]}
        >
        
        <meta itemprop="name" content="ShawnHosea"></meta>
        <meta itemprop="description" content="Product Designer 💯 | Frontend Engineer ⚡️"/>
        <meta itemprop="image" content="https://shawnhosea.com/static/siteImage-91eeaf9db418ed2843834b908e6e60d5.png"/>

        
        <meta property="og:url" content="https://shawnhosea.com"/>
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="ShawnHosea"/>
        <meta property="og:description" content="Product Designer 💯 | Frontend Engineer ⚡️"/>
        <meta property="og:image" content="https://shawnhosea.com/static/siteImage-91eeaf9db418ed2843834b908e6e60d5.png"/>
       
        
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:title" content="ShawnHosea"/>
        <meta name="twitter:description" content="Product Designer 💯 | Frontend Engineer ⚡️"/>
        <meta name="twitter:image" content="https://shawnhosea.com/static/siteImage-91eeaf9db418ed2843834b908e6e60d5.png"/>

        <html lang="en" />
        </Helmet>
        
          {children}
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout