import { Col } from 'react-bootstrap'

import { WEATHER_API_URL } from '../constants/api'

import CurrentWeather from './layout/CurrentWeather'
import Highlights from './layout/Highlights'
import Forecast from './layout/Forecast'
import TodaysClimate from './layout/TodaysClimate'
import NavBar from './NavBar'
import '../styles/maincontainer.css'
import { useEffect, useState } from 'react'

const MainContainer = () => {
  const [weather, setWeather] = useState(null)
  const [loc_Weather, setLoc_Weather] = useState(null)
  const [isLoad, setIsLoading] = useState(false)

  const handleOnSearchChange = (searchData) => {
    const [searchCity,] = searchData.label.split(',')

    const weatherfetch = fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchCity}&days=6&aqi=yes&alerts=no`);

    Promise.all([weatherfetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json()

        setWeather({ city: searchData.label, ...weatherResponse })
      })
      .catch((err) => console.error(err))
  }

  useEffect(() => {
    if (weather != null) {
      setIsLoading(true)
    } else {
      setIsLoading(false)

      const searchCity = 'New Delhi'

      const loc_weatherfetch = fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchCity}&days=6&aqi=yes&alerts=no`);

      Promise.all([loc_weatherfetch])
        .then(async (res) => {
          const loc_weatherResponse = await res[0].json()
          setLoc_Weather({ city: 'New Delhi, India', ...loc_weatherResponse })
        })
        .catch((err) => console.error(err))
    }
  }, [weather])
  console.log(weather);

  return (
    <div className='box'>
      <NavBar onSearchChange={handleOnSearchChange} />
      <div className='sub-container'>
        {
          isLoad ? (
            <>
              <Col xl={3}>
                {weather && <CurrentWeather data={weather} />}
                &nbsp;
                {weather && <Forecast data={weather} />}
              </Col>
              <Col xl={9} md={12}>
                {weather && <Highlights data={weather} />}
                &nbsp;
                {weather && <TodaysClimate data={weather} />}
              </Col>
            </>
          ) : (
            <>
              <Col xl={3}>
                {loc_Weather && <CurrentWeather data={loc_Weather} />}
                &nbsp;
                {loc_Weather && <Forecast data={loc_Weather} />}
              </Col>
              <Col xl={12} md={12}>
                {loc_Weather && <Highlights data={loc_Weather} />}
                &nbsp;
                {loc_Weather && <TodaysClimate data={loc_Weather} />}
              </Col>
            </>
          )
        }
      </div>
    </div>
  )
}

export default MainContainer