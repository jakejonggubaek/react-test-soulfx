import Card from './Card';

const WeatherCards = ({ forecast }) => {

    return (
        <div className='forecast-container'>
            {
                forecast.map((weather, index)=>{
                    return(
                        <Card key={index} id={weather.weather[0].id} weather={weather.weather[0].main} max={weather.main.temp_max} min={weather.main.temp_min} day={weather.dt_txt}/>
                    )
                })
            }
        </div>
    )
}

export default WeatherCards
