import { Col } from 'react-bootstrap'

import '../styles/maincontainer.css'
import TemperatureBox from './layout/TemperatureBox'
import Highlights from './layout/Highlights'
import Forecast from './layout/Forecast'
import TodaysClimate from './layout/TodaysClimate'

const MainContainer = () => {
  return (
    <div className='box'>
        <Col xl={3} md={3}>
                <TemperatureBox />
                &nbsp;
                <Forecast />
        </Col>
        <Col xl={9} md={8}>
                <Highlights />
                &nbsp;
                <TodaysClimate />
        </Col>
    </div>
  )
}

export default MainContainer