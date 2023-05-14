import { Col } from 'react-bootstrap'
import { HiOutlineCalendar } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

import '../../styles/currentweather.css'

const WEEK = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday' ]
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CurrentWeather = ({ data, countryCode }) => {

  const date = new Date().getDate()
  const day = new Date().getDay()
  const month = new Date().getMonth()
  const Day = WEEK[day - 1]
  const Month = MONTH[month]
  
  return (
    <Col xs={12} md={2} xl={11} className='container-box'>
      <Col className='top'>
        <h6>Now</h6>
        <Col className='temperature-box'>
          <h2 className='temperature'>{data.current.temp_c}<sup>o</sup>C</h2>
          <img src={`//cdn.weatherapi.com/weather/64x64/night/176.png`} alt='weather' className='temperature-logo'/>
        </Col>
        <h6 className='weather-description'>{data.current.condition.text}</h6>
        <hr className='line' />
      </Col>
      <Col className='bottom'>
        <Col className='date'>
          <HiOutlineCalendar className='date-logo' />
          <span>{Day}&nbsp;{date}, {Month}</span>
        </Col>
        <Col className='location'>
          <GoLocation className='location-logo' />
          <span>{countryCode.name},&nbsp;{countryCode.sys.country}</span>
        </Col>
      </Col>
    </Col>
  )
}

export default CurrentWeather