import React from 'react'
import {Container} from 'react-bootstrap'
import EducationCard from './EducationCard'
import './Education.css';
import {educationdata} from "../../data/data.js";

const Education = () => {
  return (
    <section className="education-content" id="education">
      <Container>
        <h2 className="text-center heading mb-5" style={{"fontFamily": "cursive",}}> &nbsp; Education Details.</h2>
        <div className="timeline">
          {educationdata.map((education, key) =>
            <div key={key} className={`container-e ${education.classname.div_direction}`}>
              <div className="timeline-bullet"></div>
              <EducationCard data={education.data}/>
              <span className={`${education.classname.div_direction}-arrow`}></span>
            </div>)}
        </div>
      </Container>
    </section>
  )
}

export default Education