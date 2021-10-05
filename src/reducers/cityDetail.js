export const cityDetail = (state, action) => {
    switch (action.type) {
        case 'CITY_DETAIL_LOADING':
            return {
                ...state,
                cityDetail: null,
                isLoading: true,
                errorMsg: null
            }
        case 'CITY_DETAIL_SUCCESS':
            return {
                ...state,
                cityDetail: action.payload,
                isLoading: false,
                errorMsg: null
            }
        case 'CITY_DETAIL_ERROR':
            return {
                ...state,
                cityDetail: null,
                isLoading: false,
                errorMsg: action.payload
            }
        default:
            return state;

    }
}