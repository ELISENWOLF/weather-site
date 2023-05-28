import { Col, Row } from 'react-bootstrap'
import { HiOutlineCalendar } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import { useEffect, useState } from 'react';

import '../../styles/currentweather.css'
import rain from '../../assets/images/rain.jpg'
import cloudy from '../../assets/images/cloudy.jpg'
import snow from '../../assets/images/snow.jpg'
import sunny from '../../assets/images/sunny.jpg'
import thunder from '../../assets/images/thunder.jpg'
import clear from '../../assets/images/clear.jpg'
import weatherbg from '../../assets/images/currentweather.jpg'

const WEEK = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
const MONTH = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const CurrentWeather = ({ data }) => {

  const [liveHour, setLiveHour] = useState('')
  const [bg, setBg] = useState(null)

  const date = new Date().getDate()
  const day = new Date().getDay()
  const month = new Date().getMonth()
  const Day = WEEK[day - 1]
  const Month = MONTH[month]

  const time = () => {
    const timeZone = data.location.tz_id;
    const now = new Date().toLocaleTimeString('en-US', { timeZone: timeZone });
    setLiveHour(now);
  };

  useEffect(() => {
    const interval = setInterval(time, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  const weather = data.current.condition.text.toLowerCase()

  useEffect(() => {
    if (weather.includes('rain') === true) {
      if (weather.includes('thunder') === true) {
        setBg(thunder)
      } else {
        setBg(rain)
      }
    } else if (weather.includes('thunder') === true) {
      setBg(thunder)
    } else if (weather.includes('sunny') === true) {
      setBg(sunny)
    } else if (weather.includes('cloudy') === true) {
      setBg(cloudy)
    } else if (weather.includes('snow') === true) {
      setBg(snow)
    } else if (weather.includes('clear') === true) {
      setBg(clear)
    } else {
      setBg(weatherbg)
    }
  }, [weather])

  return (
    <Col
      xs={12}
      md={2}
      xl={11}
      className='container-box'
      style={{ backgroundImage: `url(${bg})` }}>
      <Row className='top'>
        <h6>Now</h6>
        <Col className='temperature-box'>
          <h2 className='temperature'>{Math.round(data.current.temp_c)}<sup>o</sup>C</h2>
          <img src={data.current.condition.icon} alt='weather' className='temperature-logo' />
        </Col>
        <h6>{weather.replace("possible", '')}</h6>
        <hr className='line' />
      </Row>
      <Row className='bottom'>
        <Col className='date'>
          <HiOutlineCalendar className='date-logo' />
          <span>{Day}&nbsp;{date}, {Month}</span>
          &nbsp;&nbsp;
          <span className='liveHour'>{liveHour}</span>
        </Col>
        <Col className='location'>
          <GoLocation className='location-logo' />
          <span>{data.city}</span>
        </Col>
      </Row>
    </Col>
  )
}

export default CurrentWeather