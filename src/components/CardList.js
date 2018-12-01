import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

import Card from './Card';
import Rectangle from '../assets/Rectangle.png'

const Wrapper = styled.div`
display: grid;
grid-gap: 20px;
align-items: center;
justify-items: center;
grid-template-columns: repeat(5, 1fr);
margin: 0 auto;
padding: 3rem 0;
max-width: 1200px;

@media (max-width: 1100px) {
display: grid;
grid-gap: 20px;
align-items: center;
justify-items: center;
grid-template-columns:  1fr 1fr 1fr 1fr; 
}
@media (max-width: 940px) {
display: grid;
grid-gap: 20px;
align-items: center;
justify-items: center;
grid-template-columns: 1fr 1fr 1fr 1fr; 
}
@media (max-width: 840px) {
display: grid;
grid-gap: 20px;
align-items: center;
justify-items: center;
grid-template-columns: 1fr 1fr 1fr; 
}
@media (max-width: 740px) {
display: grid;
grid-gap: 20px;
align-items: center;
justify-items: center;
grid-template-columns: 1fr 1fr; 
}
@media (max-width: 640px) {
display: grid;
grid-gap: 20px;
align-items: center;
justify-items: center;
grid-template-columns: 1fr; 
}
`

export default class CardList extends Component {
  render() {
    return (
      <Wrapper>
      <Card
          title={<Link
          to="/hello-world/">Day 1</Link>}
          image={Rectangle}
      />
      <Card
          title={<Link
          to="/hi-folks/">Day 2</Link>}
          image={Rectangle}
      />
      <Card
          title={<Link
          to="/my-second-post/">Day 3</Link>}
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
      <Card
          title='Day1'
          image={Rectangle}
      />
        
      </Wrapper>
    )
  }
}
