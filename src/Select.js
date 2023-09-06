import React, { useState } from 'react'
import Country from './Country'

import globe from "./assets/globe-2-svgrepo-com.svg"
import "./style.css"
const Select = () => {
  
    const [cont, updateCont] = useState('asia')
    const [location,setLocation]=useState();
    // console.log(location)
    return (
        <div className='select-box'>
            <div className="options">
            <select>
                <option disabled="disable" style={{color:"#007AF5"}}>Select Zone</option>
                <option value="asia" onClick={(e) => updateCont(e.target.value)}>Asia</option>
                <option value="america" onClick={(e) => updateCont(e.target.value)}>America</option>
                <option value="europe" onClick={(e) => updateCont(e.target.value)}>Europe</option>
                <option value="africa" onClick={(e) => updateCont(e.target.value)}>Africa</option>
                <option value="australia" onClick={(e) => updateCont(e.target.value)}>Australia</option>
                <option value="pacific" onClick={(e) => updateCont(e.target.value)}>Pacific</option>
            </select>
            <Country continent={cont} getLocation={setLocation}/>
            </div>
            <div className='timecard'>
                {
                    (location)?<div>
                        {/* <p>{location.fulltime}</p> */}
                        <p><span className="highlight">time:</span>{location.time}</p>
                        <p><span className="highlight">date:</span>{location.date}</p>
                        <p><span className="highlight">day:</span>{location.day}</p>
                        <p><span className="highlight">days past this year:</span>{location.daysPast}</p>
                        <p><span className="highlight">time zone:</span>{location.timeZone}</p>
                        
                    </div>:""
                }
            </div>
            <div className="image-box">
                <img src={globe} alt="globe"/>
            </div>
        </div>
    )
}

export default Select;