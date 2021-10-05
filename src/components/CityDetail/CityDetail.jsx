import React from 'react';
import { useParams } from 'react-router';
function CityDetail() {
    const { woeid } = useParams();
    return (
        <div className="CityDetailContainer">
            { woeid }
            <div className="cityDetailitemcontainer">
                <div className="cityNameContainer">
                    <h2 className="dispWeather">Snow</h2>
                    <h6 className="dispCIty">Mumbai</h6>
                    <h6 className="dispTemp">22 <span>&#176;</span></h6>
                </div>
                <div className="dispImage">
                    <img width="80px" src="https://www.metaweather.com/static/img/weather/lr.svg" alt="" />
                </div>

                <div className="cityWeatherListContainer">
                    <div className='cityWeatherItem'>
                        <div className='cityWeather'>
                            <h6>Sun 6th</h6>
                            <div className="cityWeatherFlex">
                                <img className="cityImage" alt="" src="https://www.metaweather.com/static/img/weather/lr.svg" />
                                <div className="cityWeatherTempFlex">
                                    <p>10<span>&#176;</span></p>
                                    <p>22<span>&#176;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cityWeatherItem'>
                        <div className='cityWeather'>
                            <h6>Sun 6th</h6>
                            <div className="cityWeatherFlex">
                                <img className="cityImage" alt="" src={"https://www.metaweather.com/static/img/weather/lr.svg"} />
                                <div className="cityWeatherTempFlex">
                                    <p>10<span>&#176;</span></p>
                                    <p>22<span>&#176;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cityWeatherItem'>
                        <div className='cityWeather'>
                            <h6>Sun 6th</h6>
                            <div className="cityWeatherFlex">
                                <img alt="" className="cityImage" src={"https://www.metaweather.com/static/img/weather/lr.svg"} />
                                <div className="cityWeatherTempFlex">
                                    <p>10<span>&#176;</span></p>
                                    <p>22<span>&#176;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cityWeatherItem'>
                        <div className='cityWeather'>
                            <h6>Sun 6th</h6>
                            <div className="cityWeatherFlex">
                                <img className="cityImage" alt="" src={"https://www.metaweather.com/static/img/weather/lr.svg"} />
                                <div className="cityWeatherTempFlex">
                                    <p>10<span>&#176;</span></p>
                                    <p>22<span>&#176;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='cityWeatherItem'>
                        <div className='cityWeather'>
                            <h6>Sun 6th</h6>
                            <div className="cityWeatherFlex">
                                <img className="cityImage" alt="" src={"https://www.metaweather.com/static/img/weather/lr.svg"} />
                                <div className="cityWeatherTempFlex">
                                    <p>10<span>&#176;</span></p>
                                    <p>22<span>&#176;</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CityDetail;
