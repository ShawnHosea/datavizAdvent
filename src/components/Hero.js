import React, { Component } from 'react'
import styled from 'styled-components'
import Advent from '../assets/Advent.png'
import Particles from 'react-particles-js';



const Wrapper = styled.div`
background-color: #04081F;
padding: 2rem 0;
height: 100%;
.content {
  margin: 0 auto;
  text-align: center;
}
.Title {
  text-align: center;
  margin: 0;
  padding: 5rem 0;
  color: #fff;
  font-size: 60px;
  font-weight: 900;
}
img {
  height: 500px;
}
.particles {
  position: absolute;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}

.toplayer {
  
  z-index: 1;
}
@media (max-width: 940px) {
.Title {
  font-size: 40px;
  }
  img {
  height: 400px;
}
}
`;

const particlesOptions = {
  "particles": {
      "number": {
        "value": 800,
        "density": {
          "enable": true,
          "value_area": 789.1476416322727
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.8,
        "random": false,
        "anim": {
          "enable": true,
          "speed": 0.2,
          "opacity_min": 0,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": true,
          "speed": 3,
          "size_min": 0,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 0.2,
        "direction": "bottom",
        "random": true,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "bubble"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 83.91608391608392,
          "size": 1,
          "duration": 3,
          "opacity": 3,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
}

export default class Hero extends Component {
  render() {
    return (
      <Wrapper className="toplayer">
      <div className='content'>
      <h1 className='Title'>DATAVIS ADVENT CALENDAR</h1>
      <img src={Advent} alt='tree'/>
      </div>
      <Particles className="particles" params={particlesOptions} />
      </Wrapper>
    )
  }
}
