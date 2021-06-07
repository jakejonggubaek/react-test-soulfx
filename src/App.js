import axios from 'axios';
import {useState, useEffect} from 'react';
import './App.scss';
import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import WeatherCards from './components/WeatherCards';
import Footer from './components/Footer';

function App() {

  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [isDay, setIsDay] = useState(true);
  const [forecastReady, setForecastReady] = useState(false);

  const timestamp = Math.round((Date.now()/1000));

  //API key and location (required)
  const key = 'ef789d33883afc2c00eb596fd81b40cd';
  const city = 'Toronto';

  useEffect(()=>{

    //Get Current Weather data
    axios({
      url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`,
      method: 'GET',
      dataResponse: 'json',
      params: {
        q: 'Toronto',
        appid: key,
        units: 'metric'
      }
    }).then((response) => {

      const sunrise = response.data.sys.sunrise;
      const sunset = response.data.sys.sunset;

      if (timestamp > sunrise && timestamp < sunset) {
        setIsDay(true);
      }else {
        setIsDay(false);
      }

      // const background = document.querySelector('.App');

      // if(isDay){
      //   background.style.backgroundImage = "url(./assets/weather.jpg)";
      // }else {
      //   background.style.backgroundImage = "url(./assets/weather.jpg)";
      // }

    });

    //get 5days weather
    axios({
      url: `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}`,
      method: 'GET',
      dataResponse: 'json',
      params: {
        q: 'Toronto',
        appid	: key,
        units: 'metric'
      }
    }).then((response) => {
      setCurrentWeather(response.data.list[0]);

      //temporary array
      const weatherArray = [];
      weatherArray.push(response.data.list[0]);
      weatherArray.push(response.data.list[8]);
      weatherArray.push(response.data.list[16]);
      weatherArray.push(response.data.list[24]);
      weatherArray.push(response.data.list[32]);
      
      //set 5days weather with temp array spread
      setForecast([...weatherArray]);
      setForecastReady(true);
    });
  // eslint-disable-next-line
  }, [])



  return (
    <div className="App">
      <Header />
      {
        forecastReady && <CurrentWeather temp={currentWeather.main.temp} senTemp={currentWeather.main.feels_like} weather={currentWeather.weather[0].main}  currentWeather={currentWeather} />
      }
      {
        forecastReady && <WeatherCards forecast={forecast}/>
      }
      <Footer />
    </div>
  );
}

export default App;
