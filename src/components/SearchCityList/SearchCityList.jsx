import React, { useContext, useEffect, } from 'react';
import Search from './Search';
import CityList from './CityList';
import { Container, Row, } from 'react-bootstrap';
import { weatherContext } from '../../App';
import { fetchLocation } from '../../api/location';
import { getCityListBasedOnLocation, getCityListbaseOnQuery } from '../../api/locationList';
import LocationDenied from './LocationDenied';
import ResultBasedOn from './ResultBasedOn';
function SearchCityList() {
    const { searchCityState, searchCityStateDispatch } = useContext(weatherContext);


    const userLocation = async () => {
        searchCityStateDispatch({ type: 'USER_LOCATION_LOADING', payload: null });

        try {
            const { coords: { latitude, longitude } } = await fetchLocation();
            searchCityStateDispatch({ type: 'USER_LOCATION_SUCCESS', payload: latitude + ',' + longitude });


            const latlong = latitude + ',' + longitude;
            searchCityStateDispatch({ type: 'USER_LOCATION_LOADING', payload: null });
            const { data } = await getCityListBasedOnLocation(latlong);
            const resultBasedOn = ` Current location : { ${latlong} }`;
            searchCityStateDispatch({ type: 'USER_LOCATION_CITYLIST_SUCCESS', payload: { 'data': data, 'resultBasedOn': resultBasedOn } });


        } catch (error) {
            searchCityStateDispatch({ type: 'USER_LOCATION_ERROR', payload: 'Please allow location to get location based results.' });
        }

    }

    const getQuery = async (query) => {
        searchCityStateDispatch({ type: 'CITY_SEARCH_LOADING', payload: query });

        if (!query) {
            searchCityStateDispatch({ type: 'CITY_SEARCH_EMPTY_QUERY', payload: null });
            userLocation();
        } else {
            try {
                const data = await getCityListbaseOnQuery(query);
                const resultBasedOn = ` ${query}`;
                searchCityStateDispatch({ type: 'CITY_SEARCH_SUCCESS', payload: { 'data': data, 'resultBasedOn': resultBasedOn } });
            } catch (error) {
                searchCityStateDispatch({ type: 'CITY_SEARCH_ERROR', payload: 'Records not found' });
            }
        }

    }

    useEffect(() => {
        if (searchCityState && searchCityState.cityList && searchCityState.cityList.length === 0) {
            userLocation();
        }

        // eslint-disable-next-line
    }, []);


    return (

        <Container className="SearchCityListContainer">

            <Row>
                <Search isLoading={searchCityState.isLoading} query={searchCityState.query} userLocation={userLocation} getQuery={getQuery} />
            </Row>
            {
                !searchCityState.isLoading && !searchCityState.errorMsg && (<ResultBasedOn msg={searchCityState.resultBasedOn} />)
            }

            {
                !searchCityState.isLoading && searchCityState.errorMsg && <LocationDenied errorMsg={searchCityState.errorMsg} />
            }

            <Row>
                {searchCityState.cityList && searchCityState.cityList.length > 0 && <CityList cityList={searchCityState.cityList} />}
            </Row>

        </Container>

    )
}




export default React.memo(SearchCityList);
