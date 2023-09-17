import "./App.css";
import Search from "@/components/search/Search";
import CurrentWeather from "@/components/currentWeather/CurrentWeather";
import { Weather_Location_api_URL, Weather_api_Key } from "@/api";
import { useState } from "react";

function App() {
  const [currentWeather, setcurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const handleOnSearchChange = (searchdata) => {
    // Location Values latitude longitude
    const [lat, lon] = searchdata.value.split(" ");
    // console.log(lat);
    const fetchCurrentWeather = fetch(`${Weather_Location_api_URL}/weather?lat=${lat}&lon=${lon}&appid=${Weather_api_Key}`);
    const fetchForecastWeather = fetch(`${Weather_Location_api_URL}/forecast?lat=${lat}&lon=${lon}&appid=${Weather_api_Key}`);
    Promise.all([fetchCurrentWeather, fetchForecastWeather])
      .then(async (response) => {
        const currentWeatherPromise = await response[0].json();
        const forecastWeatherPromise = await response[1].json();
        setcurrentWeather({ city: searchdata.label, ...currentWeatherPromise });
        setForecastWeather({ city: searchdata.label, ...forecastWeatherPromise });
      })
      .catch((err) => console.log(err));
  };
  // console.log(forecastWeather);
  console.log(currentWeather);
  return (
    <div className="max-w-screen-md mx-auto mt-5">
      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </div>
  );
}

export default App;
