import React, { Component } from 'react'
import styled from 'styled-components'


const Wrapper = styled.div`
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  padding: 0 5rem;
  color: #384047;
  height: 100%;
  padding: 3rem 0;
  
  @media (max-width: 940px) {
    
  }
`;

const WrapperForm = styled.div`
  input {
    max-width: 400px;
    margin: 0 auto;
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px;
    font-size: 14px;
    line-height: 1.428571429;
    color: #555;
    text-transform: uppercase;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
    -webkit-transition: border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    -webkit-transition: border-color 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
    -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
      -webkit-box-shadow 0.15s ease-in-out;
  }
`;
const WrapperSubmit = styled.div`
  input {
    background-color: red;
    text-transform: uppercase;
    padding: 1rem;
    margin: 1rem 0;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 900;
    color: #fff;
    text-align: center;
    cursor: pointer;
    background-image: none;
    border: none;
    font-size: 14px;
  }
  input:hover {
    background-color: gold;
  }
`;

export default class DripEmail extends Component {
  render() {
    return (
      <Wrapper>
        <h3 data-drip-attribute="headline">
        React+D3v4 sample chapter and email course
        </h3>
        <p data-drip-attribute="description">
        Leave your email and get a free sample of React+d3.js and a mini
        email course. They will teach you about the basic architecture of
        React apps and show you how JSX makes your code better.
        </p>
        <WrapperForm>
            <form
            action="https://www.getdrip.com/forms/5362865/submissions"
            method="post"
            target="_blank"
            data-drip-embedded-form="5362865"
            >
            <input
                type="text"
                placeholder="Enter your email"
                label="Email Address"
                name="fields[email]"
                className="form-control"
            />
            </form>
        </WrapperForm>

        <WrapperSubmit>
            <form
            action="https://www.getdrip.com/forms/5362865/submissions"
            method="post"
            target="_blank"
            data-drip-embedded-form="5362865"
            >
            <input
                type="submit"
                name="submit"
                value="Sign Up"
                data-drip-attribute="sign-up-button"
                className="btn"
            />
            </form>
        </WrapperSubmit>
      </Wrapper>
    )
  }
}
