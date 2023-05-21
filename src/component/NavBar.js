import { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

import { WEATHER_API_URL } from '../constants/api'
import '../styles/navbar.css'

const NavBar = ({ onSearchChange }) => {

  const [search, setSearch] = useState(null)

  const loadOptions = async (searchCity) => {
    return fetch(`${WEATHER_API_URL}/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${searchCity}&days=7&aqi=yes&alerts=no`)
      .then(res => res.json())
      .then(res => {
        return {

          options: [res.location]?.map((city) => {
            return {
              value: `${city.lat} ${city.lon}`,
              label: `${city.name}, ${city.country}`,
            }
          })
        }
      })
      .catch(err => console.error(err))
  }

  loadOptions('New Delhi')

  const handleOnChange = (searchData) => {

    setSearch(searchData)
    onSearchChange(searchData)
  }

  return (
    <div className='navbar'>
      <span>EW Weather</span>
      <AsyncPaginate
        placeholder='Search for city'
        debounceTimeOut={600}
        value={search}
        loadOptions={loadOptions}
        onChange={handleOnChange}
        className='input-box'
      />
    </div>
  )
}

export default NavBar