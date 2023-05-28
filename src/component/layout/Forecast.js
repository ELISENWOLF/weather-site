import { Col, Row } from 'react-bootstrap'

import '../../styles/forecast.css'

const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const Forecast = ({ data }) => {

  const day = new Date().getDay()
  const forecastDay = WEEK.slice(day, WEEK.length).concat(WEEK.slice(0, day))

  return (
    <div className='forecast-box'>
      <h6>5 Days Forecast</h6>
      <Col xl={11} className='forecast-container'>
        {
          data.forecast.forecastday.slice(1).map((item, index) => (
            <Row key={index}>
              <div className='forecast-days'>
                <Col xl={4} className='image-temp'>
                  <img src={item.day.condition.icon} alt='weather-icon' />
                  <h5>{Math.round(item.day.avgtemp_c)}<sup>o</sup></h5>
                </Col>
                <Col className='desc'>
                  <span>{forecastDay[index]}</span>
                  <span>{item.day.condition.text.replace("possible", '')}</span>
                </Col>
              </div>
            </Row>
          ))
        }
      </Col>
    </div>
  )
}

export default Forecast