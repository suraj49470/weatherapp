import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useContext } from 'react';
import { weatherContext } from '../../App';
import { fetchLocationDetails } from '../../api/locationDetail';
import Error from './Error';
import Loading from './Loading';
import Detail from './Detail';
function CityDetail() {
    const { woeid } = useParams();
    const { cityDetailState, cityDetailDispatch } = useContext(weatherContext);
    const getLocationDetails = async (woeid) => {
        cityDetailDispatch({ type: 'CITY_DETAIL_LOADING', payload: null });
        try {
            const {
                data
            } = await fetchLocationDetails(woeid);
            data.currentDay = data.consolidated_weather[0];
            data.consolidated_weather.shift();
            cityDetailDispatch({ type: 'CITY_DETAIL_SUCCESS', payload: data });
        } catch (error) {
            cityDetailDispatch({ type: 'CITY_DETAIL_ERROR', payload: 'Records not found...' });
        }
    }



    useEffect(() => {
       
        getLocationDetails(woeid);
        // eslint-disable-next-line
    }, []);
    return (
        <div className="CityDetailContainer">
            {cityDetailState.isLoading && <Loading />}
            {!cityDetailState.isLoading && !cityDetailState.cityDetail && <Error />}
            {!cityDetailState.isLoading && cityDetailState.cityDetail && <Detail cityDetail={cityDetailState.cityDetail} />}
        </div>
    )
}





export default React.memo(CityDetail);
