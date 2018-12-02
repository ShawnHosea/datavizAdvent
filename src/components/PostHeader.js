import React from 'react'
import { Link } from 'gatsby'

const PostHeader = props => {
  return (
    <pre
    >
      {props.postdate} /
      <Link
        
        to={'/'}
        aria-label="home"
      >
        {' '}
        Santhosh Soundararajan
      </Link>
    </pre>
  )
}

export default PostHeader