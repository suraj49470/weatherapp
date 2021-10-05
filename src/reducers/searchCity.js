export const searchCity = (state, action) => {
    switch (action.type) {
        case 'CITY_SEARCH_LOADING' :
            return {
                ...state,
                query : action.payload,
                isLoading: true,
                latLong : null,
                errorMsg : null,
                cityList: [],
            }
        case 'CITY_SEARCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                latLong : null,
                errorMsg : null,
                cityList : action.payload
            }
        case 'CITY_SEARCH_ERROR':
            return {
                ...state,
                isLoading: false,
                latLong : null,
                cityList: [],
                errorMsg : action.payload,
            }
        case 'USER_LOCATION_LOADING' :
            return {
                ...state,
               // query : null,
                isLoading : true,
                errorMsg : null,
                cityList: [],
            }    
        case 'USER_LOCATION_SUCCESS':
            return {
                ...state,
               // query : null,
                isLoading: false,
                latLong : action.payload,
                errorMsg : null,
                cityList : []
            }
        case 'USER_LOCATION_CITYLIST_SUCCESS' :
            return {
                ...state,
               // query : null,
                isLoading: false,
                errorMsg : null,
                cityList : action.payload
            } 
        case 'USER_LOCATION_ERROR':
            return {
                ...state,
                isLoading: false,
                cityList: [],
                errorMsg : action.payload

            }
        default:
            return state;
    }
}