const CurrentWeather = ({currentWeather, temp, senTemp, weather}) => {

    console.log(currentWeather);
    const today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay();


    return (
        <div className='current-container'>
            <h2>Toronto</h2>
            <p>{monthNames[month]}, {date}th({dayNames[day]})</p>
            <div className='current-weather-icon'>
                <i className="wi wi-day-sunny"></i>
                <i className="wi wi-day-cloudy"></i>
                <i className="wi wi-day-rain"></i>
                <i className="wi wi-night-sleet"></i>
                <i className="wi wi-night-sleet"></i>
            </div>
            <div className='current-weather'>
                {weather}
            </div>
            <div className='current-temp'>
                {temp}℃
            </div>
            <div className='current-sensible-temp'>
                feels like {senTemp}℃
            </div>
        </div>
    )
}

export default CurrentWeather
