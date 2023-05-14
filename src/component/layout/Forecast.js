import { Col, Row } from 'react-bootstrap'

import '../../styles/forecast.css'

const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]

const Forecast = ({ data }) => {

  const day = new Date().getDay()
  const forecastDay = WEEK.slice(day, WEEK.length).concat(WEEK.slice(0, day))

  
  return (
    <>
      <h6>5 Days Forecast</h6>
      <Col xl={11} className='forecast-container'>
        {
          data.list.splice(0, 5).map((item, index) => (
            <Row key={index}>
              <div className='forecast-days'>
                <Col xl={4} className='image-temp'>
                  <img src={`weather_icons/${item.weather[0].icon}.png`} alt='weather-icon' />
                  <h5>{Math.round(item.main.temp)}<sup>o</sup></h5>
                </Col>
                <Col xl={4}>
                <span>{forecastDay[index]}</span>
                </Col>
                <Col xl={4}>
                <span>{item.weather[0].main}</span>
                </Col>
              </div>
            </Row>
          ))
        }
      </Col>
      </>
  )
}

export default Forecast