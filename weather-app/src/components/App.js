import React, {useState, useEffect} from "react";
import WeatherList from "./WeatherList";



function App() {
  const [weatherData, setWeatherData] = useState(null)


  const API_KEY = process.env.REACT_APP_API_KEY

  useEffect(() => {
    const API_URL =`https://api.weatherstack.com/current?access_key=${API_KEY}&query=New York`
    fetch(API_URL)
    .then(res => 
    {
      if (!res.ok){
        throw new Error("Network response not ok");
      }
      return res.json()
    }
    )
    .then((data) => {
      console.log(data)
      setWeatherData(data)
    })
  }, [])

  return (
    <div className="App">
      <h1>APP.js</h1>
      <WeatherList data={weatherData}/>
    </div>
  );
}

export default App;
