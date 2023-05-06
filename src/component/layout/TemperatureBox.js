import { MdWaves } from 'react-icons/md';
import { HiOutlineCalendar } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';

import '../../styles/temperaturebox.css'

const TemperatureBox = () => {
  return (
    <div className='container-box'>
        <div className='top'>
            <h6>Now</h6>
            <div className='temp-box'>
                <h2 className='temp'>20<sup>o</sup>C</h2>
                <MdWaves className='temp-logo'/>
            </div>
            <h6>Haze</h6>
            <hr className='line'/>
        </div>
        <div className='bottom'>
          <div className='date'>
            <HiOutlineCalendar className='date-logo' />
            <span>Monday 3, Mar</span>
          </div>
          <div className='location'>
            <GoLocation className='location-logo' />
            <span>New Delhi, IN</span>
          </div>
        </div>
    </div>
  )
}

export default TemperatureBox