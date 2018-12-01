import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
.Card {
  width: 200px;
  height: 200px;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(0,0,0,0.25);
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
  }
  .Card:hover {
    transform: scale(1.1, 1.1);
  }
  .Card img {
      position: absolute;
      top: 0;
      height: 110%;
      z-index: -1;
  }
  h1 {
      color: #fff;
  }
`


const Card = props => (
    <Wrapper>
        <div className='Card'>
            <img src={props.image}/>
            <h1>{props.title}</h1>
        </div>
    </Wrapper>
  )
  
  export default Card