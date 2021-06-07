const Card = ({ weather, max, min, day}) => {
    
    const date = day.split(' ')[0].split('-')[2];
    const month = day.split(' ')[0].split('-')[1];
    
    return (
        <div className='card'>
            <p>{month}-{date}</p>
            <div className='current-weather-icon'>
                <i className="wi wi-night-sleet"></i>
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
