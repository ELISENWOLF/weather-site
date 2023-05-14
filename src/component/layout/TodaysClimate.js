import { Col, Container, Row } from "react-bootstrap"

import sunny from '../../assets/images/01d.png'
import '../../styles/todayclimate.css'
import { useEffect, useState } from "react"

const TodaysClimate = ({ data }) => {

  // const [hour, setHour] = useState('')

  console.log(data);

  // useEffect(() => {
  //   if(set_Hour == '00'){
  //     setHour('12')
  //   }else if(set_Hour == '13'){
  //     setHour('1')
  //   }else if(set_Hour == '14'){
  //     setHour('2')
  //   }else if(set_Hour == '15'){
  //     setHour('3')
  //   }else if(set_Hour == '16'){
  //     setHour('4')
  //   }else if(set_Hour == '17'){
  //     setHour('5')
  //   }else if(set_Hour == '18'){
  //     setHour('6')
  //   }else if(set_Hour == '19'){
  //     setHour('7')
  //   }else if(set_Hour == '20'){
  //     setHour('8')
  //   }else if(set_Hour == '21'){
  //     setHour('9')
  //   }else if(set_Hour == '22'){
  //     setHour('10')
  //   }else if(set_Hour == '23'){
  //     setHour('11')
  //   }
  // })

  return (
    <>
    <h5>Today at</h5>
    <Container className="today-container">
      <Row className="top-container">
        {/* {
          data.list.splice(0, 8).map((item) => (
            <Col xl={1} className="all-climate">
              <span className="climate-time">9 PM</span>
              <img src={sunny} alt='sunny' className="today-temperature"/>
              <span className="climate-temp">5<sup>o</sup></span>
            </Col>
          ))
        } */}
      </Row>
      <Row className="bottom-container">
        <Col xl={1} className="all-wind">
          <span className="wind-time">9 PM</span>
          <img src={sunny} alt='sunny' className="today-temperature"/>
          <span className="windspeed">9 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">12 AM</span>
          <img src={sunny} alt='sunny' className="today-temperature"/>
          <span className="windspeed">8 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">3 AM</span>
          <img src={sunny} alt='sunny' className="today-temperature"/>
          <span className="windspeed">8 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">6 AM</span>
          <img src={sunny} alt='sunny' className="today-temperature"/>
          <span className="windspeed">10 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">9 AM</span>
          <img src={sunny} alt='sunny' className="today-temperature"/>
          <span className="windspeed">13 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">12 PM</span>
          <img src={sunny} alt='sunny' className="today-temperature"/>
          <span className="windspeed">14 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">3 PM</span>
          <img src={sunny} alt='sunny' className="today-temperature"/>
          <span className="windspeed">15 km/h</span>
        </Col>
        <Col xl={1} className="all-wind">
          <span className="wind-time">6 PM</span>
          <img src={sunny} alt='sunny' className="today-temperature"/>
          <span className="windspeed">12km/h</span>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default TodaysClimate