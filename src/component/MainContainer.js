import { Col } from 'react-bootstrap'

import { WEATHER_API_URL, WEATHER_API_KEY } from '../constants/api'

import CurrentWeather from './layout/CurrentWeather'
import Highlights from './layout/Highlights'
import Forecast from './layout/Forecast'
import TodaysClimate from './layout/TodaysClimate'
import NavBar from './NavBar'
import '../styles/maincontainer.css'
import { useState } from 'react'

const MainContainer = () => {
  const [currentweather, setCurrentWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [pollution, setPollution] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentweatherfetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const pollutionfetch = fetch(`${WEATHER_API_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecastfetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)

    Promise.all([currentweatherfetch, forecastfetch, pollutionfetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json()
        const forecastResponse = await res[1].json()
        const pollutionResponse = await res[2].json()

        setCurrentWeather({ city: searchData.label, ...weatherResponse })
        setForecast({ city: searchData.label, ...forecastResponse })
        setPollution({ city: searchData.label, ...pollutionResponse })
      })
      .catch((err) => console.error(err))
  }

  // console.log(currentweather);
  // console.log(forecast);
  // console.log(pollution);

  return (
    <div className='box'>
      <NavBar onSearchChange={handleOnSearchChange} />
      <div className='sub-container'>
        <Col xl={3} md={3}>
          {currentweather && <CurrentWeather data={currentweather} />}
          &nbsp;
          {forecast && <Forecast data={forecast}/>}
        </Col>
        <Col xl={9} md={8}>
          {currentweather && <Highlights data={currentweather} air={pollution}/>}
          &nbsp;
          <TodaysClimate />
        </Col>
      </div>
    </div>
  )
}

export default MainContainer