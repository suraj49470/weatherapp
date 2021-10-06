import axios from "axios";
const baseUrl = `https://meta-weather.vercel.app/api/location/`;
export const fetchLocationDetails = async (woeid) => {
    try {
        return axios.get(baseUrl+woeid+'/');
    } catch (error) {
        throw error;
    }
   
}