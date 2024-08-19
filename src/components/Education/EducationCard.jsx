import React from 'react'
import Card from 'react-bootstrap/Card';

const EducationCard = ({data}) => {
  return (
    <Card className="shadow-lg p-3 rounded mb-5">
      <Card.Body>
        <Card.Title>{data.degree}</Card.Title>
        <Card.Text className="college mb-0">
          {data.institute}
        </Card.Text>
        <Card.Text className="year mb-3">
          {data.year}
        </Card.Text>
        {/*{data.grade?*/}
        {/*  <Card.Text className="grade mb-1">*/}
        {/*    Grade: {data.grade}*/}
        {/*  </Card.Text>: null }*/}
      </Card.Body>
    </Card>
  )
}

export default EducationCard