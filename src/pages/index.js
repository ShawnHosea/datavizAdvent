import React, { Component } from 'react'
import styled from 'styled-components'

import Hero from '../components/Hero';
import CardList from '../components/CardList';
import DripEmail from '../components/DripEmail'
const Wrapper = styled.div`

`

export default class index extends Component {
  render() {
    return (
      <Wrapper>
        <Hero/>
        <DripEmail/>
        <CardList/>
      </Wrapper>
    )
  }
}
