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
  const [currentReady, setCurrentReady] = useState(false);
  const [forecastReady, setForecastReady] = useState(false);

  //Get current date and day
  const today = new Date();
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const month = monthNames[today.getMonth()];
  const date = today.getDate();
  const day = dayNames[today.getDay()];
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
      setCurrentReady(true);
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
      console.log(response.data);

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
