import { Col, Container, Row } from "react-bootstrap"

import sunny from '../../assets/images/weather_icons/01d.png'
import '../../styles/todayclimate.css'

const TodaysClimate = () => {
  return (
    <>
    <h5>Today at</h5>
    <Container className="today-container">
      <Row className="top-container">
        <Col xl={1} className="all-climate">
          <span className="climate-time">9 PM</span>
          <img src={sunny} alt='sunny'/>
          <span className="climate-temp">5<sup>o</sup></span>
        </Col>
        <Col xl={1} className="all-climate">
          <span className="climate-time">12 AM</span>
          <img src={sunny} alt='sunny'/>
          <span className="climate-temp">4<sup>o</sup></span>
        </Col>
        <Col xl={1} className="all-climate">
          <span className="climate-time">3 AM</span>
          <img src={sunny} alt='sunny'/>
          <span className="climate-temp">3<sup>o</sup></span>
        </Col>
        <Col xl={1} className="all-climate">
          <span className="climate-time">6 AM</span>
          <img src={sunny} alt='sunny'/>
          <span className="climate-temp">1<sup>o</sup></span>
        </Col>
        <Col xl={1} className="all-climate">
          <span className="climate-time">9 AM</span>
          <img src={sunny} alt='sunny'/>
          <span className="climate-temp">4<sup>o</sup></span>
        </Col>
        <Col xl={1} className="all-climate">
          <span className="climate-time">12 PM</span>
          <img src={sunny} alt='sunny'/>
          <span className="climate-temp">8<sup>o</sup></span>
        </Col>
        <Col xl={1} className="all-climate">
          <span className="climate-time">3 PM</span>
          <img src={sunny} alt='sunny'/>
          <span className="climate-temp">9<sup>o</sup></span>
        </Col>
        <Col xl={1} className="all-climate">
          <span className="climate-time">6 PM</span>
          <img src={sunny} alt='sunny'/>
          <span className="climate-temp">7<sup>o</sup></span>
        </Col>
      </Row>
      <Row className="bottom-container">
        <Col xl={1} className="all-wind">
          <span className="wind-time">9 PM</span>
          <img src={sunny} alt='sunny'/>
          <span className="windspeed">9 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">12 AM</span>
          <img src={sunny} alt='sunny'/>
          <span className="windspeed">8 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">3 AM</span>
          <img src={sunny} alt='sunny'/>
          <span className="windspeed">8 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">6 AM</span>
          <img src={sunny} alt='sunny'/>
          <span className="windspeed">10 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">9 AM</span>
          <img src={sunny} alt='sunny'/>
          <span className="windspeed">13 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">12 PM</span>
          <img src={sunny} alt='sunny'/>
          <span className="windspeed">14 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">3 PM</span>
          <img src={sunny} alt='sunny'/>
          <span className="windspeed">15 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">6 PM</span>
          <img src={sunny} alt='sunny'/>
          <span className="windspeed">12km/h</span>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default TodaysClimate