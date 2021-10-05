export const initialState = {
    searchCityState: {
      query: null,
      latLong: null,
      cityList: [],
      isLoading : true,
      errorMsg : null,
      resultBasedOn:null
    },
    CityDetailState: {
      cityDetail: null,
      isLoading : true,
      errorMsg : null
    }
  };