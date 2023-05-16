import { Col } from 'react-bootstrap'

import { OPEN_WEATHER_API_URL, WEATHER_API_URL } from '../constants/api'

import CurrentWeather from './layout/CurrentWeather'
import Highlights from './layout/Highlights'
import Forecast from './layout/Forecast'
import TodaysClimate from './layout/TodaysClimate'
import NavBar from './NavBar'
import '../styles/maincontainer.css'
import { useState } from 'react'

const MainContainer = () => {
  const [currentweather, setCurrentWeather] = useState(null)
  const [weather, setWeather] = useState(null)

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");
    const [searchCity,] = searchData.label.split(',')

    const weatherfetch = fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchCity}&days=8&aqi=yes&alerts=no`);
    const currentweatherfetch = fetch(`${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)

    Promise.all([weatherfetch, currentweatherfetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json()
        const currentResponse = await res[1].json()

        setWeather({ city: searchData.label, ...weatherResponse })
        setCurrentWeather({ city: searchData.label, ...currentResponse })
      })
      .catch((err) => console.error(err))
  }

  // console.log(currentweather);
  console.log(weather);

  return (
    <div className='box'>
      <NavBar onSearchChange={handleOnSearchChange} />
      <div className='sub-container'>
        <Col xl={3} md={3}>
          {weather && <CurrentWeather data={weather} countryCode={currentweather} />}
          &nbsp;
          {weather && <Forecast data={weather} />}
        </Col>
        <Col xl={9} md={8}>
          {weather && <Highlights data={weather} rise_set={currentweather} />}
          &nbsp;
          {weather && <TodaysClimate data={weather} />}
        </Col>
      </div>
    </div>
  )
}

export default MainContainer