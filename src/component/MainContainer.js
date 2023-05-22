import { Col } from 'react-bootstrap'

import { OPEN_WEATHER_API_URL, WEATHER_API_URL } from '../constants/api'

import CurrentWeather from './layout/CurrentWeather'
import Highlights from './layout/Highlights'
import Forecast from './layout/Forecast'
import TodaysClimate from './layout/TodaysClimate'
import NavBar from './NavBar'
import '../styles/maincontainer.css'
import { useEffect, useState } from 'react'

const MainContainer = () => {
  const [currentweather, setCurrentWeather] = useState(null)
  const [weather, setWeather] = useState(null)
  const [curr_Loc_Weather, setCurr_Loc_Weather] = useState(null)
  const [loc_Weather, setLoc_Weather] = useState(null)
  const [isLoad, setIsLoading] =  useState(false)

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

  useEffect(() => {
    if(weather != null){
      setIsLoading(true)
    }else{
      setIsLoading(false)

      const lat = 28.6;
      const lon = 77.2;
      const searchCity = 'New Delhi'
    
      const loc_weatherfetch = fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchCity}&days=8&aqi=yes&alerts=no`);
      const loc_currentweatherfetch = fetch(`${OPEN_WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
    
      Promise.all([loc_weatherfetch, loc_currentweatherfetch])
        .then(async (res) => {
          const loc_weatherResponse = await res[0].json()
          const loc_currentResponse = await res[1].json()
          setLoc_Weather({ city: 'New Delhi, India', ...loc_weatherResponse })
          setCurr_Loc_Weather({ city: 'New Delhi, India', ...loc_currentResponse })
        })
        .catch((err) => console.error(err))
    }
  })

  return (
    <div className='box'>
      <NavBar onSearchChange={handleOnSearchChange} />
      <div className='sub-container'>
        {
          isLoad ? (
            <>
              <Col xl={3}>
                {weather && <CurrentWeather data={weather} countryCode={currentweather} />}
                &nbsp;
                {weather && <Forecast data={weather} />}
              </Col>
              <Col xl={9} md={12}>
                {weather && <Highlights data={weather} rise_set={currentweather} />}
                &nbsp;
                {weather && <TodaysClimate data={weather} />}
              </Col>
            </>
          ) : (
            <>
              <Col xl={3}>
                {loc_Weather && <CurrentWeather data={loc_Weather} countryCode={curr_Loc_Weather} />}
                &nbsp;
                {loc_Weather && <Forecast data={loc_Weather} />}
              </Col>
              <Col xl={9} md={12}>
                {loc_Weather && <Highlights data={loc_Weather} rise_set={curr_Loc_Weather} />}
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