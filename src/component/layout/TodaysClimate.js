import { Col, Container, Row } from "react-bootstrap"

import direction from '../../assets/images/direction.png'
import '../../styles/todayclimate.css'

const TodaysClimate = ({ data }) => {

  const forecastHour = data.forecast.forecastday.slice(0, 1)
  const currentDate = forecastHour[0].date


  console.log(forecastHour[0]);
  return (
    <div className="today_at-box">
      <h5>Today at</h5>
      <Container className="today-container">
        <Row className="top-container">
          {
            forecastHour[0].hour.map((item, index) => {
              return <Col key={index} className="all-climate">
                <span className="climate-time">{item.time.replace(`${currentDate}`, '')}</span>
                <img src={item.condition.icon} alt='climate-logo' className="today-temperature" />
                <span className="climate-temp">{Math.round(item.temp_c)}<sup>o</sup>C</span>
              </Col>
            })
          }
        </Row>
        <Row className="bottom-container">
          {
            forecastHour[0].hour.map((item, index) => (
              <Col key={index} className="all-wind">
                <span className="wind-time">{item.time.replace(`${currentDate}`, '')}</span>
                <img src={direction} style={{ transform: `rotateZ(${item.wind_degree}deg)` }} alt='direction-logo' className="today-wind" />
                <span className="windspeed">{Math.floor(item.wind_kph)} km/h</span>
              </Col>
            ))
          }
        </Row>
      </Container>
    </div>
  )
}

export default TodaysClimate