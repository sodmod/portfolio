import React from 'react'
import {Col, Container, Row} from "react-bootstrap";
import image from '../../assets/image/developer_4.png';
import {Typewriter} from 'react-simple-typewriter'
import './Header.css';
import {homedata, socialLinksObjectArray, whatsappLink} from '../../data/data';
import CircleButton from '../CircleButton/CircleButton';
import {handleClick, handleDownloadClick} from "../../utils/utils.js";

const Header = () => {
  return (
    <section className="home" id="home" style={{backgroundColor: "#1f293a", color: "#fff"}}>
      <Container>
        <Row>
          <Col md={6} sm={4} className="home-content">
            <h5 className="mb-2">{homedata.intro}</h5>
            <h1 className="mb-3 name">{homedata.name}</h1>
            <h3 className="mb-4">I Am <span className='text-primary'>
            <Typewriter
              words={homedata.tech}
              loop={100}
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}/>
          </span></h3>
            <div className='icons-button-container'>
              {
                socialLinksObjectArray.map((socials, key) =>
                  <CircleButton key={key} icon={socials.icon} onClick={() => handleClick(socials.link)}/>
                )
              }
            </div>
            <button className='outline-button' onClick={() => handleClick(whatsappLink)}>Get in Touch</button>
            <button className="outline-button m-2" onClick={handleDownloadClick}>Resume</button>
          </Col>
          <Col className="home-pic" md={6} sm={4}>
            <img src={image} height={100} alt="Program"/>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default Header