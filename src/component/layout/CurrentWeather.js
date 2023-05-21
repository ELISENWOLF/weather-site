import { Col, Row } from 'react-bootstrap'
import { HiOutlineCalendar } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

import '../../styles/currentweather.css'
import { useState } from 'react';

const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CurrentWeather = ({ data, countryCode }) => {

  const [liveHour, setLiveHour] = useState('')

  const date = new Date().getDate()
  const day = new Date().getDay()
  const month = new Date().getMonth()
  const Day = WEEK[day - 1]
  const Month = MONTH[month]

  const time = () => {
    const timeZone = data.location.tz_id;
    const now = new Date().toLocaleTimeString('en-US', {timeZone: timeZone})
    setLiveHour(now)
  }
  
    setInterval(() => {
      time()
    }, 1000)

  return (
    <Col xs={12} md={2} xl={11} className='container-box'>
      <Row className='top'>
        <h6>Now</h6>
        <Col className='temperature-box'>
          <h2 className='temperature'>{Math.round(data.current.temp_c)}<sup>o</sup>C</h2>
          <img src={data.current.condition.icon} alt='weather' className='temperature-logo' />
        </Col>
        <h6>{data.current.condition.text.replace("possible", '')}</h6>
        <hr className='line' />
      </Row>
      <Row className='bottom'>
        <Col className='date'>
          <HiOutlineCalendar className='date-logo' />
          <span>{Day}&nbsp;{date}, {Month}</span>
          &nbsp;&nbsp;
          <span>{liveHour}</span>
        </Col>
        <Col className='location'>
          <GoLocation className='location-logo' />
          <span>{countryCode.name},&nbsp;{countryCode.sys.country}</span>
        </Col>
      </Row>
    </Col>
  )
}

export default CurrentWeather