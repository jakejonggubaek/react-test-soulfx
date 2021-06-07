import '../App.scss';
import Card from './Card';

const WeatherCards = ({ forecast }) => {

    const today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay();

    console.log(forecast);
    

    return (
        <div className='forecast-container'>
            {
                forecast.map((weather)=>{
                    return(
                        <Card weather={weather.weather[0].main} max={weather.main.temp_max} min={weather.main.temp_min} day={weather.dt_txt}/>
                    )
                })
            }
        </div>
    )
}

export default WeatherCards
