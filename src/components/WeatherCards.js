import Card from './Card';

const WeatherCards = ({ forecast }) => {

    return (
        <section className='forecast-container'>
            <ul>
            {
                forecast.map((weather, index)=>{
                    return(
                        <li key={index}>
                            <Card id={weather.weather[0].id} weather={weather.weather[0].main} max={weather.main.temp_max} min={weather.main.temp_min} day={weather.dt_txt}/>
                        </li>
                    )
                })
            }
            </ul>
        </section>
    )
}

export default WeatherCards
