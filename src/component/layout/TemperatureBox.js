import { Col } from 'react-bootstrap'
import { MdWaves } from 'react-icons/md';
import { HiOutlineCalendar } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

import '../../styles/temperaturebox.css'

const TemperatureBox = () => {
  return (
    <Col xs={12} md={2} xl={11} className='container-box'>
        <Col className='top'>
            <h6>Now</h6>
            <Col className='temp-box'>
                <h2 className='temp'>20<sup>o</sup>C</h2>
                <MdWaves className='temp-logo'/>
            </Col>
            <h6>Haze</h6>
            <hr className='line'/>
        </Col>
        <Col className='bottom'>
          <Col className='date'>
            <HiOutlineCalendar className='date-logo' />
            <span>Monday 3, Mar</span>
          </Col>
          <Col className='location'>
            <GoLocation className='location-logo' />
            <span>New Delhi, IN</span>
          </Col>
        </Col>
    </Col>
  )
}

export default TemperatureBox