import axios from "axios";
import React from "react";
import Chooseoption from "./chooseoption";
const baseURL = "https://api.openweathermap.org/data/2.5/weather?q=Algeria&APPID=794ee95e63c5a32aaf88cd813fa2e425";

export default function App() {
  const [weather, setWeather] = React.useState();
  const [Humidity, setHumidity] = React.useState();
  const [windspeed, setWindspeed] = React.useState();
  const [post,setPost] = React.useState();
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data)
      setWeather(response.data.main.temp);
      setHumidity(response.data.main.humidity);
      setWindspeed(response.data.wind.speed);
     
    });
  }, []);



  return (
    <div>
      <h1>The Temperature of the country is {weather}</h1>
      <p>The Humidity of the country is {Humidity}</p>
      <p>The windspeed of the country is {windspeed}</p>
      <p>Please choose the country :</p>
      <Chooseoption/>
    </div>
  );
}