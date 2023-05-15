import { Col, Container, Row } from "react-bootstrap"

import direction from '../../assets/images/weather_icons/direction.png'
import '../../styles/todayclimate.css'

const TodaysClimate = ({ data }) => {

  const forecastHour = data.forecast.forecastday.slice(0, 1)
  const currentDate = forecastHour[0].date

  const timeManage = (value) => {
    console.log(value);
      if(value === '00:00'){
        return <>12:00 AM</>
      }else if(value === '01:00'){
        return <>01:00 AM</>
      }else if(value === '02:00'){
        return <>02:00 AM</>
      }else if(value === '03:00'){
        return <>03:00 AM</>
      }else if(value === '04:00'){
        return <>04:00 AM</>
      }else if(value === '05:00'){
        return <>05:00 AM</>
      }else if(value === '06:00'){
        return <>06:00 AM</>
      }else if(value === '07:00'){
        return <>07:00 AM</>
      }else if(value === '08:00'){
        return <>08:00 AM</>
      }else if(value === '09:00'){
        return <>09:00 AM</>
      }else if(value === '10:00'){
        return <>10:00 AM</>
      }else if(value === '11:00'){
        return <>11:00 AM</>
      }else if(value === '12:00'){
        return <>12:00 AM</>
      }else if(value === '13:00'){
        return <>01:00 PM</>
      }else if(value === '14:00'){
        return <>02:00 PM</>
      }else if(value === '15:00'){
        return <>03:00 PM</>
      }else if(value === '16:00'){
        return <>04:00 PM</>
      }else if(value === '17:00'){
        return <>05:00 PM</>
      }else if(value === '18:00'){
        return <>06:00 PM</>
      }else if(value === '19:00'){
        return <>07:00 PM</>
      }else if(value === '20:00'){
        return <>08:00 PM</>
      }else if(value === '21:00'){
        return <>09:00 PM</>
      }else if(value === '22:00'){
        return <>10:00 PM</>
      }else if(value === '23:00'){
        return <>11:00 PM</>
      }
  }


  // console.log(forecastHour[0]);
  return (
    <>
    <h5>Today at</h5>
    <Container className="today-container">
        <Row className="top-container">
          {
            forecastHour[0].hour.map((item, index) => {
              const val = item.time.replace(`${currentDate}`, '')
              return  <Col key={index} className="all-climate">
                        <span className="climate-time">{timeManage(val)}</span>
                        <img src={item.condition.icon} alt='climate-logo' className="today-temperature"/>
                        <span className="climate-temp">5<sup>o</sup>C</span>
                      </Col>
            })
          }
        </Row>
        <Row className="bottom-container">
          {
            forecastHour[0].hour.map((item, index) => (
              <Col key={index} className="all-wind">
                <span className="wind-time">{item.time.replace(`${currentDate}`, '')}</span>
                <img src={direction} style={{transform: `rotateZ(${item.wind_degree}deg)`}} alt='direction-logo' className="today-wind"/>
                <span className="windspeed">{item.wind_kph} km/h</span>
              </Col>
            ))
          }
        </Row>
    </Container>
    </>
  )
}

export default TodaysClimate