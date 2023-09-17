import React from "react";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather w-[350px] mt-2 text-white bg-slate-700 px-4 mx-auto rounded shadow-slate-500 shadow-md">
      <div className="top flex items-center justify-between">
        <div>
          <p className="city font-semibold m-0 text-3xl">{data.city}</p>
          <p className="weatherDescription m-0 font-normal text-1xl">{data.weather[0].description}</p>
        </div>
        <img className="w-24" src={`icons/${data.weather[0].icon}.png`} alt="icon" />
      </div>
      <div className="bottom flex w-full items-center justify-between pb-5">
        <p className="weather-temperature text-5xl font-bold">{data.main.temp}°C</p>
        <div className="details w-full pl-5">
          <div className="param-row">
            <span className="param-label text-[12px] border-b-2">Details</span>
          </div>
          <div className="param-row  flex items-center justify-between">
            <span className="param-label text-[12px]">Feels Like</span>
            <span className="param-value font-medium">{data.main.feels_like}°C</span>
          </div>
          <div className="param-row flex items-center justify-between">
            <span className="param-label text-[12px]">Wind</span>
            <span className="param-value font-medium">{data.wind.speed} m/s</span>
          </div>
          <div className="param-row flex items-center justify-between">
            <span className="param-label text-[12px]">Humidity</span>
            <span className="param-value font-medium">{data.main.humidity}%</span>
          </div>
          <div className="param-row flex items-center justify-between">
            <span className="param-label text-[12px]">Pressure</span>
            <span className="param-value font-medium">{data.main.pressure} hpa</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
