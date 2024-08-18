import React from 'react'
import ProjectCard from './ProjectCard'
import {Col, Container, Row} from 'react-bootstrap';
import {projectsdata} from '../../data/data';
import {Slide} from 'react-awesome-reveal';

const ProjectUI = () => {
  // console.log(projectsdata)
  return (
    <section id='project' className="project">
      <h2 className="text-center heading" style={{fontFamily: "cursive"}}> &nbsp; My Project.</h2>
      <br/>
      <Slide direction='left'>
        <div>
          <Container>
            <Row>
              {projectsdata.map((data, key) => (
                <Col key={key}>
                  <ProjectCard data={data}/>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </Slide>
    </section>
  )
}

export default ProjectUI