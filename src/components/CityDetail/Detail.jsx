import React from 'react'

function Detail(props) {
    const cityDetail = props.cityDetail;
    return (
        <div className="cityDetailitemcontainer">
            <div className="cityNameContainer">
                <h2 className="dispWeather">{cityDetail.currentDay.weather_state_name}</h2>
                <h6 className="dispCIty">{`${cityDetail.title},${cityDetail.parent.title}`}</h6>
                <h6 className="dispTemp">{Math.floor(cityDetail.currentDay.the_temp)} <span>&#176;</span></h6>
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
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <div className='cityWeatherItem'>
            <div className='cityWeather'>
                <p>{`${days[new Date(day.applicable_date).getDay()]} , ${new Date(day.applicable_date).getDate()}th`}</p>
                <div className="cityWeatherFlex">
                    <img className="cityImage" alt="" src={`https://www.metaweather.com/static/img/weather/${day.weather_state_abbr}.svg`} />
                    <div className="cityWeatherTempFlex">
                        <p>{Math.floor(day.the_temp)}<span>&#176;</span></p>
                        <p>{Math.floor(day.max_temp)}<span>&#176;</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default React.memo(Detail);
