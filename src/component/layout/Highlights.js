import { Col, Container, Row } from 'react-bootstrap'
import { TbWind } from 'react-icons/tb'
import { BiSun, BiMoon } from 'react-icons/bi'
import { WiHumidity } from 'react-icons/wi'
import { TiWaves } from 'react-icons/ti'
import { MdOutlineVisibility } from 'react-icons/md'
import { RiTempColdLine } from 'react-icons/ri'

import '../../styles/highlight.css'

const Highlights = ({data, air}) => {

  console.log(data);

  const visibilityValue = data.visibility/1000

  //SunSet & SunRise//

  const timeZone = data.timezone
  const sun_Rise = data.sys.sunrise
  const sun_Set = data.sys.sunset

  const riseDetail = new Date((timeZone+sun_Rise)*1000).toUTCString()
  const [, , , , riseTime] = riseDetail.split(" ")
  const [riseHour, riseMinute, ] = riseTime.split(":")
  
  const setDetail = new Date((timeZone+sun_Set)*1000).toUTCString()
  const [ , , , , setTime] = setDetail.split(" ")
  const [setHour, setMinute, ] = setTime.split(":")

  return (
    <Container className='highlights'>
      <h4>Today's Highlights</h4>
      <Row>
        <Col xl={12} className='top-highlights'>
          <Col xl={5} sm={12} xs={8}  className='air-details'>
            <div className='top-left-head'>
              <h6>Air Quantity Index</h6>
              <span>Very Poor</span>
            </div>
            <Col className='air-measure'>
              <Col><TbWind className='wind-icon'/></Col>
              <Col className='air-value'><span>PM<sub>2.5</sub></span><h3>{Math.round(air.list[0].components.pm2_5)}</h3></Col>
              <Col className='air-value'><span>SO<sub>2</sub></span><h3>{Math.round(air.list[0].components.so2)}</h3></Col>
              <Col className='air-value'><span>NO<sub>2</sub></span><h3>{Math.round(air.list[0].components.no2)}</h3></Col>
              <Col className='air-value'><span>O<sub>3</sub></span><h3>{Math.round(air.list[0].components.o3)}</h3></Col>
            </Col>
          </Col>
          <Col xl={12} className='sun-rise_set'>
            <div className='top-right-head'>
              <h6>Sunrise & Sunset</h6>
            </div>
            <Col className='rise-set-time'>
              <Col className='time'>
                <Col className='sunrise'>
                  <BiSun className='rise-set-logo'/>
                  <div className='sunrise-time'>
                  <span>Sunrise</span><h3>{riseHour}:{riseMinute} AM</h3>
                  </div>
                </Col>
                <Col className='sunrise'>
                  <BiMoon className='rise-set-logo'/>
                  <div className='sunrise-time'>
                  <span>Sunset</span><h3>{setHour}:{setMinute} PM</h3>
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
              <WiHumidity className='logo'/>
              <span>{data.main.humidity}%</span>
            </div>
          </Col>
          <Col xl={2} className='pressure'>
            <h5>Pressure</h5>
            <div className='pressure-value'>
              <TiWaves className='logo'/>
              <span>{data.main.pressure}hPa</span>
            </div>
          </Col>
          <Col xl={2} className='visibility'>
            <h5>Visibility</h5>
            <div className='visi-value'>
              <MdOutlineVisibility className='logo'/>
              <span>{Math.round(visibilityValue)}km</span>
            </div>
          </Col>
          <Col xl={2} className='feels-like'>
            <h5>Feels Like</h5>
            <div className='feels-value'>
              <RiTempColdLine className='logo'/>
              <span>{Math.round(data.main.feels_like)}<sup>o</sup>c</span>
            </div>
          </Col>
        </Col>
      </Row>
    </Container>
  )
}

export default Highlights