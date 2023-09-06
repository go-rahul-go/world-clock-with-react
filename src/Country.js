import React, { useEffect, useState } from 'react'
let asianCountries = ["baghdad", "bangkok", "beirut", "colombo", "dhaka", "hong_kong", "karachi",
    "kathmandu", "kolkata", "macau", "qatar", "seoul", "singapore", "taipei", "tokyo"];
let america = ["argentina/buenos_Aires", "Argentina/Catamarca", "barbados", "Cancun", "Chicago", "costa_rica", "denver", "detroit", "el_salvador", "jamaica", "los_angeles", "toronto", "vancouver"]

let europe = ["berlin", "budapest", "dublin", "istanbul", "lisbon", "london", "madrid", "moscow", "paris", "prague", "rome", "vienna", "zurich"]

let africa=["cairo","johannesburg","lagos","nairobi","tripoli"]

let australia=["brisbane","darwin","melbourne","perth","sydney"]
let pacific=["auckland","easter","fiji","galapagos","guam","honolulu","tahiti"]
const Country = ({ continent, getLocation }) => {



    const [country, updateCountry] = useState("kolkata")


    async function getTime() {
        let resp = await fetch(`http://worldtimeapi.org/api/${continent}/${country}`)
        resp = await resp.json();

        let newlocation = {
            day: getDay(resp.day_of_week),
            daysPast: resp.day_of_year,
            fulltime: resp.datetime,
            timeZone: resp.timezone,
            time: resp.datetime.slice(11, 19),
            date: resp.datetime.slice(0, 10)

        }
        getLocation(newlocation)

    }
    useEffect(() => {

        getTime();

    }, [country])
    if (continent === "asia") {
        return (
            <select>
                <option disabled="disabled" style={{color:"orange"}}>Select Country</option>
                {
                    asianCountries.map((country, index) => {
                        return (
                            <option key={index} value={country} onClick={(e) => updateCountry(e.target.value)}>{country}</option>
                        )
                    })
                }
            </select>
        )
    }
    else if (continent === "america") {
        return (
            <select>
                <option disabled="disabled" style={{color:"orange"}}>Select Country</option>
                {
                    america.map((country, index) => {
                        return (
                            <option key={index} value={country} onClick={(e) => updateCountry(e.target.value)}>{country}</option>
                        )
                    })
                }
            </select>
        )
    }
    else if (continent === "europe") {
        return (
            <select>
                <option disabled="disabled" style={{color:"orange"}}>Select Country</option>
                {
                    europe.map((country, index) => {
                        return (
                            <option key={index} value={country} onClick={(e) => updateCountry(e.target.value)}>{country}</option>
                        )
                    })
                }
            </select>
        )
    }
    else if(continent==="africa")
    {
        return (
            <select>
                <option disabled="disabled" style={{color:"orange"}}>Select Country</option>
                {
                    africa.map((country, index) => {
                        return (
                            <option key={index} value={country} onClick={(e) => updateCountry(e.target.value)}>{country}</option>
                        )
                    })
                }
            </select>
        )
    }
    else if(continent==="australia")
    {
        return (
            <select>
                <option disabled="disabled" style={{color:"orange"}}>Select Country</option>
                {
                    australia.map((country, index) => {
                        return (
                            <option key={index} value={country} onClick={(e) => updateCountry(e.target.value)}>{country}</option>
                        )
                    })
                }
            </select>
        )
    }
    else if(continent==="pacific")
    {
        return (
            <select>
                <option disabled="disabled" style={{color:"orange"}}>Select Country</option>
                {
                    pacific.map((country, index) => {
                        return (
                            <option key={index} value={country} onClick={(e) => updateCountry(e.target.value)}>{country}</option>
                        )
                    })
                }
            </select>
        )
    }
}

export default Country;



function getDay(day) {
    switch (day) {
        case 1:
            return "monday";
        case 2:
            return "tuesday";
        case 3:
            return "wednesday";
        case 4:
            return "thursday";
        case 5:
            return "friday";
        case 6:
            return "saturday"
        case 7:
            return "sunday"
        default:

    }

}

// function getDate(date) {
//     return (date.slice(0, 10))


// }

// function getCurrentTime(time) {
//     // console.log(time.)
//     return (time.slice(11, 19));
// }