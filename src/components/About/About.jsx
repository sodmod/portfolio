import React from 'react'
import './About.css';
import {Col, Row} from "react-bootstrap";
import {aboutdata, java, javascript, node_js, spring_boot} from '../../data/data';
import {Zoom} from "react-awesome-reveal";

const About = () => {
  return (
    <div className="about" id="about">
      <h2 className="heading">Who I am?</h2>
      <Zoom>
        <Row>
          <Col xs={8} md={8}>
            <p className='info'>{aboutdata.intro}</p>
            <p className='info'>{aboutdata.description}</p>
            <div>
              <h6><b>Tech Stack</b></h6>
              <img className="p-1" src={java} alt='html'/>
              <img className="p-1" src={javascript} alt='javascript'/>
              <img className="p-1" src={spring_boot} alt='springboot'/>
              <img className="p-1" src={node_js} alt='nodejs'/>
            </div>
          </Col>
          <Col>
            <img src={aboutdata.image} height="300" width="400" alt="your image"/>
          </Col>
        </Row>
      </Zoom>
    </div>
  )
}

export default About