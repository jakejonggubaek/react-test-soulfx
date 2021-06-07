const CurrentWeather = ({currentWeather, temp, senTemp, weather}) => {

    const today = new Date();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const month = today.getMonth();
    const date = today.getDate();
    const day = today.getDay();
    
    //weather icon
    const id = currentWeather.weather[0].id;
    let icon = 'wi-day-cloudy';

    if (id >= 200 && id <= 232) {
        icon = 'wi-day-thunderstorm';
    } else if (id >= 300 && id <= 321) {
        icon = 'wi-day-sleet';
    } else if (id >= 500 && id <= 531) {
        icon = 'wi-day-rain';
    } else if (id >= 600 && id <= 622) {
        icon = 'wi-day-snow';
    } else if (id >= 700 && id <= 781) {
        icon = 'wi-day-fog';
    } else if (id === 800) {
        icon = 'wi-day-sunny';
    } else {
        icon = 'wi-day-cloudy';
    }

    return (
        <section className='current-container'>
            <h2>Toronto</h2>
            <p>{monthNames[month]}, {date}th({dayNames[day]})</p>
            <div className='current-weather-icon'>
                <i className={`wi ${icon}`}></i>
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
        </section>
    )
}

export default CurrentWeather
