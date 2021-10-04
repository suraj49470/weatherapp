export const searchCity = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'CITY_SEARCH_LOADING' :
            return {
                ...state,
                query : action.payload,
                isLoading: true,
                latLong : null,
                errorMsg : null
            }
        case 'CITY_SEARCH_SUCCESS':
            return {
                ...state,
                isLoading: false,
                latLong : null,
                errorMsg : null
            }
        case 'CITY_SEARCH_ERROR':
            return {
                ...state,
                isLoading: false,
                latLong : null,
            }
        case 'USER_LOCATION_LOADING' :
            return {
                ...state,
                query : null,
                isLoading : true,
                errorMsg : null
            }    
        case 'USER_LOCATION_SUCCESS':
            return {
                ...state,
                query : null,
                isLoading: false,
                latLong : action.payload,
                errorMsg : null
            }
        case 'USER_LOCATION_ERROR':
            return {
                ...state,
                isLoading: false,
                query : null,
                errorMsg : action.payload
            }
        default:
            return state;
    }
}