import { Col, Row } from 'react-bootstrap'

import halfmoon from '../../assets/images/weather_icons/01n.png'
import cloudy from '../../assets/images/weather_icons/04d.png'
import rainynight from '../../assets/images/weather_icons/10n.png'
import '../../styles/forecast.css'

const Forecast = () => {
  return (
    <>
      <h6>5 Days Forecast</h6>
      <Col xl={11} className='forecast-container'>
        <Row>
          <div className='forecast-days'>
            <Col xl={4} className='image-temp'>
              <img src={halfmoon} alt='halfmoon' />
              <h5>7<sup>o</sup></h5>
            </Col>
            <Col xl={4}>
            <span>2 Mar</span>
            </Col>
            <Col xl={4}>
            <span>Thursday</span>
            </Col>
          </div>
        </Row>
        <Row>
          <div className='forecast-days'>
            <Col xl={4} className='image-temp'>
              <img src={halfmoon} alt='halfmoon' />
              <h5>7<sup>o</sup></h5>
            </Col>
            <Col xl={4}>
            <span>3 Mar</span>
            </Col>
            <Col xl={4}>
            <span>Friday</span>
            </Col>
            </div>
        </Row>
        <Row>
          <div className='forecast-days'>
            <Col xl={4} className='image-temp'>
              <img src={cloudy} alt='halfmoon' />
              <h5>7<sup>o</sup></h5>
            </Col>
            <Col xl={4}>
            <span>4 Mar</span>
            </Col>
            <Col xl={4}>
            <span>Saturday</span>
            </Col>
          </div>
        </Row>
        <Row>
          <div className='forecast-days'>
            <Col xl={4} className='image-temp'>
              <img src={rainynight} alt='halfmoon' />
              <h5>6<sup>o</sup></h5>
            </Col>
            <Col xl={4}>
            <span>5 Mar</span>
            </Col>
            <Col xl={4}>
            <span>Sunday</span>
            </Col>
            </div>
        </Row>
        <Row>
          <div className='forecast-days'>
            <Col xl={4} className='image-temp'>
              <img src={cloudy} alt='halfmoon' />
              <h5>6<sup>o</sup></h5>
            </Col>
            <Col xl={4}>
              <span>6 Mar</span>
            </Col>
            <Col xl={4}>
              <span>Monday</span>
            </Col>
          </div>
        </Row>
      </Col>
      </>
  )
}

export default Forecast