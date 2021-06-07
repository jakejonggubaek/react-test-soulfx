import './Card.scss';


const Card = ({id, weather, max, min, day}) => {
    
    const date = day.split(' ')[0].split('-')[2];
    const month = day.split(' ')[0].split('-')[1];

    let icon = 'wi-day-cloudy';
    
    if(id >= 200 && id <= 232 ){
        icon = 'wi-day-thunderstorm';
    } else if (id >= 300 && id <= 321 ){
        icon = 'wi-day-sleet';
    } else if (id >= 500 && id <= 531 ){
        icon = 'wi-day-rain';
    } else if (id >= 600 && id <= 622 ){
        icon = 'wi-day-snow';
    } else if (id >= 700 && id <= 781 ){
        icon = 'wi-day-fog';
    } else if (id === 800) {
        icon = 'wi-day-sunny';
    } else {
        icon = 'wi-day-cloudy';
    }
    
    return (
        <div className='card'>
            <p>{month}-{date}</p>
            <div className='current-weather-icon'>
                <i className={`wi ${icon}`}></i>
            </div>
            <div>
                {weather}
            </div>
            <div>
                {Math.floor(min)}℃ ~ {Math.ceil(max)}℃
            </div>
        </div>
    )
}

export default Card
