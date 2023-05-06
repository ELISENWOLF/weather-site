import {  Row, Col } from 'react-bootstrap'

import '../styles/maincontainer.css'
import TemperatureBox from './layout/TemperatureBox'
import Highlights from './layout/Highlights'
import Forecast from './layout/Forecast'
import ClimateInHours from './layout/ClimateInHours'

const MainContainer = () => {
  return (
    <div className='box'>
        <Row>
            <Col xl={3}>
                <TemperatureBox />
            </Col>
            <Col xl={9}>
                <Highlights />
            </Col>
        </Row>
        <Row>
        <Col xl={3}>
                <Forecast />
            </Col>
            <Col xl={9}>
                <ClimateInHours />
            </Col>
        </Row>
    </div>
  )
}

export default MainContainer