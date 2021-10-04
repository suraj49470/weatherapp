import React, { useContext, useEffect, } from 'react';
import Search from './Search';
import CityList from './CityList';
import { Container, Row, Col } from 'react-bootstrap';
import { searchCityContext } from '../../App';
import { fetchLocation } from '../../api/location';
import { getCityListBasedOnLocation, getCityListbaseOnQuery } from '../../api/locationList';

function SearchCityList() {
    const { searchCityState, searchCityStateDispatch } = useContext(searchCityContext);


    const userLocation = async () => {
        searchCityStateDispatch({ type: 'USER_LOCATION_LOADING', payload: null });

        try {
            const { coords: { latitude, longitude } } = await fetchLocation();
            searchCityStateDispatch({ type: 'USER_LOCATION_SUCCESS', payload: latitude + ',' + longitude });


            const latlong = latitude + ',' + longitude;
            const { data } = await getCityListBasedOnLocation(latlong);
            searchCityStateDispatch({ type: 'USER_LOCATION_CITYLIST_SUCCESS', payload: data });


        } catch (error) {
            searchCityStateDispatch({ type: 'USER_LOCATION_ERROR', payload: error.message });
        }

    }

    const getQuery = async (query) => {
        searchCityStateDispatch({ type: 'CITY_SEARCH_LOADING', payload: query });
        try {
            const { data } = await getCityListbaseOnQuery(query);
            searchCityStateDispatch({ type: 'CITY_SEARCH_SUCCESS', payload: data });
        } catch (error) {
            searchCityStateDispatch({ type: 'CITY_SEARCH_ERROR', payload: 'Records not found' });
        }
    }

    useEffect(() => {
        userLocation();
        // eslint-disable-next-line
    }, []);


    return (

        <Container className="SearchCityListContainer">
            {/* {JSON.stringify(searchCityState)} */}
            <Row>
                <Search query={searchCityState.query} userLocation={userLocation} getQuery={getQuery} />
            </Row>

            <Row className="pT10">
                <Col xs={12} sm={12} md={12} lg={12}>
                    <small className="text-muted"><b>Results are based on your : Current Location</b></small>
                </Col>
            </Row>
            <Row>
              {searchCityState.cityList && searchCityState.cityList.length > 0 && <CityList cityList={searchCityState.cityList}/>}  
            </Row>

        </Container>

    )
}

export default SearchCityList;
