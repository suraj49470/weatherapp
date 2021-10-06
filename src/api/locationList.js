import axios from "axios";
const baseUrl = 'https://meta-weather.vercel.app/api/location/search/?';

const getBaseUrl = (type) => {
    return type === 'location' ? baseUrl + 'lattlong=' : baseUrl + 'query=';
}
export const getCityListBasedOnLocation = async (LatLong) => {
    try {
        return await axios.get(getBaseUrl('location') + LatLong);
    } catch (error) {
        throw error;
    }
}

export const getCityListbaseOnQuery = async (query) => {

    try {
        const { data } = await axios.get(getBaseUrl('query') + query);
        if (data && data.length > 0) {
            return data;
        } else {
            throw new Error('Records not found...');
        }
    } catch (error) {
        throw error;
    }

}
