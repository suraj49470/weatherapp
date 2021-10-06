import axios from "axios";

/*
        NOTE :  https://www.metaweather.com/api/ is giving CORS issue when accessed via application.
                so i have used  https://meta-weather.vercel.app/api endpoint which internally calls https://www.metaweather.com/api/ 
                endpoint and resolves CORS issue.
*/
const baseUrl = `https://meta-weather.vercel.app/api/location/`;


export const fetchLocationDetails = async (woeid) => {
    try {
        return axios.get(baseUrl+woeid+'/');
    } catch (error) {
        throw error;
    }
   
}