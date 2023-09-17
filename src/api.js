// import axios from "axios";

// const geo_api_url = "https://wft-geo-db.p.rapidapi.com/v1/geo";
// export const geo_api = {
//   method: "GET",
//   url: "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
//   headers: {
//     "X-RapidAPI-Key": "0ee2efcef4msh00c130959bcf069p11ffbfjsna178b8e7108f",
//     "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
//   },
// };
// try {
//   const response = await axios.request(options);
//   console.log(response.data);
// } catch (error) {
//   console.error(error);
// }
export const geo_api_url = "https://wft-geo-db.p.rapidapi.com/v1/geo";
export const geoApiOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0ee2efcef4msh00c130959bcf069p11ffbfjsna178b8e7108f",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
export const Weather_Location_api_URL = "https://api.openweathermap.org/data/2.5";
export const Weather_api_Key = "8848cd28589046101a0ee1ceb87cd191&units=metric";
