import React, { Component } from 'react'
import styled from 'styled-components'
import BackIMG from '../assets/Group.png'


const Wrapper = styled.div`
height: 100%;
background-color: #1D1E22;
color: #fff;
text-align: center;
`

const WrapperGroup = styled.div`
padding: 5rem 0;
@keyframes HeroAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 3;
    transform: translateY(0);
  }
}
img {
    height: 300px;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}
h1 {
    font-size: 70px;
    font-weight: 900;
    margin: 0;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}
h3 {
    font-size: 40px;
    font-weight: 200;
    animation: HeroAnimation;
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1);
}
`

export default class Hero extends Component {
  render() {
    return (
      <Wrapper>
        <WrapperGroup>
            <h1>DATAVIS30</h1>
            <img src={BackIMG} alt='pic'/>
            <h3>30 Days of Data Visualization projects.</h3>
        </WrapperGroup>
      </Wrapper>
    )
  }
}
