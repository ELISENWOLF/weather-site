import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { TbWind } from 'react-icons/tb'
import { BiSun, BiMoon } from 'react-icons/bi'
import { WiHumidity } from 'react-icons/wi'
import { TiWaves } from 'react-icons/ti'
import { MdOutlineVisibility } from 'react-icons/md'
import { RiTempColdLine } from 'react-icons/ri'

import direction from '../../assets/images/direction.png'
import '../../styles/highlight.css'

const Highlights = ({ data, rise_set }) => {
  const [airCondition, setAirCondition] = useState("")
  const [airBgColor, setAirBgColor] = useState('')
  const [hour, setHour] = useState('')

  //SunSet & SunRise//

  const timeZone = rise_set.timezone
  const sun_Rise = rise_set.sys.sunrise
  const sun_Set = rise_set.sys.sunset

  const riseDetail = new Date((timeZone + sun_Rise) * 1000).toUTCString()
  const [, , , , riseTime] = riseDetail.split(" ")
  const [riseHour, riseMinute,] = riseTime.split(":")

  const set_Detail = new Date((timeZone + sun_Set) * 1000).toUTCString()
  const [, , , , set_Time] = set_Detail.split(" ")
  const [set_Hour, ,] = set_Time.split(":")

  useEffect(() => {
    if (set_Hour === '00') {
      setHour('12')
    } else if (set_Hour === '13') {
      setHour('1')
    } else if (set_Hour === '14') {
      setHour('2')
    } else if (set_Hour === '15') {
      setHour('3')
    } else if (set_Hour === '16') {
      setHour('4')
    } else if (set_Hour === '17') {
      setHour('5')
    } else if (set_Hour === '18') {
      setHour('6')
    } else if (set_Hour === '19') {
      setHour('7')
    } else if (set_Hour === '20') {
      setHour('8')
    } else if (set_Hour === '21') {
      setHour('9')
    } else if (set_Hour === '22') {
      setHour('10')
    } else if (set_Hour === '23') {
      setHour('11')
    }
  }, [set_Hour])

  //air_condition//

  const SO2 = Math.round(data.current.air_quality.so2)
  const NO2 = Math.round(data.current.air_quality.no2)
  const PM10 = Math.round(data.current.air_quality.pm10)
  const PM2_5 = Math.round(data.current.air_quality.pm2_5)
  const O3 = Math.round(data.current.air_quality.o3)
  const CO = Math.round(data.current.air_quality.co)

  useEffect(() => {
    if (SO2 <= 20 && NO2 <= 40 && PM10 <= 20 && PM2_5 <= 10 && O3 <= 60 && CO <= 4400) {
      setAirCondition('Good')
      setAirBgColor('rgb(99, 192, 63)')
    } else if (SO2 <= 80 && NO2 <= 70 && PM10 <= 50 && PM2_5 <= 25 && O3 <= 100 && CO <= 9400) {
      setAirCondition('Fair')
      setAirBgColor('rgb(171, 192, 63)')
    } else if (SO2 <= 250 && NO2 <= 150 && PM10 <= 100 && PM2_5 <= 50 && O3 <= 140 && CO <= 12400) {
      setAirCondition('Moderate')
      setAirBgColor('rgb(192, 123, 63)')
    } else if (SO2 <= 350 && NO2 <= 200 && PM10 <= 200 && PM2_5 <= 75 && O3 <= 180 && CO <= 15400) {
      setAirCondition('Poor')
      setAirBgColor('rgb(192, 97, 63)')
    } else if (SO2 > 350 && NO2 > 200 && PM10 > 200 && PM2_5 > 75 && O3 > 180 && CO > 15400) {
      setAirCondition('Very Poor')
      setAirBgColor('rgb(192, 63, 63)')
    }
  }, [SO2, NO2, PM10, PM2_5, O3, CO])

  const style = {
    transform: `rotateZ(${data.current.wind_degree}deg)`
  }

  return (
    <Container className='highlights'>
      <h4>Today's Highlights</h4>
      <Row>
        <Col xl={12} className='top-highlights'>
          <Col xl={5} sm={12} xs={8} className='air-details'>
            <div className='top-left-head'>
              <h6>Air Quantity Index</h6>
              <span style={{ background: `${airBgColor}` }}>{airCondition}</span>
            </div>
            <Col className='air-measure'>
              <Col><TbWind className='wind-icon' /></Col>
              <Col className='air-value'><span>SO<sub>2</sub></span><h3>{SO2}</h3></Col>
              <Col className='air-value'><span>NO<sub>2</sub></span><h3>{NO2}</h3></Col>
              <Col className='air-value'><span>PM<sub>10</sub></span><h3>{PM10}</h3></Col>
              <Col className='air-value'><span>PM<sub>2.5</sub></span><h3>{PM2_5}</h3></Col>
              <Col className='air-value'><span>O<sub>3</sub></span><h3>{O3}</h3></Col>
              <Col className='air-value'><span>CO</span><h3>{CO}</h3></Col>
            </Col>
          </Col>
          <Col xl={12} className='sun-rise_set'>
            <div className='top-right-head'>
              <h6>Sunrise & Sunset</h6>
            </div>
            <Col className='rise-set-time'>
              <Col className='time'>
                <Col className='sunrise'>
                  <BiSun className='icon' />
                  <div className='sunrise-time'>
                    <span>Sunrise</span><h3>{riseHour}:{riseMinute} AM</h3>
                  </div>
                </Col>
                <Col className='sunset'>
                  <BiMoon className='icon' />
                  <div className='sunset-time'>
                    <span>Sunset</span><h3>{hour}:{set_Hour} PM</h3>
                  </div>
                </Col>
              </Col>
            </Col>
          </Col>
        </Col>
        <Col className='bottom-higlights'>
          <Col xl={2} className='humidity'>
            <h5>Humidity</h5>
            <div className='hum-value'>
              <WiHumidity className='logo' />
              <span>{data.current.humidity}%</span>
            </div>
          </Col>
          <Col xl={2} className='pressure'>
            <h5>Pressure</h5>
            <div className='pressure-value'>
              <TiWaves className='logo' />
              <span>{data.current.pressure_mb}hPa</span>
            </div>
          </Col>
          <Col xl={2} className='visibility'>
            <h5>Visibility</h5>
            <div className='visi-value'>
              <MdOutlineVisibility className='logo' />
              <span>{Math.round(data.current.vis_km)}km</span>
            </div>
          </Col>
          <Col xl={2} className='feels-like'>
            <h5>Feels Like</h5>
            <div className='feels-value'>
              <RiTempColdLine className='logo' />
              <span>{Math.round(data.current.feelslike_c)}<sup>o</sup>c</span>
            </div>
          </Col>
          <Col xl={2} className='wind'>
            <h5>Wind</h5>
            <div className='wind-value'>
              <img
                src={direction}
                style={style}
                alt='direction-logo'
                className='image-icon' />
              <span>{data.current.wind_kph}km/h</span>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Highlights