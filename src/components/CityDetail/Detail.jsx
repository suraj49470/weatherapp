import React from 'react'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
function Detail(props) {
    const cityDetail = props.cityDetail;
    console.log(cityDetail);
    return (
        <div className="cityDetailitemcontainer">
            <div className="cityNameContainer">
                <h2 className="dispWeather">{cityDetail.currentDay.weather_state_name}</h2>
                <h6 className="dispCIty">{`${cityDetail.title},${cityDetail.parent.title}`}</h6>
                <h6 className="dispTemp">{Math.floor(cityDetail.currentDay.the_temp)} <span>&#176;</span></h6>
            </div>
            <div className="cityNameContainer">
                <h6 className="dispTemp">
                    {`${days[new Date(cityDetail.currentDay.applicable_date).getDay()]} , ${new Date(cityDetail.currentDay.applicable_date).getDate()}th`}
                </h6>
            </div>
            <div className="dispImage">
                <img width="80px" src={`https://www.metaweather.com/static/img/weather/${cityDetail.currentDay.weather_state_abbr}.svg`} alt="" />
            </div>

            <div className="cityWeatherListContainer">
                {
                    cityDetail.consolidated_weather.map((day, i) => (<CityWeatherItem day={day} key={i} />))
                }
            </div>
        </div>
    )
}

const CityWeatherItem = ({ day }) => {
    return (
        <div className='cityWeatherItem'>
            <div className='cityWeather'>
                <p><strong>{`${days[new Date(day.applicable_date).getDay()]} , ${new Date(day.applicable_date).getDate()}th`}</strong></p>
                <div className="cityWeatherFlex">
                    <img className="cityImage" alt="" src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} />
                    <div className="cityWeatherTempFlex">
                        <p>{Math.floor(day.the_temp)}<span>&#176;</span></p>
                        <p><strong>{Math.floor(day.max_temp)}<span>&#176;</span></strong></p>
                    </div>
                    <div className="cityWeatherTempFlex">
                        <p>wind:</p>
                        <p>{Math.round(day.wind_speed)} m/h</p>
                    </div>
                    <div className="cityWeatherTempFlex">
                        <p>Hum:</p>
                        <p>{day.humidity } %</p>
                    </div>
                    

                </div>
            </div>
        </div>
    );
}
export default React.memo(Detail);
