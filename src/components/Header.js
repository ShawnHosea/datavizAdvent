import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import './Header.css'
import AdventLogo from '../assets/AdventLogo.png'


const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

export default class Header extends Component {
  render() {
    return (
      <Wrapper>
    <div className='Header'>
      <div className='HeaderGroup'>
     <Link to='/'><img src={AdventLogo} alt='logo'/></Link>
      </div>
    </div>
      </Wrapper>
    )
  }
}
