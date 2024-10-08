import React from 'react'
import {Col, Container, Row} from 'react-bootstrap';
import {skillsdata} from '../../data/data';
import SkillsContainer from './SkillsContainer';
import './Skills.css';

function Skills(){
  return (
    <section className='skills'>
      <h2 className="text-center heading" style={{fontFamily: "cursive"}}> Skills.</h2>
      <Container fluid>
        <Row className="row-cols-1 row-cols-md-5 row-eq-height">
          {skillsdata.map((data, key) => (
            <Col key={key} className="mb-4  d-flex align-items-center justify-content-center">
              <div>
                <SkillsContainer data={data}/>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Skills