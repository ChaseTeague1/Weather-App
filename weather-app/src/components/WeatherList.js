import React from "react";
import Weather from "./Weather";

function WeatherList({data}){
    return (
        <div>
            <h1>Weather List</h1>
            {
                data.current.location.map(weather => (
                    <Weather weather={weather}/>
                ))
            }
        </div>
    )
}

export default WeatherList;